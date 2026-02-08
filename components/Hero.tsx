
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const SLIDES = [
  {
    title: "Unleash The Power of EV",
    subtitle: "High-Performance Electric Scooters for the Modern Indian Road.",
    image: "https://i.gadgets360cdn.com/large/Honda_1730719474249.jpg?downsize=950:*",
    color: "from-red-600 to-red-900"
  },
  {
    title: "Silence Never Looked This Good",
    subtitle: "Premium Design Meets Zero Emissions at Angel Marketing.",
    image: "https://c.ndtvimg.com/2024-11/6b84dm9o_honda-activa-e_625x300_27_November_24.jpg?im=FaceCrop,algorithm=dnn,width=773,height=435",
    color: "from-red-800 to-black"
  },
  {
    title: "The Ultimate Range. Boldest Style.",
    subtitle: "Join the Electric Revolution in Full Crimson.",
    image: "https://evhub.co.in/cdn/shop/files/9.jpg?v=1749726234&width=533",
    color: "from-red-700 to-red-950"
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center pt-10 md:pt-20">
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-12 ${index === activeSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
        >
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left space-y-4 md:space-y-8 z-20 mt-16 lg:mt-0">
            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase shadow-xl animate-pulse border border-white/20`}>
              New Arrivals Available
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] uppercase italic tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl text-slate-400 font-medium max-w-xl mx-auto lg:mx-0">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => onNavigate('vehicles')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-2xl shadow-red-600/40 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-wider"
              >
                Explore The Fleet
              </button>
              <button 
                onClick={() => onNavigate('calculator')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border-2 border-red-600/50 px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all hover:-translate-y-1 uppercase tracking-wider"
              >
                View Savings
              </button>
            </div>
          </div>

          {/* Framed Image "Box" */}
          <div className="relative w-full lg:w-1/2 aspect-video flex items-center justify-center z-10 group px-4">
            <div className="absolute inset-0 bg-red-600/5 rounded-[2rem] md:rounded-[4rem] border border-red-900/20 shadow-[0_0_100px_rgba(220,38,38,0.05)] transform group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative w-full h-full p-4 md:p-16 flex items-center justify-center">
                <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform duration-1000"
                />
            </div>
            <div className="absolute top-1/4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-1/4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-red-900 rounded-full blur-[100px] opacity-30"></div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-30 flex gap-4 items-center">
        <span className="text-white font-black text-xl md:text-2xl tracking-tighter italic mr-2">0{activeSlide + 1}</span>
        <div className="flex gap-2">
            {SLIDES.map((_, i) => (
            <button 
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? 'w-12 md:w-16 bg-red-600' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
            ))}
        </div>
        <span className="text-slate-600 font-black text-xs md:text-sm tracking-tighter italic ml-2">/ 0{SLIDES.length}</span>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-red-600 rounded-full blur-[120px] md:blur-[180px] -translate-y-1/2 translate-x-1/2 opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
