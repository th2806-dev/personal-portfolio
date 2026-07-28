import React, { useState } from 'react';
import { Github, Linkedin, Download, ArrowRight, Grid, X, Check, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Header = () => {
  const [activeNav, setActiveNav] = useState('ABOUT');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfirmDownload, setShowConfirmDownload] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const cvFileName = 'Thach_Hien_Software_Engineer_CV.txt';

  const generateCVText = () => {
    return `====================================================
THACH HIEN - SOFTWARE ENGINEER
====================================================
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

ABOUT ME:
${PERSONAL_INFO.subtitle}

SUMMARY / KEY COMPETENCIES:
- .NET 10 (C# 13) & ASP.NET Core Web API
- Entity Framework Core (EF Core) & SQL Server
- ReactJS, TypeScript & Tailwind CSS
- Redis Distributed Caching & Lock Architecture
- Hangfire Async Background Job Queue
- Docker & Docker Compose Container Deployment
- 3-Tier Layered Architecture Pattern

EDUCATION:
College of Transport (2024 - 2027) - GPA: 3.9 / 4.0

SELECTED PROJECTS:
1. MOVIE BOOKING ECOSYSTEM (.NET 10, EF Core, SQL Server, Redis, Docker, ReactJS)
2. ENTERPRISE LOGISTICS HUB (.NET 10, Redis, MongoDB, Hangfire, ReactJS)

====================================================
Generated from Portfolio: https://thachhien.dev
====================================================`;
  };

  const handleExecuteDownload = () => {
    const content = generateCVText();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setShowConfirmDownload(false);
    }, 2000);
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-2.5 sm:px-6 max-w-7xl mx-auto">
      {/* Outer Floating Header Container (Responsive Glassmorphism & Shadow) */}
      <div className="relative bg-[#0f1018]/95 backdrop-blur-2xl border-t border-white/15 border-x border-b border-[#232536] rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(var(--accent-rgba),0.08),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300">
        
        {/* Left Side: Dual-Layer 3D Glowing S-Curve Partition (Scales smoothly with screen width) */}
        <div className="absolute left-0 top-0 h-full w-[180px] min-[420px]:w-[240px] sm:w-[300px] md:w-[360px] pointer-events-none overflow-hidden transition-all duration-300">
          <svg className="w-full h-full" viewBox="0 0 360 60" preserveAspectRatio="none">
            {/* Background Ambient Fill */}
            <path
              d="M 0,60 L 230,60 C 280,60 260,0 330,0 L 0,0 Z"
              fill="url(#logo-area-gradient-depth)"
            />
            {/* Soft Outer Neon Blur Glow */}
            <path
              d="M 230,60 C 280,60 260,0 330,0"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="7"
              opacity="0.35"
              filter="blur(4px)"
            />
            {/* Crisp Bright Surface Stroke */}
            <path
              d="M 230,60 C 280,60 260,0 330,0"
              fill="none"
              stroke="url(#logo-curve-stroke-depth)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="logo-area-gradient-depth" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0f1018" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="logo-curve-stroke-depth" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff8c38" stopOpacity="1" />
                <stop offset="60%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Left Side: Brand Logo & Title (Responsive scaling) */}
        <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* 3D Logo Emblem */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#fb923c] via-[#ea580c] to-[#7c3aed] border border-white/30 flex items-center justify-center text-white font-mono font-black text-xs sm:text-sm shadow-[0_4px_18px_rgba(var(--accent-rgba),0.55),inset_0_1px_2px_rgba(255,255,255,0.7)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(var(--accent-rgba),0.85)] group-hover:border-white/60 transition-all duration-300">
              TH
            </div>
            
            {/* Title & Subtitle */}
            <div className="flex flex-col">
              <span className="font-display font-black text-xs min-[420px]:text-sm sm:text-base tracking-tight text-white group-hover:text-[var(--accent)] transition-colors leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                THACHHIENDEV
              </span>
              <span className="font-sans text-[9px] sm:text-[11px] text-[#a0a2b6] tracking-wide font-medium hidden min-[380px]:block">
                Software. Engineer. Systems.
              </span>
            </div>
          </a>
        </div>

        {/* Center: Inset 3D Embedded Nav Pill (Desktop lg: and above only) */}
        <nav className="hidden lg:flex items-center bg-[#07080d] border border-[#1e2030] rounded-full px-3 py-1.5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.06)] gap-1.5 relative z-10">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            const titleCaseLabel = item.label.charAt(0) + item.label.slice(1).toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative px-3.5 lg:px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-all duration-200 ${
                    isActive
                    ? 'text-white font-bold bg-gradient-to-r from-[var(--accent)]/30 to-[#a855f7]/30 border border-[var(--accent)]/50 shadow-[0_2px_12px_rgba(var(--accent-rgba),0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] scale-100'
                    : 'text-[#9496a8] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_15px_rgba(var(--accent-rgba),0.2)] hover:scale-105 active:scale-95'
                }`}
              >
                {titleCaseLabel}
                  {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Primary CTA & Utility Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 relative z-10">
          {/* GitHub Icon Button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 sm:p-2.5 rounded-full bg-[#161724] border border-[#2a2c3e] text-[#9a9cb0] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_15px_rgba(var(--accent-rgba),0.35)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hidden xl:flex"
          >
            <Github size={15} />
          </a>

          {/* LinkedIn Icon Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 sm:p-2.5 rounded-full bg-[#161724] border border-[#2a2c3e] text-[#9a9cb0] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_15px_rgba(var(--accent-rgba),0.35)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hidden xl:flex"
          >
            <Linkedin size={15} />
          </a>

          {/* 3D Elevated Pill Button (`DOWNLOAD CV`) */}
          <button
            onClick={() => setShowConfirmDownload(true)}
            className="group flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[var(--accent)] via-[#ea580c] to-[#a855f7] border border-white/30 text-white font-sans font-bold text-[11px] sm:text-xs rounded-full shadow-[0_6px_25px_rgba(var(--accent-rgba),0.55),inset_0_1px_2px_rgba(255,255,255,0.6)] hover:shadow-[0_8px_32px_rgba(var(--accent-rgba),0.85)] hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="whitespace-nowrap">DOWNLOAD CV</span>
            <Download size={13} className="group-hover:translate-y-0.5 group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Mobile Grid Icon Button (Shows on all screens below lg:) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-full bg-[#161724] border border-[#2a2c3e] text-[#9a9cb0] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_15px_rgba(var(--accent-rgba),0.35)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer lg:hidden"
            title="Menu"
          >
            {mobileMenuOpen ? <X size={15} /> : <Grid size={15} />}
          </button>
        </div>
      </div>

      {/* Confirmation Modal / Prompt for CV Download */}
      {showConfirmDownload && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14151d] border border-[#2a2c3a] rounded-3xl p-5 sm:p-6 max-w-md w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#252736]">
              <div className="flex items-center gap-2 text-white font-display font-bold text-base sm:text-lg">
                <FileText className="text-[var(--accent)]" size={20} />
                <span>Xác nhận tải xuống CV</span>
              </div>
              <button
                onClick={() => setShowConfirmDownload(false)}
                className="p-1 rounded-full text-[#8e90a0] hover:text-white hover:bg-[#252736]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#a2a4b8]">
              <p>
                Bạn có chắc chắn muốn tải xuống hồ sơ năng lực (CV) của <strong className="text-white">Thạch Hiển - Software Engineer</strong> không?
              </p>

              {/* File details card */}
              <div className="bg-[#0d0e14] border border-[#252736] rounded-xl p-3.5 flex items-center justify-between font-mono text-xs text-[#c4c6d8]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Download size={16} />
                  </div>
                  <div>
                    <div className="text-white font-bold">{cvFileName}</div>
                    <div className="text-[10px] text-[#717388]">Format: Full Plain Text Resume</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct download status message */}
            {downloadSuccess ? (
              <div
                style={{ background: 'rgba(var(--accent-rgba),0.10)', border: '1px solid rgba(var(--accent-rgba),0.30)', color: 'var(--accent)' }}
                className="p-3 rounded-xl font-mono text-xs flex items-center gap-2 justify-center"
              >
                <Check size={16} />
                <span>Đã bắt đầu tải xuống thành công!</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowConfirmDownload(false)}
                  className="flex-1 py-2.5 px-4 rounded-full border border-[#2e3040] text-[#9a9cb0] font-mono text-xs font-bold hover:text-white hover:bg-[#1e202d] transition-all cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  onClick={handleExecuteDownload}
                  className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#ea580c] text-white font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(var(--accent-rgba),0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={14} />
                  <span>Tải xuống ngay</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Dropdown Navigation with Smooth Glassmorphic Entrance Animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2.5 bg-[#0f1018]/95 backdrop-blur-2xl border border-[#26283a] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col gap-2 font-sans text-xs animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            const titleCaseLabel = item.label.charAt(0) + item.label.slice(1).toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl font-bold flex items-center justify-between transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--accent)]/25 to-[#a855f7]/25 text-[var(--accent)] border border-[var(--accent)]/40'
                    : 'text-[#9496a8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{titleCaseLabel}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"></span>}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
