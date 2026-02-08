
import React, { useState, useRef, useEffect } from 'react';
import { getEVAdvisorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Namaste! I am your Angel Red AI, specialized in premium electric performance. How can I help you choose the right beast for your garage today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getEVAdvisorResponse(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interruption. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-red-900/20 overflow-hidden flex flex-col h-[500px] md:h-[650px] w-full max-w-4xl mx-auto">
      <div className="bg-black p-4 md:p-6 text-white flex items-center justify-between border-b border-red-900/30">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
            <i className="fas fa-microchip text-xl md:text-2xl"></i>
          </div>
          <div>
            <h3 className="font-black text-sm md:text-lg tracking-tight uppercase italic">Red-AI Advisor</h3>
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">Neural Link Active</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Live Support</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-black/20">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] md:max-w-[85%] p-4 md:p-5 rounded-2xl md:rounded-3xl text-xs md:text-sm leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-red-600 text-white rounded-tr-none font-bold' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none font-medium border border-red-900/20'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none flex gap-2 border border-red-900/20">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 md:p-6 border-t border-red-900/20 bg-black flex gap-2 md:gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..." 
          className="flex-1 bg-slate-900 border border-red-900/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all shadow-sm"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-red-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-red-700 transition-all shadow-xl active:scale-90 disabled:opacity-50"
        >
          <i className="fas fa-paper-plane text-lg md:text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default AIAdvisor;
