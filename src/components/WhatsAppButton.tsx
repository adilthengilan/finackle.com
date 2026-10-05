import React, { useState, useEffect } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_WHATSAPP_NUMBER || '971545022747',
  defaultMessage = 'Talk to an Adviser',
}) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Clean phone number (strip +, spaces, dashes)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  // Initial delay of 2s to show minimal prompt
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Frequently draw subtle attention every 8 seconds
  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setPulse(true);
      setShowPrompt(true);
      const pulseTimeout = setTimeout(() => {
        setPulse(false);
      }, 1500);

      return () => clearTimeout(pulseTimeout);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  return (
    <aside
      aria-label="WhatsApp live chat"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end pointer-events-none select-none"
    >
      {/* Minimal "Connect now / Talk to an adviser" speech bubble */}
      {showPrompt && !isDismissed && (
        <div
          className={`pointer-events-auto mb-2 max-w-[210px] sm:max-w-[230px] bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 transition-all duration-300 ease-out origin-bottom-right ${
            pulse ? 'scale-105 shadow-xl ring-2 ring-[#25D366]/40' : 'scale-100'
          }`}
          style={{
            boxShadow: '0 8px 20px -4px rgba(19, 33, 93, 0.12), 0 4px 6px -2px rgba(19, 33, 93, 0.05)',
          }}
        >
          <div className="flex items-start justify-between gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-left group"
              title="Talk to an adviser on WhatsApp"
            >
              <div className="relative flex-shrink-0 w-6 h-6 rounded-full bg-[#E8F8F0] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping absolute" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] relative" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#25D366] leading-none">
                  Talk to an adviser
                </div>
                <div className="text-xs font-semibold text-[#13215D] group-hover:text-[#25D366] transition-colors leading-tight mt-0.5">
                  Connect now 👋
                </div>
              </div>
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="text-gray-400 hover:text-gray-600 p-0.5 rounded hover:bg-gray-100 transition-colors"
              aria-label="Dismiss WhatsApp popup"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1.5 pt-1.5 border-t border-gray-100 text-[10.5px] text-[#667085] hover:text-[#13215D] transition-colors line-clamp-2 leading-snug"
          >
            &ldquo;Talk to an Adviser&rdquo; &rarr;
          </a>
        </div>
      )}

      {/* Minimal floating WhatsApp button */}
      <div className="relative pointer-events-auto group">
        <span
          className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 blur-[2px] group-hover:opacity-60 transition-opacity"
          aria-hidden="true"
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Talk to an Adviser on WhatsApp"
          className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          }}
        >
          {/* Official WhatsApp SVG Icon - Minimal Size */}
          <svg
            className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.507 14.307l-.009.075c-.244-.122-1.442-.712-1.666-.793-.223-.082-.386-.122-.549.122-.162.245-.63 793-.772.955-.143.163-.285.183-.529.061-.244-.122-1.03-.38-1.961-1.21-.724-.645-1.213-1.442-1.356-1.686-.142-.245-.015-.377.107-.499.11-.11.244-.285.367-.428.122-.142.163-.244.244-.407.082-.163.041-.305-.02-.428-.061-.122-.549-1.323-.752-1.811-.198-.476-.4-.412-.55-.42-.142-.008-.305-.01-.468-.01-.163 0-.427.061-.65.305-.224.244-.855.835-.855 2.036 0 1.2 0.875 2.36 0.997 2.524.122.163 1.722 2.63 4.172 3.687.583.251 1.038.401 1.393.514.586.186 1.12.16 1.542.097.471-.07 1.442-.59 1.646-1.16.203-.57.203-1.058.142-1.16-.06-.102-.224-.163-.468-.285zM12.04 2c-5.464 0-9.91 4.446-9.91 9.91 0 1.75.457 3.456 1.326 4.96L2 22l5.253-1.378c1.455.794 3.097 1.218 4.787 1.218 5.464 0 9.91-4.446 9.91-9.91 0-5.464-4.446-9.91-9.91-9.91zm0 18.15c-1.48 0-2.93-.398-4.198-1.152l-.301-.18-3.12.818.833-3.042-.196-.314a8.17 8.17 0 01-1.258-4.37c0-4.516 3.674-8.19 8.24-8.19 4.566 0 8.24 3.674 8.24 8.19 0 4.516-3.674 8.19-8.24 8.19z" />
          </svg>

          {/* Active online dot - Minimal */}
          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 border-[1.5px] border-white rounded-full shadow-xs" />
        </a>
      </div>
    </aside>
  );
};
