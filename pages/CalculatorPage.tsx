
import React from 'react';
import SavingsCalculator from '../components/SavingsCalculator';

const CalculatorPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-black">
      <SavingsCalculator />
      <section className="py-24 px-6 md:px-12 bg-black border-t border-red-900/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-black text-white mb-12 uppercase italic tracking-tight">The <span className="text-red-600">Electric Advantage</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-slate-900/40 rounded-[3rem] border border-red-900/10 text-left hover:border-red-600 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-gas-pump text-3xl"></i>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase italic">Petrol Inflation</h4>
              <p className="text-slate-400 font-medium leading-relaxed">With petrol prices rising consistently, your savings with an Angel EV grow larger every single month of ownership.</p>
            </div>
            <div className="p-10 bg-slate-900/40 rounded-[3rem] border border-red-900/10 text-left hover:border-red-600 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-cog text-3xl"></i>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase italic">Zero Maintenance</h4>
              <p className="text-slate-400 font-medium leading-relaxed">Forget oil changes, spark plugs, and gear repairs. EVs have significantly fewer moving parts, slashing your long-term service costs.</p>
            </div>
            <div className="p-10 bg-slate-900/40 rounded-[3rem] border border-red-900/10 text-left hover:border-red-600 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                <i className="fas fa-hand-holding-heart text-3xl"></i>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase italic">Govt Subsidies</h4>
              <p className="text-slate-400 font-medium leading-relaxed">Take advantage of current state and central EV incentives that lower your upfront cost significantly at our showroom.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
