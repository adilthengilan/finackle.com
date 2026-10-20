import React, { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const OwnerQuestions: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const questions = [
    {
      num: '01',
      question: 'Which products or services are actually profitable?',
      answerTitle: 'Profit by product, service or channel',
      answerText:
        'We allocate direct costs, fees and discounts to each line so you see true contribution margin, not just revenue.',
      reportName: 'Margin by product report',
    },
    {
      num: '02',
      question: 'Where is margin moving, and why?',
      answerTitle: 'Month-on-month margin bridge',
      answerText:
        'We show exactly which costs moved margin each month, from supplier prices to delivery commissions.',
      reportName: 'Margin bridge with commentary',
    },
    {
      num: '03',
      question: 'How much runway do we have?',
      answerTitle: 'Cash position and 13-week forecast',
      answerText:
        'Your forecast combines receivables, payables and commitments, so you see pressure weeks before it arrives.',
      reportName: '13-week cash forecast',
    },
    {
      num: '04',
      question: 'Can we hire, expand or change our costs?',
      answerTitle: 'Scenario planning',
      answerText:
        'We model the decision against your real cash and margins and give you a clear yes, not yet, or yes if.',
      reportName: 'Scenario model and recommendation',
    },
    {
      num: '05',
      question: 'Are we on top of VAT and Corporate Tax?',
      answerTitle: 'Compliance calendar',
      answerText:
        'We map every obligation and prepare returns ahead of each deadline, with records kept audit-ready.',
      reportName: 'Compliance status page',
    },
  ];

  const current = questions[selectedIdx];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                THE OWNER&apos;S VIEW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight">
                Questions your numbers should{' '}
                <span className="text-[#0B7F8A]">answer.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-[17px] leading-[1.6] text-[#3B4D66] font-normal">
                Your finance should be connected to the decisions you are making, not sitting in a
                folder. Pick a question.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Split: Questions on Left, Answer Card on Right (Sharp Edges) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question List (Left) */}
          <div className="lg:col-span-6 space-y-3">
            {questions.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.06}>
                  <button
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-[5px] transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#142F55] text-white shadow-lg'
                        : 'bg-white hover:bg-white/80 border border-[#D3DDE3] text-[#0F1F38]'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`text-xs sm:text-sm font-extrabold tabular-nums px-2.5 py-1 rounded-[5px] ${
                          isSelected
                            ? 'bg-[#1FD6CB]/20 text-[#1FD6CB]'
                            : 'bg-[#F4F7F8] text-[#8896A6]'
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="text-[15px] sm:text-[16px] font-bold leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-[#1FD6CB] translate-x-1'
                          : 'text-[#8896A6] group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Answer Panel (Right) - Sharp Edges */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15}>
              <div className="bg-[#D6F3F2]/60 border border-[#1FD6CB]/40 rounded-[5px] p-7 sm:p-9 shadow-md transition-all duration-300">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                  HOW FINACKLE ANSWERS IT
                </span>

                <h3 className="text-2xl sm:text-[28px] font-bold text-[#0F1F38] tracking-tight mb-4">
                  {current.answerTitle}
                </h3>

                <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#3B4D66] font-normal mb-8">
                  {current.answerText}
                </p>

                {/* Report card sharp box */}
                <div className="bg-white rounded-[5px] p-4 sm:p-4.5 border border-[#D3DDE3] flex items-center gap-3.5 mb-8 shadow-xs">
                  <div className="w-10 h-10 rounded-[5px] bg-[#142F55] text-[#1FD6CB] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-[#0F1F38]">
                      {current.reportName}
                    </h4>
                    <span className="text-[12px] text-[#0B7F8A] font-semibold">
                      Included in your monthly pack
                    </span>
                  </div>
                </div>

                {/* CTA Button with Sharp Edges */}
                <a
                  href="#health-check-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#142F55] hover:bg-[#0C1E3C] text-white px-7 py-4 rounded-[5px] text-[15px] font-bold tracking-tight shadow-md hover:shadow-xl transition-all duration-200 group"
                >
                  <span>Get this for your business</span>
                  <ArrowRight className="w-4 h-4 text-[#1FD6CB] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
