import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowDown, MoreHorizontal, Edit3, XCircle, MessageSquarePlus } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, TECH_STACK_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';

// Build system prompt from portfolio data
const buildSystemPrompt = () => {
  const techList = TECH_STACK_DATA.map(t => `${t.name} (${t.level})`).join(', ');
  const projectsList = PROJECTS_DATA.map(p =>
    `• ${p.title}: ${p.description} | Stack: ${p.keyStack.join(', ')}`
  ).join('\n');

  return `You are ${PERSONAL_INFO.name}'s AI portfolio assistant. You respond as if you ARE ${PERSONAL_INFO.name}, speaking in first person. Be friendly, professional, and concise.

Here is everything about me:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Bio: ${PERSONAL_INFO.subtitle}
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- Portfolio: ${PERSONAL_INFO.portfolioUrl}
- Location: ${PERSONAL_INFO.location}
- Availability: ${PERSONAL_INFO.availability}

Education:
- ${EDUCATION_DATA.school}
- Degree: ${EDUCATION_DATA.degree}
- Period: ${EDUCATION_DATA.period}
- GPA: ${EDUCATION_DATA.gpa}

Technical Skills: ${techList}

Projects:
${projectsList}

Rules:
1. Answer ONLY about me, my skills, projects, experience, and how to contact me.
2. If asked something unrelated, politely redirect to portfolio topics.
3. Keep responses clear, well-structured, and ALWAYS finish your sentences completely.
4. Use markdown formatting when listing items.
5. Be enthusiastic but professional.
6. When asked about contacting me, provide my email and LinkedIn.
7. Respond in the same language the user uses (Vietnamese or English).`;
};

// Helper to send chat notifications to Telegram Bot silently
const sendTelegramNotification = async (userText, aiResponseText) => {
  try {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId || token === 'YOUR_TELEGRAM_BOT_TOKEN') {
      return;
    }

    const timeStr = new Date().toLocaleTimeString('vi-VN');
    const cleanUserText = userText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const cleanAiText = aiResponseText.slice(0, 800).replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const message = `🤖 <b>PORTFOLIO CHAT LOG</b> (${timeStr})\n\n👤 <b>Khách hỏi:</b>\n${cleanUserText}\n\n💬 <b>AI Trả lời:</b>\n${cleanAiText}${aiResponseText.length > 800 ? '...' : ''}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });
  } catch (err) {
    // Silently ignore log errors so user experience is not affected
  }
};

const SUGGESTED_QUESTIONS = [
  { text: 'Tóm tắt kinh nghiệm làm việc', icon: '💼' },
  { text: 'Giải thích về kỹ năng chuyên môn', icon: '⚡' },
  { text: 'Chi tiết các dự án đã làm', icon: '🚀' },
  { text: 'Thông tin liên hệ & tuyển dụng', icon: '📬' },
];

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "Xin chào! Tôi là trợ lý AI của Thạch Hiển 👋\nBạn có thể hỏi tôi bất cứ điều gì về kỹ năng, dự án hoặc kinh nghiệm làm việc!",
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback((behavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom('instant');
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Detect scroll position for scroll-to-bottom button
  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 80;
    setShowScrollBtn(!isNearBottom);
  };

  // Send message to Gemini
  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setHasInteracted(true);

    // Create assistant placeholder for streaming
    const assistantId = Date.now();
    setMessages(prev => [...prev, { role: 'assistant', content: '', id: assistantId, streaming: true }]);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
        setMessages(prev =>
          prev.map(m => m.id === assistantId
            ? { ...m, content: '⚠️ API key chưa được cấu hình. Vui lòng thêm `VITE_GEMINI_API_KEY` vào file `.env.local`.', streaming: false }
            : m
          )
        );
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      // Build conversation history for context (must start with user role)
      const relevantMessages = messages.filter(m => m.role === 'user' || (m.role === 'assistant' && m.content));
      const firstUserIndex = relevantMessages.findIndex(m => m.role === 'user');
      const historyMessages = firstUserIndex !== -1 ? relevantMessages.slice(firstUserIndex) : [];

      const history = historyMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }));

      const response = await ai.models.generateContentStream({
        model: 'gemini-3.6-flash',
        config: {
          systemInstruction: buildSystemPrompt(),
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
        contents: [
          ...history,
          { role: 'user', parts: [{ text: text.trim() }] },
        ],
      });

      let fullText = '';
      for await (const chunk of response) {
        const chunkText = chunk.text || '';
        fullText += chunkText;
        setMessages(prev =>
          prev.map(m => m.id === assistantId
            ? { ...m, content: fullText }
            : m
          )
        );
      }

      // Mark streaming complete and send background Telegram alert to admin
      setMessages(prev =>
        prev.map(m => m.id === assistantId
          ? { ...m, streaming: false }
          : m
        )
      );

      if (fullText) {
        sendTelegramNotification(text.trim(), fullText);
      }
    } catch (error) {
      console.error('Gemini API error:', error);
      const errMsg = error?.message || 'Unknown error';
      setMessages(prev =>
        prev.map(m => m.id === assistantId
          ? { ...m, content: `❌ Error: ${errMsg}`, streaming: false }
          : m
        )
      );
    }

    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (question) => {
    sendMessage(question);
  };

  // Simple markdown-like rendering for bold and bullet points
  const renderContent = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      // Bold text
      let processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Bullet points
      if (processed.startsWith('- ') || processed.startsWith('• ')) {
        processed = `<span style="color: var(--accent);">•</span> ${processed.slice(2)}`;
        return (
          <div key={i} className="pl-3 py-0.5" dangerouslySetInnerHTML={{ __html: processed }} />
        );
      }
      return (
        <div key={i} className={line === '' ? 'h-2' : ''} dangerouslySetInnerHTML={{ __html: processed }} />
      );
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="chatbot-window fixed bottom-24 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-[400px] max-h-[70vh] bg-[#141422] border border-[#2a2a3e] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(var(--accent-rgba), 0.08)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a3e] bg-[#16162a] relative z-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                >
                  <Bot size={18} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#4ade80] border-2 border-[#16162a] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white leading-tight">Thach Hien Agent</h3>
                <p className="font-mono text-[10px] text-[#4ade80] tracking-wider">ONLINE</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Options Menu Button (Three Dots) */}
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`p-2 rounded-lg transition-all cursor-pointer ${showMenu ? 'bg-[#ffffff15] text-white' : 'text-[#8e90a0] hover:bg-[#ffffff10] hover:text-white'}`}
                title="Tùy chọn"
                aria-label="More options"
              >
                <MoreHorizontal size={18} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-[#ffffff10] text-[#8e90a0] hover:text-white transition-all cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Options Dropdown Menu */}
          {showMenu && (
            <div className="absolute top-16 right-4 z-50 w-64 bg-[#141424] border border-[#2a2a40] rounded-xl shadow-2xl p-1.5 space-y-1 animate-chatFadeIn">
              <button
                onClick={() => {
                  setMessages([INITIAL_MESSAGE]);
                  setHasInteracted(false);
                  setShowSuggestions(true);
                  setShowMenu(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#222238] text-xs font-sans text-white flex items-center gap-3 transition-colors cursor-pointer group"
              >
                <div className="p-1.5 rounded-md bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 group-hover:scale-105 transition-transform">
                  <Edit3 size={15} />
                </div>
                <div>
                  <div className="font-semibold text-white">Bắt đầu cuộc trò chuyện mới</div>
                  <div className="text-[10px] text-[#8e90a0]">Xóa lịch sử & làm mới hội thoại</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowMenu(false);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#222238] text-xs font-sans text-white flex items-center gap-3 transition-colors cursor-pointer group"
              >
                <div className="p-1.5 rounded-md bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20 group-hover:scale-105 transition-transform">
                  <XCircle size={15} />
                </div>
                <div>
                  <div className="font-semibold text-white">Kết thúc cuộc trò chuyện</div>
                  <div className="text-[10px] text-[#8e90a0]">Thoát và đóng khung nhắn tin</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowSuggestions(true);
                  setHasInteracted(false);
                  setShowMenu(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#222238] text-xs font-sans text-white flex items-center gap-3 transition-colors cursor-pointer group"
              >
                <div className="p-1.5 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 group-hover:scale-105 transition-transform">
                  <MessageSquarePlus size={15} />
                </div>
                <div>
                  <div className="font-semibold text-white">Mẫu câu chat gợi ý</div>
                  <div className="text-[10px] text-[#8e90a0]">Hiển thị lại các mẫu câu hỏi nhanh</div>
                </div>
              </button>
            </div>
          )}

          {/* Messages Area */}
          <div
            ref={messagesContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0 chatbot-messages"
            style={{ maxHeight: 'calc(70vh - 140px)' }}
          >
            {messages.map((msg, idx) => (
              <div
                key={msg.id || idx}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-chatFadeIn`}
              >
                {/* Avatar */}
                {msg.role === 'assistant' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                  >
                    <Sparkles size={13} className="text-white" />
                  </div>
                )}

                {/* Bubble */}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-sans ${
                    msg.role === 'user'
                      ? 'bg-[var(--accent)] text-white rounded-br-md'
                      : 'bg-[#1e1e36] text-[#e2e2e2] border border-[#2a2a3e] rounded-bl-md'
                  }`}
                >
                  {renderContent(msg.content)}
                  {msg.streaming && (
                    <span className="inline-flex gap-1 ml-1 items-center">
                      <span className="chatbot-typing-dot"></span>
                      <span className="chatbot-typing-dot" style={{ animationDelay: '0.15s' }}></span>
                      <span className="chatbot-typing-dot" style={{ animationDelay: '0.3s' }}></span>
                    </span>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#2a2a3e] border border-[#3a3a5e]">
                    <User size={13} className="text-[#c6c6c7]" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator (when loading and no streaming msg yet) */}
            {isLoading && !messages.some(m => m.streaming) && (
              <div className="flex gap-2.5 animate-chatFadeIn">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                >
                  <Sparkles size={13} className="text-white" />
                </div>
                <div className="bg-[#1e1e36] border border-[#2a2a3e] rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5 items-center">
                    <span className="chatbot-typing-dot"></span>
                    <span className="chatbot-typing-dot" style={{ animationDelay: '0.15s' }}></span>
                    <span className="chatbot-typing-dot" style={{ animationDelay: '0.3s' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (visible only before chat starts, when input is empty and not loading) */}
          {showSuggestions && !hasInteracted && !input.trim() && !isLoading && (
            <div className="px-4 py-2 border-t border-[#2a2a3e]/50 bg-[#16162a]/80 flex flex-wrap gap-2 animate-chatFadeIn">
              <div className="w-full text-[10px] font-mono text-[#8e90a0] uppercase tracking-wider mb-0.5">Mẫu câu hỏi nhanh:</div>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(q.text)}
                  className="px-3 py-1.5 bg-[#1e1e36] border border-[#2a2a3e] hover:border-[var(--accent)] rounded-xl text-xs font-sans text-[#c6c6c7] hover:text-white transition-all cursor-pointer hover:bg-[var(--accent)]/10 flex items-center gap-1.5"
                >
                  <span>{q.icon}</span>
                  <span>{q.text}</span>
                </button>
              ))}
            </div>
          )}

          {/* Scroll to bottom button */}
          {showScrollBtn && (
            <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={() => scrollToBottom()}
                className="p-2 rounded-full bg-[#1e1e36] border border-[#2a2a3e] text-[#c6c6c7] hover:text-white shadow-lg cursor-pointer transition-all hover:bg-[var(--accent)]/20"
              >
                <ArrowDown size={16} />
              </button>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-[#2a2a3e] bg-[#16162a] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 bg-[#1e1e36] border border-[#2a2a3e] rounded-xl px-4 py-2.5 text-sm font-sans text-white placeholder-[#5a5a7a] focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-xl text-white transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              style={{
                background: input.trim() && !isLoading
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                  : '#2a2a3e'
              }}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-toggle fixed bottom-6 right-4 sm:right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'rotate-0' : ''}`}
        style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          boxShadow: '0 8px 32px rgba(var(--accent-rgba), 0.4), 0 0 20px rgba(var(--accent-rgba), 0.2)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <>
            <MessageCircle size={22} className="text-white" />
            {!hasInteracted && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4ade80] rounded-full border-2 border-[#0e0e0e] chatbot-pulse"></span>
            )}
          </>
        )}
      </button>
    </>
  );
};
