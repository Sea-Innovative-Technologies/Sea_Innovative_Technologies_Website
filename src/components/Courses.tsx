import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Code2, 
  Globe, 
  Zap, 
  Clock, 
  Award, 
  Briefcase, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  FolderGit2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data';
import { Course } from '../types';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-blue-600" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="courses" className="py-14 sm:py-16 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80 font-sans">
      
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact & Impactful Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-8 space-y-1.5"
        >
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-blue-600" />
            Course Tracks
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Software QA & Automation Pathways
          </h2>

          <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
            Select a specialized track below to view the module syllabus and career outcomes.
          </p>
        </motion.div>

        {/* Compact 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: COMPACT COURSE CARDS (Short scroll height)                   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-2.5">
            {COURSES.map((course) => {
              const isActive = selectedCourse.id === course.id;

              return (
                <div
                  key={course.id}
                  onClick={() => {
                    setSelectedCourse(course);
                    setExpandedModule(0);
                  }}
                  className={`relative p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-250 select-none overflow-hidden ${
                    isActive
                      ? 'bg-white border-2 border-[#2563EB] shadow-md shadow-blue-500/10 ring-2 ring-blue-500/10'
                      : 'bg-white hover:bg-slate-50/80 border border-[#E2E8F0] shadow-sm'
                  }`}
                >
                  {/* Left Active Pill Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2563EB] rounded-r-full" />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}>
                        {getCourseIcon(course.iconName)}
                      </div>

                      {/* Title + Badges */}
                      <div className="min-w-0 text-left">
                        <div className="flex items-center space-x-2">
                          <span className="text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50">
                            {course.level}
                          </span>
                          <span className="text-[11px] text-[#64748B] font-medium flex items-center">
                            <Clock className="w-3 h-3 mr-0.5" />
                            {course.duration}
                          </span>
                        </div>

                        <h3 className={`text-sm sm:text-base font-bold truncate mt-0.5 ${
                          isActive ? 'text-blue-900 font-extrabold' : 'text-[#0F172A]'
                        }`}>
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isActive ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-100'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: COMPACT & IMPACTFUL CURRICULUM PANEL                        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-md text-left space-y-4">
              
              {/* Compact Course Banner */}
              <div className="border-b border-[#E2E8F0] pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {selectedCourse.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {selectedCourse.projectsCount || '2 Live Projects'}
                    </span>
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {selectedCourse.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Modules Accordion */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] block">
                  Syllabus Modules ({selectedCourse.topics.length})
                </span>

                {selectedCourse.topics.map((module, mIdx) => {
                  const isExpanded = expandedModule === mIdx;

                  return (
                    <div
                      key={mIdx}
                      className={`rounded-xl border transition-all overflow-hidden ${
                        isExpanded
                          ? 'border-[#2563EB] bg-blue-50/10 ring-1 ring-blue-500/20'
                          : 'border-[#E2E8F0] hover:border-blue-300 bg-white'
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => setExpandedModule(isExpanded ? null : mIdx)}
                        className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left focus:outline-none transition group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs font-mono shrink-0 ${
                            isExpanded ? 'bg-blue-600 text-white' : 'bg-slate-100 text-[#0F172A]'
                          }`}>
                            0{mIdx + 1}
                          </span>

                          <span className={`text-xs sm:text-sm font-bold truncate uppercase tracking-tight ${
                            isExpanded ? 'text-blue-600' : 'text-[#0F172A] group-hover:text-blue-600'
                          }`}>
                            {module.title}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0">
                          <span className="text-[11px] text-[#64748B] font-medium hidden sm:inline">
                            {module.lessonCount || `${module.subtopics.length} Lessons`}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                          }`} />
                        </div>
                      </button>

                      {/* Expanded Topics List */}
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1 border-t border-blue-100/60 bg-white">
                          <div className="grid sm:grid-cols-2 gap-2 pt-2">
                            {module.subtopics.map((subtopic, sIdx) => (
                              <div 
                                key={sIdx}
                                className="flex items-start space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-100"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                                <span className="text-xs text-[#0F172A] font-medium leading-snug">
                                  {subtopic}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">Outcome: </span>
                  <span className="text-blue-600 font-medium">{selectedCourse.careerOutcome}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-md shadow-blue-600/20 ml-auto"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
