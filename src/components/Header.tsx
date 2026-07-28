import React, { useState } from 'react';
import { Github, Linkedin, Download, ArrowRight, Grid, X, Check, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
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
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Outer Floating Card Container */}
      <div className="relative bg-[#14151d]/90 backdrop-blur-xl border border-[#2a2c3a] rounded-2xl sm:rounded-full p-2 sm:p-2.5 pl-4 sm:pl-6 pr-3 sm:pr-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all">
        
        {/* Left Side: Brand Logo & Subtitle */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Emblem Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#f97316] to-[#c2410c] flex items-center justify-center text-white font-mono font-black text-base shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:scale-105 transition-transform">
              TH
            </div>
            
            {/* Title & Tagline */}
            <div className="flex flex-col">
              <span className="font-display font-black text-sm sm:text-base tracking-tight text-white group-hover:text-[#f97316] transition-colors leading-tight">
                THACHHIENDEV
              </span>
              <span className="font-sans text-[10px] text-[#8e90a0] tracking-wide font-medium">
                Software. Engineer. Systems.
              </span>
            </div>
          </a>

          {/* Decorative Curved S-Wave Partition Gradient (Desktop) */}
          <div className="hidden lg:block h-8 w-12 ml-2 relative opacity-60">
            <svg viewBox="0 0 50 30" className="w-full h-full fill-none">
              <path
                d="M 0 0 C 25 0, 25 30, 50 30"
                stroke="url(#orange-wave-grad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="orange-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Center: Inner Floating Pill Navigation Bar */}
        <nav className="hidden md:flex items-center bg-[#0d0e14]/90 border border-[#232533] rounded-full px-2 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#8e90a0] hover:text-white'
                }`}
              >
                {/* Active Highlight Line / Indicator */}
                {isActive && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-[#f97316] rounded-full shadow-[0_0_8px_#f97316]"></span>
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Primary CTA & Social Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Icon Link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 sm:p-2.5 rounded-full bg-[#1c1d27] border border-[#2e3040] text-[#9a9cb0] hover:text-white hover:border-[#f97316] transition-all cursor-pointer"
          >
            <Github size={15} />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 sm:p-2.5 rounded-full bg-[#1c1d27] border border-[#2e3040] text-[#9a9cb0] hover:text-white hover:border-[#f97316] transition-all cursor-pointer hidden sm:flex"
          >
            <Linkedin size={15} />
          </a>

          {/* Main Action Pill Button (Opens Download Confirm Prompt) */}
          <button
            onClick={() => setShowConfirmDownload(true)}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-mono font-bold text-xs rounded-full hover:shadow-[0_0_20px_rgba(249,115,22,0.45)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>DOWNLOAD CV</span>
            <Download size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-full bg-[#1c1d27] border border-[#2e3040] text-[#9a9cb0] hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X size={16} /> : <Grid size={16} />}
          </button>
        </div>
      </div>

      {/* Confirmation Modal / Prompt for CV Download */}
      {showConfirmDownload && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14151d] border border-[#2a2c3a] rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#252736]">
              <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                <FileText className="text-[#f97316]" size={20} />
                <span>Xác nhận tải xuống CV</span>
              </div>
              <button
                onClick={() => setShowConfirmDownload(false)}
                className="p-1 rounded-full text-[#8e90a0] hover:text-white hover:bg-[#252736]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 font-sans text-sm text-[#a2a4b8]">
              <p>
                Bạn có chắc chắn muốn tải xuống hồ sơ năng lực (CV) của <strong className="text-white">Thạch Hiển - Software Engineer</strong> không?
              </p>

              {/* File details card */}
              <div className="bg-[#0d0e14] border border-[#252736] rounded-xl p-3.5 flex items-center justify-between font-mono text-xs text-[#c4c6d8]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#f97316]/10 text-[#f97316]">
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
              <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] p-3 rounded-xl font-mono text-xs flex items-center gap-2 justify-center">
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
                  className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={14} />
                  <span>Tải xuống ngay</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#14151d] border border-[#2a2c3a] rounded-2xl p-4 shadow-2xl flex flex-col gap-3 font-mono text-xs">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveNav(item.label);
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2.5 rounded-xl bg-[#1c1d27] text-white font-bold hover:bg-[#f97316] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

