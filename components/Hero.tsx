
import React from 'react';
import { ArrowRight, Percent, Clock, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 bg-[#f8fafc] overflow-hidden text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-left" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light text-[#204782] rounded-full text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#204782] rounded-full animate-pulse"></span>
              Trusted by 50,000+ Customers
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Your Financial Dreams, <br />
              <span className="text-[#204782]">Our Priority</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-xl leading-relaxed">
              From personal loans to insurance, home loans to business funding - Kalp Money provides comprehensive financial solutions with the lowest interest rates and fastest approvals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12">
              <button className="bg-[#F25927] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d84a1e] transition-all shadow-lg shadow-orange-200 active:scale-95">
                Apply for Loan <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                Check Eligibility
              </button>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center text-[#204782] flex-shrink-0">
                  <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 sm:text-lg">10.5%</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Starting Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center text-[#204782] flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 sm:text-lg">24 Hrs</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Fast Approval</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center text-[#204782] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 sm:text-lg">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Secure</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg lg:flex-1" data-aos="fade-left">
            <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-3xl shadow-2xl border border-slate-100 ring-1 ring-slate-200/50">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Quick Loan Application</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8">Get instant approval in just 5 minutes</p>
              
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Loan Type</label>
                  <select className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 text-sm sm:text-base shadow-sm appearance-none cursor-pointer">
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Home Loan</option>
                    <option>Car Loan</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">Loan Amount</label>
                  <input 
                    type="text" 
                    placeholder="₹5,00,000" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <button type="submit" className="w-full bg-[#F25927] text-white py-4 rounded-xl font-bold hover:bg-[#d84a1e] transition-all mt-4 shadow-lg shadow-orange-200 active:scale-95">
                  Check Eligibility
                </button>
                <p className="text-[10px] sm:text-xs text-center text-slate-400 mt-4 leading-relaxed">
                  By submitting, you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-100/50 skew-x-12 translate-x-1/2 pointer-events-none hidden lg:block"></div>
    </section>
  );
};

export default Hero;
