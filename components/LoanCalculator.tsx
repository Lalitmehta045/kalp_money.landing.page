
import React, { useState, useMemo } from 'react';
import { IndianRupee } from 'lucide-react';

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [months, setMonths] = useState(24);

  const calculated = useMemo(() => {
    const r = rate / 100 / 12;
    const n = months;
    if (r === 0) return { emi: amount / n, interest: 0, total: amount };
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - amount;
    return {
      emi: Math.round(emi),
      interest: Math.round(totalInterest),
      total: Math.round(totalPayable)
    };
  }, [amount, rate, months]);

  return (
    <section id="emi-calculator" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
          <span className="bg-brand-light text-[#204782] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 inline-block uppercase tracking-wider">EMI Calculator</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Calculate Your EMI Instantly</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Plan your finances better with our easy-to-use EMI calculator. Know your monthly payments before applying.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Inputs */}
          <div className="flex-1 w-full bg-white p-6 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="space-y-10 sm:space-y-12">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base">
                    <IndianRupee className="w-4 h-4 text-[#204782]" /> Loan Amount
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#204782]">₹{amount.toLocaleString('en-IN')}</div>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="10000000" 
                  step="50000" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer focus:outline-none" 
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span>₹1 Lakh</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base">
                    <span className="text-[#204782] font-black">%</span> Interest Rate (p.a.)
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#204782]">{rate}%</div>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="25" 
                  step="0.1" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer focus:outline-none" 
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base">
                    <span className="text-[#204782]">📅</span> Loan Tenure (Months)
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#204782]">{months} Months</div>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="360" 
                  step="6" 
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer focus:outline-none" 
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span>6 Months</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#F25927] text-white py-4 sm:py-5 rounded-2xl font-bold mt-10 sm:mt-16 hover:bg-[#d84a1e] transition-all shadow-lg shadow-orange-100 active:scale-95 text-lg">
              Apply for This Loan
            </button>
          </div>

          {/* Right: Results */}
          <div className="w-full lg:w-[450px] space-y-6 sm:space-y-8">
            <div className="bg-[#204782] p-8 sm:p-12 rounded-[2.5rem] text-white text-center shadow-2xl shadow-blue-100/50 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] opacity-80 mb-3">Your Monthly EMI</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tighter">₹{calculated.emi.toLocaleString('en-IN')}</div>
                <div className="text-xs sm:text-sm opacity-90 font-medium">for {months} months at {rate}% p.a.</div>
              </div>
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-8">
              <h4 className="font-bold text-slate-800 text-lg sm:text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#204782] rounded-full inline-block"></span>
                Loan Breakdown
              </h4>
              
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-100 rounded-full flex overflow-hidden shadow-inner">
                  <div className="h-full bg-[#204782] transition-all duration-500" style={{ width: `${(amount/calculated.total)*100}%` }}></div>
                  <div className="h-full bg-[#F25927] transition-all duration-500" style={{ width: `${(calculated.interest/calculated.total)*100}%` }}></div>
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>Principal</span>
                  <span>Interest</span>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600 font-bold">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#204782]"></span> Principal Amount
                  </div>
                  <div className="font-black text-slate-800 text-sm sm:text-lg">₹{amount.toLocaleString('en-IN')}</div>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600 font-bold">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#F25927]"></span> Total Interest
                  </div>
                  <div className="font-black text-slate-800 text-sm sm:text-lg">₹{calculated.interest.toLocaleString('en-IN')}</div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="font-bold text-slate-800 sm:text-lg">Total Payable</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#204782] tracking-tighter">₹{calculated.total.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;