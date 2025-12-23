
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="payment" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="bg-[#F25927] rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_30px_60px_-15px_rgba(242,89,39,0.4)]">
          <div className="relative z-10 text-white text-left">
            <span className="text-sm font-bold uppercase tracking-widest block mb-4 text-orange-100">Quick Eligibility Check</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Fuel your journey <br /> with Kalp Money
            </h2>
          </div>
          <div className="w-full max-w-md relative z-10">
            <div className="bg-white rounded-full p-2 flex border-4 border-white/20">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-transparent flex-1 px-6 text-slate-900 outline-none placeholder:text-slate-400 font-medium"
              />
              <button className="bg-[#204782] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a3a6a] transition-all whitespace-nowrap active:scale-95">
                Check Now
              </button>
            </div>
            <p className="text-orange-100 text-sm mt-4 text-center md:text-left font-medium">
              Powered by advanced AI for instant pre-approvals.
            </p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-blue-900/30 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default CTA;