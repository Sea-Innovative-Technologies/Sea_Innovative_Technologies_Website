import { Course, TechCovered, Testimonial, FAQItem, RoadmapStep, MockExamQuestion, LocatorChallenge } from './types';

export const COURSES: Course[] = [
  {
    id: 'manual-testing',
    title: 'Manual Testing Masterclass',
    description: 'Master SDLC, agile processes, defect reporting, and test execution with hands-on live project training.',
    duration: '6 Weeks',
    level: 'Beginner to Intermediate',
    iconName: 'ClipboardCheck',
    projectsCount: '2 Live Projects',
    certification: 'Industry Certification',
    placementSupport: '100% Placement Support',
    careerOutcome: 'Manual QA Engineer, Test Analyst, Agile Tester',
    topics: [
      {
        title: 'SDLC & STLC Architecture',
        duration: '1.5 Weeks',
        lessonCount: '6 Lessons',
        subtopics: ['Waterfalls vs. Agile/Scrum processes', 'Requirement Analysis & feasibility reports', 'Test Planning, Scope definition & entry/exit criteria', 'V-Model and iterative testing phases']
      },
      {
        title: 'Test Design & Case Writing',
        duration: '1.5 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['Boundary Value Analysis (BVA)', 'Equivalence Partitioning (EP)', 'State Transition Testing techniques', 'Creating robust, industry-ready Test Case sheets']
      },
      {
        title: 'Defect Management & Jira',
        duration: '1.5 Weeks',
        lessonCount: '6 Lessons',
        subtopics: ['Bug Life Cycle state transitions', 'Defect logging with Jira-like structures', 'Severity vs Priority critical metrics', 'Generating metrics reports for stakeholders']
      },
      {
        title: 'Specialized & Agile Testing',
        duration: '1.5 Weeks',
        lessonCount: '7 Lessons',
        subtopics: ['Functional vs Non-Functional testing', 'Sanity/Smoke tests & Regression testing', 'Exploratory, Ad-Hoc & Usability testing', 'Agile Testing: Scrum rituals and epic backlogs']
      }
    ]
  },
  {
    id: 'core-java',
    title: 'Core Java for QA Automation',
    description: 'Learn Java OOPs, collections framework, and programming fundamentals engineered specifically for automation engineers.',
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    iconName: 'Code',
    projectsCount: '3 Code Frameworks',
    certification: 'Java QA Certification',
    placementSupport: 'MNC Mock Interviews',
    careerOutcome: 'Java QA Developer, Automation Test Engineer',
    topics: [
      {
        title: 'Java Basics & Fundamentals',
        duration: '2 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['JVM, JRE, and JDK architectures', 'Data types, conditional structures & loops', 'String modifications & immutable concepts', 'One and multi-dimensional array operations']
      },
      {
        title: 'Object-Oriented Programming (OOPs)',
        duration: '2 Weeks',
        lessonCount: '9 Lessons',
        subtopics: ['Classes, Objects & Constructor techniques', 'Classical Inheritance & Polymorphism (Overloading vs Overriding)', 'Abstract Classes vs Interfaces', 'Encapsulation, getters/setters & security best practices']
      },
      {
        title: 'Exceptions & File Handling',
        duration: '2 Weeks',
        lessonCount: '6 Lessons',
        subtopics: ['Checked vs Unchecked exceptions syntax', 'Custom exception writing rules', 'Try-Catch-Finally statements', 'Reading & Writing Excel/JSON configs via Apache POI']
      },
      {
        title: 'Collections Framework & Threads',
        duration: '2 Weeks',
        lessonCount: '7 Lessons',
        subtopics: ['List, Set & Map interfaces depth', 'ArrayList vs LinkedList; HashSet vs HashMap', 'Iterators, stream loops & sorting', 'Multi-threading basics for sequential or parallel actions']
      }
    ]
  },
  {
    id: 'selenium-automation',
    title: 'Selenium Automation with TestNG',
    description: 'Build enterprise-grade web automation frameworks using WebDriver, TestNG, Maven, and Page Object Model (POM).',
    duration: '10 Weeks',
    level: 'Intermediate to Advanced',
    iconName: 'Globe',
    projectsCount: '2 Enterprise Frameworks',
    certification: 'Selenium Master Cert',
    placementSupport: 'Dedicated Resume & Referrals',
    careerOutcome: 'Selenium Automation Lead, SDET',
    topics: [
      {
        title: 'WebDriver Basics & Locators',
        duration: '2.5 Weeks',
        lessonCount: '9 Lessons',
        subtopics: ['WebDriver architecture & custom binaries', 'Advanced XPath generation rules (axes, contains, text)', 'CSS selectors vs XPaths performance', 'Handling dynamic elements & window alerts']
      },
      {
        title: 'Interactive Web Controls',
        duration: '2.5 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['Drop-downs, dynamic auto-completes & frames', 'Mouse actions, drag-drop, keyboard actions', 'Implicit, Explicit & Fluent synchronization mechanisms', 'Screenshots grab & JavaScript Executors usage']
      },
      {
        title: 'TestNG Testing Framework',
        duration: '2.5 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['TestNG annotations life cycle sequencing', 'XML suite designs and groups tags', 'DataProviders for structured parameters tests', 'Soft vs Hard Assertions & Custom Listeners']
      },
      {
        title: 'POM Framework & CI/CD Pipelines',
        duration: '2.5 Weeks',
        lessonCount: '10 Lessons',
        subtopics: ['Page Object Model architecture design patterns', 'PageFactory lazy element bindings', 'Maven dependencies, pom.xml & profiles', 'Jenkins automated execution logs setup']
      }
    ]
  },
  {
    id: 'playwright-typescript',
    title: 'Modern QA with Playwright & TS',
    description: 'Fast, resilient end-to-end web testing with Playwright, TypeScript, API testing, and GitHub Actions CI/CD integration.',
    duration: '8 Weeks',
    level: 'Intermediate to Expert',
    iconName: 'Zap',
    projectsCount: '3 Full-Stack Test Suites',
    certification: 'Playwright Specialist',
    placementSupport: '1-on-1 Mentorship & MNC Hiring',
    careerOutcome: 'Senior SDET, Full-Stack QA Engineer',
    topics: [
      {
        title: 'Playwright & TypeScript Setups',
        duration: '2 Weeks',
        lessonCount: '7 Lessons',
        subtopics: ['NodeJS, NPM dependencies & config configs', 'TypeScript syntax: Let/Const, Promises, Async/Await', 'Playwright Config configurations (Viewports, baseURL)', 'Trace Viewer, DevTools console and Codegen']
      },
      {
        title: 'Resilient Automation Controls',
        duration: '2 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['Auto-waiting, strict element matching and state waits', 'Playwright locators: roles, text, css, xpath', 'Interacting with multiple windows, tabs and dialogs', 'Network request interception & Mocking payloads']
      },
      {
        title: 'API Testing & Storage States',
        duration: '2 Weeks',
        lessonCount: '7 Lessons',
        subtopics: ['HTTP request/response contexts', 'Authenticating via storageStates for speed', 'Asserting JSON schemas and deep headers', 'Database bindings inside scripts']
      },
      {
        title: 'Advanced Flows & Visual Regression',
        duration: '2 Weeks',
        lessonCount: '8 Lessons',
        subtopics: ['Visual comparison tests (screenshot snapshots)', 'Parallel execution sharding across browsers', 'Playwright Report formats & custom reporting listeners', 'GitHub Actions integration YAML templates']
      }
    ]
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    phase: '01',
    title: 'Core Java Fundamentals',
    description: 'Master OOPs, loops, inheritance, and collection sets to write structured, reusable automation programs.',
    duration: 'Weeks 1-4',
    skills: ['Variables & Flow control', 'OOPs paradigms', 'Exceptions Handling', 'Collections Library']
  },
  {
    phase: '02',
    title: 'Manual Software Testing',
    description: 'Learn professional SDLC, Agile-Scrum rituals, test design, and defect report flows using tracking interfaces.',
    duration: 'Weeks 5-8',
    skills: ['SDLC & STLC', 'Agile Frameworks', 'Jira bug metrics', 'Test Case Writing']
  },
  {
    phase: '03',
    title: 'Selenium WebDriver Suite',
    description: 'Acquire robust automation techniques on multiple browsers, dynamic locator patterns, and frameworks configurations.',
    duration: 'Weeks 9-14',
    skills: ['WebDriver API', 'Maven & TestNG', 'Page Object Model', 'Data Providers']
  },
  {
    phase: '04',
    title: 'Modern Playwright & TypeScript',
    description: 'Expedite testing with Microsoft Playwright, mastering async TypeScript, trace inspections, and fast parallel test execution.',
    duration: 'Weeks 15-18',
    skills: ['Async TypeScript', 'Auto-waiting locators', 'API Request intercepting', 'CI Actions YAML']
  },
  {
    phase: '05',
    title: 'Placement & Career Prep',
    description: 'Undergo extensive mock technical, live portfolio building, and real-time project presentations directly overseen by mentors.',
    duration: 'Weeks 19-20',
    skills: ['Resume Tailoring', 'Mock Technical Rounds', 'LinkedIn Profiling', 'Project Portfolio']
  },
  {
    phase: '06',
    title: 'Job Placement Referral',
    description: 'Receive interview refers, mock checkups, active partner referrals, and secure your career as a qualified QA Automation Engineer.',
    duration: 'Ongoing',
    skills: ['Partner HR Leads', 'Interview Drills', 'On-Job Technical Support']
  }
];

export const TECHNOLOGIES: TechCovered[] = [
  { name: 'Java Full Stack', category: 'Development', description: 'Enterprise backend with Java, Spring Boot, and database wrappers.', iconName: 'Monitor' },
  { name: 'React JS', category: 'Frontend UI', description: 'Designing interactive responsive client dashboards using modern rendering hooks.', iconName: 'Globe' },
  { name: 'Power BI', category: 'Data Analysis', description: 'Business dashboards, ETL workflows, data models, and analytical queries.', iconName: 'BarChart3' },
  { name: 'Data Engineering', category: 'Data Sciences', description: 'ETL orchestration tools, Hadoop, Spark clusters, and SQL streams.', iconName: 'Database' },
  { name: 'AI & Machine Learning', category: 'Modern Tech', description: 'Generative Models integrations, neural structures, and Python regressions.', iconName: 'Cpu' },
  { name: 'DevOps & CI/CD', category: 'Operations', description: 'Docker architectures, Jenkins automations, and GCP cloud deployments.', iconName: 'GitBranch' },
  { name: 'Cyber Security', category: 'Security Infrastructure', description: 'Network audits, penetration tests, encryption protocols, and OWASP lists.', iconName: 'ShieldAlert' },
  { name: 'PL/SQL Database', category: 'Databases', description: 'Stored procedures, dynamic indexing, relational architectures, and performance queries.', iconName: 'HardDrive' },
  { name: 'VLSI Architectures', category: 'Engineering Systems', description: 'Silicon micro-architectures modeling, Verilog tests, and embedded system structures.', iconName: 'Binary' },
  { name: 'SAP Integrations', category: 'Enterprise ERP', description: 'Enterprise resources modules planning, ABAP scripts, and global supply systems.', iconName: 'Briefcase' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sandeep Kumar',
    role: 'QA Automation Lead',
    company: 'Tech Mahindra',
    review: 'The structured focus on Core Java before starting Selenium made all the difference. Trainer Seshu Arisetty explained complex locators beautifully with logical XPath concepts. The mock interview rounds built my absolute confidence!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=150&h=150&q=80'
  },
  {
    id: 2,
    name: 'Harika Reddy',
    role: 'Playwright Automation Engineer',
    company: 'Cognizant',
    review: 'Switched from a non-IT background to software testing! The manual testing concepts were simplified with epic real-life projects. Moving to Playwright with TypeScript changed my life. Excellent institute for immediate career shifts.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=150&h=150&q=80'
  },
  {
    id: 3,
    name: 'Ravi Teja',
    role: 'Senior QA Analyst',
    company: 'Capgemini',
    review: 'Sea Innovative Technologies provides practical, hands-on training that actual offices need. Seshu sir provides customized daily assignments and evaluates every student code individually. The placement support is highly efficient.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=150&h=150&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Who is eligible to join these software testing & automation courses?',
    answer: 'Any graduate (B.Tech, MCA, B.Sc, B.Com, etc.) or working professional looking to start or transition into an IT career can join. We start completely from scratch—no previous background is required.'
  },
  {
    id: 2,
    question: 'Do I need strong programming or coding experience before starting?',
    answer: 'No coding knowledge is required. We teach Core Java and TypeScript from absolute ground zero before introducing automation tools like Selenium and Playwright.'
  },
  {
    id: 3,
    question: 'What kind of real-time projects will I work on during the course?',
    answer: 'You will work on actual, fully functional e-commerce websites, banking portal mockups, and customer relationship management (CRM) software web portals. You write complete test suites, smoke plans, and set up live CI/CD pipelines.'
  },
  {
    id: 4,
    question: 'How does the placement assistance process work?',
    answer: 'Once you reach the automation phase, our placement team schedules professional resume tailoring sessions, mock interviews (technical + HR rounds), optimizes your LinkedIn QA portfolio, and shares your profiles with our partner IT companies.'
  },
  {
    id: 5,
    question: 'Are there options for both online and offline classroom sessions?',
    answer: 'Yes! We conduct interactive online live-streamed classroom training sessions with complete interactive recordings, as well as customized in-classroom training for deeply focused learning.'
  }
];

// Quiz/Exam Questions for Student Portal
export const MOCK_EXAM_MANUAL: MockExamQuestion[] = [
  {
    id: 1,
    question: "Which testing methodology focuses on verifying software against requirements without seeing the source code?",
    options: ["Black Box Testing", "White Box Testing", "Unit Testing", "Mutation Testing"],
    correctIndex: 0,
    explanation: "Blackbox testing interacts with the UI and system outcomes without inspecting backend implementation codes."
  },
  {
    id: 2,
    question: "What is the correct sequence of phases in the Software Testing Life Cycle (STLC)?",
    options: [
      "Requirements Analysis > Test Design > Test Planning > Test Execution > Defect Reporting",
      "Requirements Analysis > Test Planning > Test Case Development > Test Environment Setup > Test Execution > Test Cycle Closure",
      "Test Planning > Case Writing > Code Execution > Deployment Verification",
      "Verification > Validation > Acceptance > Maintenance"
    ],
    correctIndex: 1,
    explanation: "STLC begins with Requirement Analysis, proceeds to Planning, Test Case Development, Environment Configuration, Execution, and ends with Closure analysis."
  },
  {
    id: 3,
    question: "In Bug Life Cycle, once a developer fixes a defect and requests verification, what phase contains this bug?",
    options: ["Deferred", "Closed", "Ready for Re-test", "New"],
    correctIndex: 2,
    explanation: "When developers declare a fix complete, they change the state to 'Ready for Re-test' (or Resolved) for QA verifying actions."
  },
  {
    id: 4,
    question: "What is Equivalence Partitioning?",
    options: [
      "Splitting code into equal compilation chunks",
      "A black-box technique dividing input ranges into equivalent subsets with identical behaviors",
      "Verifying boundary values such as minimum and maximum boundaries",
      "Testing the application on multiple operating systems"
    ],
    correctIndex: 1,
    explanation: "Equivalence Partitioning groups input constraints into modules that are expected to behave congruently."
  }
];

export const MOCK_EXAM_AUTOMATION: MockExamQuestion[] = [
  {
    id: 1,
    question: "In Selenium, which method is the most performant to write a locator matching text exactly inside an <a> tag?",
    options: [
      "driver.findElement(By.xpath(\"//a[text()='Submit']\"))",
      "driver.findElement(By.cssSelector(\"a:text('Submit')\"))",
      "driver.findElement(By.className(\"Submit\"))",
      "driver.findElement(By.xpath(\"//a[contains(.,'Sub')]\"))"
    ],
    correctIndex: 0,
    explanation: "XPath with `text()='Submit'` guarantees exact, literal text comparisons on anchor nodes."
  },
  {
    id: 2,
    question: "What is Microsoft Playwright's default behavior regarding waiting for element operations?",
    options: [
      "You must declare Thread.sleep for every command",
      "Playwright automatically waits (auto-waits) for actions like click or type to become visible, clickable, and stable",
      "It checks elements asynchronously and fails immediately if not ready",
      "It requires PageFactory configuration to activate weights"
    ],
    correctIndex: 1,
    explanation: "Playwright auto-waits for actionability checks (visible, stable, enabled, editable) before executing automation tasks."
  },
  {
    id: 3,
    question: "What annotation sequence in TestNG executes BEFORE every single individual @Test method?",
    options: ["@BeforeSuite", "@BeforeClass", "@BeforeMethod", "@BeforeTest"],
    correctIndex: 2,
    explanation: "@BeforeMethod is fired before each separate @Test target, making it perfect to set up initial page routes."
  },
  {
    id: 4,
    question: "In Playwright, what is the 'browser context' (or browserContext)?",
    options: [
      "The exact browser window size configuration",
      "An isolated, incredibly lightweight browser session (like incognito) that prevents state leaks",
      "The connection configuration string for Jenkins",
      "A local database model tracking files"
    ],
    correctIndex: 1,
    explanation: "Browser Contexts are extremely fast incognito-like isolated sessions allowing parallel testing without cookies leakage."
  }
];

// Web Locator Challenges for Testing Practice
export const LOCATOR_CHALLENGES: LocatorChallenge[] = [
  {
    id: 1,
    label: "Submit Button in Registration Form",
    htmlCode: `<form id="register-form">
  <button type="submit" class="btn btn-primary" name="submit-action" id="btn-submit-form">
    Register Now
  </button>
</form>`,
    hint: "Think about ID, specific attributes, css selectors, or xpath paths like matching its text or name.",
    correctLocators: {
      xpath: ["//button[@id='btn-submit-form']", "//button[@name='submit-action']", "//button[contains(text(),'Register Now')]", "//*[@id='btn-submit-form']"],
      css: ["button#btn-submit-form", "#btn-submit-form", "button[name='submit-action']", ".btn-primary"],
      id: "btn-submit-form",
      playwright: ["page.locator('#btn-submit-form')", "page.getByRole('button', { name: 'Register Now' })"]
    }
  },
  {
    id: 2,
    label: "Dynamic Password Field",
    htmlCode: `<div class="password-wrapper relative">
  <input type="password" name="user_pwd_sec" class="form-input" placeholder="Enter secure password" data-testid="login-password-field" />
</div>`,
    hint: "Use custom QA attributes like data-testid, standard name, or CSS placeholders.",
    correctLocators: {
      xpath: ["//input[@data-testid='login-password-field']", "//input[@name='user_pwd_sec']", "//input[@placeholder='Enter secure password']"],
      css: ["input[data-testid='login-password-field']", "input[name='user_pwd_sec']", "[data-testid='login-password-field']"],
      id: "",
      playwright: ["page.getByTestId('login-password-field')", "page.locator(\"input[name='user_pwd_sec']\")"]
    }
  },
  {
    id: 3,
    label: "Success Notification Text inside a Alert Div",
    htmlCode: `<div class="alert alert-success mt-4 flex items-center" role="status">
  <span class="font-semibold text-green-800">Account verified successfully!</span>
</div>`,
    hint: "Match using class text contents or specific nested tags using XPath contains.",
    correctLocators: {
      xpath: ["//span[contains(text(),'Account verified successfully!')]", "//div[@role='status']/span", "//span[@class='font-semibold text-green-800']"],
      css: [".alert-success span", "div[role='status'] span", ".alert-success .font-semibold"],
      id: "",
      playwright: ["page.locator('.alert-success span')", "page.getByText('Account verified successfully!')"]
    }
  }
];
