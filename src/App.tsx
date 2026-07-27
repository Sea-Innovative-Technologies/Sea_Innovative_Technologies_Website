import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import BatchesAndOffers from './components/BatchesAndOffers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState('');

  const handleOpenDemoModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForDemo(courseName);
    }
    setIsDemoModalOpen(true);
  };

  return (
    <div id="sea-technologies-root-app" className="min-h-screen bg-white text-slate-900 font-sans antialiased text-center selection:bg-blue-500/15 selection:text-blue-900">
      
      {/* Global sticky navigation bar */}
      <Navbar onBookDemo={() => handleOpenDemoModal()} />

      <div id="public-website-view" className="animate-fade-in">
        
        {/* Main Hero landing layout */}
        <Hero onBookDemo={() => handleOpenDemoModal()} />

        {/* Academic About section */}
        <AboutUs />

        {/* Curriculum topics cards */}
        <Courses />

        {/* Live calendars, Timetable & Dynamic Offer Couponer */}
        <BatchesAndOffers />

        {/* Direct admissions query contact */}
        <Contact />

        {/* Footer section block matching Image 2 with Monk Blue Navy theme */}
        <Footer />
        
      </div>

      {/* Floating WhatsApp Chat Widget & Mobile Action Bar */}
      <WhatsAppWidget />

      {/* Book Free Demo Cutout Popup Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse={selectedCourseForDemo}
      />

    </div>
  );
}
