
import React from 'react';
import { ShieldCheck, Zap, Wallet } from 'lucide-react';

const Reasons: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-blue-600/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 order-2 lg:order-1 text-left" data-aos="fade-right">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 block">Process Workflow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">3 Simple Steps with <br className="hidden sm:block" /> Kalp Money.</h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="100">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Digital Onboarding</h4>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Complete your profile in minutes using our paperless e-KYC. Simple, secure, and purely digital.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="200">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Smart Verification</h4>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Our AI engine analyzes your credit health to provide customized loan offers at the best possible market rates.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="300">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Instant Payout</h4>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">Accept the offer and watch funds hit your account via lightning-fast digital transfer protocols.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 w-full" data-aos="fade-left">
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-600/10 rounded-[2.5rem] sm:rounded-[3rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl aspect-video sm:aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  alt="Financial Progress" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-[#1e293b]/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Client Satisfaction Rate</span>
                    <span className="text-white font-bold text-xs sm:text-sm">98.8%</span>
                  </div>
                  <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[98.8%] shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;