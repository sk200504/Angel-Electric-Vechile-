
import React from 'react';

const PARTNERS = [
  { name: 'NIJ', desc: 'Durability meets performance.' },
  { name: 'Revo', desc: 'The future of modular mobility.' },
  { name: 'A-star', desc: 'Premium electric performance.' },
  { name: 'E-ashwa', desc: 'Trust of a massive Indian network.' }
];

const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-24 px-6 md:px-12 bg-black border-y border-red-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight uppercase italic">Brands We <span className="text-red-600">Represent</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium uppercase tracking-widest text-xs">At Angel Marketing, we only partner with the most innovative and reliable EV manufacturers.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="bg-slate-900/40 p-10 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:shadow-2xl hover:shadow-red-600/10 transition-all border border-transparent hover:border-red-600/20 backdrop-blur-sm h-full">
              <div className="w-12 h-1 bg-red-600 mb-6 group-hover:w-20 transition-all"></div>
              <h4 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tight">{partner.name}</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
