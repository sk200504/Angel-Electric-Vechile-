
import React, { useState } from 'react';
import { VEHICLES } from '../constants';
import EVCard from '../components/EVCard';
import { EVVehicle } from '../types';
import { Page } from '../App';

interface VehiclesPageProps {
  onNavigate: (page: Page) => void;
}

const VehiclesPage: React.FC<VehiclesPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const [compareList, setCompareList] = useState<EVVehicle[]>([]);

  const filtered = filter === 'All' ? VEHICLES : VEHICLES.filter(v => v.type === filter);

  const toggleCompare = (v: EVVehicle) => {
    if (compareList.find(item => item.id === v.id)) {
      setCompareList(compareList.filter(item => item.id !== v.id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, v]);
    }
  };

  return (
    <div className="py-12 md:py-16 px-4 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase italic leading-tight">
            Browse our <span className="text-red-600">EV Fleet</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-xl uppercase tracking-widest text-[10px] md:text-xs mx-auto md:mx-0">
            Explore premium electric scooters designed for the modern Indian commute.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto justify-center">
           {['All', 'Scooter'].map(t => (
             <button 
              key={t}
              onClick={() => setFilter(t)}
              className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${filter === t ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'bg-slate-900 border border-red-900/20 text-slate-400 hover:text-white hover:border-red-600/50'}`}
             >
               {t}s
             </button>
           ))}
        </div>
      </div>

      {/* Comparison Drawer - Mobile Responsive */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 md:bottom-10 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 bg-slate-950 text-white p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-8 border border-red-900/30 animate-in slide-in-from-bottom-10 backdrop-blur-xl">
          <div className="flex gap-2 md:gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {compareList.map(v => (
              <div key={v.id} className="flex items-center gap-2 md:gap-3 bg-red-600/10 border border-red-900/20 p-2 pr-3 md:pr-4 rounded-xl shrink-0">
                <img src={v.image} className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain bg-black" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight truncate max-w-[80px]">{v.name}</span>
                <button onClick={() => toggleCompare(v)} className="ml-1 text-red-500 hover:text-red-400">
                  <i className="fas fa-times-circle"></i>
                </button>
              </div>
            ))}
            {compareList.length === 1 && <div className="flex items-center gap-3 bg-white/5 border border-dashed border-red-900/20 p-2 pr-4 rounded-xl text-[10px] text-slate-500 italic shrink-0">Add more</div>}
          </div>
          {compareList.length === 2 && (
            <button className="w-full md:w-auto bg-red-600 px-6 py-2.5 rounded-xl text-xs md:text-sm font-black hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 uppercase tracking-widest">
              Compare
            </button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {filtered.map(vehicle => (
          <div key={vehicle.id} className="relative">
            <EVCard 
              vehicle={vehicle} 
              onContactClick={() => onNavigate('contact')}
            />
            <button 
              onClick={() => toggleCompare(vehicle)}
              className={`absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${compareList.find(i => i.id === vehicle.id) ? 'bg-red-600 text-white' : 'bg-black/60 backdrop-blur text-slate-400 hover:text-red-500 border border-red-900/20'}`}
            >
              <i className="fas fa-columns"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;
