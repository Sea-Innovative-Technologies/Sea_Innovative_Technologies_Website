import React from 'react';
import { Shield, Target, Award, Users, BookOpen, Star, CheckCircle2, ShieldCheck, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutUs() {
  const features = [
    {
      title: 'Hands-On Training',
      description: 'Every session is project-based. Write test scripts, execute them, and see real results from day one.',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Live Projects',
      description: 'Work on e-commerce, banking, and API platforms that mirror real enterprise environments.',
      icon: Target,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Industry Experts',
      description: 'Learn directly from Seshu Arisetty and senior QA professionals with MNC experience.',
      icon: Award,
      color: 'bg-violet-50 text-violet-600 border-violet-100'
    },
    {
      title: 'Placement Support',
      description: 'Direct access to hiring partners, resume building, and portfolio referrals.',
      icon: Users,
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      title: 'Mock Interviews',
      description: 'Weekly technical and HR rounds with detailed feedback to build confidence.',
      icon: Star,
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      title: 'Career Mentorship',
      description: 'Personalized guidance, LinkedIn optimization, and ongoing career support.',
      icon: Shield,
      color: 'bg-teal-50 text-teal-600 border-teal-100'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overview Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="grid lg:grid-cols-12 gap-12 items-center mb-24"
        >
          <motion.div custom={0} variants={fadeUp} className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs uppercase font-semibold tracking-widest text-blue-600 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] leading-tight">
              Building Careers Through{' '}
              <span className="text-blue-600">Practical Excellence</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-base max-w-lg">
              SEA Innovative Technologies prepares aspiring IT professionals with industry-focused training, hands-on projects, and expert mentorship — transforming knowledge into career success.
            </p>

            {/* Mission & Approach Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 text-left">
                <span className="font-semibold text-slate-900 block text-sm">Our Mission</span>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  Deliver industry-focused QA training through hands-on learning, enabling professionals to become confident, skilled, and career-ready engineers.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 text-left">
                <span className="font-semibold text-slate-900 block text-sm">Our Approach</span>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  Real-world projects, industry-aligned curriculum, automation practices, and comprehensive mock interviews to build expertise and confidence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust & Credibility Panel */}
          <motion.div custom={1} variants={fadeUp} className="lg:col-span-6 relative">
            <div className="max-w-md mx-auto space-y-4">



              {/* Testimonial */}
              <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm text-left">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=80&h=80&q=80"
                    alt="Student"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-slate-500 text-sm leading-relaxed italic">
                      "Joined with zero coding knowledge. Within 4 months I was placed at an MNC as a QA Automation Engineer."
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-xs font-semibold text-slate-700">Sandeep K.</span>
                      <span className="text-[10px] text-slate-300">•</span>
                      <span className="text-[10px] text-slate-400">QA Lead, Tech Mahindra</span>
                    </div>
                    <div className="flex space-x-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="border-t border-slate-100 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <span className="text-xs uppercase font-semibold tracking-widest text-blue-600 block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em]">
              What Sets Us Apart
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Precision-focused training with individual progress tracking and industry-relevant skills.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 bg-white hover:bg-slate-50/50 rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all group text-left"
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${feat.color} group-hover:scale-105 transition-transform mb-4`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
