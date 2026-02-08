
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 max-w-5xl mx-auto animate-in fade-in duration-700">
      <div className="text-center space-y-16">
        <div className="space-y-4">
          <h1 className="text-6xl font-black text-white uppercase italic tracking-tighter">
            The <span className="text-red-600">Core</span>
          </h1>
          <p className="text-red-500 font-bold uppercase tracking-[0.4em] text-xs">Innovation Since 2022</p>
        </div>

        <div className="bg-slate-900/30 p-12 md:p-20 rounded-[4rem] border border-red-900/10 shadow-2xl backdrop-blur-sm">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-2">
              <p className="text-red-500 font-black uppercase tracking-widest text-xs">Founder & Owner</p>
              <h2 className="text-5xl font-black text-white uppercase italic tracking-tight">VIKAS KHATRI</h2>
            </div>
            
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
            
            <p className="text-2xl text-slate-100 font-bold leading-relaxed italic">
              "Angel Marketing has been winning the hearts of EV users since 2022. We don't just sell vehicles; we build long-term relationships through trust and exceptional service."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 text-left">
              <div className="space-y-4">
                <h4 className="text-red-600 font-black uppercase text-sm tracking-widest">Our Legacy</h4>
                <p className="text-slate-300 leading-relaxed font-medium text-lg">
                  Established in 2022, Angel Marketing rapidly emerged as Jabalpur's premier electric vehicle destination. Under the visionary leadership of Vikas Khatri, we have focused on one thing: winning hearts through reliability.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-red-600 font-black uppercase text-sm tracking-widest">Our Promise</h4>
                <p className="text-slate-300 leading-relaxed font-medium text-lg">
                  Over the years, we have converted hundreds of commuters to clean energy, building a community of satisfied riders who trust our expertise and commitment to a greener India.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10 border-y border-red-900/10">
          <div className="space-y-1">
             <h4 className="text-4xl font-black text-white">2022</h4>
             <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Founded</p>
          </div>
          <div className="space-y-1">
             <h4 className="text-4xl font-black text-white">1000+</h4>
             <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Happy Riders</p>
          </div>
          <div className="space-y-1">
             <h4 className="text-4xl font-black text-white">JBP</h4>
             <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Core Location</p>
          </div>
          <div className="space-y-1">
             <h4 className="text-4xl font-black text-white">Elite</h4>
             <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Dealer Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
