
import React from 'react';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

const rates = [
  { type: 'SME Loans', rate: '8.99%', change: 'Best Value', up: true },
  { type: 'Personal Lines', rate: '10.25%', change: 'Steady', up: false },
  { type: 'Home Finance', rate: '8.15%', change: '-0.25%', down: true },
  { type: 'Project Funding', rate: '9.80%', change: 'Popular', up: true },
  { type: 'Debt Consol.', rate: '11.00%', change: 'Optimized', up: false },
  { type: 'Bridge Loans', rate: '12.50%', change: '-0.50%', down: true },
];

const StockTicker: React.FC = () => {
  return (
    <div className="bg-white/[0.02] border-y border-white/5 py-4 overflow-hidden whitespace-nowrap relative z-20 backdrop-blur-sm">
      <div className="flex animate-[scroll_50s_linear_infinite] gap-16 w-max items-center">
        {[...rates, ...rates, ...rates].map((rate, i) => (
          <div key={i} className="flex items-center gap-4 px-6 border-r border-white/5 last:border-0">
            <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">{rate.type}</span>
            <span className="font-mono text-sm font-bold text-white">{rate.rate}</span>
            <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter ${rate.up ? 'text-orange-500' : rate.down ? 'text-blue-400' : 'text-slate-500'}`}>
              {rate.up ? <TrendingUp className="w-3 h-3" /> : rate.down ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              {rate.change}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default StockTicker;
