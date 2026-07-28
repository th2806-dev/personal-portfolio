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
import { ChatBot } from './components/ChatBot';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [highlightToast, setHighlightToast] = useState(null);

  // Web Audio API chime tone synthesizer
  const playAudioChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
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
    } catch (e) {
      // Audio context silenced or blocked by browser policy
    }
  };

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleSelectHighlight = (topic) => {
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
    <div className="min-h-screen bg-[#0e0e0e] text-[#e2e2e2] font-sans relative">
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
        <div style={{ border: '1px solid var(--accent)' }} className="fixed bottom-6 right-6 z-50 bg-[#1f1f1f] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in font-mono text-xs">
          <Sparkles size={16} style={{ color: 'var(--accent)' }} />
          <span>{highlightToast}</span>
          <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
        </div>
      )}

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
}
