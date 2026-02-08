
import React from 'react';
import { EVVehicle } from '../types';

interface EVCardProps {
  vehicle: EVVehicle;
  onContactClick?: () => void;
}

const EVCard: React.FC<EVCardProps> = ({ vehicle, onContactClick }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur rounded-[2.5rem] overflow-hidden shadow-2xl transition-all border border-red-900/20 group flex flex-col h-full hover:border-red-600/50">
      {/* Framed Image Container - Optimized for fitting images */}
      <div className="m-4 rounded-[2rem] relative h-64 overflow-hidden bg-black border border-red-900/20 shadow-inner flex items-center justify-center p-8">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-tighter shadow-sm border border-red-900/30">
            {vehicle.type}
          </span>
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
            Ready To Ship
          </span>
        </div>
      </div>
      
      <div className="p-8 pt-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-1">Official Dealer</p>
            <p className="text-2xl font-black text-white uppercase tracking-tight">{vehicle.brand}</p>
          </div>
          {vehicle.brandLogo && (
            <img 
              src={vehicle.brandLogo} 
              alt={vehicle.brand} 
              className="h-8 w-auto invert grayscale group-hover:grayscale-0 transition-all opacity-30 group-hover:opacity-100" 
            />
          )}
        </div>
        
        <div className="mb-8 p-6 bg-black/40 rounded-3xl border border-red-900/20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-red-600 mb-3">
            <i className="fas fa-palette text-lg"></i>
            <span className="w-1 h-1 bg-red-900 rounded-full"></span>
            <i className="fas fa-bolt text-lg"></i>
          </div>
          <p className="text-slate-400 font-bold text-sm leading-snug uppercase tracking-tight">
            More colors and designs available at our showroom
          </p>
          <div className="mt-4 pt-4 border-t border-red-900/20 w-full">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Charging Time</p>
            <p className="text-red-500 font-black text-xl">{vehicle.chargingTime}</p>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={onContactClick}
            className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wider"
          >
            <i className="fas fa-store"></i>
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVCard;
