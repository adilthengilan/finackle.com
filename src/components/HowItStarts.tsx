import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HowItStarts: React.FC = () => {
  const steps = [
    {
      badge: 'Week 1 · Free',
      title: 'Free finance health check',
      text: 'We review your books, systems and reporting with you, and share a written summary of gaps, risks and quick wins.',
      dark: false,
    },
    {
      badge: 'Weeks 2–4',
      title: 'Clean-up & set-up',
      text: "Reconcile what's there, structure the chart of accounts, connect bank and sales channels, set controls and the close calendar.",
      dark: false,
    },
    {
      badge: 'Every month',
      title: 'Your finance rhythm',
      text: 'Books closed on schedule, management pack delivered, a review call, and compliance prepared ahead of deadlines.',
      dark: true,
    },
  ];

  return (
    <section id="how-it-starts" className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                HOW IT STARTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                Clear steps, clear timelines.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                No long onboarding. You see value from the first conversation.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {steps.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                className={`h-full rounded-[5px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  item.dark
                    ? 'bg-[#142F55] text-white shadow-xl'
                    : 'bg-white text-[#0F1F38] border border-[#D3DDE3] shadow-xs'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-[5px] mb-6 ${
                      item.dark
                        ? 'bg-[#1FD6CB]/20 text-[#1FD6CB]'
                        : 'bg-[#D6F3F2] text-[#0B7F8A]'
                    }`}
                  >
                    {item.badge}
                  </span>

                  <h3
                    className={`text-xl sm:text-[22px] font-bold mb-3 tracking-tight ${
                      item.dark ? 'text-white' : 'text-[#0F1F38]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[15px] leading-[1.6] font-normal ${
                      item.dark ? 'text-white/80' : 'text-[#3B4D66]'
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* "What we need from you" bar with Scroll Reveal */}
        <ScrollReveal delay={0.25}>
          <div className="bg-white rounded-[5px] p-5 sm:p-6 border border-[#D3DDE3] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="text-[14px] font-bold text-[#0F1F38] shrink-0">
              What we need from you:
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-[13.5px] font-semibold text-[#3B4D66]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                Bank statements or read-only access
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                Sales and invoice data
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                Receipts and bills
              </span>
              <span className="flex items-center gap-1.5 text-[#0B7F8A] font-bold">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                30 minutes a month
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
