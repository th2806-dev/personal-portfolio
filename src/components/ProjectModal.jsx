import React, { useState } from 'react';
import { X, ExternalLink, Github, Database, Server, Cpu, Play, CheckCircle2, Terminal } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const [simState, setSimState] = useState({ loading: false, output: null });

  const runSimulation = (endpoint) => {
    setSimState({ loading: true, output: null });
    setTimeout(() => {
      let result = '';
      if (endpoint.includes('auth')) {
        result = JSON.stringify(
          {
            status: 200,
            token_type: 'Bearer',
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            expires_in: 3600,
            roles: ['ADMIN', 'OPERATOR'],
          },
          null,
          2
        );
      } else if (endpoint.includes('reserve-seats')) {
        result = JSON.stringify(
          {
            status: 200,
            booking_id: 'BK-2026-0789',
            seats: ['A12', 'A13'],
            redis_lock_key: 'lock:showtime:402:seat:A12',
            ttl_ms: 300000,
            message: 'Seats locked successfully via Redis atomic transaction.',
          },
          null,
          2
        );
      } else {
        result = JSON.stringify(
          {
            status: 200,
            route_id: 'RT-VN-8821',
            cache_hit: true,
            latency_ms: 1.2,
            strategy_applied: 'DynamicTrafficFlowStrategy',
            hangfire_job_id: 'job-99421',
          },
          null,
          2
        );
      }
      setSimState({ loading: false, output: result });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#121212] border border-[#262626] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
        {/* Header Bar */}
        <div className="p-6 border-b border-[#262626] flex items-center justify-between bg-[#131313]">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-2xl text-[#f97316]">
              {project.number}
            </span>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#f97316]">
                {project.categoryTags}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Main Image Banner */}
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#1b1b1b] relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Tabs inside Modal */}
          <div className="flex items-center gap-2 border-b border-[#262626] pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-mono text-xs rounded-lg transition-all cursor-pointer ${
                activeTab === 'overview' ? 'bg-[#f97316] text-black font-bold' : 'bg-[#1b1b1b] text-[#c6c6c7] hover:text-white'
              }`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 font-mono text-xs rounded-lg transition-all cursor-pointer ${
                activeTab === 'architecture' ? 'bg-[#f97316] text-black font-bold' : 'bg-[#1b1b1b] text-[#c6c6c7] hover:text-white'
              }`}
            >
              ARCHITECTURE SPECS
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 font-mono text-xs rounded-lg transition-all cursor-pointer ${
                activeTab === 'simulator' ? 'bg-[#f97316] text-black font-bold' : 'bg-[#1b1b1b] text-[#c6c6c7] hover:text-white'
              }`}
            >
              API SIMULATOR
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="font-sans text-sm text-[#e2e2e2] leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="font-mono text-xs uppercase text-[#9a9b9b] font-bold mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.keyStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#1b1b1b] border border-[#2a2a2a] text-[#e2e2e2] font-mono text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture Specs */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#1b1b1b] border border-[#2a2a2a] rounded-xl">
                <div className="flex items-center gap-2 text-[#f97316] font-mono text-xs font-bold mb-2">
                  <Server size={16} />
                  <span>DESIGN PATTERN</span>
                </div>
                <p className="font-sans text-sm text-white">
                  {project.architectureDetails.pattern}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-[#9a9b9b] font-bold mb-3">
                  SYSTEM HIGHLIGHTS
                </h4>
                <ul className="space-y-2">
                  {project.architectureDetails.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#c6c6c7]">
                      <CheckCircle2 size={16} className="text-[#22c55e] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.architectureDetails.databaseDesign && (
                <div className="p-4 bg-[#1b1b1b] border border-[#2a2a2a] rounded-xl">
                  <div className="flex items-center gap-2 text-[#22c55e] font-mono text-xs font-bold mb-2">
                    <Database size={16} />
                    <span>DATABASE PERSISTENCE DESIGN</span>
                  </div>
                  <p className="font-sans text-sm text-[#c6c6c7]">
                    {project.architectureDetails.databaseDesign}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: API Simulator */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <p className="font-sans text-xs text-[#9a9b9b]">
                Select an endpoint below to simulate real .NET 10 API request & response payloads:
              </p>

              <div className="flex flex-wrap gap-2">
                {project.architectureDetails.apiEndpoints?.map((ep, idx) => (
                  <button
                    key={idx}
                    onClick={() => runSimulation(ep)}
                    className="flex items-center gap-2 px-3 py-2 bg-[#1b1b1b] border border-[#2a2a2a] hover:border-[#f97316] text-white font-mono text-xs rounded-lg transition-all cursor-pointer"
                  >
                    <Play size={12} className="text-[#f97316]" />
                    <span>{ep.split(' - ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Console Output */}
              <div className="p-4 bg-[#0a0a0a] border border-[#262626] rounded-xl font-mono text-xs min-h-[160px] flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#9a9b9b] pb-2 border-b border-[#1f1f1f] mb-3">
                  <Terminal size={14} className="text-[#f97316]" />
                  <span>API Response Payload Simulator</span>
                </div>

                {simState.loading ? (
                  <div className="text-[#f97316] animate-pulse py-6 text-center">
                    Executing .NET Web API pipeline & Redis transaction...
                  </div>
                ) : simState.output ? (
                  <pre className="text-[#22c55e] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {simState.output}
                  </pre>
                ) : (
                  <div className="text-[#584237] py-8 text-center italic">
                    Click an endpoint above to run simulation response.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#262626] bg-[#131313] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1b1b1b] border border-[#2a2a2a] text-white font-mono text-xs rounded-lg hover:border-[#f97316] transition-all"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#f97316] text-black font-mono font-bold text-xs rounded-lg hover:bg-[#ff802b] transition-all"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] font-mono text-xs rounded-lg hover:text-white transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
