import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function WhatsAppWidget() {
  const whatsappNumber = '918139018202';
  const defaultMessage = encodeURIComponent(
    'Hi SEA Innovative Technologies, I am interested in your courses and would like more information on upcoming batches.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <>
      {/* Desktop & Mobile Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
        {/* Hover Tooltip Popup */}
        <div className="mb-2 hidden sm:flex items-center space-x-2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Chat with Admissions Team</span>
        </div>

        {/* Floating WhatsApp Action Badge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        >
          {/* Animated Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-75"></span>

          {/* Icon */}
          <MessageCircle className="w-7 h-7 relative z-10 fill-white stroke-emerald-500" />
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar (Visible only on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between shadow-2xl">
        <a
          href="tel:+918139018202"
          className="flex-1 mr-2 flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl border border-slate-700 transition-all"
        >
          <PhoneCall className="w-4 h-4 text-blue-400" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-2 flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-lg shadow-emerald-600/30 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
