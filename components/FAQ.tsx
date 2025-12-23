
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What is the minimum credit score required?",
    a: "While we look at a holistic set of data points, a CIBIL score of 650+ is generally preferred for instant pre-approvals. However, even if your score is lower, our AI might still approve you based on other financial indicators."
  },
  {
    q: "How long does the disbursal process take?",
    a: "Once your application is verified and the digital E-mandate is set up, funds are usually disbursed within 4 to 12 business hours directly to your linked bank account."
  },
  {
    q: "Are there any prepayment penalties?",
    a: "At Kalp Money, we believe in financial freedom. We offer zero foreclosure charges after the first 6 successful EMI payments on most our personal loan products."
  },
  {
    q: "Is my data secure with Kalp Money?",
    a: "Absolutely. We use bank-grade AES-256 encryption. Your data is stored in ISO-certified data centers and is never shared with third parties without your explicit consent."
  },
  {
    q: "Can I get a top-up on my existing loan?",
    a: "Yes! If you have maintained a good repayment record for at least 6 months, you are eligible for an instant top-up loan at preferential interest rates."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl font-black text-white">Your Questions, <br /> Answered</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white/[0.02] border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-blue-500/30 bg-blue-600/[0.03]' : 'border-white/5 hover:border-white/10'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors pr-8 ${openIndex === i ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-8 text-slate-400 leading-relaxed font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
