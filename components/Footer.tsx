
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 md:px-12 text-white mt-auto border-t border-red-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-white block leading-none uppercase">ANGEL</span>
                  <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">Electric Vehicle</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                Owned and operated by Vikas Khatri. Dedicated to bringing sustainable and powerful electric mobility to the heart of Jabalpur since 2022.
              </p>
              <div className="flex gap-4">
                {['instagram', 'facebook-f', 'whatsapp'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-600/10 transition-all border border-red-900/10 shadow-sm">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest border-l-2 border-red-600 pl-4">EV Hub</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><button className="hover:text-red-500 transition-colors">Charging Networks</button></li>
              <li><button className="hover:text-red-500 transition-colors">Battery Life Tips</button></li>
              <li><button className="hover:text-red-500 transition-colors">Subsidy Guide</button></li>
              <li><button className="hover:text-red-500 transition-colors">Maintenance Schedule</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest border-l-2 border-red-600 pl-4">Eco Mission</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><button className="hover:text-red-500 transition-colors">Zero Emission Vision</button></li>
              <li><button className="hover:text-red-500 transition-colors">Green Jabalpur</button></li>
              <li><button className="hover:text-red-500 transition-colors">Recycling Program</button></li>
              <li><button className="hover:text-red-500 transition-colors">EV Community</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 text-sm uppercase tracking-widest border-l-2 border-red-600 pl-4">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><button onClick={() => onNavigate('calculator')} className="hover:text-red-500 transition-colors">Savings Calculator</button></li>
              <li><button onClick={() => onNavigate('service')} className="hover:text-red-500 transition-colors">Service Hub</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-red-500 transition-colors">Showroom Address</button></li>
              <li><button onClick={() => onNavigate('vehicles')} className="hover:text-red-500 transition-colors">Browse Models</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-red-900/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-600 tracking-[0.2em] uppercase">
          <p>© 2025 Vikas Khatri. Angel Marketing, Jabalpur.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-red-500 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
