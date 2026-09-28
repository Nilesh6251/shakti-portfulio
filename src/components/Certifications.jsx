import React from 'react';
import { Award, ShieldCheck, Check, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications = ({ playSound }) => {
  return (
    <section id="certifications" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center font-mono font-bold text-sm text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.25)]">
            04
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Professional Certifications
            </h2>
            <p className="font-mono text-xs text-slate-400">
              Industry validated credentials in cloud architecture, data visualization & systems logic
            </p>
          </div>
        </div>

        <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 font-semibold">
          3 CREDENTIALS VERIFIED
        </span>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {certifications.map((cert, idx) => {
          const isIndigo = cert.color === 'indigo';
          const isCyan = cert.color === 'cyan';
          const cardClass = isIndigo ? 'glass-card' : isCyan ? 'glass-card-cyan' : 'glass-card-violet';
          const accentBadge = isIndigo 
            ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
            : isCyan 
            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
            : 'bg-violet-500/10 text-violet-300 border-violet-500/30';

          const accentIcon = isIndigo ? 'text-indigo-400' : isCyan ? 'text-cyan-400' : 'text-violet-400';

          return (
            <div 
              key={idx}
              className={`${cardClass} rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300`}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs ${accentIcon}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${accentBadge} font-bold flex items-center gap-1`}>
                    <Calendar className="w-3 h-3" /> {cert.date}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Key Skills */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800 font-mono text-xs">
                  {cert.skills.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-slate-300">
                      <Check className={`w-3.5 h-3.5 ${accentIcon}`} />
                      <span className="text-[11px]">{s}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Verification */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">ID: {cert.credentialId}</span>
                <span className={`font-semibold flex items-center gap-1 ${accentIcon}`}>
                  <ShieldCheck className="w-4 h-4" /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
