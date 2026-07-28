/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { ResumeModal } from './components/ResumeModal';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [highlightToast, setHighlightToast] = useState<string | null>(null);

  // Web Audio API chime tone synthesizer
  const playAudioChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio context silenced or blocked by browser policy
    }
  };

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleSelectHighlight = (topic: string) => {
    playAudioChime();
    setHighlightToast(`Inspecting ${topic}`);
    setTimeout(() => setHighlightToast(null), 2500);

    // Scroll smoothly to tech stack section
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e2e2e2] font-sans relative selection:bg-[#f97316] selection:text-black">
      {/* Top Header */}
      <Header
        onOpenResume={() => {
          playAudioChime();
          setResumeOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Container */}
      <main className="space-y-4">
        {/* Hero Section */}
        <HeroSection onSelectHighlight={handleSelectHighlight} />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Toast Notification */}
      {highlightToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1f1f1f] border border-[#f97316] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in font-mono text-xs">
          <Sparkles className="text-[#f97316]" size={16} />
          <span>{highlightToast}</span>
          <CheckCircle2 className="text-[#22c55e]" size={16} />
        </div>
      )}
    </div>
  );
}
