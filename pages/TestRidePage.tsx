
import React from 'react';

const TestRidePage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <h1 className="text-6xl font-black text-slate-900 mb-8 leading-tight">Feel the <span className="text-emerald-600">Silence.</span></h1>
           <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">Reading about it is one thing. Riding it is another. Book a priority 30-minute test ride at your nearest Angel Marketing showroom.</p>
           
           <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <i className="fas fa-check"></i>
                 </div>
                 <span className="font-bold text-slate-700">No commitment required</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <i className="fas fa-check"></i>
                 </div>
                 <span className="font-bold text-slate-700">Complete safety gear provided</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <i className="fas fa-check"></i>
                 </div>
                 <span className="font-bold text-slate-700">On-spot subsidy consultation</span>
              </div>
           </div>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
           <h3 className="text-2xl font-black mb-8 text-slate-900">Secure Your Slot</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold" placeholder="Arjun Reddy" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold" placeholder="+91" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Model</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold">
                    <option>Ola S1 Pro Gen 2</option>
                    <option>Ather 450X Apex</option>
                    <option>Vida V1 Pro</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Preferred Location</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold">
                    <option>New Delhi Showroom (Main Road)</option>
                    <option>Gurgaon Experience Center</option>
                 </select>
              </div>
              <button className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-3">
                 <i className="fab fa-whatsapp"></i> Confirm via WhatsApp
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default TestRidePage;
