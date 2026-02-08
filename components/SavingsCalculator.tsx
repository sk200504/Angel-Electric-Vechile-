
import React, { useState } from 'react';

const SavingsCalculator: React.FC = () => {
  const [kmPerDay, setKmPerDay] = useState(40);
  const [petrolPrice, setPetrolPrice] = useState(103);
  const [years, setYears] = useState(1);
  
  const petrolMileage = 45; // km per liter
  const evEfficiency = 30; // km per unit (kWh)
  const unitPrice = 8; // cost per kWh

  const petrolCostPerYear = (kmPerDay * 365 / petrolMileage) * petrolPrice;
  const evCostPerYear = (kmPerDay * 365 / evEfficiency) * unitPrice;
  const savings = (petrolCostPerYear - evCostPerYear) * years;
  const co2Saved = (kmPerDay * 365 * 0.1) * years; // ~0.1kg CO2 per km

  return (
    <div className="py-24 px-6 md:px-12 bg-black" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 uppercase italic">Savings <span className="text-red-600">Engine</span></h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Visualize the power of switching to Angel Electric.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900/50 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border border-red-900/20">
            <h3 className="text-2xl font-black mb-10 text-white uppercase italic tracking-tight">Your Commute Profile</h3>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between mb-4 items-end">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Daily Distance</label>
                  <span className="text-red-600 font-black text-xl italic">{kmPerDay} KM</span>
                </div>
                <input 
                  type="range" min="10" max="150" value={kmPerDay} 
                  onChange={(e) => setKmPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-red-600 border border-red-900/30"
                />
              </div>
              <div>
                <div className="flex justify-between mb-4 items-end">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Petrol Rate (₹/L)</label>
                  <span className="text-red-600 font-black text-xl italic">₹{petrolPrice}</span>
                </div>
                <input 
                  type="range" min="90" max="120" value={petrolPrice} 
                  onChange={(e) => setPetrolPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-red-600 border border-red-900/30"
                />
              </div>
              <div>
                <div className="flex justify-between mb-4 items-end">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ownership Duration</label>
                  <span className="text-red-600 font-black text-xl italic">{years} Year{years > 1 ? 's' : ''}</span>
                </div>
                <input 
                  type="range" min="1" max="10" value={years} 
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-red-600 border border-red-900/30"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-red-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-red-600/20 flex flex-col justify-center items-center text-center group transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-white/10 group-hover:rotate-12 transition-transform">
                <i className="fas fa-wallet"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Total Petrol Savings</p>
              <h4 className="text-4xl font-black italic tracking-tighter">₹{Math.round(savings).toLocaleString('en-IN')}</h4>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl border border-red-900/20 flex flex-col justify-center items-center text-center group transition-all hover:scale-105">
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-3xl border border-red-900/20 group-hover:-rotate-12 transition-transform text-red-500">
                <i className="fas fa-leaf"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Carbon Reduction</p>
              <h4 className="text-4xl font-black italic tracking-tighter">{Math.round(co2Saved)} KG CO2</h4>
            </div>

            <div className="bg-slate-900/30 p-10 rounded-[3rem] border border-red-900/10 shadow-xl flex flex-col justify-center items-center text-center col-span-1 sm:col-span-2 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="text-center md:text-left space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Environmental Impact</p>
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tight">Equal to planting <span className="text-red-600">{Math.round(co2Saved / 20)} Full Grown Trees</span></h4>
                </div>
                <div className="flex -space-x-3">
                  {[...Array(Math.min(5, Math.round(co2Saved / 20)))].map((_, i) => (
                    <div key={i} className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 border border-red-900/20 shadow-lg backdrop-blur-md">
                      <i className="fas fa-tree text-lg"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
