
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-black" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-6xl font-black text-white mb-6 tracking-tight uppercase italic">Contact <span className="text-red-600">Us</span></h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-bold">
              Connect with Vikas Khatri at Angel Marketing for any sales, service, or partnership queries. We're based in the heart of Jabalpur.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6 bg-slate-900/50 p-6 rounded-3xl border border-red-900/10">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/20">
                  <i className="fas fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1 uppercase tracking-wider text-sm">Our Location</h4>
                  <p className="text-slate-400 text-lg leading-snug font-medium italic">Ranjhi, Near Moni Tiraha, Jabalpur, Madhya Pradesh<br/>Pincode:- 482011</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-slate-900/50 p-6 rounded-3xl border border-red-900/10">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/20">
                  <i className="fas fa-phone-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white mb-1 uppercase tracking-wider text-sm">Direct Line</h4>
                  <p className="text-slate-400 text-2xl font-black tracking-tight">9340230587</p>
                  <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">Available for Call & WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-slate-900 p-4 rounded-[3rem] shadow-2xl relative overflow-hidden border border-red-600/30 h-[600px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.044955767727!2d80.0076!3d23.1678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ad685e135111%3A0x6378e9f50e82c57d!2sRanjhi%2C%20Jabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715424912345!5m2!1sen!2sin" 
                className="w-full h-full rounded-[2.5rem] border-0 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-8 text-center bg-red-600/10 p-6 rounded-3xl border border-red-900/20">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                <p className="text-white font-black text-lg">Monday — Sunday | 10:00 AM — 08:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
