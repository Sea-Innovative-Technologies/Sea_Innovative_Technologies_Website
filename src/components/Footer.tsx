import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070d19] text-white pt-16 pb-12 font-sans overflow-hidden select-none border-t border-blue-500/20">
      
      {/* ========================================================================= */}
      {/* LIGHT SHATTERED DESIGN & GEOMETRIC NAVY LIGHT BEAMS                       */}
      {/* ========================================================================= */}
      
      {/* 1. Deep Midnight Navy Radial Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#102a45] via-[#0a192f] to-[#040814] opacity-100 pointer-events-none" />

      {/* 2. Light Shattered Shards (Polygon Glass Facets) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Shard 1: Top-Left Shattered Glass Light Beam */}
        <div 
          className="absolute -top-10 -left-10 w-[500px] h-[350px] bg-gradient-to-br from-blue-400/25 via-indigo-500/10 to-transparent blur-md"
          style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 15% 85%)' }}
        />

        {/* Shard 2: Top-Right Shattered Light Ray */}
        <div 
          className="absolute -top-20 -right-20 w-[600px] h-[400px] bg-gradient-to-bl from-sky-400/20 via-blue-600/15 to-transparent blur-lg"
          style={{ clipPath: 'polygon(30% 0, 100% 10%, 85% 100%, 0% 60%)' }}
        />

        {/* Shard 3: Center Shattered Crystal Prism Line */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-600/10 via-cyan-400/20 to-indigo-600/10 blur-xl"
          style={{ clipPath: 'polygon(10% 20%, 90% 0%, 100% 80%, 0% 100%)' }}
        />

        {/* Shard 4: Bottom Right Shattered Edge */}
        <div 
          className="absolute -bottom-10 -right-10 w-[500px] h-[300px] bg-gradient-to-tl from-indigo-500/25 via-blue-500/15 to-transparent blur-md"
          style={{ clipPath: 'polygon(20% 0, 100% 30%, 80% 100%, 0% 70%)' }}
        />
      </div>

      {/* 3. Glowing Light Shattered Points */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 4. Fine Shattered Grid Overlay Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ transform: 'skewY(-6deg) scale(1.1)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP CALLOUT BAR: "Follow us for daily updates." + Social Icons (Matching Image 2 Layout) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-blue-400/20">
          <div>
            <h3 className="text-3xl sm:text-4xl font-serif tracking-tight text-white font-medium">
              Follow us for daily <span className="italic font-serif text-blue-200">updates.</span>
            </h3>
            <p className="text-blue-100/70 text-sm sm:text-base mt-1 font-normal">
              Courses, events, student stories and more.
            </p>
          </div>

          {/* Circular Social Buttons Row */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://www.instagram.com/sea_innovative_technologies?igsh=bWdxdjVqbHJyOHhu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-white hover:text-[#0a192f] text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-white hover:text-[#0a192f] text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="Twitter / X"
            >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="mailto:seainnovativetechnologies@gmail.com"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-white hover:text-[#0a192f] text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-white hover:text-[#0a192f] text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-white hover:text-[#0a192f] text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://wa.me/918139018202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-emerald-500 hover:border-emerald-400 hover:text-white text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-blue-300/30 bg-blue-950/60 hover:bg-red-600 hover:border-red-500 hover:text-white text-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40 group"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT GRID (4 Columns - Matching Image 2 Design Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-12 text-left">
          
          {/* Column 1: Brand Badge + Description + Stats */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Clean Brand Name without S icon box */}
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight block leading-tight text-white">
                SEA <span className="text-blue-400">INNOVATIVE</span>
              </span>
              <span className="text-xs font-extrabold tracking-[0.2em] text-blue-200/80 uppercase block mt-0.5">
                Technologies
              </span>
            </div>

            <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              SEA Innovative Technologies is committed to delivering future-ready software QA & testing education that transforms careers and empowers learners to shape the digital tech world.
            </p>

            <blockquote className="text-blue-200/90 text-xs font-serif italic border-l-2 border-blue-400 pl-3 py-0.5">
              Empowering Tomorrow's Tech Leaders
            </blockquote>

            {/* Quick Stats Block */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <span className="block text-2xl font-extrabold text-white tracking-tight">2016</span>
                <span className="text-[11px] text-blue-200/60 font-medium">Established</span>
              </div>
              <div className="w-px h-8 bg-blue-400/20" />
              <div>
                <span className="block text-2xl font-extrabold text-white tracking-tight">1000+</span>
                <span className="text-[11px] text-blue-200/60 font-medium">Students Trained</span>
              </div>
            </div>
          </div>

          {/* Column 2: COURSES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest relative inline-block pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-400">
              COURSES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100/70 font-normal">
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Manual QA Testing Masterclass
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Automation Testing (Selenium & TestNG)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Modern QA with Playwright & TS
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Core Java & Automation Framework
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  API Testing & Postman Masterclass
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Cyber Security & Ethical Hacking
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  SAP ERP Fundamentals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest relative inline-block pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-400">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100/70 font-normal">
              <li>
                <a href="#home" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#batches" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Upcoming Batches
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Careers & Placements
                </a>
              </li>
              <li>
                <a href="#batches" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest relative inline-block pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-400">
              CONTACT US
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Address:</strong>
                  Bengaluru, Karnataka, India
                </span>
              </p>

              <p className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Email:</strong>
                  <a href="mailto:seainnovativetechnologies@gmail.com" className="hover:text-white transition underline decoration-blue-400/40">
                    seainnovativetechnologies@gmail.com
                  </a>
                </span>
              </p>

              <p className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Phone:</strong>
                  <a href="tel:+918139018202" className="hover:text-white transition">
                    +91 8139018202
                  </a>
                </span>
              </p>

              <div className="pt-2 border-t border-blue-400/20 text-xs text-blue-200/70">
                <span className="block font-medium text-white">Admissions Coordinator:</span>
                <span className="text-blue-300 font-semibold">Seshu Arisetty</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTPRINT */}
        <div className="mt-14 pt-8 border-t border-blue-400/20 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-100/60 gap-4">
          <p>© {currentYear} SEA Innovative Technologies. All rights reserved.</p>
          <span className="text-blue-300 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
            <Heart className="w-3.5 h-3.5 fill-blue-400 text-blue-400 animate-pulse" />
            Your Success Is Our Mission
          </span>
        </div>

      </div>
    </footer>
  );
}
