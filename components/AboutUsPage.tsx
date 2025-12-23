
import React from 'react';
import { Target, Eye, ShieldCheck, Users, TrendingUp, Award } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Kalp Money Team"
        />
        <div className="absolute inset-0 bg-[#204782]/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tight">About Kalp Money</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Empowering individuals and businesses with tech-driven financial solutions across India.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1" data-aos="fade-right">
              <span className="text-[#F25927] font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Redefining the Financial <br className="hidden sm:block" /> Landscape Since 2018
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Kalp Money was founded with a simple yet powerful goal: to make financial products accessible, transparent, and hassle-free for everyone. We noticed that traditional banking often left many behind due to complex paperwork and slow processes.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                By leveraging cutting-edge technology and partnering with India's top financial institutions, we've built a platform that simplifies the entire journey from loan application to disbursal.
              </p>
            </div>
            <div className="flex-1 relative" data-aos="fade-left">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                  alt="Financial Success" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#F25927] p-8 rounded-3xl text-white hidden sm:block shadow-xl">
                <div className="text-4xl font-black">7+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100" data-aos="fade-up">
              <div className="w-16 h-16 bg-brand-light text-[#204782] rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To bridge the financial gap in India by providing seamless, digital-first access to loans and insurance products, empowering our customers to achieve their life goals without financial constraints.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-orange-50 text-[#F25927] rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become India's most trusted financial marketplace, recognized for our integrity, customer-centricity, and technological innovation in the fintech space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">The Values We Live By</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our core values are the foundation of everything we do at Kalp Money.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Trust", desc: "Building lasting relationships through honesty and data security." },
              { icon: Users, title: "Customer First", desc: "Your financial well-being is our primary measure of success." },
              { icon: TrendingUp, title: "Innovation", desc: "Continuously evolving our tech to serve you better and faster." },
              { icon: Award, title: "Excellence", desc: "Committed to the highest standards in financial services." },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 group" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="w-20 h-20 bg-brand-light text-[#204782] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#204782] group-hover:text-white transition-all duration-300">
                  <v.icon size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-[#204782]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Want to be a part of our journey?</h2>
          <p className="text-blue-100 text-lg mb-10">
            We are always looking for passionate individuals who want to redefine finance in India.
          </p>
          <button className="bg-[#F25927] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#d84a1e] transition-all shadow-xl active:scale-95">
            Join Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
