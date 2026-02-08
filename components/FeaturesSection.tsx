
import React from 'react';

const FEATURES = [
  { icon: 'fa-battery-full', title: 'Nuclear Range', desc: 'Up to 200km on a single burst with advanced cell technology.' },
  { icon: 'fa-bolt', title: 'Sonic Charging', desc: '0-80% in 60 mins. Less waiting, more leading.' },
  { icon: 'fa-leaf', title: 'Crimson Green', desc: 'Powerful performance that respects the earth.' },
  { icon: 'fa-tools', title: 'Precision Hub', desc: 'Dedicated maintenance support directly from our experts.' },
  { icon: 'fa-wallet', title: 'Aggressive EMI', desc: 'Unbeatable financing starting at just ₹2,500/month.' },
  { icon: 'fa-shield-check', title: 'The Red Vow', desc: 'Angel Marketing - a decade of trust in every machine.' }
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-black border-t border-red-900/10" id="features">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4 uppercase italic">Why The <span className="text-red-600">Red Line?</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">Dominating the road with electric precision.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {FEATURES.map((f, i) => (
          <div key={i} className="p-8 rounded-[2.5rem] bg-slate-900/50 border border-red-900/10 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-900/20 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
              <i className={`fas ${f.icon} text-3xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;