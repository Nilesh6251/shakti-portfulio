import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, ShieldCheck } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const Footer = ({ playSound }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playSound(600, 'sine', 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-indigo-500/20 bg-slate-950/80 backdrop-blur-md font-mono text-xs py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Information */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base sm:text-lg font-bold text-white tracking-tight">
            {personalInfo.name}
          </div>
          <p className="text-slate-400 text-xs">
            {education.institution}, Bhopal ({education.duration})
          </p>
          <p className="text-[11px] text-slate-500 font-sans">
            Built with React, Vite & Tailwind CSS • Electric Indigo & Cyber Cyan Theme
          </p>
        </div>

        {/* Live Clock & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-center flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 font-bold text-xs">{time || '00:00:00 IST'}</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 rounded-xl btn-indigo-glow text-white flex items-center justify-center transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-slate-900 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
        <span>© {new Date().getFullYear()} Shakti Singh Thakur. All rights reserved.</span>
        <span className="text-slate-400 font-mono">
          C++ • POWER BI • ORACLE CLOUD (OCI) • DATA VALIDATION
        </span>
      </div>
    </footer>
  );
};
