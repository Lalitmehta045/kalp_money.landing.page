
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 text-left w-full" data-aos="fade-right">
            <span className="bg-brand-light text-[#204782] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 inline-block uppercase tracking-wider">Get Started Today</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              Ready to Achieve Your <br className="hidden sm:block" /> Financial Goals?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg mb-10 sm:mb-12 leading-relaxed max-w-xl">
              Whether you need a loan for your dream home, business expansion, or personal needs, we're here to help. Get in touch with our experts today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-light text-[#204782] rounded-2xl flex items-center justify-center group-hover:bg-[#204782] group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-light text-[#204782] rounded-2xl flex items-center justify-center group-hover:bg-[#204782] group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">support@kalpmoney.com</div>
                </div>
              </div>
              <div className="flex items-center gap-5 group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-light text-[#204782] rounded-2xl flex items-center justify-center group-hover:bg-[#204782] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800 tracking-tight leading-snug">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl lg:flex-1" data-aos="fade-left">
            <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 ring-1 ring-slate-200/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 tracking-tight">Request a Callback</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-8 sm:mb-10">Fill in your details and our experts will contact you within 24 hours.</p>
              
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm" 
                  />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Interested In</label>
                  <select className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all bg-white text-slate-900 text-sm sm:text-base shadow-sm appearance-none cursor-pointer">
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Home Loan</option>
                    <option>Insurance</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
                  <textarea 
                    placeholder="Tell us about your requirements..." 
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 outline-none focus:border-[#204782] focus:ring-4 focus:ring-blue-50 transition-all h-32 resize-none bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm"
                  ></textarea>
                </div>
                <button type="submit" className="sm:col-span-2 bg-[#F25927] text-white py-4 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#d84a1e] transition-all shadow-xl shadow-orange-100 active:scale-95 text-lg">
                  Request Callback <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="text-[10px] sm:text-xs text-center text-slate-400 mt-6 leading-relaxed">
                By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;