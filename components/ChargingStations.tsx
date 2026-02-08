
import React, { useState, useEffect } from 'react';
import { getNearbyChargers } from '../services/geminiService';
import { GroundingSource } from '../types';

const ChargingStations: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [results, setResults] = useState<{text: string, sources: GroundingSource[]} | null>(null);

  const findChargers = () => {
    setLoading(true);
    setLocationError('');
    
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getNearbyChargers(position.coords.latitude, position.coords.longitude);
          setResults(data);
        } catch (error) {
          setLocationError('Could not fetch charging data. Please try again.');
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLocationError('Permission denied. Please enable location to find chargers nearby.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Never Run Out of <span className="text-sky-600">Juice</span></h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Quickly locate the fastest charging networks around you. We integrate real-time search to find Tata Power EZ Charge, Ather Grid, and Ola Hyperchargers near your current location.
          </p>
          
          <button 
            onClick={findChargers}
            disabled={loading}
            className="group flex items-center gap-3 bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 disabled:opacity-50"
          >
            {loading ? (
              <i className="fas fa-circle-notch animate-spin"></i>
            ) : (
              <i className="fas fa-location-crosshairs group-hover:rotate-90 transition-transform"></i>
            )}
            {loading ? 'Locating Stations...' : 'Find Chargers Near Me'}
          </button>

          {locationError && (
            <p className="mt-4 text-red-500 font-medium text-sm flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i> {locationError}
            </p>
          )}
        </div>

        <div className="relative">
          {results ? (
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-xl max-h-[500px] overflow-y-auto animate-in zoom-in-95 duration-500">
              <div className="prose prose-slate prose-sm max-w-none mb-8 whitespace-pre-wrap">
                {results.text}
              </div>
              
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Links</p>
                <div className="grid grid-cols-1 gap-2">
                  {results.sources.map((source, i) => (
                    <a 
                      key={i} 
                      href={source.uri} 
                      target="_blank" 
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 transition-all flex items-center justify-between group shadow-sm"
                    >
                      <span className="font-bold text-slate-800 text-sm truncate mr-4">{source.title}</span>
                      <i className="fas fa-chevron-right text-slate-300 group-hover:text-sky-500 transition-colors"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-100 rounded-[2rem] aspect-video flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-400">
              <i className="fas fa-map-marked-alt text-6xl mb-4 opacity-50"></i>
              <p className="font-bold">Enter your location to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChargingStations;
