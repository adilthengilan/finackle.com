import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = 'https://wa.me/971545022747?text=Talk%20to%20an%20Adviser';

  return (
    <header className="sticky top-0 z-40 bg-[#F4F7F8]/90 backdrop-blur-md border-b border-[#D3DDE3] transition-all">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/finackle-logo.png"
            alt="Finackle"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1F38]">
            Finackle
          </span>
        </a>

        {/* Desktop Navigation Links (<= 1000px hidden per spec) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-semibold text-[#3B4D66]">
          <a
            href="#services"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#who-we-work-with"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            Industries
          </a>
          <a
            href="#how-we-help"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            How it works
          </a>
          <a
            href="#why-finackle"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#faq"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
          <a
            href="#health-check-form"
            className="hover:text-[#0B7F8A] transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* WhatsApp Icon Button (5px radius) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-[5px] border border-[#D3DDE3] bg-white flex items-center justify-center text-[#25D366] hover:bg-[#D6F3F2] hover:border-[#1FD6CB] transition-all duration-200 shadow-xs"
            title="Chat with an Adviser on WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.507 14.307l-.009.075c-.244-.122-1.442-.712-1.666-.793-.223-.082-.386-.122-.549.122-.162.245-.63 793-.772.955-.143.163-.285.183-.529.061-.244-.122-1.03-.38-1.961-1.21-.724-.645-1.213-1.442-1.356-1.686-.142-.245-.015-.377.107-.499.11-.11.244-.285.367-.428.122-.142.163-.244.244-.407.082-.163.041-.305-.02-.428-.061-.122-.549-1.323-.752-1.811-.198-.476-.4-.412-.55-.42-.142-.008-.305-.01-.468-.01-.163 0-.427.061-.65.305-.224.244-.855.835-.855 2.036 0 1.2 0.875 2.36 0.997 2.524.122.163 1.722 2.63 4.172 3.687.583.251 1.038.401 1.393.514.586.186 1.12.16 1.542.097.471-.07 1.442-.59 1.646-1.16.203-.57.203-1.058.142-1.16-.06-.102-.224-.163-.468-.285zM12.04 2c-5.464 0-9.91 4.446-9.91 9.91 0 1.75.457 3.456 1.326 4.96L2 22l5.253-1.378c1.455.794 3.097 1.218 4.787 1.218 5.464 0 9.91-4.446 9.91-9.91 0-5.464-4.446-9.91-9.91-9.91zm0 18.15c-1.48 0-2.93-.398-4.198-1.152l-.301-.18-3.12.818.833-3.042-.196-.314a8.17 8.17 0 01-1.258-4.37c0-4.516 3.674-8.19 8.24-8.19 4.566 0 8.24 3.674 8.24 8.19 0 4.516-3.674 8.19-8.24 8.19z" />
            </svg>
          </a>

          {/* Primary Action Button (5px radius) */}
          <a
            href="#quiz"
            className="inline-flex items-center justify-center bg-[#142F55] hover:bg-[#0B7F8A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[5px] text-xs sm:text-[14px] font-bold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            <span className="hidden sm:inline">Get your Free Finance Health Check</span>
            <span className="sm:hidden">Health Check</span>
          </a>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[5px] text-[#0F1F38] hover:bg-white/80 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D3DDE3] px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#0F1F38]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              Services
            </a>
            <a
              href="#who-we-work-with"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              Industries
            </a>
            <a
              href="#how-we-help"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              How it works
            </a>
            <a
              href="#why-finackle"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#health-check-form"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0B7F8A] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
