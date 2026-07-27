 // This script handles form submissions from the Sea Innovative Technologies website.
// It appends the data to the active Google Sheet and sends notification emails.

const ADMIN_EMAIL = "mohankumaryerra53@gmail.com";

function doPost(e) {
  try {
    // Enable CORS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Parse incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.phone) {
      return ContentService.createTextOutput(JSON.stringify({ 
        result: "error", 
        message: "Name and Phone are required." 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // 1. Append to Google Sheets
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Qualification", "City", "Course", "Message"]);
      // Make headers bold
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.qualification || "",
      data.city || "",
      data.course || "",
      data.message || ""
    ]);

    // 2. Send Email to Admin
    const adminSubject = `New Admission Enquiry Received – ${data.name}`;
    const adminBody = `
      You have received a new admission enquiry from the website.
      
      Details:
      --------------------------------------------------
      Name: ${data.name}
      Email: ${data.email || "N/A"}
      Phone: ${data.phone}
      Qualification: ${data.qualification || "N/A"}
      City/Location: ${data.city || "N/A"}
      Course Interested In: ${data.course || "N/A"}
      
      Message/Comments:
      ${data.message || "N/A"}
      --------------------------------------------------
      
      Submitted on: ${timestamp}
    `;

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: adminSubject,
      body: adminBody,
    });

    // 3. Send Optional Confirmation Email to Student (if email provided)
    if (data.email) {
      const studentSubject = "Thank you for your enquiry - Sea Innovative Technologies";
      const studentBody = `
        Dear ${data.name},
        
        Thank you for reaching out to Sea Innovative Technologies! 
        
        We have successfully received your enquiry regarding the "${data.course}" program. 
        Our admissions team or Mentor Seshu Arisetty will contact you shortly to guide you further.
        
        Best Regards,
        Sea Innovative Technologies Team
        Admissions Hotline: +91 8139018202
      `;
      
      try {
        MailApp.sendEmail({
          to: data.email,
          subject: studentSubject,
          body: studentBody,
        });
      } catch (emailError) {
        // Ignore student email errors (e.g. invalid email format)
        console.error("Failed to send student email: " + emailError);
      }
    }

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "success", 
      message: "Form submitted successfully" 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight requests for CORS
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
