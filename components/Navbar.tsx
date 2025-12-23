
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  navigateTo: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, view: 'home' | 'about' = 'home') => {
    e.preventDefault();
    setIsOpen(false);
    
    if (view !== currentView) {
      navigateTo(view);
      // If we are navigating to a section on home from another page, 
      // we wait for the render then scroll. For simplicity, we just navigate to the view.
      if (id === 'home' || id === 'about-us') return;
    }

    if (view === 'home' && id !== 'home') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e as any, 'home', 'home')}>
            <img 
              src="kalp-logo.png" 
              alt="Kalp Money Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const container = target.parentElement;
                if (container && !container.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'logo-fallback flex items-center gap-3';
                  fallback.innerHTML = `
                    <div class="w-10 h-10 rounded-full bg-[#204782] flex items-center justify-center relative overflow-hidden">
                      <div class="absolute top-0 left-2 w-5 h-5 bg-[#F25927] transform -rotate-12 translate-y-[-2px]"></div>
                      <span class="text-white font-bold text-2xl relative z-10">K</span>
                    </div>
                    <span class="text-2xl font-bold text-[#204782]">Kalp <span class="text-[#204782]">Money</span></span>
                  `;
                  container.appendChild(fallback);
                }
              }}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" onClick={(e) => handleNavClick(e, 'home', 'home')} className={`font-medium transition-colors ${currentView === 'home' ? 'text-[#204782]' : 'text-slate-600 hover:text-[#204782]'}`}>Home</a>
            <a href="/about" onClick={(e) => handleNavClick(e, 'about-us', 'about')} className={`font-medium transition-colors ${currentView === 'about' ? 'text-[#204782]' : 'text-slate-600 hover:text-[#204782]'}`}>About Us</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services', 'home')} className="text-slate-600 font-medium hover:text-[#204782] transition-colors">Services</a>
            <a href="#emi-calculator" onClick={(e) => handleNavClick(e, 'emi-calculator', 'home')} className="text-slate-600 font-medium hover:text-[#204782] transition-colors">EMI Calculator</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'home')} className="text-slate-600 font-medium hover:text-[#204782] transition-colors">Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Phone className="w-5 h-5 text-[#204782]" />
              <span>+91 98765 43210</span>
            </div>
            <button className="bg-[#F25927] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#d84a1e] transition-all active:scale-95 shadow-lg shadow-orange-100">
              Apply Now
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`} style={{ top: '80px' }}>
        <div className="p-6 space-y-2">
          <a href="/" onClick={(e) => handleNavClick(e, 'home', 'home')} className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50">Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about-us', 'about')} className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50">About Us</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services', 'home')} className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50">Services</a>
          <a href="#emi-calculator" onClick={(e) => handleNavClick(e, 'emi-calculator', 'home')} className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50">EMI Calculator</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'home')} className="block py-4 text-xl font-bold text-slate-800 border-b border-slate-50">Contact</a>
          <div className="pt-8">
            <div className="flex items-center gap-3 text-slate-700 font-bold mb-6">
              <Phone className="w-6 h-6 text-[#204782]" />
              <span className="text-lg">+91 98765 43210</span>
            </div>
            <button className="w-full bg-[#F25927] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-100 active:scale-95 transition-transform">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
