import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      {/* Floating Rounded Island */}
      <div className="pointer-events-auto w-full max-w-6xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_10px_35px_rgba(19,33,93,0.08)] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex justify-between items-center transition-all duration-300 ring-1 ring-[#13215D]/5">
        
        {/* Brand Logo */}
       <a href="#" className="flex items-center group pl-1">
  <img
    src="/finackle-logo.png"
    alt="Finackle"
    className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
  />
</a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-[#13215D]/80">
          <a href="#challenge" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">The Challenge</a>
          <a href="#value" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">Value</a>
          <a href="#industries" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">Industries</a>
          <a href="#finance-function" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">Finance Function</a>
          <a href="#reporting" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">Monthly Reporting</a>
          <a href="#why-finackle" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">Why Finackle</a>
          <a href="#about" className="px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-[#13215D] transition-all">About</a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="#health-check-form" 
            className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-bold bg-[#13215D] text-white px-5 py-2.5 rounded-full hover:bg-[#142360] hover:shadow-lg hover:shadow-[#13215D]/20 transition-all shadow-sm"
          >
            Book a Health Check <ArrowUpRight className="w-4 h-4 text-[#1acbc9]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#13215D] hover:bg-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto w-full max-w-6xl mt-2 bg-white/95 backdrop-blur-2xl border border-white/90 rounded-3xl p-6 shadow-2xl ring-1 ring-[#13215D]/5 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-[#13215D]">
            <a 
              href="#challenge" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              The Challenge
            </a>
            <a 
              href="#value" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              How We Create Value
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              Industries
            </a>
            <a 
              href="#finance-function" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              Finance Function
            </a>
            <a 
              href="#reporting" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              Monthly Reporting
            </a>
            <a 
              href="#why-finackle" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              Why Finackle
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 hover:text-[#1acbc9] transition-colors"
            >
              About
            </a>
            <div className="pt-2">
              <a 
                href="#health-check-form" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold bg-[#13215D] text-white px-5 py-3 rounded-full hover:bg-[#142360] transition-all shadow-md"
              >
                Book a Health Check <ArrowUpRight className="w-4 h-4 text-[#1acbc9]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
