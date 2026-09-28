import React from 'react';
import { Target, GraduationCap, Award, BookOpen, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
          01
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About &amp; Education
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Academic foundation and engineering trajectory
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Career Mission Card */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" /> Career Trajectory
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Data Analyst Aspirant
              </span>
            </div>

            <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-200 border-l-2 border-indigo-500 pl-4 py-1">
              "To obtain a challenging Data Analyst position in a dynamic and innovative organization where I can leverage my technical, analytical, and structured programming skills."
            </p>

            <p className="text-slate-300 text-sm leading-relaxed pt-1">
              Passionate about turning unstructured datasets into clean, executive-level insights. 
              My technical foundation blends structured procedural programming in <strong className="text-white">C and C++</strong> with modern business analytics in <strong className="text-cyan-300">Microsoft Power BI</strong> and certified fundamentals on <strong className="text-violet-300">Oracle Cloud Infrastructure (OCI)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">01 / LOGIC</span>
              <span className="text-slate-400 text-[11px]">Object-oriented design, algorithms &amp; memory safety.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-400 font-bold block mb-1">02 / ANALYTICS</span>
              <span className="text-slate-400 text-[11px]">Data modeling, Power BI reports &amp; validation.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-violet-400 font-bold block mb-1">03 / CLOUD</span>
              <span className="text-slate-400 text-[11px]">Oracle OCI certified cloud architecture.</span>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="lg:col-span-5 glass-card-cyan rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" /> University Education
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {education.duration}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-bold">
                  CGPA: 5.57 / 10
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {education.institution}
              </h3>
              <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {education.location}
              </p>
              <div className="inline-block text-xs font-semibold text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20 mt-1">
                {education.degree}
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs text-slate-300 pt-2">
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-[11px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Current Status: {education.status}</span>
            <a 
              href="#contact" 
              className="text-cyan-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              Contact <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
