import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First question starts open

  const faqs = [
    {
      q: 'How is this different from a bookkeeper?',
      a: 'A bookkeeper records transactions. We design and run your finance function: the structure, controls, reporting and compliance calendar, so the numbers stay reliable and useful as you grow.',
    },
    {
      q: 'Do you work with free zone and mainland companies?',
      a: 'Yes. We support businesses across UAE free zones and the mainland, and shape reporting and compliance around your structure.',
    },
    {
      q: 'What does the Free Finance Health Check include?',
      a: 'Two parts, both free. The 10-question Health Check gives you a personalised Finance Health Report straight away: your score, key risks, top priorities and a 90-day plan. If you like, we then go through it with you in a 30-minute Finance Health Review call and send a written summary. There is no obligation to continue.',
    },
    {
      q: 'Our books are behind. Can you still help?',
      a: 'Yes. Clean-up is often where we start. We scope it with you and agree it before any work begins.',
    },
    {
      q: 'Which accounting software do you use?',
      a: "We work with leading cloud accounting systems and can build around what you already use. If you don't have one yet, we'll recommend the right fit for your size.",
    },
    {
      q: 'How do you keep our data secure?',
      a: 'Access is limited to your assigned team, we use view-only bank access where possible, and your information is never shared without your permission.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Header */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight mb-6">
                Questions before we talk
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Accordion List with Staggered Scroll Reveal */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.06}>
                  <div
                    className={`bg-white rounded-[5px] transition-all duration-300 overflow-hidden border ${
                      isOpen
                        ? 'border-[#0B7F8A] shadow-md'
                        : 'border-[#D3DDE3] hover:border-[#D3DDE3]/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] sm:text-[17px] font-bold text-[#0F1F38] tracking-tight">
                        {faq.q}
                      </span>

                      <div
                        className={`w-8 h-8 rounded-[5px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#142F55] text-white rotate-45'
                            : 'bg-[#F4F7F8] text-[#3B4D66]'
                        }`}
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[15px] sm:text-[15.5px] leading-relaxed text-[#3B4D66] border-t border-[#D3DDE3]/40">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
