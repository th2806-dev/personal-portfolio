import React from 'react';

export const TechStackSection = () => {
  const row1 = [
    {
      name: '.NET',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="50" cy="50" r="46" fill="#512BD4" />
          <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="900" fontFamily="sans-serif">.NET</text>
        </svg>
      ),
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#3776AB" d="M11.87 2c-3.83 0-4.45 1.65-4.45 3.3v1.65h8.9V5.3c0-1.65-.62-3.3-4.45-3.3zm-2.22 2.23a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48zM7.42 8C5.77 8 4.12 8.62 4.12 12.46c0 3.83.65 4.45 2.3 4.45h1.49v-2.23c0-1.65 1.32-2.97 2.97-2.97h3.46c1.65 0 2.97-1.32 2.97-2.97V7.42H7.42z" />
          <path fill="#FFD43B" d="M19.6 11.91c0-3.83-.65-4.45-2.3-4.45h-1.49v2.23c0 1.65-1.32 2.97-2.97 2.97H9.38c-1.65 0-2.97 1.32-2.97 2.97v1.24h9.89c1.65 0 2.3-.62 2.3-4.46zm-5.52 5.69a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48zM11.87 22c3.83 0 4.45-1.65 4.45-3.3v-1.65h-8.9V18.7c0 1.65.62 3.3 4.45 3.3z" />
        </svg>
      ),
    },
    {
      name: 'Go',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#00ADD8" d="M1.81 10.3c.12-.4.32-.77.58-1.1.48-.61 1.22-.98 2.03-.98 1.48 0 2.68 1.2 2.68 2.68s-1.2 2.68-2.68 2.68c-.81 0-1.55-.37-2.03-.98-.26-.33-.46-.7-.58-1.1h3.33v-1.2H1.81zm7.42-2.1c1.88 0 3.4 1.52 3.4 3.4s-1.52 3.4-3.4 3.4-3.4-1.52-3.4-3.4 1.52-3.4 3.4-3.4zm0 1.4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7.48-1.4h4.8v1.4h-3.4v1.1h2.9v1.3h-2.9v1.8h-1.4V8.2z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#339933" d="M12 1.5l10 5.77v11.46L12 22.5l-10-5.77V7.27L12 1.5zm0 2.3L4 8.16v7.68l8 4.62 8-4.62V8.16L12 3.8zm0 3.2a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-3 0v-3.5A1.5 1.5 0 0 1 12 7zm0 8a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      ),
    },
    {
      name: 'ReactJs',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
  ];

  const row2 = [
    {
      name: 'PostgreSQL',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11" fill="none" stroke="#4169E1" strokeWidth="1.8">
          <path d="M12 2C8 2 4.5 4.5 4.5 8.5c0 3.2 2.2 5.8 5.2 6.6V18c0 1.5 1.5 2.5 3 2.5s2.5-1 2.5-2.5v-1.5c2.8-.5 4.8-3 4.8-6 0-4-3.5-6.5-8-6.5z" />
          <path d="M8.5 8.5c0-1 1-1.5 2-1.5s2 .5 2 1.5" />
          <circle cx="8" cy="7.5" r="1" fill="#4169E1" />
        </svg>
      ),
    },
    {
      name: 'Elastic Search',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <circle cx="8" cy="8" r="3.5" fill="#FED100" />
          <circle cx="16" cy="8" r="3.5" fill="#005571" />
          <circle cx="12" cy="15" r="4.5" fill="#23A8F2" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="50" cy="50" r="46" fill="#13AA52" />
          <path fill="#FFFFFF" d="M50 18s-18 16.5-18 33c0 9.9 8.1 18 18 18s18-8.1 18-18c0-16.5-18-33-18-33zm2.4 53.1v8.4h-4.8v-8.4c-6.9-1.2-12-7.2-12-14.1 0-7.8 6.6-14.4 14.4-14.4s14.4 6.6 14.4 14.4c0 6.9-5.1 12.9-12 14.1z" />
        </svg>
      ),
    },
    {
      name: 'Redis',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#DC382D" d="M3 6l9-4 9 4-9 4-9-4zm0 6l9 4 9-4-9-4-9 4zm0 6l9 4 9-4-9-4-9 4z" />
        </svg>
      ),
    },
  ];

  const row3 = [
    {
      name: 'RabbitMQ',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#FF6600" d="M4 8h16v12H4V8zm3 3v6h10v-6H7zm-3-6h5v2H4V5zm11 0h5v2h-5V5z" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#2496ED" d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm9 0h2v2h-2V8zm-6-3h2v2h-2V5zm-3 0h2v2H7V5zm6 0h2v2h-2V5zm0 6h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2zm-3 0h2v2H4v-2zm-.5 4.5c.3 3.5 3.2 6.5 7.5 6.5 4.8 0 8.5-3 9.5-7.5.5.2 1.5.5 2.5 0 .2-.1.5-.5.2-.8-.8-.8-2-1.2-2.7-1.2h-17c-.5 0-1 .2-1.3.6C1 12.5 1 14 2.5 15.5z" />
        </svg>
      ),
    },
    {
      name: 'Azure',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11">
          <path fill="#0078D4" d="M5.5 19L13 3l5.5 11H12.5L5.5 19zm8.5 0l4.5-9h-3.5L11 19h3z" />
        </svg>
      ),
    },
  ];

  const renderCard = (tech, idx) => (
    <div
      key={idx}
      className="group w-28 h-28 sm:w-[120px] sm:h-[120px] bg-[#1a1b22]/70 backdrop-blur-md border border-[#2d2e38] rounded-2xl sm:rounded-[22px] p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:border-[#525466] hover:bg-[#22242e] hover:shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-all duration-300 select-none"
    >
      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 grayscale opacity-50 contrast-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-110 transition-all duration-300">
        {tech.icon}
      </div>
      <span className="font-sans font-bold text-xs sm:text-sm text-center tracking-tight text-[#9a9ba6] group-hover:text-white transition-colors duration-200">
        {tech.name}
      </span>
    </div>
  );

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
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 45%, transparent 80%)',
        }}
      />

      {/* Perspective Grid Background Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
          transform: 'perspective(600px) rotateX(16deg) scale(1.25)',
          transformOrigin: '50% 30%',
        }}
      />

      {/* Title & Description Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-hero font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-3">
          Tech Stack
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#8e8f9a] leading-relaxed">
          A list of core technologies I use to build reliable and optimized systems.
        </p>
      </div>

      {/* Pyramid / Staggered Grid Rows (5 - 4 - 3) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
        {/* Row 1: 5 Items */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {row1.map((tech, idx) => renderCard(tech, idx))}
        </div>

        {/* Row 2: 4 Items */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {row2.map((tech, idx) => renderCard(tech, idx))}
        </div>

        {/* Row 3: 3 Items */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {row3.map((tech, idx) => renderCard(tech, idx))}
        </div>
      </div>
    </section>
  );
};
