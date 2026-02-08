
import React from 'react';
import KnowledgeHub from '../components/KnowledgeHub';

const BlogPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">EV <span className="text-emerald-600">Knowledge Hub</span></h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">Stay updated with the latest trends, subsidy news, and battery maintenance tips.</p>
        </div>
        
        <KnowledgeHub />
        
        <div className="mt-24 space-y-12">
           <h3 className="text-3xl font-black text-slate-900 text-center">Featured Articles</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="group cursor-pointer">
                   <div className="h-64 rounded-[2.5rem] bg-slate-200 mb-6 overflow-hidden relative">
                      <img src={`https://images.unsplash.com/photo-1620055375841-f5979f18a245?q=80&w=2070&auto=format&fit=crop&u=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Guide</div>
                   </div>
                   <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-tight">10 Things to Check Before Buying Your First Electric Scooter</h4>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">Understanding battery chemistry, real-world range, and government FAME-II subsidies is crucial...</p>
                   <div className="flex items-center gap-4 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>May 12, 2025</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>5 Min Read</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
