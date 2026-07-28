import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FooterSection = () => {
  return (
    <footer className="pt-20 pb-8 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#262626]/50 relative overflow-hidden">
      {/* Background Watermark Text */}
      <div className="w-full text-center select-none overflow-hidden my-8 opacity-80 pointer-events-none">
        <span
          className="font-sans font-black text-6xl sm:text-8xl lg:text-[120px] tracking-[0.02em] uppercase whitespace-nowrap block"
          style={{
            WebkitTextFillColor: '#0e0e0e',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
            paintOrder: 'stroke fill',
          }}
        >
          THACHHIENDEV
        </span>
      </div>

      {/* Footer Nav Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-[#262626]/50">
        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold">
            NAVIGATION
          </h4>
          <ul className="space-y-2 font-sans text-sm text-[#9a9b9b]">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold">
            SOCIALS
          </h4>
          <ul className="space-y-2 font-sans text-sm text-[#9a9b9b]">
            <li>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold">
            LOCATION
          </h4>
          <div className="space-y-1 font-sans text-sm text-[#9a9b9b]">
            <p>{PERSONAL_INFO.location}</p>
            <p className="text-[#22c55e]">{PERSONAL_INFO.availability}</p>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-6 border-t border-[#262626]/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#9a9b9b]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
          <span>SYSTEMS INITIALIZED</span>
        </div>

        <div>
          © {PERSONAL_INFO.year} {PERSONAL_INFO.name.toUpperCase()} • ENGINEERED WITH PRECISION • .NET 10
        </div>
      </div>
    </footer>
  );
};
