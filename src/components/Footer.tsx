import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1E3C] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-14">
          {/* Brand & Description */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              {/* Logo on white tile with 5px radius */}
              <div className="bg-white rounded-[5px] p-1.5 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <img
                  src="/finackle-logo.png"
                  alt="Finackle"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Finackle
              </span>
            </a>

            <p className="text-[15px] leading-relaxed text-white/70 max-w-md font-normal">
              Turning financial data into clarity, control and better business decisions for growing
              UAE businesses.
            </p>
          </div>

          {/* Column "Explore" */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1FD6CB] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-[14.5px] font-medium text-white/75">
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  Free Health Check
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#who-we-work-with" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#how-we-help" className="hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#why-finackle" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column "Contact" */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1FD6CB] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-[14.5px] font-medium text-white/75">
              <li>
                <a
                  href="mailto:info@finackle.com"
                  className="hover:text-[#1FD6CB] transition-colors"
                >
                  info@finackle.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971545022747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1FD6CB] transition-colors"
                >
                  +971 54 502 2747
                </a>
              </li>
              <li className="text-white/60">Ajman Free Zone, UAE</li>
            </ul>
          </div>
        </div>

        {/* Divider & Sub-Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/60 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Finackle F.Z.E. All rights reserved.
          </div>
          <div>
            Finance operations &middot; Reporting &middot; Compliance &middot; CFO advisory
          </div>
        </div>
      </div>
    </footer>
  );
};
