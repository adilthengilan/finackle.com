export const Footer = () => {
  return (
    <footer className="bg-[#13215D] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-5">
            <h3 className="font-black text-2xl tracking-tight text-white mb-3">
              FINACKLE<span className="text-blue-300">.</span>
            </h3>
            <p className="text-[#EEF2FB] font-bold text-sm mb-2">
              Strategic Finance &amp; Business Insights Partner
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
              Helping businesses understand performance, improve cash flow visibility, and make confident financial decisions.
            </p>
          </div>
          
          <div className="md:col-span-3">
             <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">UAE Office &amp; Contact</h4>
             <ul className="space-y-3 text-sm text-slate-300 font-normal">
                <li className="leading-relaxed">
                  B.C. 1308408 Ajman Free Zone C1 Building<br/>Ajman, United Arab Emirates
                </li>
                <li>
                  <a href="mailto:contactus@finackle.com" className="hover:text-white text-[#EEF2FB] transition-colors underline-offset-4 hover:underline">
                    contactus@finackle.com
                  </a>
                </li>
                <li>
                  <a href="tel:+971545022747" className="hover:text-white text-[#EEF2FB] transition-colors">
                    +971 545022747
                  </a>
                </li>
             </ul>
          </div>
          
          <div className="md:col-span-2">
             <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Navigation</h4>
             <ul className="space-y-2.5 text-sm text-slate-300 font-medium flex flex-col">
                <a href="#challenge" className="hover:text-white transition-colors w-fit">The Challenge</a>
                <a href="#value" className="hover:text-white transition-colors w-fit">How We Create Value</a>
                <a href="#industries" className="hover:text-white transition-colors w-fit">Industries</a>
                <a href="#finance-function" className="hover:text-white transition-colors w-fit">Finance Function</a>
                <a href="#reporting" className="hover:text-white transition-colors w-fit">Monthly Reporting</a>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Company</h4>
             <ul className="space-y-2.5 text-sm text-slate-300 font-medium flex flex-col">
                <a href="#why-finackle" className="hover:text-white transition-colors w-fit">Why Finackle</a>
                <a href="#who-we-help" className="hover:text-white transition-colors w-fit">Who We Help</a>
                <a href="#our-approach" className="hover:text-white transition-colors w-fit">Our Approach</a>
                <a href="#about" className="hover:text-white transition-colors w-fit">About</a>
                <a href="#health-check-form" className="hover:text-white transition-colors w-fit">Health Check</a>
             </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Finackle. Strategic Finance &amp; Business Insights Partner. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-400">United Arab Emirates</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-400">Confidential Financial Management</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
