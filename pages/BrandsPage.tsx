
import React from 'react';
import { BRANDS } from '../constants';

const BrandsPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Our Manufacturing <span className="text-red-600">Partners</span></h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">We exclusively partner with brands that share our vision of a green, high-performance future for India.</p>
      </div>

      <div className="space-y-12">
        {BRANDS.map((brand, i) => (
          <div key={i} className="bg-slate-900/40 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-red-900/20 flex flex-col gap-8 items-start backdrop-blur-sm group">
            <div className="w-full flex justify-between items-center border-b border-red-900/10 pb-6">
              <div>
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tight">{brand.name}</h2>
                <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mt-1">Official Angel Marketing Partner</p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-2 h-2 rounded-full bg-red-600/30"></div>
                ))}
              </div>
            </div>
            
            <div className="w-full space-y-10">
              <div>
                <h4 className="text-sm font-black text-red-600 uppercase tracking-[0.2em] mb-4">The Vision & Story</h4>
                <p className="text-xl text-slate-300 leading-relaxed font-medium italic">"{brand.story}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/50 p-8 rounded-[2rem] border border-red-900/10 hover:border-red-600/20 transition-all">
                  <h4 className="text-xs font-black text-slate-500 uppercase mb-4 tracking-widest">Technology & Innovation Edge</h4>
                  <p className="text-lg font-bold text-slate-200">{brand.warrantyInfo}</p>
                </div>
                
                <div className="bg-black/50 p-8 rounded-[2rem] border border-red-900/10 hover:border-red-600/20 transition-all">
                  <h4 className="text-xs font-black text-slate-500 uppercase mb-4 tracking-widest">Reliability Index</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                        style={{ width: `${brand.trustScore}%` }}
                      ></div>
                    </div>
                    <span className="text-2xl font-black text-red-500">{brand.trustScore}%</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-3 tracking-widest">Performance Benchmark Score</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
