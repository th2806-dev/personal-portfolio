import React from 'react';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, TECH_STACK_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#121212] border border-[#262626] rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Top Header */}
        <div className="p-5 border-b border-[#262626] flex items-center justify-between bg-[#131313]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]"></span>
            <h3 className="font-display font-bold text-lg text-white">
              CURRICULUM VITAE — {PERSONAL_INFO.name.toUpperCase()}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1b1b1b] border border-[#2a2a2a] text-white font-mono text-xs rounded-lg hover:border-[#f97316] transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CV Render Content */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-[#0e0e0e] text-[#e2e2e2] space-y-8 font-sans">
          {/* Header Block */}
          <div className="border-b border-[#262626] pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-sm text-[#f97316] font-bold mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="font-mono text-xs text-[#9a9b9b] space-y-1">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-[#f97316]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-[#f97316]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold mb-2 flex items-center gap-2">
              <Briefcase size={14} />
              <span>PROFESSIONAL SUMMARY</span>
            </h2>
            <p className="text-sm text-[#c6c6c7] leading-relaxed bg-[#121212] p-4 rounded-xl border border-[#262626]">
              {PERSONAL_INFO.subtitle}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold mb-2 flex items-center gap-2">
              <GraduationCap size={14} />
              <span>EDUCATION</span>
            </h2>
            <div className="bg-[#121212] p-4 rounded-xl border border-[#262626] flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  {EDUCATION_DATA.school}
                </h3>
                <p className="text-xs text-[#9a9b9b]">
                  {EDUCATION_DATA.degree} ({EDUCATION_DATA.period})
                </p>
              </div>
              <div className="font-mono text-sm text-[#22c55e] font-bold bg-[#22c55e]/10 px-3 py-1 rounded border border-[#22c55e]/20">
                GPA: {EDUCATION_DATA.gpa}
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold mb-3 flex items-center gap-2">
              <Code2 size={14} />
              <span>TECHNICAL COMPETENCIES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-[#121212] rounded-xl border border-[#262626] text-xs">
                <div className="font-mono text-[#f97316] font-bold mb-1">Languages & Core:</div>
                <div className="text-[#c6c6c7]">C# (.NET 10), ES6+, HTML5, CSS3</div>
              </div>
              <div className="p-3 bg-[#121212] rounded-xl border border-[#262626] text-xs">
                <div className="font-mono text-[#f97316] font-bold mb-1">Backend Frameworks:</div>
                <div className="text-[#c6c6c7]">ASP.NET Core Web API, EF Core, JWT, RBAC</div>
              </div>
              <div className="p-3 bg-[#121212] rounded-xl border border-[#262626] text-xs">
                <div className="font-mono text-[#f97316] font-bold mb-1">Database & Caching:</div>
                <div className="text-[#c6c6c7]">SQL Server, MongoDB, Redis Distributed Cache</div>
              </div>
              <div className="p-3 bg-[#121212] rounded-xl border border-[#262626] text-xs">
                <div className="font-mono text-[#f97316] font-bold mb-1">DevOps & Frontend:</div>
                <div className="text-[#c6c6c7]">Docker, Git, ReactJS (Vite), Postman, VS Code</div>
              </div>
            </div>
          </div>

          {/* Featured Key Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold mb-3 flex items-center gap-2">
              <Award size={14} />
              <span>FEATURED PORTFOLIO PROJECTS</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-[#121212] rounded-xl border border-[#262626]">
                <div className="flex items-center justify-between text-sm font-bold text-white mb-1">
                  <span>01. MOVIE BOOKING ECOSYSTEM</span>
                  <span className="font-mono text-xs text-[#f97316]">Full-Stack Monorepo</span>
                </div>
                <p className="text-xs text-[#9a9b9b] leading-relaxed">
                  3-Tier Layered Architecture with JWT authentication, RBAC, Redis atomic seat locking, and Docker deployment.
                </p>
              </div>

              <div className="p-4 bg-[#121212] rounded-xl border border-[#262626]">
                <div className="flex items-center justify-between text-sm font-bold text-white mb-1">
                  <span>02. ENTERPRISE LOGISTICS HUB</span>
                  <span className="font-mono text-xs text-[#f97316]">System Design / Core Backend</span>
                </div>
                <p className="text-xs text-[#9a9b9b] leading-relaxed">
                  Redis master data acceleration (50x), Hangfire background processing, Strategy/Factory OOP patterns, polyglot SQL Server + MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#262626] bg-[#131313] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#9a9b9b]">
            Targeting Full-Stack .NET Developer Internship
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-[#f97316] text-black font-mono font-bold text-xs rounded-lg hover:bg-[#ff802b] transition-all cursor-pointer"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
