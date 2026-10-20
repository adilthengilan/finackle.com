import React from 'react';
import { Layers, Clock, EyeOff } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TheChallenge: React.FC = () => {
  const cards = [
    {
      icon: Layers,
      title: 'Fragmented information',
      text: 'Sales in one tool, bank in another, receipts in a chat thread. No single version of the truth.',
      quote: '"Which spreadsheet is the right one?"',
    },
    {
      icon: Clock,
      title: 'Manual processes',
      text: 'Copy-paste reconciliations, chasing approvals, rebuilding the same report every month.',
      quote: '"Month-end takes us three weeks."',
    },
    {
      icon: EyeOff,
      title: 'Limited visibility',
      text: "Profit by product, next month's cash, the real cost of a channel. Too often it's a guess.",
      quote: '"Profitable on paper, short on cash."',
    },
  ];

  return (
    <section id="the-challenge" className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                Growing businesses rarely lack data.{' '}
                <span className="text-[#0B7F8A]">They lack clarity.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                Financial information is fragmented, processes are manual, and there is limited
                visibility into profitability, cash flow and performance. Without reliable reporting
                and structured systems, confident decisions get harder.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Challenge Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="h-full bg-white rounded-[5px] border border-[#D3DDE3] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_16px_36px_rgba(15,31,56,0.08)] group">
                  <div>
                    {/* Amber icon tile */}
                    <div className="w-12 h-12 rounded-[5px] bg-[#FBEBD6] flex items-center justify-center text-[#9A5A12] mb-6">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-[#0F1F38] mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-[15.5px] leading-[1.6] text-[#3B4D66] font-normal mb-8">
                      {card.text}
                    </p>
                  </div>

                  {/* Amber quote in Playfair Display italic */}
                  <div className="pt-4 border-t border-[#D3DDE3]/50">
                    <span className="text-[15.5px] font-semibold text-[#9A5A12] italic font-editorial tracking-wide">
                      {card.quote}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
