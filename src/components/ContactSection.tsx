import React, { useState } from 'react';
import { Mail, Globe, User, Send, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#262626]/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight leading-none mb-1">
              LET'S
            </h2>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-[#f97316] tracking-tight leading-none">
              TALK.
            </h2>
          </div>

          <p className="font-sans text-base text-[#c6c6c7] leading-relaxed max-w-md">
            Have a project or need a skilled developer? Let's build something efficient together.
          </p>

          {/* Icon Circle Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 transition-all"
              title="Send Email Direct"
            >
              <Mail size={18} />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 transition-all"
              title="GitHub Profile"
            >
              <Globe size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/10 transition-all"
              title="LinkedIn Profile"
            >
              <User size={18} />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form Card */}
        <div className="lg:col-span-7 bg-[#121212] border border-[#262626] rounded-2xl p-6 sm:p-8 hover:border-[#353535] transition-all">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] flex items-center justify-center mx-auto">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Inquiry Received!</h3>
              <p className="font-sans text-sm text-[#9a9b9b] max-w-sm mx-auto">
                Thank you for reaching out. I will review your message and reply back shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 bg-[#1b1b1b] border border-[#2a2a2a] text-[#c6c6c7] font-mono text-xs rounded-lg hover:text-white transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#9a9b9b] uppercase tracking-wider block font-medium">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-[#2a2a2a] rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-[#584237] focus:outline-none focus:border-[#f97316] transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#9a9b9b] uppercase tracking-wider block font-medium">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-[#2a2a2a] rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-[#584237] focus:outline-none focus:border-[#f97316] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#9a9b9b] uppercase tracking-wider block font-medium">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-[#2a2a2a] rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-[#584237] focus:outline-none focus:border-[#f97316] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#f97316] hover:bg-[#ff802b] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>SENDING INQUIRY...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
