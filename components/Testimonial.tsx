
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    cat: "Business Loan",
    img: "https://i.pravatar.cc/100?img=11",
    text: "Kalp Money made my business loan process incredibly simple. Got approved in just 24 hours with minimal documentation. Highly recommended for MSMEs!"
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    cat: "Home Loan",
    img: "https://i.pravatar.cc/100?img=26",
    text: "Finally bought my dream home thanks to Kalp Money's competitive home loan rates. The team was supportive throughout the entire process."
  },
  {
    name: "Amit Patel",
    role: "Doctor",
    cat: "Personal Loan",
    img: "https://i.pravatar.cc/100?img=12",
    text: "The EMI calculator helped me plan my finances perfectly. Transparent process with no hidden charges. Great customer service!"
  },
  {
    name: "Sneha Reddy",
    role: "Entrepreneur",
    cat: "Loan Against Car",
    img: "https://i.pravatar.cc/100?img=32",
    text: "Got a loan against my car within hours. The interest rates are competitive and the process was completely digital. Very impressed!"
  }
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="bg-brand-light text-[#204782] px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">What Our Customers Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted Kalp Money for their financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="text-[#F25927] font-bold text-5xl opacity-20 mb-4 font-serif">“</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">"{r.text}"</p>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img src={r.img} className="w-12 h-12 rounded-full object-cover border-2 border-brand-light" alt={r.name} />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
              <div className="mt-4 text-[10px] font-bold text-[#F25927] uppercase tracking-widest">{r.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
