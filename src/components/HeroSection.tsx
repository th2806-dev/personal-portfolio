import React, { useState } from 'react';
import { PERSONAL_INFO, STAT_METRICS } from '../data/portfolioData';
import { Github, Mail, Globe, ArrowUpRight, Flame, Server, Database, Linkedin, Terminal, Copy, Check, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onSelectHighlight?: (topic: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectHighlight }) => {
  const [copied, setCopied] = useState(false);
  const dockerCommand = 'docker run -d -p 8080:8080 --name core-api thachhien/dotnet10-api:latest';

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-6 pb-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-4 bg-[#121212] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between hover:border-[#f97316]/50 transition-all duration-300 group shadow-lg">
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
              <h2 className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-[#f97316] transition-colors">
                {PERSONAL_INFO.name}
              </h2>
              <span className="p-1 rounded bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
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
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 hover:-translate-y-0.5 transition-all duration-200"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#contact"
              className="p-2.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 hover:-translate-y-0.5 transition-all duration-200"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12131a] border border-[#22c55e]/30 text-[#4ade80] font-mono text-xs mb-4 shadow-[0_0_15px_rgba(34,197,94,0.12)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
              </span>
              <span className="font-bold tracking-wide">SYSTEM ONLINE</span>
              <span className="text-[#3b3d52]">•</span>
              <span className="text-[#94a3b8] font-semibold">Available for Hire</span>
            </div>

            <div className="mb-4 space-y-0.5">
              <h1 className="font-hero font-black text-5xl sm:text-7xl lg:text-[88px] xl:text-[98px] tracking-tight text-[#f3f4f6] leading-[0.88] uppercase select-none">
                SOFTWARE
              </h1>
              <h1 className="font-hero font-black text-5xl sm:text-7xl lg:text-[88px] xl:text-[98px] tracking-tight text-[#404350] leading-[0.88] uppercase select-none">
                ENGINEER
              </h1>
            </div>

            <p className="text-[#c6c6c7] font-sans text-base sm:text-lg max-w-3xl leading-relaxed mb-4">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Micro Terminal / Docker Snippet Box */}
            <div className="bg-[#0b0c10] border border-[#232533] rounded-xl p-3.5 sm:p-4 font-mono text-xs shadow-xl relative overflow-hidden group/term">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#1c1d29] mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80"></span>
                  </div>
                  <span className="text-[#64748b] text-[11px] ml-2 flex items-center gap-1.5 font-bold">
                    <Terminal size={13} className="text-[#f97316]" />
                    deploy-service.sh
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[11px] text-[#94a3b8] hover:text-white px-2 py-1 rounded bg-[#161822] border border-[#272938] hover:border-[#f97316] transition-all cursor-pointer"
                  title="Copy command"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-[#22c55e]" />
                      <span className="text-[#22c55e]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1.5 text-[#cbd5e1] overflow-x-auto">
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <span className="text-[#f97316]">$</span>
                  <span className="text-[#38bdf8]">{dockerCommand}</span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b] text-[11px] pt-1">
                  <ShieldCheck size={13} className="text-[#22c55e]" />
                  <span>[Container Status]: Operational | .NET 10.0 (C# 13) | Port 8080:OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Metric Stat Blocks */}
          <div className="grid grid-cols-3 gap-4 py-1">
            {STAT_METRICS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-[#262626] rounded-xl p-4 sm:p-5 flex flex-col justify-center hover:border-[#f97316]/40 hover:-translate-y-0.5 transition-all duration-200 shadow-md group"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-[#f97316] transition-colors">
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
              onClick={() => onSelectHighlight?.('API & Architecture')}
              className="bg-[#15161e] border border-[#2a2c3a] hover:border-[#f97316] rounded-xl p-5 flex flex-col justify-between min-h-[130px] cursor-pointer hover:shadow-[0_8px_25px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 transition-all duration-300 group select-none relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#f97316]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#f97316]/25 transition-all"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="p-2.5 rounded-lg bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                  <Server size={20} />
                </div>
                <ArrowUpRight size={20} className="text-[#8e90a0] group-hover:text-[#f97316] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="relative z-10 font-display font-bold text-base sm:text-lg leading-snug uppercase tracking-tight text-white group-hover:text-[#f97316] transition-colors mt-3">
                SCALABLE API,<br />SYSTEM ARCHITECTURE
              </div>
            </div>

            {/* Cyan/Emerald Glow Card */}
            <div
              onClick={() => onSelectHighlight?.('.NET & Cloud Infrastructure')}
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
