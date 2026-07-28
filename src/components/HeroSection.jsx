import React, { useState } from 'react';
import { PERSONAL_INFO, STAT_METRICS } from '../data/portfolioData';
import { Github, Mail, Globe, ArrowUpRight, Flame, Server, Database, Linkedin, Terminal, Copy, Check, ShieldCheck } from 'lucide-react';

export const HeroSection = ({ onSelectHighlight }) => {
  const [copied, setCopied] = useState(false);
  const dockerCommand = 'docker run -d -p 8080:8080 --name core-api thachhien/dotnet10-api:latest';

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-6 pb-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-4 bg-[#121212] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between hover:border-[var(--accent)]/50 transition-all duration-300 group shadow-lg">
          <div>
            {/* Image Container */}
            <div className="w-full aspect-square bg-[#1b1b1b] border border-[#2a2a2a] rounded-xl overflow-hidden mb-5 relative group/img">
              <img
                src="/src/assets/images/profile_avatar_1785175586090.jpg"
                alt="Thach Hien Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-[var(--accent)] transition-colors">
                {PERSONAL_INFO.name}
              </h2>
              <span className="p-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                <Flame size={16} />
              </span>
            </div>

            <p className="text-[#9a9b9b] font-sans text-sm leading-relaxed mb-6">
              {PERSONAL_INFO.cardBio}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#262626]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#contact"
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="Website Portfolio"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Right Column - Hero Title, Bio, Terminal Snippet & Stats */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          {/* Main Title Banner & Live Status Badge */}
          <div>
            {/* Live Systems Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12131a] border text-[#4ade80] font-mono text-xs mb-4" style={{ borderColor: 'rgba(var(--accent-rgba),0.30)', boxShadow: '0 0 15px rgba(var(--accent-rgba),0.12)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: 'var(--accent)', opacity: 0.75 }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: 'var(--accent)' }}></span>
              </span>
              <span className="font-bold tracking-wide">SYSTEM ONLINE</span>
              <span className="text-[#3b3d52]">•</span>
              <span className="text-[#94a3b8] font-semibold">Available for Hire</span>
            </div>

            <div className="mb-4 space-y-0">
              <h1 className="font-hero font-extrabold text-3xl sm:text-5xl lg:text-[60px] xl:text-[68px] tracking-[-0.01em] text-[#f3f4f6] leading-[0.92] uppercase select-none">
                SOFTWARE
              </h1>
              <h1 className="font-hero font-extrabold text-3xl sm:text-5xl lg:text-[60px] xl:text-[68px] tracking-[-0.01em] text-[#404350] leading-[0.92] uppercase select-none">
                ENGINEER
              </h1>
            </div>

            <p className="text-[#c6c6c7] font-sans text-base sm:text-lg max-w-3xl leading-relaxed mb-4">
              {PERSONAL_INFO.subtitle}
            </p>           
          </div>

          {/* 3 Metric Stat Blocks */}
          <div className="grid grid-cols-3 gap-4 py-1">
            {STAT_METRICS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-5 flex flex-col justify-center hover:border-[var(--accent)]/40 hover:-translate-y-0.5 transition-all duration-200 shadow-md group"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#9a9b9b] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 2 High-Tech Highlight Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Orange Glow Card */}
            <div
              onClick={() => onSelectHighlight && onSelectHighlight('API & Architecture')}
              className="bg-[#15161e] border border-[#2a2c3a] hover:border-[var(--accent)] rounded-xl p-5 flex flex-col justify-between min-h-[130px] cursor-pointer hover:shadow-[0_8px_25px_rgba(var(--accent-rgba),0.25)] hover:-translate-y-0.5 transition-all duration-300 group select-none relative overflow-hidden"
            >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[var(--accent)]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[var(--accent)]/25 transition-all"></div>
              <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                  <Server size={20} />
                </div>
                  <ArrowUpRight size={20} className="text-[#8e90a0] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
                <div className="relative z-10 font-display font-bold text-base sm:text-lg leading-snug uppercase tracking-tight text-white group-hover:text-[var(--accent)] transition-colors mt-3">
                SCALABLE API,<br />SYSTEM ARCHITECTURE
              </div>
            </div>

            {/* Cyan/Emerald Glow Card */}
            <div
              onClick={() => onSelectHighlight && onSelectHighlight('.NET & Cloud Infrastructure')}
              className="bg-[#15161e] border border-[#2a2c3a] hover:border-[#38bdf8] rounded-xl p-5 flex flex-col justify-between min-h-[130px] cursor-pointer hover:shadow-[0_8px_25px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 transition-all duration-300 group select-none relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#38bdf8]/25 transition-all"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="p-2.5 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                  <Database size={20} />
                </div>
                <ArrowUpRight size={20} className="text-[#8e90a0] group-hover:text-[#38bdf8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="relative z-10 font-display font-bold text-base sm:text-lg leading-snug uppercase tracking-tight text-white group-hover:text-[#38bdf8] transition-colors mt-3">
                ASP.NET, SQL SERVER,<br />REDIS, DOCKER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
