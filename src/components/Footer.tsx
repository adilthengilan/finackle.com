export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F8FAFC] to-white text-[#13215D] pt-20 pb-12 border-t border-[#E5EAF2] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#1acbc9]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#13215D]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-[#E5EAF2] pb-16">
          <div className="md:col-span-5">
            <h3 className="font-black text-2xl tracking-tight text-[#13215D] mb-3">
              FINACKLE<span className="text-[#1acbc9]">.</span>
            </h3>
            <p className="text-[#13215D] font-bold text-sm mb-2">
              Strategic Finance &amp; Business Insights Partner
            </p>
            <p className="text-[#667085] text-sm leading-relaxed max-w-sm font-normal">
              Helping businesses understand performance, improve cash flow visibility, and make confident financial decisions.
            </p>
          </div>
          
          <div className="md:col-span-3">
             <h4 className="font-bold text-[#13215D] text-xs uppercase tracking-wider mb-5">UAE Office &amp; Contact</h4>
             <ul className="space-y-3 text-sm text-[#667085] font-normal">
                <li className="leading-relaxed">
                  B.C. 1308408 Ajman Free Zone C1 Building<br/>Ajman, United Arab Emirates
                </li>
                <li>
                  <a href="mailto:contactus@finackle.com" className="hover:text-[#13215D] text-[#142360] font-semibold transition-colors underline-offset-4 hover:underline">
                    contactus@finackle.com
                  </a>
                </li>
                <li>
                  <a href="tel:+971545022747" className="hover:text-[#13215D] text-[#142360] font-semibold transition-colors">
                    +971 545022747
                  </a>
                </li>
             </ul>
          </div>
          
          <div className="md:col-span-2">
             <h4 className="font-bold text-[#13215D] text-xs uppercase tracking-wider mb-5">Navigation</h4>
             <ul className="space-y-2.5 text-sm text-[#667085] font-medium flex flex-col">
                <a href="#challenge" className="hover:text-[#13215D] transition-colors w-fit">The Challenge</a>
                <a href="#value" className="hover:text-[#13215D] transition-colors w-fit">How We Create Value</a>
                <a href="#industries" className="hover:text-[#13215D] transition-colors w-fit">Industries</a>
                <a href="#finance-function" className="hover:text-[#13215D] transition-colors w-fit">Finance Function</a>
                <a href="#reporting" className="hover:text-[#13215D] transition-colors w-fit">Monthly Reporting</a>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-bold text-[#13215D] text-xs uppercase tracking-wider mb-5">Company</h4>
             <ul className="space-y-2.5 text-sm text-[#667085] font-medium flex flex-col">
                <a href="#why-finackle" className="hover:text-[#13215D] transition-colors w-fit">Why Finackle</a>
                <a href="#who-we-help" className="hover:text-[#13215D] transition-colors w-fit">Who We Help</a>
                <a href="#our-approach" className="hover:text-[#13215D] transition-colors w-fit">Our Approach</a>
                <a href="#about" className="hover:text-[#13215D] transition-colors w-fit">About</a>
                <a href="#health-check-form" className="hover:text-[#13215D] transition-colors w-fit">Health Check</a>
             </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#667085]">
          <p>© {new Date().getFullYear()} Finackle. Strategic Finance &amp; Business Insights Partner. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#13215D] border border-[#E5EAF2] text-[11px] font-semibold">
              United Arab Emirates
            </span>
            <span className="text-[#667085]/40">·</span>
            <span className="text-[#667085]">Confidential Financial Management</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
