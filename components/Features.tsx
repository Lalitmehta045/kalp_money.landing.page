
import React from 'react';
import { ArrowRight, Activity, TrendingUp, Zap, Shield, PieChart, Landmark } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#020617] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">Beyond Simple Banking</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            We provide an integrated ecosystem of credit, investment, and advisory tools designed for the modern wealth-builder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card */}
          <div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative group overflow-hidden" data-aos="fade-right">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Activity className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Advanced Wealth Tracker</h3>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">AI-Powered Portfolio Analysis</div>
                </div>
              </div>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-colors">
                Open Dashboard
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white/[0.03] p-10 rounded-[2rem] border border-white/5 text-center group hover:bg-white/[0.05] transition-all">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Net Asset Value</div>
                <div className="text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">₹84.2M</div>
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" /> +₹2.4M (Last 30d)
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <PieChart className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-slate-300">Asset Allocation</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-slate-300">Credit Utilization</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-between group cursor-pointer hover:bg-blue-600/20 transition-all">
                  <span className="font-bold text-blue-400">Request Audit</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Bento Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 rounded-[2rem] p-8 border border-white/10 shadow-2xl relative group overflow-hidden h-full" data-aos="fade-left">
              <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-orange-500 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Flash Capital</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Get instant liquidity for opportunistic investments. 15-minute approvals for existing partners.
              </p>
              <div className="text-4xl font-black text-white/20 group-hover:text-orange-500/20 transition-colors absolute bottom-4 right-6 pointer-events-none">
                <Zap size={80} />
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-[2rem] p-8 shadow-2xl relative group overflow-hidden h-full" data-aos="fade-left" data-aos-delay="100">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Fortress Protocol</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Biometric security & multi-sig approvals for every high-value transaction.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Status</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({className}: {className?: string}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default Features;
