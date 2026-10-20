import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WaysToWork: React.FC = () => {
  const cards = [
    {
      label: 'PROJECT',
      title: 'Clean-up & set-up',
      text: 'For books that are behind or a finance setup that no longer fits.',
      ticks: [
        'Backlog reconciled',
        'System and chart of accounts',
        'Controls and close calendar',
      ],
      buttonText: 'Discuss a project',
      dark: false,
    },
    {
      label: 'ONGOING',
      title: 'Monthly finance partner',
      text: 'Your outsourced finance function, run every month.',
      ticks: [
        'Bookkeeping and reconciliations',
        'Management pack and review call',
        'VAT, Corporate Tax and payroll support',
      ],
      buttonText: 'Start with a free finance health check',
      dark: true,
    },
    {
      label: 'ADVISORY',
      title: 'CFO advisory',
      text: 'Senior perspective for bigger decisions, without a full-time CFO.',
      ticks: [
        'Budgets, forecasts, scenarios',
        'Pricing and margin reviews',
        'Bank and investor reporting',
      ],
      buttonText: 'Talk to us',
      dark: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                WAYS TO WORK WITH US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                Choose the support that fits your stage.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                Every engagement has an agreed scope and a fixed fee, confirmed after your free
                finance health check.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Pricing/Engagement Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                className={`h-full rounded-[5px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  card.dark
                    ? 'bg-[#142F55] text-white shadow-2xl ring-2 ring-[#1FD6CB]/30'
                    : 'bg-white text-[#0F1F38] border border-[#D3DDE3] shadow-xs'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-[5px] mb-5 ${
                      card.dark
                        ? 'bg-[#1FD6CB]/20 text-[#1FD6CB]'
                        : 'bg-[#D6F3F2] text-[#0B7F8A]'
                    }`}
                  >
                    {card.label}
                  </span>

                  <h3
                    className={`text-2xl font-bold mb-3 tracking-tight ${
                      card.dark ? 'text-white' : 'text-[#0F1F38]'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-[15px] leading-relaxed mb-8 ${
                      card.dark ? 'text-white/80' : 'text-[#3B4D66]'
                    }`}
                  >
                    {card.text}
                  </p>

                  {/* Ticks */}
                  <div className="space-y-3.5 mb-10">
                    {card.ticks.map((tick, tIdx) => (
                      <div
                        key={tIdx}
                        className={`flex items-center gap-3 text-[14px] font-semibold ${
                          card.dark ? 'text-white/95' : 'text-[#3B4D66]'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 stroke-[2.5] ${
                            card.dark ? 'text-[#1FD6CB]' : 'text-[#0B7F8A]'
                          }`}
                        />
                        <span>{tick}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button with Sharp Edges */}
                <a
                  href="#health-check-form"
                  className={`w-full py-4 rounded-[5px] text-[14.5px] font-bold tracking-tight text-center flex items-center justify-center gap-2 transition-all duration-200 group ${
                    card.dark
                      ? 'bg-[#1FD6CB] hover:bg-[#19b9b0] text-[#0F1F38] shadow-lg hover:shadow-xl'
                      : 'bg-white hover:bg-slate-50 border border-[#D3DDE3] text-[#0F1F38] shadow-xs hover:border-[#0B7F8A]'
                  }`}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
