
import React from 'react';
import Hero from '../components/Hero';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

interface NavTile {
  id: Page;
  title: string;
  desc: string;
  icon: string;
  color: string;
  image: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const NAV_TILES: NavTile[] = [
    { 
      id: 'vehicles', 
      title: 'Performance Fleet', 
      desc: 'Top-tier electric machines', 
      icon: 'fa-motorcycle', 
      color: 'from-red-600/90 to-black',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'brands', 
      title: 'Power Partners', 
      desc: 'The biggest names in EV', 
      icon: 'fa-building', 
      color: 'from-red-800/90 to-red-950/95',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'calculator', 
      title: 'Savings Engine', 
      desc: 'Fuel vs EV comparison', 
      icon: 'fa-calculator', 
      color: 'from-black to-red-900/95',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'reviews', 
      title: 'Owner Voices', 
      desc: 'Stories of the electric life', 
      icon: 'fa-star', 
      color: 'from-red-700/90 to-black',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'service', 
      title: 'Service Pitstop', 
      desc: 'Expert care for your ride', 
      icon: 'fa-tools', 
      color: 'from-red-900/90 to-slate-900/95',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'about', 
      title: 'About The Core', 
      desc: 'The Angel Marketing legacy', 
      icon: 'fa-info-circle', 
      color: 'from-red-600/90 to-red-800/95',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: 'contact', 
      title: 'Visit Showroom', 
      desc: 'Find our showrooms', 
      icon: 'fa-map-marker-alt', 
      color: 'from-black to-red-600/95',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <div className="bg-black">
      <Hero onNavigate={onNavigate} />
      
      <section className="py-16 md:py-24 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Angel <span className="text-red-600">Showroom</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-[10px] md:text-xs">Premium Electric Mobility Powered by Angel Marketing</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {NAV_TILES.map((tile) => (
              <div 
                key={tile.id}
                onClick={() => onNavigate(tile.id)}
                className="group relative h-64 md:h-72 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-red-600/20 hover:-translate-y-2 transition-all duration-500 border border-red-900/20"
              >
                {/* Background Image */}
                <img 
                  src={tile.image} 
                  alt={tile.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} transition-all duration-500 opacity-80 group-hover:opacity-90`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/40 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-red-600/60 border border-red-400/20">
                    <i className={`fas ${tile.icon} text-lg md:text-xl`}></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-1 leading-tight tracking-tight uppercase italic">{tile.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium leading-snug">{tile.desc}</p>
                </div>

                <div className="absolute top-6 right-6 text-white/5 text-5xl md:text-7xl group-hover:text-red-600/10 transition-all duration-500 -rotate-12 group-hover:rotate-0 pointer-events-none">
                  <i className={`fas ${tile.icon}`}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats on Home */}
      <section className="py-12 md:py-20 bg-slate-950 text-white relative overflow-hidden border-y border-red-900/20 px-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-red-600 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-red-900 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative z-10">
          <div>
             <h4 className="text-3xl md:text-5xl font-black text-red-600 mb-2">1000+</h4>
             <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Happy Customers</p>
          </div>
          <div>
             <h4 className="text-3xl md:text-5xl font-black text-red-600 mb-2">98%</h4>
             <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Service Rating</p>
          </div>
          <div>
             <h4 className="text-3xl md:text-5xl font-black text-red-600 mb-2">Since</h4>
             <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-500">2022</p>
          </div>
          <div>
             <h4 className="text-3xl md:text-5xl font-black text-red-600 mb-2">JBP</h4>
             <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Best Dealer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
