
import React from 'react';
import { Clock, Shield, FileText, Zap, Headphones, CheckCircle } from 'lucide-react';

const advantages = [
  { title: "Quick Approval", icon: Clock, desc: "Get loan approval within 24 hours with our streamlined digital process." },
  { title: "100% Secure", icon: Shield, desc: "Bank-grade security ensures your personal and financial data is always protected." },
  { title: "Minimal Documentation", icon: FileText, desc: "Simple paperwork with digital verification makes the process hassle-free." },
  { title: "Instant Disbursal", icon: Zap, desc: "Approved amount is transferred directly to your account within hours." },
  { title: "24/7 Support", icon: Headphones, desc: "Our dedicated support team is available round the clock to assist you." },
  { title: "Transparent Process", icon: CheckCircle, desc: "No hidden charges or surprises. What you see is what you pay." }
];

const WhyUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 sm:py-24 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
          <span className="bg-brand-light text-[#204782] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 inline-block uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">The Kalp Money Advantage</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            We're committed to making your financial journey smooth, transparent, and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {advantages.map((ad, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-light rounded-2xl flex items-center justify-center text-[#204782] flex-shrink-0 group-hover:bg-[#204782] group-hover:text-white transition-all duration-300">
                <ad.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-[#204782] transition-colors">{ad.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{ad.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#204782] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center shadow-2xl shadow-blue-100" data-aos="zoom-in">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">50K+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] opacity-80">Happy Customers</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">₹500Cr+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] opacity-80">Loans Disbursed</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">50+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] opacity-80">Banking Partners</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">4.8/5</div>
            <div className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] opacity-80">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;