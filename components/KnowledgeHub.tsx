
import React from 'react';
import { MYTH_BUSTERS } from '../constants';

const KnowledgeHub: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-white" id="knowledge">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">EV <span className="text-emerald-600">Knowledge Hub</span></h2>
            <p className="text-slate-500 font-medium">Busting myths and sharing tips for the electric revolution.</p>
          </div>
          <button className="bg-emerald-50 text-emerald-600 px-8 py-3 rounded-2xl font-black hover:bg-emerald-600 hover:text-white transition-all">
            Read Our Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {MYTH_BUSTERS.map((item, i) => (
            <div key={i} className="group perspective h-[300px]">
              <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-center backface-hidden text-center">
                  <div className="text-emerald-500 mb-4 text-sm font-black uppercase tracking-widest">Myth</div>
                  <h3 className="text-xl font-bold text-white italic">"{item.myth}"</h3>
                  <div className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    Hover to reveal fact <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] p-10 flex flex-col justify-center rotate-y-180 backface-hidden text-center">
                  <div className="text-white/80 mb-4 text-sm font-black uppercase tracking-widest">Fact</div>
                  <p className="text-white font-bold text-lg leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex gap-8 items-center overflow-hidden relative group">
             <div className="relative z-10 space-y-4">
                <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Battery Care</span>
                <h4 className="text-2xl font-black text-slate-900 leading-tight">How to extend your EV's battery life by 30%?</h4>
                <p className="text-slate-500 text-sm font-medium">Simple tips on charging cycles and storage that make a huge difference.</p>
                <button className="text-emerald-600 font-black text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Read Article <i className="fas fa-chevron-right"></i>
                </button>
             </div>
             <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-200/50 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex gap-8 items-center overflow-hidden relative group">
             <div className="relative z-10 space-y-4">
                <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Subsidies</span>
                <h4 className="text-2xl font-black text-slate-900 leading-tight">State incentives you didn't know about!</h4>
                <p className="text-slate-500 text-sm font-medium">Save up to ₹20,000 more with local state-level EV benefits.</p>
                <button className="text-emerald-600 font-black text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Check Savings <i className="fas fa-chevron-right"></i>
                </button>
             </div>
             <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-200/50 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
          </div>
        </div>
      </div>
      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default KnowledgeHub;
