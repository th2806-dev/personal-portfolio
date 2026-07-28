import React, { useState } from 'react';

export const TechStackSection = () => {
  const row1 = [
    {
      name: '.NET C#',
      accent: '#512BD4',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <text x="50" y="40" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="900" fontFamily="sans-serif">.NET</text>
          <text x="50" y="68" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif">C#</text>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      accent: '#F7DF1E',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <rect x="4" y="4" width="92" height="92" rx="12" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <text x="52" y="72" textAnchor="middle" fill="currentColor" fontSize="52" fontWeight="900" fontFamily="monospace">JS</text>
        </svg>
      ),
    },
    {
      name: 'ASP.NET Core',
      accent: '#512BD4',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <text x="50" y="36" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="800" fontFamily="sans-serif">ASP</text>
          <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="800" fontFamily="sans-serif">.NET</text>
          <text x="50" y="74" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600" fontFamily="sans-serif" opacity="0.7">Core</text>
        </svg>
      ),
    },
    {
      name: 'EF Core',
      accent: '#68217A',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <text x="50" y="44" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="900" fontFamily="sans-serif">EF</text>
          <text x="50" y="70" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600" fontFamily="sans-serif" opacity="0.7">Core</text>
        </svg>
      ),
    },
    {
      name: 'ReactJS',
      accent: '#61DAFB',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
  ];

  const row2 = [
    {
      name: 'SQL Server',
      accent: '#CC2927',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <ellipse cx="50" cy="30" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <path d="M20 30 L20 70 C20 77 33 84 50 84 C67 84 80 77 80 70 L80 30" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <ellipse cx="50" cy="70" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      accent: '#13AA52',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <path d="M50 12 C50 12, 30 34, 30 54 C30 68 38.9 78 50 78 C61.1 78 70 68 70 54 C70 34 50 12 50 12Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
          <line x1="50" y1="42" x2="50" y2="88" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
          <circle cx="50" cy="54" r="6" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
    },
    {
      name: 'Redis',
      accent: '#DC382D',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <path d="M20 38 L50 24 L80 38 L50 52 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6"/>
          <path d="M20 52 L50 66 L80 52" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.45"/>
          <path d="M20 66 L50 80 L80 66" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      accent: '#339933',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <path d="M50 14 L82 32 L82 68 L50 86 L18 68 L18 32 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
          <text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="900" fontFamily="sans-serif">N</text>
        </svg>
      ),
    },
  ];

  const row3 = [
    {
      name: 'Docker',
      accent: '#2496ED',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <rect x="18" y="46" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="33" y="46" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="48" y="46" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="33" y="34" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="48" y="34" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="48" y="22" width="12" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <path d="M64 50 C70 46 80 47 84 52 C81 60 74 62 67 59 C64 57 63 54 64 50Z" fill="currentColor" opacity="0.35"/>
          <path d="M10 62 C10 62 20 72 50 72 C80 72 90 58 90 58" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
        </svg>
      ),
    },
    {
      name: 'Git',
      accent: '#F05032',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <path d="M80 46.5 L53.5 20 C51.5 18 48.5 18 46.5 20 L40.5 26 L48 33.5 C50.5 32.5 53.5 33 55 34.5 C56.5 36 57 39 56 41.5 L63 48.5 C65.5 47.5 68.5 48 70 50 C72 52.5 71.5 56 69 57.8 C66.5 59.6 63 59 61 56.5 C59.5 54.5 59.5 52 60.5 50.2 L54 44 L54 62 C55 62.5 55.8 63.3 56.3 64.2 C58.3 67 57.5 70.5 55 72.3 C52.5 74.1 49 73.5 47 71 C45 68.5 45.5 65 48 63.2 C48.8 62.6 49.8 62.2 50.8 62 L50.8 43.5 C49.8 43.2 48.8 42.6 48 41.8 C46.5 40.3 46 38 46.8 36 L40 29.5 L20 49.5 C18 51.5 18 54.5 20 56.5 L46.5 83 C48.5 85 51.5 85 53.5 83 L80 56.5 C82 54.5 82 51.5 80 49.5Z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
    },
    {
      name: 'Postman',
      accent: '#FF6C37',
      icon: (
        <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13">
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4"/>
          <path d="M35 65 L65 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
          <path d="M65 35 L55 38 L62 45 Z" fill="currentColor" opacity="0.6"/>
          <path d="M35 65 L38 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
          <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.25"/>
        </svg>
      ),
    },
  ];

  // utility: convert hex to rgba
  const hexToRgba = (hex, alpha = 1) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const [hovered, setHovered] = useState(null);

  const renderCard = (tech, id) => {
    const accent = tech.accent || '#ffffff';
    const isHovered = hovered === id;

    const defaultStyle = {
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(255, 255, 255, 0.10)',
      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 4px 24px rgba(0, 0, 0, 0.4)',
      color: 'rgba(255, 255, 255, 0.45)',
    };

    const hoverStyle = {
      background: `linear-gradient(180deg, ${hexToRgba(accent, 0.10)} 0%, rgba(255, 255, 255, 0.06) 100%)`,
      border: `1px solid ${hexToRgba(accent, 0.25)}`,
      boxShadow: `inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 0 24px ${hexToRgba(accent, 0.10)}, 0 8px 32px rgba(0, 0, 0, 0.4)`,
      color: accent,
      transform: 'scale(1.05) translateY(-2px)',
    };

    const cardStyle = isHovered ? hoverStyle : defaultStyle;

    return (
      <div
        key={id}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered(null)}
        style={{
          ...cardStyle,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="group relative w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer select-none"
      >
        {/* Icon */}
        <div className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13">
          {tech.icon}
        </div>
        {/* Label */}
        <span
          style={{
            color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.50)',
            transition: 'color 300ms ease',
          }}
          className="font-sans font-medium text-[10px] sm:text-[11px] text-center tracking-wide leading-tight"
        >
          {tech.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden my-4"
    >
      {/* Central Glowing Radial Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 45%, transparent 80%)',
        }}
      />

      {/* Perspective Grid Background Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
          transform: 'perspective(600px) rotateX(16deg) scale(1.25)',
          transformOrigin: '50% 30%',
        }}
      />

      {/* Title & Description Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-hero font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-3">
          Tech Stack
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#6b6c78] leading-relaxed">
          Core technologies I use to build reliable and optimized systems.
        </p>
      </div>

      {/* Pyramid / Staggered Grid Rows (5 - 4 - 3) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-3">
        {/* Row 1: 5 Items */}
        <div className="flex flex-wrap justify-center gap-3">
          {row1.map((tech, idx) => renderCard(tech, `r1-${idx}`))}
        </div>

        {/* Row 2: 4 Items */}
        <div className="flex flex-wrap justify-center gap-3">
          {row2.map((tech, idx) => renderCard(tech, `r2-${idx}`))}
        </div>

        {/* Row 3: 3 Items */}
        <div className="flex flex-wrap justify-center gap-3">
          {row3.map((tech, idx) => renderCard(tech, `r3-${idx}`))}
        </div>
      </div>
    </section>
  );
};
