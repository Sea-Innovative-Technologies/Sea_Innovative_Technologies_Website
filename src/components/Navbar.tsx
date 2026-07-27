import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '/assets/Logo--1.jpeg';

interface NavbarProps {
  onBookDemo?: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'about', 'courses', 'batches', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Why Us', href: '#about', id: 'about' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Batches & Offers', href: '#batches', id: 'batches' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/5'
          : 'py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Executive Brand Logo Container (Increased Size) */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Prominent White Logo Badge Card */}
            <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-md group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <img
                src={logoImg}
                alt="SEA Innovative Technologies"
                className="h-11 sm:h-13 md:h-14 w-auto max-w-[280px] object-contain select-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Nav Links Pill Bar */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-1.5 bg-slate-100/90 backdrop-blur-sm rounded-full p-1.5 border border-slate-200/80 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    id={`nav-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-sm shadow-slate-900/10'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-white/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Desktop Primary Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="nav-enroll-btn"
              onClick={onBookDemo}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold rounded-full text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-800 bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onBookDemo) onBookDemo();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#2563EB] text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
