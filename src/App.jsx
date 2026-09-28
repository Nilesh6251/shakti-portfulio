import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const playSound = () => {
    // Pure silent no-op for natural native web feel
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 cyber-grid relative antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Sleek Top Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pb-16">
        
        {/* 1. Hero Section with Studio Portrait */}
        <Hero />

        {/* 2. About & Education (Bansal Institute, CGPA 5.57) */}
        <About playSound={playSound} />

        {/* 3. Technical Skills Matrix */}
        <Skills playSound={playSound} />

        {/* 4. Featured Projects (Mini ATM C++ & Web Applications) */}
        <Projects playSound={playSound} />

        {/* 5. Professional Certifications */}
        <Certifications playSound={playSound} />

        {/* 6. Contact & Message */}
        <Contact playSound={playSound} onShowToast={showToast} />

      </main>

      {/* Footer */}
      <Footer playSound={playSound} />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 glass-card-cyan rounded-xl px-4 py-3 flex items-center gap-2.5 text-xs font-mono font-bold text-white shadow-2xl animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

    </div>
  );
}
export default App;
