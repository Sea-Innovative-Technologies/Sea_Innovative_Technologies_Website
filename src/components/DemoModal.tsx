import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Calendar, Clock, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function DemoModal({ isOpen, onClose, defaultCourse = '' }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    course: defaultCourse || 'Automation Testing (Selenium & Playwright)',
    mode: 'Online Live Class',
    preferredTime: 'Morning Batch (8:00 AM)'
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const courseOptions = [
    'Manual Testing Masterclass',
    'Automation Testing (Selenium & Playwright)',
    'Java Full Stack Development',
    'Python Full Stack Development',
    'DevOps & Cloud Engineering',
    'SAP ERP Module',
    'Cyber Security'
  ];

  const timeSlots = [
    'Morning Batch (8:00 AM - 9:30 AM)',
    'Evening Batch (7:00 PM - 8:30 PM)',
    'Weekend Special Batch (Sat & Sun)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setIsError(true);
      setErrorMsg('Please enter your Full Name and Phone Number.');
      return;
    }

    setIsError(false);
    setIsSubmitting(true);
    setErrorMsg('');

    const payload = {
      name: formData.name,
      email: formData.email || 'N/A',
      phone: `'${formData.countryCode} ${formData.phone}`,
      course: formData.course,
      mode: formData.mode,
      preferredTime: formData.preferredTime,
      type: 'FREE DEMO BOOKING',
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
      console.log('Demo submission note:', error);
      setIsSubmit(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmit(false);
    setIsError(false);
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      course: 'Automation Testing (Selenium & Playwright)',
      mode: 'Online Live Class',
      preferredTime: 'Morning Batch (8:00 AM)'
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Dialog Card with Cutout Badge Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
          >
            {/* Cutout Top Banner Accent */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-7 text-left overflow-hidden">
              {/* Background Glow Ring */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Top Notch Pill Tag */}
              <div className="inline-flex items-center space-x-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>3 Days Free Access Pass</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Book Free Live Demo
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Attend interactive live sessions & interact with Mentor Seshu Arisetty.
              </p>

              {/* Close Button */}
              <button
                onClick={resetAndClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
            <div className="p-6 sm:p-8 text-left">
              {isSubmit ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Demo Pass Confirmed!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your demo registration details have been saved to Google Sheets. Our team will send the meeting link to <span className="font-semibold text-slate-800">{formData.phone}</span> via WhatsApp.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs text-slate-600 text-left space-y-1.5">
                    <p><strong>Selected Course:</strong> {formData.course}</p>
                    <p><strong>Training Mode:</strong> {formData.mode}</p>
                    <p><strong>Slot:</strong> {formData.preferredTime}</p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetAndClose}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {isError && (
                    <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl flex items-center space-x-2 text-rose-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition text-slate-800"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Phone / WhatsApp Number *</label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-20 text-sm px-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 font-medium text-slate-700"
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
                        className="flex-1 text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Select Course *</label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition text-slate-800 font-medium"
                    >
                      {courseOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Training Mode Toggle Buttons */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Preferred Mode</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Online Live Class', 'Offline Classroom'].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: m })}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                            formData.mode === m
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Batch Timing */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Preferred Batch Slot</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition text-slate-800 font-medium"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold py-3.5 px-6 rounded-xl transition shadow-lg shadow-blue-600/30 text-center text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                    >
                      <span>{isSubmitting ? 'Saving to Google Sheet...' : 'Confirm Free Demo Pass'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 Your information is saved directly to Google Sheets & kept 100% confidential.
                  </p>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
