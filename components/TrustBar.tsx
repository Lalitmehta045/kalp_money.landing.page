
import React from 'react';

const banks = [
  "HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak", "Yes Bank", "IndusInd", "Bajaj Finance"
];

const TrustBar: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 font-medium mb-10">Trusted by Leading Financial Institutions</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {banks.map((bank, i) => (
            <div key={i} className="px-8 py-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow font-bold text-slate-600 min-w-[140px] flex items-center justify-center text-center">
              {bank}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;