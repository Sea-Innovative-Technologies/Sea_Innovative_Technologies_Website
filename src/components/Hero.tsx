import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookDemo?: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <section id="home" className="relative pt-20 bg-slate-950 text-white overflow-visible">
      {/* Background Banner with Student Overlay */}
      <div 
        className="relative py-24 sm:py-32 md:py-36 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        {/* Dark Teal Gradient Overlay matching reference image */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/95 backdrop-brightness-[0.4]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          {/* Main Title: Sea Innovative Technologies professional title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight"
          >
            Transform Your Career with <span className="font-serif italic text-cyan-400 font-normal">Sea Innovative Technologies</span>
          </motion.h1>

          {/* Subtitle paragraph with requested course tags */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-normal"
          >
            Industry-oriented online and offline training programs including{' '}
            <strong className="text-white font-semibold border-b border-cyan-400/40 pb-0.5">Manual Testing Masterclass</strong>,{' '}
            <strong className="text-white font-semibold border-b border-cyan-400/40 pb-0.5">Automation Testing (Selenium & Playwright)</strong>,{' '}
            <strong className="text-white font-semibold border-b border-cyan-400/40 pb-0.5">Java Full Stack</strong>,{' '}
            <strong className="text-white font-semibold border-b border-cyan-400/40 pb-0.5">SAP ERP</strong>, and{' '}
            <strong className="text-white font-semibold border-b border-cyan-400/40 pb-0.5">Cyber Security</strong> — engineered with real-time projects and MNC job placement roadmaps.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button
              id="hero-book-demo-btn"
              onClick={onBookDemo}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-extrabold rounded-lg text-sm transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>

            <a
              id="hero-view-courses-btn"
              href="#courses"
              className="inline-flex items-center px-8 py-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-500/50 hover:border-cyan-400 text-white font-extrabold rounded-lg text-sm transition-all backdrop-blur-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>View All Courses</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating White Stats Card Overlapping Bottom of Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 sm:-mt-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 text-slate-900"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-x-0 md:divide-x divide-slate-100">
            
            {/* Stat 1 */}
            <div className="text-center px-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 tracking-tight block">
                500+
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider block mt-1">
                STUDENTS TRAINED
              </span>
            </div>

            {/* Stat 2 */}
            <div className="text-center px-2 md:pl-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 tracking-tight block">
                100%
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider block mt-1">
                INDUSTRY READY
              </span>
            </div>

            {/* Stat 3 */}
            <div className="text-center px-2 md:pl-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 tracking-tight flex items-center justify-center">
                4.8<Star className="w-6 h-6 fill-cyan-600 text-cyan-600 ml-0.5" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider block mt-1">
                GOOGLE RATING
              </span>
            </div>

            {/* Stat 4 */}
            <div className="text-center px-2 md:pl-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 tracking-tight block">
                7
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider block mt-1">
                COURSES OFFERED
              </span>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
}
