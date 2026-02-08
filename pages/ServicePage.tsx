
import React from 'react';

const ServicePage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Angel <span className="text-red-600">Service Hub</span></h1>
        <p className="text-slate-300 font-medium max-w-2xl mx-auto text-lg">
          Complete expert servicing and maintenance for all your EVs are performed directly at our Jabalpur facility by certified technicians.
        </p>
      </div>

      <div className="bg-slate-900/80 rounded-[4rem] p-12 text-white shadow-2xl mb-16 overflow-hidden relative border border-red-900/20 text-center backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tight">Schedule Your Maintenance</h2>
        <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto font-medium">
          Ensure your vehicle stays in peak condition. For slot booking and maintenance queries, call our dedicated service desk directly.
        </p>
        
        <div className="inline-flex flex-col items-center gap-6 bg-black/60 p-10 rounded-[3rem] border border-red-600/30 shadow-2xl">
            <div className="w-20 h-20 bg-red-600 rounded-[1.5rem] flex items-center justify-center text-white text-4xl mb-2 shadow-xl shadow-red-600/40">
                <i className="fas fa-phone-alt"></i>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.3em]">Service Slot Booking</h4>
              <a href="tel:9340230587" className="text-5xl md:text-6xl font-black text-white hover:text-red-600 transition-colors tracking-tighter block">9340230587</a>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-4">Working Hours: 10:00 AM - 07:00 PM</p>
              <p className="text-red-500 text-[10px] font-black uppercase tracking-tighter">Mon to Sun Open</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-red-900/10 hover:border-red-600/30 transition-all group">
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-tools text-3xl"></i>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Facility Service</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                All maintenance is handled at our Ranjhi facility, equipped with the latest diagnostic tools for electric powertrain and battery health.
              </p>
          </div>
          <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-red-900/10 hover:border-red-600/30 transition-all group">
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-boxes text-3xl"></i>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Genuine Inventory</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                We maintain a ready stock of original replacement parts for NIJ, Revo, A-star, and E-ashwa models to minimize downtime.
              </p>
          </div>
          <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-red-900/10 hover:border-red-600/30 transition-all group">
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-tachometer-alt text-3xl"></i>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Software Care</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Regular firmware updates and motor tuning to ensure your vehicle delivers maximum efficiency and smooth acceleration.
              </p>
          </div>
      </div>

      <div className="bg-white/5 border border-red-900/20 p-12 rounded-[4rem] text-center backdrop-blur-md">
          <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tight">Expert Consultation</h3>
          <p className="text-slate-300 text-xl font-medium max-w-3xl mx-auto">
            Need advice on battery optimization or performance tuning? Our experts at the facility are happy to guide you on getting the best out of your EV journey.
          </p>
      </div>
    </div>
  );
};

export default ServicePage;
