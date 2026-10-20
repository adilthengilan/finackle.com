import React from 'react';
import { Building2, Award, Laptop, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyFinackle: React.FC = () => {
  const cards = [
    {
      icon: Building2,
      title: 'UAE-Based Finance Partner',
      text: 'Supporting businesses in the UAE with practical accounting, reporting, and finance solutions.',
    },
    {
      icon: Award,
      title: 'Experienced Finance Professionals',
      text: 'A team with expertise in accounting, reporting, cash flow management, and business insights.',
    },
    {
      icon: Laptop,
      title: 'Technology-Enabled Finance',
      text: 'Using modern finance tools and systems to improve accuracy, efficiency, and visibility.',
    },
    {
      icon: ShieldCheck,
      title: 'Confidential & Secure',
      text: 'Your financial information is handled with strict confidentiality and controlled access.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F7F8] scroll-mt-20">
      <div id="why-finackle" className="scroll-mt-20" />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
              WHY FINACKLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
              Built on Trust. Focused on{' '}
              <span className="text-[#0B7F8A]">Your Growth.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="h-full bg-white rounded-[5px] border border-[#D3DDE3] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,31,56,0.06)]">
                  <div>
                    {/* Sharp Icon Tile */}
                    <div className="w-12 h-12 rounded-[5px] bg-[#D6F3F2] flex items-center justify-center text-[#0B7F8A] mb-6">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-bold text-[#0F1F38] tracking-tight mb-3">
                      {card.title}
                    </h3>

                    <p className="text-[14.5px] leading-[1.6] text-[#3B4D66] font-normal">
                      {card.text}
                    </p>
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
