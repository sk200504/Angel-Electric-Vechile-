
import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#10b981_0%,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-black mb-4">Let's <span className="text-emerald-500">Connect.</span></h1>
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">We are here to power your journey</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
