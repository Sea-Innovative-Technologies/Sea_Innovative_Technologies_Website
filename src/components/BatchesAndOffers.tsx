import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Sparkles, 
  CheckCircle, 
  Laptop, 
  ArrowRight,
  Search,
  CheckCircle2,
  Bookmark,
  Share2,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  GraduationCap,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import genAiImg from '/assets/gen_ai_course.png';
import devopsImg from '/assets/devops_course.png';

interface BatchInfo {
  name: string;
  type: string; 
  schedule: string;
  category: 'tech' | 'qa' | 'business';
  badgeColor: string;
  indicatorColor: string;
  description: string;
  duration: string;
  skills: string[];
  image: string;
}

export default function BatchesAndOffers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'qa' | 'business'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Exact 14 dynamic course schedules from the flyer with duration and key skills
  const batchesList: BatchInfo[] = [
    {
      name: 'Testing Tools (Manual & Automation Mastery)',
      type: 'Demo Session - June 15th',
      schedule: '9:00 AM',
      category: 'qa',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      indicatorColor: 'bg-indigo-500',
      description: 'Comprehensive practical validation blueprint. Step-by-step masterclass covering QA Manual concepts, Selenium WebDriver integrations, modern Playwright test orchestrations, and industrial-grade frameworks with real placement roadmaps.',
      duration: '3 Months Program',
      skills: ['Manual Testing', 'Selenium & Java', 'Playwright', 'API Automation', 'MNC Roadmaps'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Gen AI & Agentic AI testing',
      type: 'Demo Session',
      schedule: '6:30 PM',
      category: 'qa',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      indicatorColor: 'bg-amber-500',
      description: 'Futuristic automation engineering syllabus. Acquire advanced expertise in building real-time autonomous QA agents, orchestrating Large Language Models, smart prompt writing, and auto-testing generative software stacks.',
      duration: '6 Weeks Pro Track',
      skills: ['LLM Orchestration', 'LangChain', 'Agentic Flows', 'Cursor AI', 'Self-Healing Tests'],
      image: genAiImg
    },
    {
      name: 'React JS Front-End Development',
      type: 'Daily Classes',
      schedule: '8:00 AM',
      category: 'tech',
      badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      indicatorColor: 'bg-sky-500',
      description: 'Master contemporary user interface systems. Learn modern React Hooks, state management, SPA page transitions, customized Tailwind styling utilities, and RESTful API data loading.',
      duration: '2 Months Intensive',
      skills: ['React Hooks', 'Tailwind UI', 'Vite', 'State Management', 'Single Page Apps'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Java Full Stack (Java FS)',
      type: 'Demo Session',
      schedule: '11:00 AM',
      category: 'tech',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      indicatorColor: 'bg-blue-500',
      description: 'End-to-end backend microservices and databases. Build cloud-capable enterprise applications using Core & Advanced Java structures, robust Spring Boot frameworks, Hibernate ORMs, and PostgreSQL database layers.',
      duration: '4 Months Program',
      skills: ['Core & Adv Java', 'Spring Boot', 'Hibernate ORM', 'Microservices', 'RESTful API'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Cyber Security Operations',
      type: 'Regular Batches (Wed-Sun)',
      schedule: '10:00 AM',
      category: 'qa',
      badgeColor: 'text-red-400 bg-red-500/10 border-red-500/20',
      indicatorColor: 'bg-red-500',
      description: 'Defend digital applications from modern adversaries. Deep-dive into network penetration analysis, threat auditing, OWASP security protocols, ethical hacking environments, and active security matrices.',
      duration: '3 Months Certified',
      skills: ['Penetration Scan', 'Network Auditing', 'OWASP Standards', 'Ethical Hacking', 'Kali Linux'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'DevOps & CI/CD Cloud Pipeline',
      type: 'Demo Session (Sat - Sun)',
      schedule: '10:00 AM',
      category: 'tech',
      badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      indicatorColor: 'bg-orange-500',
      description: 'Automate infrastructure delivery at absolute scale. Implement containerized Docker execution sandboxes, Kubernetes cluster administration, Amazon Web Services (AWS) solutions, and modern CI/CD orchestration.',
      duration: '3 Months Track',
      skills: ['Docker Sandbox', 'Kubernetes Clusters', 'AWS Cloud Services', 'Jenkins Pipelines', 'Git Automation'],
      image: devopsImg
    },
    {
      name: 'Power BI Business Analytics',
      type: 'Regular Classes (Hyderabad)',
      schedule: '7:30 PM',
      category: 'qa',
      badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      indicatorColor: 'bg-yellow-500',
      description: 'Extract actionable commercial insights from corporate databases. Master Power Query data transformation models, advanced DAX expressions, and design gorgeous corporate dashboards for reporting.',
      duration: '6 Weeks Program',
      skills: ['Power Query', 'DAX Formulation', 'Dashboard Design', 'Data Modelling', 'BI Reporting'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'VLSI DESIGN',
      type: 'Demo Session',
      schedule: '7:00 PM TO 8:00 PM',
      category: 'tech',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      indicatorColor: 'bg-purple-500',
      description: 'Build core physical hardware chips. Learn premium design scripting languages using Verilog, RTL development, FPGA layout logic, and electrical circuit performance simulation frameworks.',
      duration: '4 Months Course',
      skills: ['Verilog HDL', 'RTL Schematics', 'FPGA Prototyping', 'ASIC Layouts', 'ModelSim Tools'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'PL/SQL Database Developer',
      type: 'Demo Sessions',
      schedule: '9:00 AM',
      category: 'qa',
      badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      indicatorColor: 'bg-teal-500',
      description: 'Construct solid enterprise data endpoints. Master high-performance procedural querying, custom triggers, stored procedures, packet compilations, indexing logic, and query bottlenecks.',
      duration: '2 Months Course',
      skills: ['Stored Procedures', 'Custom Triggers', 'Query Optimization', 'Indexes & Views', 'Relational Schemas'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'SAP Enterprise ERP Suite',
      type: 'In Progress Cohort',
      schedule: '5:00 PM',
      category: 'business',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      indicatorColor: 'bg-emerald-500',
      description: 'Comprehensive business planning resource training inside SAP module landscapes. Gain practical experience handling enterprise accounting, supply chain logistics, and business transactions.',
      duration: '3 Months Program',
      skills: ['SAP ERP Ecosystem', 'Logistics Module', 'ABAP Integration', 'Supply Chain Logic', 'Enterprise Workflows'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Spoken English & Personality',
      type: 'New Batch Starts Soon',
      schedule: '8:00 AM',
      category: 'business',
      badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      indicatorColor: 'bg-pink-550',
      description: 'Overcome interview anxiety. Formulated systematically with structural speech models, conversational English drills, standard email formats, presentation skills, and confidence boosting.',
      duration: '2 Months Intensive',
      skills: ['Public Speaking', 'MNC Interview Preps', 'Email Writing', 'Accent Neutralization', 'Presentation Skills'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Accounting Executive Masterclass',
      type: 'Demo Session',
      schedule: '1:00 PM',
      category: 'business',
      badgeColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
      indicatorColor: 'bg-slate-500',
      description: 'Accelerate your commercial career. Master double-entry bookkeeping, GST transaction worksheets, tax audits, payroll sheets, and expert software navigation in Tally Prime.',
      duration: '3 Months Certified',
      skills: ['Tally Prime', 'GST Implementations', 'Ledger Formulation', 'Balance Sheet Audit', 'Commercial Books'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Offline Mortgage (Bangalore Site)',
      type: 'Starting Soon',
      schedule: 'Morning Batch',
      category: 'business',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      indicatorColor: 'bg-cyan-500',
      description: 'Highly acclaimed physical training course run at our Bengaluru center. Focuses on credit scoring guidelines, federal title inspections, deed transfers, and US underwriting practices.',
      duration: '3 Months Program',
      skills: ['Loan Origination', 'Credit Risk Analytics', 'Title Processing', 'Deed Underwriting', 'Regulatory Compliance'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mortgage Underwriting (Online)',
      type: 'Virtual Batch In Progress',
      schedule: '3:00 PM',
      category: 'business',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      indicatorColor: 'bg-rose-500',
      description: 'Acquire high-demand analytical abilities for secondary debt markets. Learn standard debt-to-income models, asset analysis tables, credit reporting parameters, and underwriting guidelines.',
      duration: '3 Months Online',
      skills: ['Credit Audits', 'Asset Verification', 'US Mortgage Standards', 'Debt-to-Income Analysis', 'Risk Profiling Principles'],
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Campaign promotions listed as visual discount tickets
  const couponTickets = [
    {
      pct: '10% OFF',
      tag: 'EARLY BIRD OPTION',
      claim: 'Register before next session',
      bgColor: 'from-sky-500/10 to-indigo-500/5',
      borderColor: 'border-sky-500/20 text-sky-400'
    },
    {
      pct: '15% OFF',
      tag: 'REFER A FRIEND BENEFIT',
      claim: 'Both candidates receive benefit',
      bgColor: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'border-emerald-500/20 text-emerald-400'
    },
    {
      pct: '20% OFF',
      tag: 'GROUP ENROLL OFFER',
      claim: 'Minimum 3 candidates together',
      bgColor: 'from-purple-500/10 to-indigo-500/5',
      borderColor: 'border-purple-500/20 text-purple-400'
    }
  ];

  const footerTrendSkills = [
    'Software Testing', 'Java Full Stack', 'Python Full Stack', 'Data Engineer', 'DevOps', 
    'Power BI', 'React JS', 'AI / ML', 'Cyber Security', 'PL/SQL', 'VLSI Design', 'SAP ERP', 
    'Mortgage & Underwriter', 'Digital Marketing', 'Graphic Designing', 'Tally Prime', 
    'UI / UX Design', 'MS Office Expert', 'English Speaking'
  ];

  // Perform search & tab filtering
  const filteredBatches = batchesList.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || b.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  // Calculate current active index safely
  const activeIndex = filteredBatches.length > 0 ? Math.min(currentIndex, filteredBatches.length - 1) : 0;
  const currentBatch = filteredBatches[activeIndex];

  // Reset slider index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [searchTerm, activeTab]);

  // Autoplay mechanism: changes slides automatically every 5 seconds
  // The timer is automatically cleared and reset whenever the user manually changes the slide
  useEffect(() => {
    if (filteredBatches.length <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % filteredBatches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, filteredBatches.length]);

  const handlePrev = () => {
    if (filteredBatches.length <= 1) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + filteredBatches.length) % filteredBatches.length);
  };

  const handleNext = () => {
    if (filteredBatches.length <= 1) return;
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % filteredBatches.length);
  };

  const slideTo = (idx: number) => {
    if (idx === activeIndex) return;
    setDirection(idx > activeIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Generate dynamic WhatsApp link for the active slide
  const getWhatsAppLink = (courseName: string, time: string) => {
    const textMsg = `Hello Seshu sir, I am highly interested in compiling my admission pre-registration slot for the "${courseName}" course (${time} batch). Please reserve my seat and share the live session link.`;
    return `https://wa.me/918139018202?text=${encodeURIComponent(textMsg)}`;
  };

  // Smooth fluid transition for the slider
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section id="batches" className="py-24 bg-[#080d19] text-slate-100 relative overflow-hidden border-b border-slate-900 font-sans">
      
      {/* Immersive Cosmic Visuals */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* EYE-CATCHING SECTION HEADER (As instructed) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500/15 to-indigo-500/15 px-3 py-1.5 rounded-full border border-sky-500/20 mb-4 animate-bounce">
            <Sparkle className="w-3.5 h-3.5 text-sky-400 rotate-12" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-300">CAMPUS SEAT MONITOR</span>
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white tracking-tight leading-tight">
            Transform Your Career with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Expert-Led Training
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Explore Upcoming Batches, Live Demo Sessions & Certification Programs.
          </p>
        </div>

        {/* VALUE PROPOSITION STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { tag: 'DEMO CAMPAIGN', value: '3 Days Session Trial', desc: 'Complimentary pass access', border: 'border-rose-500/10 bg-rose-550/[0.04]' },
            { tag: 'FLEXIBILITY MODES', value: 'Hybrid Formats', desc: 'Online & physical labs', border: 'border-indigo-500/10 bg-indigo-550/[0.04]' },
            { tag: 'GUIDANCE SYSTEM', value: '1-to-1 Mentorship', desc: 'Direct review with Seshu sir', border: 'border-sky-500/10 bg-sky-550/[0.04]' },
            { tag: 'FINANCIAL EASE', value: 'Simple Installments', desc: 'Secure split payment programs', border: 'border-emerald-500/10 bg-emerald-555/[0.04]' }
          ].map((item, id) => (
            <div key={id} className={`p-5 rounded-2xl border text-left flex flex-col justify-between ${item.border} backdrop-blur-xs`}>
              <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase">{item.tag}</span>
              <div className="mt-2.5">
                <span className="block font-extrabold text-sm sm:text-base text-white">{item.value}</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block font-normal leading-tight">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN PANEL LAYOUT (Bento Core Layout Split) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 items-start mb-16"
        >
          
          {/* LEFT COLUMN: Clean interactive search, category filter, and the customized Carousel slide (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SEARCH AND TYPE SELECTOR FLOATER */}
            <div className="bg-slate-950/80 border border-slate-900 p-4 rounded-3xl flex flex-col sm:flex-row gap-4 items-center justify-between backdrop-blur-md">
              
              {/* Search filter input */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter courses (e.g. React, Testing)..."
                  className="w-full text-xs placeholder-slate-500 pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium text-slate-200"
                />
              </div>

              {/* Category selector chips */}
              <div className="flex flex-wrap gap-1 w-full sm:w-auto justify-start sm:justify-end">
                {[
                  { id: 'all', label: 'All Slots' },
                  { id: 'tech', label: 'IT / Dev' },
                  { id: 'qa', label: 'QA / Data' },
                  { id: 'business', label: 'Business' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      activeTab === tab.id 
                        ? 'bg-sky-500 border-sky-500 text-slate-950 shadow-md shadow-sky-500/10 font-black' 
                        : 'bg-slate-905/30 hover:bg-slate-900 border-slate-850 text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* DYNAMIC HIGH-CONTRAST SLIDE CAROUSEL */}
            <div className="relative bg-gradient-to-b from-slate-950/80 to-slate-950/40 border border-slate-900 rounded-[2.5rem] overflow-hidden p-6 sm:p-8 backdrop-blur-md">
              
              {/* Frame glow highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                {filteredBatches.length > 0 ? (
                  <motion.div
                    key={currentBatch.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid md:grid-cols-12 gap-8 items-center"
                  >
                    {/* Course Illustration / Unsplash Frame on left (5 Columns) */}
                    <div className="md:col-span-5 relative group">
                      <div className="relative aspect-[4/3] md:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-850 shadow-lg bg-slate-900">
                        {/* Course visual cover stock photo */}
                        <img 
                          src={currentBatch.image} 
                          alt={currentBatch.name}
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        
                        {/* Interactive Float indicators */}
                        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-md ${currentBatch.badgeColor}`}>
                            {currentBatch.type}
                          </span>
                        </div>

                        {/* Program Duration badge overlay inside card */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl backdrop-blur-md flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">Duration Limit</span>
                          </div>
                          <span className="text-xs font-bold text-white font-mono">{currentBatch.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Technical Content on right (7 Columns) */}
                    <div className="md:col-span-7 text-left flex flex-col justify-between h-full space-y-5">
                      
                      {/* Track index & dynamic progress line indicator */}
                      <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                        <span className="text-[10px] font-black font-mono uppercase text-sky-400 tracking-widest">
                          Batch {activeIndex + 1} of {filteredBatches.length}
                        </span>
                        <div className="flex items-center space-x-1.5 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[9px] text-[#86efac] font-black uppercase tracking-wider">Admissions Open</span>
                        </div>
                      </div>

                      {/* Title & Timing specifications */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight hover:text-sky-300 transition-colors">
                          {currentBatch.name}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-3.5 mt-3 text-slate-400 text-xs font-medium">
                          <div className="flex items-center text-sky-350">
                            <Clock className="w-4 h-4 text-sky-400 mr-1.5" />
                            <span className="font-semibold font-mono">{currentBatch.schedule} Schedule</span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:inline" />
                          <div className="flex items-center">
                            <span className="text-[9px] font-black uppercase text-indigo-400 tracking-wider">Live Coaching Mode</span>
                          </div>
                        </div>
                      </div>

                      {/* Course short description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                        {currentBatch.description}
                      </p>

                      {/* Core Skills highlight chips */}
                      <div className="space-y-2">
                        <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-widest block">
                          Skills you will acquire:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentBatch.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="px-2.5 py-1 text-[10px] font-bold bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg select-none hover:border-slate-755 hover:text-white transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* PROMINENT ENROLL NOW CTA BUTTON */}
                      <div className="pt-4 border-t border-slate-900 mt-2">
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-indigo-500 hover:opacity-95 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all duration-150 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer text-left font-sans"
                        >
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>Enroll Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  </motion.div>
                ) : (
                  /* EMPTY STATE PREVIEW CONTAINER */
                  <div className="py-16 text-center">
                    <Laptop className="w-12 h-12 text-slate-700 mx-auto animate-pulse" />
                    <h4 className="text-white font-bold text-base mt-4">No Session Slots Found</h4>
                    <p className="text-slate-450 text-xs mt-1.5 max-w-sm mx-auto font-normal">
                      No results found for "{searchTerm}". Try clearing your search parameters or selecting other fields.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setActiveTab('all');
                      }}
                      className="mt-4 px-4.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[10px] uppercase font-bold text-sky-400 hover:bg-slate-850 cursor-pointer"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </AnimatePresence>

              {/* SLIDER NAVIGATION BUTTON BAR */}
              {filteredBatches.length > 1 && (
                <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                  
                  {/* Left previous trigger */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Course Slide"
                    className="p-3 bg-slate-900/80 hover:bg-slate-850 border border-slate-850 rounded-xl text-slate-400 hover:text-white transition cursor-pointer select-none"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Bullet Navigation indicator dots */}
                  <div className="flex items-center space-x-1.5">
                    {filteredBatches.map((_, bulletId) => (
                      <button
                        key={bulletId}
                        onClick={() => slideTo(bulletId)}
                        aria-label={`Go to slide ${bulletId + 1}`}
                        className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                          bulletId === activeIndex 
                            ? 'w-6 bg-sky-500' 
                            : 'w-1.5 bg-slate-800 hover:bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Right next trigger */}
                  <button
                    onClick={handleNext}
                    aria-label="Next Course Slide"
                    className="p-3 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl transition cursor-pointer select-none shadow-md shadow-sky-500/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              )}

            </div>

            {/* INTEGRATED RECEPTIVE CAMPUS TIMINGS BRIEF */}
            <div className="p-6 bg-slate-950/60 border border-slate-900 rounded-3xl text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="text-sky-400 font-black text-[9px] uppercase tracking-widest block font-mono">BROCHURE SCHEDULE LOGS</span>
                  <h4 className="text-base sm:text-lg font-black text-white mt-1">General Campus Operational Hours</h4>
                  <p className="text-slate-400 text-[11px] max-w-md mt-0.5 leading-relaxed font-normal">
                    Designed strategically with split labs to support both working professionals and fresher candidates on Weekdays and Weekends.
                  </p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                  <div className="flex-1 md:flex-none bg-slate-900/60 border border-slate-850 p-3 rounded-2xl text-center min-w-[120px]">
                    <span className="text-[9px] font-black uppercase text-sky-400 tracking-wider font-mono">Weekdays</span>
                    <span className="block font-black text-xs text-white mt-1.5">7:00 AM • 9:00 AM</span>
                    <span className="block font-black text-xs text-slate-405 mt-0.5">6:00 PM • 8:00 PM</span>
                  </div>
                  <div className="flex-1 md:flex-none bg-slate-900/60 border border-slate-850 p-3 rounded-2xl text-center min-w-[120px]">
                    <span className="text-[9px] font-black uppercase text-indigo-400 tracking-wider font-mono">Weekends</span>
                    <span className="block font-black text-xs text-white mt-1.5">9:00 AM Live</span>
                    <span className="block font-black text-xs text-slate-405 mt-0.5">5:00 PM Slot</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Admissions & Campaigns Offers (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            


            {/* PROMOTIONAL TICKETS PANEL */}
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase block pl-1 text-left">
                Special Campaign Tickets
              </span>
              
              {couponTickets.map((ticket, id) => (
                <div 
                  key={id}
                  className={`p-5 rounded-2.5xl bg-gradient-to-r border text-left relative overflow-hidden flex items-center justify-between ${ticket.bgColor} ${ticket.borderColor} backdrop-blur-md`}
                >
                  {/* Visual card perforations circles */}
                  <div className="absolute top-1/2 -left-2.5 w-5 h-5 bg-[#080d19] rounded-full -translate-y-1/2 border-r border-[#080d19]" />
                  <div className="absolute top-1/2 -right-2.5 w-5 h-5 bg-[#080d19] rounded-full -translate-y-1/2 border-l border-[#080d19]" />
                  
                  <div className="pl-2 pr-4 relative z-10 font-sans">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">{ticket.tag}</span>
                    <span className="block text-xl font-black text-white mt-1 font-mono tracking-tight">{ticket.pct}</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5 font-normal leading-tight">{ticket.claim}</span>
                  </div>

                  <div className="border-l border-dashed border-slate-700/60 pl-4 py-1.5 flex flex-col justify-center items-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-sky-400 mb-1" />
                    <span className="text-[8px] text-slate-500 tracking-wider uppercase font-black">Active</span>
                  </div>
                </div>
              ))}
            </div>

            {/* PRE-REG COMPLIMENTARY BENEFITS */}
            <div className="bg-slate-950/40 border border-slate-900 p-6 rounded-3xl text-left relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-slate-900">
                <CheckCircle2 className="w-4 h-4 text-sky-400 animate-pulse" />
                <h4 className="font-extrabold text-xs sm:text-sm text-white leading-none font-sans">Complimentary Benefits</h4>
              </div>

              <div className="space-y-3">
                {[
                  'Exclusive 3 Days Live Access Pass',
                  'Practical Handouts & Lab Guides',
                  'One-on-One Counseling with Seshu Arisetty'
                ].map((item, id) => (
                  <div key={id} className="flex items-start text-xs font-semibold text-slate-350 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

        {/* COMPREHENSIVE VOCATION TAG CLOUD */}
        <div id="other-skills-showcase" className="pt-12 border-t border-slate-900 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400 block mb-1">
              EXTENSIVE COVERED VOCATIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Explore Our Broader Professional Curriculums
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {footerTrendSkills.map((ski, index) => (
              <span 
                key={index}
                className="text-xs font-semibold bg-slate-900/60 border border-slate-850 hover:bg-slate-900 hover:border-slate-700 text-slate-350 hover:text-white px-3.5 py-2 rounded-xl transition duration-150 cursor-default select-none shadow-sm"
              >
                {ski}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
