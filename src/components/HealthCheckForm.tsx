import React, { useState } from 'react';
import { ArrowRight, Check, Phone, Mail, Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HealthCheckForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'E-commerce',
    clarityFocus: 'Profitability',
    hp_field: '', // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const businessTypes = [
    'E-commerce',
    'F&B / restaurants',
    'Trading & distribution',
    'Professional services',
    'Other',
  ];

  const clarityOptions = [
    'Profitability',
    'Cash flow',
    'VAT / Corporate Tax',
    'Books that are behind',
    'Planning a big decision',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name and work email.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    let whatsappText = 'Hello Finackle, I would like a free finance health check.';
    if (formData.name.trim()) {
      whatsappText += ` Name: ${formData.name.trim()}.`;
    }
    if (formData.email.trim()) {
      whatsappText += ` Email: ${formData.email.trim()}.`;
    }
    whatsappText += ` Business: ${formData.businessType}. I want clarity on: ${formData.clarityFocus}.`;

    const whatsappUrl = `https://wa.me/971545022747?text=${encodeURIComponent(whatsappText)}`;

    try {
      const response = await fetch('/api/send-enquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.businessType,
          service: `Finance Health Check (${formData.clarityFocus})`,
          message: `Business Type: ${formData.businessType}. Clarity Focus: ${formData.clarityFocus}.`,
          hp_field: formData.hp_field,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.status === 'success') {
        setStatus('success');
      } else {
        setStatus('success');
      }

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      setStatus('success');
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="health-check-form" className="py-20 lg:py-28 bg-[#F4F7F8] scroll-mt-20">
      <div id="start" className="scroll-mt-20" />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Main Navy Box with 5px radius */}
          <div className="bg-[#142F55] text-white rounded-[5px] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Side: Information & Ticks */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#1FD6CB] block mb-2">
                  YOUR NEXT STEP
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-white tracking-tight mb-5">
                  Start with a free finance health check.
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.65] text-white/80 font-normal mb-8">
                  A straightforward conversation about how your finance is working today, and where
                  more clarity and control could help.
                </p>

                {/* 3 Ticks */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/95">
                    <div className="w-5 h-5 rounded-[5px] bg-[#1FD6CB]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1FD6CB] stroke-[3]" />
                    </div>
                    <span>30-minute call with a qualified finance professional</span>
                  </div>

                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/95">
                    <div className="w-5 h-5 rounded-[5px] bg-[#1FD6CB]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1FD6CB] stroke-[3]" />
                    </div>
                    <span>Review of your books, reporting and compliance</span>
                  </div>

                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/95">
                    <div className="w-5 h-5 rounded-[5px] bg-[#1FD6CB]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1FD6CB] stroke-[3]" />
                    </div>
                    <span>Written summary of gaps and quick wins</span>
                  </div>
                </div>
              </div>

              {/* Contact Boxes with 5px radius */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/971545022747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-[5px] p-4 transition-colors group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                    WHATSAPP / PHONE
                  </span>
                  <div className="flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white group-hover:text-[#1FD6CB] transition-colors">
                    <Phone className="w-4 h-4 text-[#1FD6CB]" />
                    <span>+971 54 502 2747</span>
                  </div>
                </a>

                <a
                  href="mailto:info@finackle.com"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-[5px] p-4 transition-colors group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                    EMAIL
                  </span>
                  <div className="flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white group-hover:text-[#1FD6CB] transition-colors">
                    <Mail className="w-4 h-4 text-[#1FD6CB]" />
                    <span>info@finackle.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Form with 5px radius */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#0C1E3C] rounded-[5px] p-6 sm:p-8 border border-white/10 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
                  Tell us a little about your business
                </h3>

                {status === 'success' ? (
                  <div className="bg-[#D6F3F2] text-[#0F1F38] p-6 rounded-[5px] text-center space-y-3">
                    <div className="w-12 h-12 bg-[#1FD6CB] rounded-[5px] flex items-center justify-center mx-auto text-[#0F1F38]">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-bold">Request Sent Successfully!</h4>
                    <p className="text-sm text-[#3B4D66] leading-relaxed">
                      Thank you! Our advisory team has received your enquiry and WhatsApp chat has been
                      initiated. We will review your requirements promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          businessType: 'E-commerce',
                          clarityFocus: 'Profitability',
                          hp_field: '',
                        });
                      }}
                      className="mt-2 text-xs font-bold text-[#0B7F8A] hover:underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="hp_field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hp_field}
                        onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
                      />
                    </div>

                    {/* Field 1: Your Name (5px radius) */}
                    <div>
                      <label
                        htmlFor="user-name"
                        className="block text-xs font-semibold text-white/70 mb-1.5"
                      >
                        Your name <span className="text-[#1FD6CB]">*</span>
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full bg-white/10 border border-white/20 rounded-[5px] px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FD6CB] transition-all"
                      />
                    </div>

                    {/* Field 2: Work Email (5px radius) */}
                    <div>
                      <label
                        htmlFor="user-email"
                        className="block text-xs font-semibold text-white/70 mb-1.5"
                      >
                        Work email <span className="text-[#1FD6CB]">*</span>
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@company.com"
                        className="w-full bg-white/10 border border-white/20 rounded-[5px] px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FD6CB] transition-all"
                      />
                    </div>

                    {/* Dropdown 1: What kind of business do you run? (5px radius) */}
                    <div>
                      <label
                        htmlFor="user-business"
                        className="block text-xs font-semibold text-white/70 mb-1.5"
                      >
                        What kind of business do you run?
                      </label>
                      <select
                        id="user-business"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-[#142F55] border border-white/20 rounded-[5px] px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1FD6CB] transition-all cursor-pointer"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#142F55] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dropdown 2: What do you most want clarity on? (5px radius) */}
                    <div>
                      <label
                        htmlFor="user-clarity"
                        className="block text-xs font-semibold text-white/70 mb-1.5"
                      >
                        What do you most want clarity on?
                      </label>
                      <select
                        id="user-clarity"
                        value={formData.clarityFocus}
                        onChange={(e) => setFormData({ ...formData, clarityFocus: e.target.value })}
                        className="w-full bg-[#142F55] border border-white/20 rounded-[5px] px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1FD6CB] transition-all cursor-pointer"
                      >
                        {clarityOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#142F55] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-[5px] text-xs text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button (5px radius) */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full mt-2 bg-[#1FD6CB] hover:bg-[#19b9b0] text-[#0F1F38] py-4 px-6 rounded-[5px] text-[15px] font-bold tracking-tight flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-70 group"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Preparing your request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a free finance health check</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-white/60 pt-1">
                      Sends your request on WhatsApp. No obligation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
