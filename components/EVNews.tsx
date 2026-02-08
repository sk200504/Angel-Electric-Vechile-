
import React, { useEffect, useState } from 'react';
import { getLatestEVNews } from '../services/geminiService';
import { GroundingSource } from '../types';

const EVNews: React.FC = () => {
  const [newsText, setNewsText] = useState('');
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { text, sources } = await getLatestEVNews();
        setNewsText(text);
        setSources(sources);
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex flex-col items-center justify-center gap-4 text-white">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sky-300 font-medium animate-pulse">Scanning the web for latest EV updates...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-slate-700 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20">
            <i className="fas fa-bolt-lightning text-white text-2xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">EV News Pulse</h2>
            <p className="text-sky-400 font-medium">Real-time updates from Indian markets</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-sky max-w-none">
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 leading-relaxed text-slate-300 whitespace-pre-wrap text-lg">
            {newsText}
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-3">Sources</h4>
          {sources.length > 0 ? (
            <div className="flex flex-col gap-4">
              {sources.map((source, index) => (
                <a 
                  key={index} 
                  href={source.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700 hover:border-sky-500 transition-all flex items-start gap-3 group"
                >
                  <div className="mt-1">
                    <i className="fas fa-link text-sky-500 group-hover:scale-110 transition-transform"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white line-clamp-2 leading-snug">{source.title}</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-medium">{new URL(source.uri).hostname}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic">Grounding metadata not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EVNews;
