import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#262626]/50">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
            <Sparkles size={16} style={{ color: 'var(--accent)' }} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            SYSTEM ARCHITECTURE & PROJECTS
          </h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {PROJECTS_DATA.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Number */}
                <div className="font-display font-black text-6xl sm:text-7xl text-[#262626] tracking-tight leading-none select-none">
                  {project.number}
                </div>

                {/* Title & Category Tags */}
                <div className="-mt-4">
                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold tracking-wider mt-1.5 uppercase" style={{ color: 'var(--accent)' }}>
                    {project.categoryTags}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#9a9b9b] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Stack */}
                <div>
                  <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider mb-2 font-bold">
                    KEY STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.keyStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 font-mono text-[11px] rounded uppercase bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1b1b1b] border border-[#2a2a2a] hover:border-[#f97316] text-white font-mono text-xs font-bold rounded-xl hover:bg-[#222222] hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-200 cursor-pointer group active:scale-95"
                    >
                      <span>INSPECT ARCHITECTURE & DEMO</span>
                      <ArrowUpRight size={16} style={{ color: 'var(--accent)' }} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="w-full aspect-[16/10] bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden relative group cursor-pointer hover:border-[#f97316] transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2.5 bg-black/80 backdrop-blur-md font-mono text-xs font-bold rounded-xl flex items-center gap-2 shadow-2xl group-hover:scale-105 transition-transform" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                        <Layers size={16} />
                        Inspect Architecture & Specs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      {/* Detail Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
