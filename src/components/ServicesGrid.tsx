import React from 'react';
import {
  FileText,
  BarChart2,
  Compass,
  Percent,
  Building,
  CreditCard,
  TrendingUp,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Accounting & bookkeeping',
      text: 'Accurate records, reconciliations, payables, receivables and a dependable month-end close.',
      dark: false,
    },
    {
      icon: BarChart2,
      title: 'Financial reporting',
      text: 'P&L, balance sheet, cash flow and KPIs with commentary you can act on.',
      dark: false,
    },
    {
      icon: Compass,
      title: 'CFO advisory',
      text: 'Budgets, forecasts, pricing and margin reviews, plus a senior view on big decisions.',
      dark: false,
    },
    {
      icon: Percent,
      title: 'VAT compliance',
      text: 'VAT registration support, return preparation and record reviews to keep you compliant.',
      dark: false,
    },
    {
      icon: Building,
      title: 'Corporate Tax',
      text: 'Registration, computations and filing support shaped around your UAE structure.',
      dark: false,
    },
    {
      icon: CreditCard,
      title: 'Payroll & WPS',
      text: 'Payroll processing, payslips, WPS support and end-of-service calculations.',
      dark: false,
    },
    {
      icon: TrendingUp,
      title: 'Cash flow & budgeting',
      text: 'Rolling forecasts and budgets that show liquidity ahead of time.',
      dark: false,
    },
    {
      icon: LayoutGrid,
      title: 'Finance systems & controls',
      text: 'System set-up, automation, approval workflows and a documented close.',
      dark: true,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-2.5">
                SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] font-extrabold text-[#0F1F38] tracking-[-0.03em]">
                Everything your finance function needs.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-[17px] leading-[1.65] text-[#334155] font-normal">
                Engage us for one area or the whole function. Every service feeds the same system, so
                your reporting stays consistent as you grow.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Service Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <a
                  href="#health-check-form"
                  className={`h-full rounded-[5px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1.5 ${
                    item.dark
                      ? 'bg-[#142F55] text-white shadow-xl hover:shadow-2xl border border-[#142F55]'
                      : 'bg-white text-[#0F1F38] border border-slate-300 shadow-xs hover:border-[#0B7F8A] hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Sharp Icon Tile */}
                    <div
                      className={`w-12 h-12 rounded-[5px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-rotate-8 ${
                        item.dark
                          ? 'bg-white/10 text-[#1FD6CB]'
                          : 'bg-[#D6F3F2] text-[#0B7F8A]'
                      }`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <h3
                      className={`text-lg sm:text-[19px] font-bold tracking-tight mb-2.5 ${
                        item.dark ? 'text-white' : 'text-[#0F1F38]'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] leading-[1.6] font-normal mb-6 ${
                        item.dark ? 'text-white/80' : 'text-[#475569]'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Sharp Pill Link */}
                  <div
                    className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${
                      item.dark
                        ? 'text-[#1FD6CB] group-hover:text-white'
                        : 'text-[#0B7F8A] group-hover:text-[#0F1F38]'
                    }`}
                  >
                    <span>Ask about this</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
