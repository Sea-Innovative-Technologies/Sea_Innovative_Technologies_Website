import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    location: '',
    course: ''
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setIsError(true);
      setErrorMsg('Please fill in your Full Name and Phone Number.');
      return;
    }
    
    setIsError(false);
    setIsSubmitting(true);
    setErrorMsg('');

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: `'${formData.countryCode} ${formData.phone}`,
      location: formData.location,
      course: formData.course || 'Not Specified',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (scriptUrl && scriptUrl !== 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE') {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }
      
      setIsSubmit(true);
    } catch (error) {
      console.log('Submission note:', error);
      setIsSubmit(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const courseOptions = [
    'Manual Testing Masterclass',
    'Automation Testing (Selenium & Playwright)',
    'Java Programming',
    'SAP ERP',
    'Cyber Security'
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Column: Get in Touch Now (Navy Blue Theme) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold tracking-tight">
                Get in Touch Now
              </h2>
              <div className="w-16 h-1 bg-slate-900 rounded-full mt-3 mb-6" />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Sea Innovative Technologies is a software training institute offering industry-focused programs in Manual Testing, Automation Testing (Selenium & Playwright), Java Programming, SAP ERP, and Cyber Security. Our expert trainers provide hands-on learning with real-world tools and technologies to help students build strong technical skills and advance their careers.
              </p>
            </div>

            {/* 3 Rounded Navy Blue Icon Badges */}
            <div className="space-y-6 pt-2">
              
              {/* Call Us */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 shadow-lg shadow-slate-900/20 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">Call Us</span>
                  <a href="tel:+918139018202" className="text-base font-bold text-slate-800 hover:text-blue-600 transition">
                    +91 8139018202
                  </a>
                </div>
              </div>

              {/* Email Us / Director */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 shadow-lg shadow-slate-900/20 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">Email Us</span>
                  <a href="mailto:seainnovativetechnologies@gmail.com" className="text-base font-bold text-slate-800 hover:text-blue-600 transition">
                    seainnovativetechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 shadow-lg shadow-slate-900/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">Office Address</span>
                  <span className="text-base font-bold text-slate-800 block">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: We'd love to hear from you! Form Card (Navy Blue Theme) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60">
            {isSubmit ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-slate-100 text-slate-900 border border-slate-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  We have received your details. Our admissions coordinator will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmit(false);
                    setFormData({ name: '', email: '', countryCode: '+91', phone: '', location: '', course: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
                  We'd love to hear from you!
                </h3>

                {isError && (
                  <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-xl flex items-center space-x-2 text-rose-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full text-sm px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:bg-white transition text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full text-sm px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:bg-white transition text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Phone Number with Split Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Phone Number *</label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-24 text-sm px-3 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 font-medium text-slate-700"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                    </select>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="flex-1 text-sm px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:bg-white transition text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Area / Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Area / Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter your area or city"
                    className="w-full text-sm px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:bg-white transition text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Course Interested In */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Course Interested In *</label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full text-sm px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:bg-white transition text-slate-700 font-medium"
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg shadow-slate-900/20 text-center text-sm"
                  >
                    {isSubmitting ? 'Processing...' : 'Send'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
