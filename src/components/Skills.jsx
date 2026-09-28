import React from 'react';
import { Code2, Layout, BarChart3, CheckCircle2, Sparkles, Terminal, Bot } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      default: return <Terminal className="w-5 h-5" />;
    }
  };

  const getAccentColors = (accent) => {
    switch (accent) {
      case 'indigo':
        return {
          card: 'bg-slate-900 border-2 border-black shadow-[4px_4px_0px_#6366f1]',
          badge: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/40',
          bar: 'bg-gradient-to-r from-indigo-500 to-indigo-400',
          text: 'text-indigo-400'
        };
      case 'cyan':
        return {
          card: 'bg-slate-900 border-2 border-black shadow-[4px_4px_0px_#06b6d4]',
          badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40',
          bar: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
          text: 'text-cyan-400'
        };
      case 'violet':
        return {
          card: 'bg-slate-900 border-2 border-black shadow-[4px_4px_0px_#8b5cf6]',
          badge: 'bg-violet-500/15 text-violet-300 border border-violet-500/40',
          bar: 'bg-gradient-to-r from-violet-500 to-violet-400',
          text: 'text-violet-400'
        };
      default:
        return {
          card: 'bg-slate-900 border-2 border-black shadow-[4px_4px_0px_#000000]',
          badge: 'bg-slate-800 text-slate-300 border border-slate-700',
          bar: 'bg-indigo-500',
          text: 'text-indigo-400'
        };
    }
  };

  return (
    <section id="skills" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 border-2 border-black flex items-center justify-center font-mono font-black text-sm text-white shadow-[2px_2px_0px_#000]">
            02
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              Technical Matrix &amp; Skill Sets
            </h2>
            <p className="font-mono text-xs text-slate-400">
              Frontend engineering, AI workflows, C++ systems, and business analytics
            </p>
          </div>
        </div>

        <span className="font-mono text-xs px-3 py-1 rounded-lg bg-slate-900 border-2 border-black text-cyan-300 font-bold shadow-[2px_2px_0px_#000]">
          // 4 CORE DOMAINS
        </span>
      </div>

      {/* Skills Grid - 4 Columns / 2x2 Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {skillCategories.map((cat, idx) => {
          const colors = getAccentColors(cat.accent);
          return (
            <div 
              key={idx}
              className={`${colors.card} rounded-2xl p-6 flex flex-col justify-between space-y-5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-black border border-slate-700 flex items-center justify-center ${colors.text}`}>
                    {getIcon(cat.icon)}
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${colors.badge} font-bold uppercase`}>
                    Domain 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-sans">
                  {cat.title}
                </h3>

                {/* Skill Bars */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-white font-bold flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded border ${colors.badge} font-bold`}>
                          {skill.badge}
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className={`h-full rounded-full ${colors.bar} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-0.5">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Micro Badges */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-black border border-slate-800">#IndustryStandard</span>
                <span className="px-2 py-0.5 rounded bg-black border border-slate-800">#ModernStack</span>
                <span className="px-2 py-0.5 rounded bg-black border border-slate-800">#Verified</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
