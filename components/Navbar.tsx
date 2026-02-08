
import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'brands', label: 'Brands' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md py-4 px-4 md:px-12 flex justify-between items-center shadow-lg border-b border-red-900/30">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigate('home')}>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/30">
          <i className="fas fa-bolt text-lg md:text-xl"></i>
        </div>
        <div>
          <span className="text-lg md:text-xl font-black tracking-tight text-white block leading-none uppercase">ANGEL</span>
          <span className="text-[8px] md:text-[10px] font-bold text-red-500 tracking-widest uppercase">Electric Vehicle</span>
        </div>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
        {links.map(link => (
          <button
            key={link.id}
            onClick={() => handleNavigate(link.id)}
            className={`transition-colors hover:text-red-500 ${currentPage === link.id ? 'text-red-500 font-black' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-white text-2xl w-10 h-10 flex items-center justify-center focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
      </button>

      {/* Mobile Menu Box */}
      <div className={`absolute top-[calc(100%+1rem)] left-4 right-4 md:hidden transition-all duration-300 transform origin-top ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-slate-900/95 backdrop-blur-2xl border border-red-600/30 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(220,38,38,0.2)]">
          <div className="flex flex-col items-center gap-6">
            <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-2">Navigation</p>
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-xl font-black uppercase italic tracking-tighter transition-all hover:scale-110 ${currentPage === link.id ? 'text-red-600' : 'text-slate-300'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="w-full h-px bg-red-900/20 my-2"></div>
            <button 
               onClick={() => handleNavigate('calculator')}
               className="w-full bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/30 active:scale-95 transition-all"
            >
              Savings Engine
            </button>
            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-2">© Angel Marketing 2025</p>
          </div>
        </div>
        {/* Subtle glow behind the box */}
        <div className="absolute inset-0 bg-red-600/5 blur-3xl -z-10 rounded-[2.5rem]"></div>
      </div>
    </nav>
  );
};

export default Navbar;
