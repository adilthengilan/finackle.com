import React, { useState, useEffect, useRef } from 'react';
import { Database, Search, ShieldCheck, TrendingUp, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HowWeHelp: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 0,
      name: 'Data',
      subtitle: 'Bank, sales, bills, payroll, marketplaces',
      icon: Database,
      tag: 'Step 1 of 4 · Data',
      heading: 'We bring every source into one place.',
      text: 'Bank feeds, sales channels, supplier bills, payroll and receipts are connected and recorded consistently, so nothing lives in a side spreadsheet.',
      ticks: [
        'Bank and card feeds reconciled',
        'Sales and marketplace data matched',
        'One chart of accounts for the business',
      ],
      sampleTitle: 'Sources connected',
      sampleType: 'sources',
    },
    {
      id: 1,
      name: 'Clarity',
      subtitle: 'Accurate reporting and cash visibility',
      icon: Search,
      tag: 'Step 2 of 4 · Clarity',
      heading: 'Accurate reports that tell a clear story.',
      text: 'A monthly management pack built on reconciled numbers, with profitability, cash flow and KPIs explained in plain language.',
      ticks: [
        'Monthly P&L, balance sheet and cash flow',
        'Profit by product, branch or channel',
        '13-week cash forecast',
      ],
      sampleTitle: 'Management P&L · September',
      sampleType: 'pnl',
    },
    {
      id: 2,
      name: 'Control',
      subtitle: 'Stronger controls and compliance',
      icon: ShieldCheck,
      tag: 'Step 3 of 4 · Control',
      heading: 'Controls and compliance that protect the business.',
      text: 'Approval limits, regular reconciliations, a documented close and a compliance calendar, so errors, leakage and penalties are caught before they cost you.',
      ticks: [
        'Approval matrix and segregation of duties',
        'VAT and Corporate Tax prepared ahead of time',
        'Audit-ready records every month',
      ],
      sampleTitle: 'Control & compliance status',
      sampleType: 'compliance',
    },
    {
      id: 3,
      name: 'Decisions',
      subtitle: 'CFO-level insight on what to do next',
      icon: TrendingUp,
      tag: 'Step 4 of 4 · Decisions',
      heading: 'Better decisions, made with confidence.',
      text: 'With reliable numbers in place, we help you plan: pricing, hiring, expansion, stock and cost changes, tested against your real cash position.',
      ticks: [
        'Budgets, forecasts and scenarios',
        'Pricing and margin reviews',
        'A clear "can we afford it?" answer',
      ],
      sampleTitle: 'Scenario: hire two people',
      sampleType: 'scenario',
    },
  ];

  // Auto-advance every 4.5s until clicked
  useEffect(() => {
    if (hasInteracted) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [hasInteracted, steps.length]);

  const handleStepClick = (index: number) => {
    setHasInteracted(true);
    setActiveStep(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setHasInteracted(true);
      setActiveStep((prev) => (prev + 1) % steps.length);
    } else if (e.key === 'ArrowLeft') {
      setHasInteracted(true);
      setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    }
  };

  const current = steps[activeStep];

  return (
    <section
      id="how-we-help"
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="How we help four-step workflow"
      className="py-20 lg:py-28 bg-[#F4F7F8] focus:outline-none scroll-mt-20"
    >
      <div id="process" className="scroll-mt-20" />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                HOW WE HELP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                From raw data to better decisions, in four steps.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                We move you beyond traditional accounting by building a finance system that scales
                with you. Select each step to see what changes.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Steps Stepper Bar with Sharp Edges */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-1 bg-[#D3DDE3] z-0">
            <div
              className="h-full bg-[#1FD6CB] transition-all duration-500 ease-out"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Stepper Buttons (Sharp edges) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className={`text-left p-4 sm:p-5 rounded-[5px] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${
                    isSelected
                      ? 'bg-white shadow-[0_10px_30px_rgba(15,31,56,0.08)] ring-2 ring-[#0B7F8A]'
                      : 'bg-white/70 hover:bg-white border border-[#D3DDE3]'
                  }`}
                >
                  {/* Sharp Icon Tile */}
                  <div
                    className={`w-14 h-14 rounded-[5px] flex items-center justify-center mb-3 transition-transform duration-300 ${
                      isSelected
                        ? 'bg-[#1FD6CB] text-[#0F1F38] scale-105 shadow-md'
                        : isPast
                        ? 'bg-white border-2 border-[#1FD6CB] text-[#0B7F8A]'
                        : 'bg-[#D6F3F2] text-[#0B7F8A] group-hover:scale-105'
                    }`}
                  >
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-extrabold text-[#0B7F8A] tabular-nums">
                      0{step.id + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F1F38] tracking-tight">
                      {step.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-snug mt-0.5 max-w-[190px]">
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        </ScrollReveal>

        {/* Dynamic Dark Navy Dashboard Panel with Sharp Edges */}
        <ScrollReveal delay={0.2}>
          <div className="bg-[#142F55] text-white rounded-[5px] p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left text & ticks */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#1FD6CB] block mb-2">
                {current.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight mb-4">
                {current.heading}
              </h3>
              <p className="text-[16px] sm:text-[17px] text-white/80 leading-relaxed font-normal mb-8">
                {current.text}
              </p>

              {/* Ticks */}
              <div className="space-y-3.5">
                {current.ticks.map((tick, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14.5px] sm:text-[15px] font-semibold text-white/95">
                    <div className="w-5 h-5 rounded-[5px] bg-[#1FD6CB]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1FD6CB] stroke-[3]" />
                    </div>
                    <span>{tick}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Sample Card with Sharp Edges */}
            <div className="lg:col-span-6">
              <div className="bg-white text-[#0F1F38] rounded-[5px] p-6 shadow-xl border border-white/10">
                <div className="flex items-center justify-between pb-4 border-b border-[#D3DDE3] mb-5">
                  <span className="text-[13px] font-bold text-[#0F1F38]">
                    {current.sampleTitle}
                  </span>
                  <span className="text-[11px] font-bold text-[#0B7F8A] bg-[#D6F3F2] px-2.5 py-0.5 rounded-[5px]">
                    Sample
                  </span>
                </div>

                {/* Step 1: Sources connected table */}
                {current.sampleType === 'sources' && (
                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-[13px]">
                    <div className="flex items-center justify-between p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Bank accounts</span>
                      <span className="font-bold text-[#0B7F8A]">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Sales / POS</span>
                      <span className="font-bold text-[#0B7F8A]">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Marketplace payouts</span>
                      <span className="font-bold text-[#0B7F8A]">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Supplier bills</span>
                      <span className="font-bold text-[#0B7F8A]">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Payroll / WPS</span>
                      <span className="font-bold text-[#0B7F8A]">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#FBEBD6] rounded-[5px]">
                      <span className="font-semibold text-[#9A5A12]">Receipts</span>
                      <span className="font-bold text-[#9A5A12]">2 missing</span>
                    </div>
                  </div>
                )}

                {/* Step 2: Management P&L table */}
                {current.sampleType === 'pnl' && (
                  <div className="space-y-2.5 text-xs sm:text-[13.5px]">
                    <div className="flex justify-between items-center py-2 px-3 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-bold text-[#0F1F38]">Revenue</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold tabular-nums">312,450</span>
                        <span className="text-[#0B7F8A] font-bold text-xs bg-[#D6F3F2] px-2 py-0.5 rounded-[5px]">
                          +9.0%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-bold text-[#0F1F38]">Gross profit</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold tabular-nums">131,229</span>
                        <span className="text-[#0B7F8A] font-bold text-xs bg-[#D6F3F2] px-2 py-0.5 rounded-[5px]">
                          +6.2%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-bold text-[#0F1F38]">Operating costs</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold tabular-nums">−86,850</span>
                        <span className="text-[#9A5A12] font-bold text-xs bg-[#FBEBD6] px-2 py-0.5 rounded-[5px]">
                          +11.4%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-3 bg-[#D6F3F2] rounded-[5px] border border-[#1FD6CB]/40">
                      <span className="font-extrabold text-[#0F1F38]">Net profit</span>
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold tabular-nums text-[#0B7F8A]">44,379</span>
                        <span className="text-[#0B7F8A] font-bold text-xs">−1.1 pts</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Control & compliance table */}
                {current.sampleType === 'compliance' && (
                  <div className="space-y-2 text-xs sm:text-[13px]">
                    <div className="flex justify-between items-center p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Bank reconciliation (Weekly)</span>
                      <span className="font-bold text-[#0B7F8A] bg-[#D6F3F2] px-2.5 py-0.5 rounded-[5px]">On track</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Spend approvals (Ongoing)</span>
                      <span className="font-bold text-[#0B7F8A] bg-[#D6F3F2] px-2.5 py-0.5 rounded-[5px]">Active</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">VAT return (28 days post-period)</span>
                      <span className="font-bold text-[#142F55] bg-[#D6F3F2] px-2.5 py-0.5 rounded-[5px]">Prepared</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="font-semibold text-[#3B4D66]">Corporate Tax return (9 months)</span>
                      <span className="font-bold text-[#3B4D66] bg-[#E7E8F0] px-2.5 py-0.5 rounded-[5px]">Scheduled</span>
                    </div>
                  </div>
                )}

                {/* Step 4: Scenario hire two people */}
                {current.sampleType === 'scenario' && (
                  <div className="space-y-2.5 text-xs sm:text-[13px]">
                    <div className="p-3 bg-[#F4F7F8] rounded-[5px] flex justify-between items-center">
                      <div>
                        <span className="font-bold text-[#0F1F38] block">Current plan</span>
                        <span className="text-[11px] text-[#667085]">4.2 months runway</span>
                      </div>
                      <span className="font-bold text-[#0B7F8A] bg-[#D6F3F2] px-3 py-1 rounded-[5px] text-xs">
                        Comfortable
                      </span>
                    </div>
                    <div className="p-3 bg-[#F4F7F8] rounded-[5px] flex justify-between items-center">
                      <div>
                        <span className="font-bold text-[#0F1F38] block">+1 hire</span>
                        <span className="text-[11px] text-[#667085]">3.5 months runway</span>
                      </div>
                      <span className="font-bold text-[#0B7F8A] bg-[#D6F3F2] px-3 py-1 rounded-[5px] text-xs">
                        Fine
                      </span>
                    </div>
                    <div className="p-3 bg-[#FBEBD6] rounded-[5px] flex justify-between items-center border border-[#9A5A12]/20">
                      <div>
                        <span className="font-bold text-[#9A5A12] block">+2 hires</span>
                        <span className="text-[11px] text-[#9A5A12]/80">2.7 months runway</span>
                      </div>
                      <span className="font-bold text-[#9A5A12] bg-white px-3 py-1 rounded-[5px] text-xs">
                        Fix collections first
                      </span>
                    </div>
                  </div>
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
