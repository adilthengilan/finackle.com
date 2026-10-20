import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const WhoWeWorkWith: React.FC = () => {
  const industries = [
    {
      name: 'E-commerce',
      text: 'Marketplace and gateway fees, refunds, COD collections and margin by channel.',
      quote: '"Which channel actually makes money?"',
      bgColor: '#E0F1F1',
    },
    {
      name: 'F&B & restaurants',
      text: 'Daily sales, food cost, delivery commissions and branch performance.',
      quote: '"Are delivery orders helping or hurting?"',
      bgColor: '#F1ECE0',
    },
    {
      name: 'Trading & distribution',
      text: 'Inventory, supplier payments, credit control and working capital.',
      quote: '"Why is cash tight when sales are up?"',
      bgColor: '#E7E8F0',
    },
    {
      name: 'Professional services',
      text: 'Project margins, utilisation, billing cycles and collections.',
      quote: '"Which clients are worth the effort?"',
      bgColor: '#F5E6DE',
    },
  ];

  return (
    <section id="who" className="py-20 lg:py-28 bg-[#F4F7F8] scroll-mt-20">
      <div id="who-we-work-with" className="scroll-mt-20" />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                MADE FOR THE WAY YOU OPERATE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                Finance that understands your{' '}
                <span className="text-[#0B7F8A]">kind of business.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                Different models bring different pressures. We make the financial picture useful for
                the business you&apos;re actually running.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                style={{ backgroundColor: item.bgColor }}
                className="h-full rounded-[5px] p-6 sm:p-7 border border-[#D3DDE3] flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_16px_36px_rgba(15,31,56,0.08)] group"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0F1F38] tracking-tight mb-3">
                    {item.name}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[#3B4D66] font-normal mb-8">
                    {item.text}
                  </p>
                </div>

                {/* Question box (sharp white card with Playfair Display italic) */}
                <div className="bg-white/95 rounded-[5px] p-3.5 border border-black/10 shadow-2xs">
                  <p className="text-[14.5px] font-semibold text-[#0F1F38] italic font-editorial leading-snug">
                    {item.quote}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
