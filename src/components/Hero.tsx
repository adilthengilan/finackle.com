import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const [cashAmount, setCashAmount] = useState(0);
  const [runwayMonths, setRunwayMonths] = useState(0);

  // Counter animation on load: 0 to 238K and 0 to 4.2 in 1.5s
  useEffect(() => {
    let start: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCashAmount(Math.round(ease * 238));
      setRunwayMonths(parseFloat((ease * 4.2).toFixed(1)));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 contour-bg">
      {/* Background contour curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="absolute -top-24 right-0 w-[800px] h-[800px] text-slate-300/40"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="500" cy="300" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="500" cy="300" r="380" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="300" r="480" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M 100,500 C 300,400 450,200 700,100" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 150,550 C 350,450 500,250 750,150" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* 5px radius badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-[#D6F3F2] border border-[#1FD6CB]/40 mb-6">
              <span className="w-2 h-2 rounded-[2px] bg-[#0B7F8A] animate-ping" />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#0B7F8A]">
                UAE finance partner for growing businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-extrabold tracking-[-0.035em] text-[#0F1F38] mb-6">
              Turning financial data into{' '}
              <span className="text-[#0B7F8A] sweep-underline sweep-underline-1">
                clarity
              </span>
              ,{' '}
              <span className="text-[#0B7F8A] sweep-underline sweep-underline-2">
                control
              </span>{' '}
              &amp;{' '}
              <span className="text-[#0B7F8A] sweep-underline sweep-underline-3">
                better business decisions.
              </span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-[#334155] font-normal max-w-2xl mb-9">
              Accounting, reporting, compliance and CFO advisory brought together into one
              scalable finance system, so you always know where the business stands and what to do
              next.
            </p>

            {/* Action Buttons with 5px radius */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <a
                href="#quiz"
                className="inline-flex items-center justify-between sm:justify-start gap-3 bg-[#142F55] hover:bg-[#0B7F8A] text-white pl-6 pr-3.5 py-3.5 rounded-[5px] text-[14.5px] font-bold tracking-tight shadow-md hover:shadow-xl transition-all duration-200 group whitespace-nowrap"
              >
                <span>Get my Free Finance Health Check</span>
                <span className="w-7 h-7 rounded-[5px] bg-white/15 flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-[#0F1F38] px-6 py-3.5 rounded-[5px] text-[14.5px] font-bold tracking-tight shadow-xs hover:shadow-sm transition-all duration-200 whitespace-nowrap hover:border-[#0B7F8A]"
              >
                View our services
              </a>
            </div>

            {/* What we do services pill row */}
            <nav className="flex flex-wrap items-center gap-2 mb-8" aria-label="Our services">
              <span className="w-full text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5D6E86]">
                What we do
              </span>
              <a
                href="#services"
                className="inline-flex items-center h-9 px-3.5 rounded-[5px] border border-[#D3DDE3] bg-white text-[#0F1F38] text-[13px] font-bold hover:border-[#0B7F8A] hover:text-[#0B7F8A] transition-colors"
              >
                Bookkeeping
              </a>
              <a
                href="#services"
                className="inline-flex items-center h-9 px-3.5 rounded-[5px] border border-[#D3DDE3] bg-white text-[#0F1F38] text-[13px] font-bold hover:border-[#0B7F8A] hover:text-[#0B7F8A] transition-colors"
              >
                VAT &amp; Corporate Tax
              </a>
              <a
                href="#services"
                className="inline-flex items-center h-9 px-3.5 rounded-[5px] border border-[#D3DDE3] bg-white text-[#0F1F38] text-[13px] font-bold hover:border-[#0B7F8A] hover:text-[#0B7F8A] transition-colors"
              >
                Payroll &amp; WPS
              </a>
              <a
                href="#services"
                className="inline-flex items-center h-9 px-3.5 rounded-[5px] border border-[#D3DDE3] bg-white text-[#0F1F38] text-[13px] font-bold hover:border-[#0B7F8A] hover:text-[#0B7F8A] transition-colors"
              >
                Financial reporting
              </a>
              <a
                href="#services"
                className="inline-flex items-center h-9 px-3.5 rounded-[5px] border border-[#D3DDE3] bg-white text-[#0F1F38] text-[13px] font-bold hover:border-[#0B7F8A] hover:text-[#0B7F8A] transition-colors"
              >
                CFO advisory
              </a>
            </nav>

            {/* Three Ticks */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[13.5px] font-semibold text-[#0B7F8A]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                <span>UAE-based</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                <span>CFO Advisory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0B7F8A] stroke-[2.5]" />
                <span>Business Insights</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Card with 5px radius */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[450px] animate-float-slow">
              <div className="bg-white/95 backdrop-blur-md rounded-[5px] border border-slate-300 p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,31,56,0.09)]">
                {/* Header */}
                <div className="flex items-start justify-between mb-5 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block">
                      A CLEARER VIEW
                    </span>
                    <h3 className="text-xl font-bold text-[#0F1F38] tracking-tight mt-0.5">
                      Your finance, in context.
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-[#0B7F8A] bg-[#D6F3F2] px-2.5 py-1 rounded-[5px] border border-[#1FD6CB]/30">
                    Demo view
                  </span>
                </div>

                {/* 2 Metric Boxes with 5px radius */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50 rounded-[5px] p-3.5 border border-slate-200">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 block">
                      CASH POSITION
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0F1F38] tabular-nums mt-1 tracking-tight">
                      AED {cashAmount}K
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                      Illustrative
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-[5px] p-3.5 border border-slate-200">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 block">
                      CASH RUNWAY
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0F1F38] tabular-nums mt-1 tracking-tight">
                      {runwayMonths} months
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                      Illustrative
                    </span>
                  </div>
                </div>

                {/* Interactive Chart Canvas */}
                <div className="mb-5 pt-1">
                  <div className="relative h-28 w-full">
                    <svg
                      viewBox="0 0 360 90"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0B7F8A" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#0B7F8A" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 10,70 Q 70,68 120,55 T 230,48 T 350,15 L 350,85 L 10,85 Z"
                        fill="url(#chartGradient)"
                      />

                      <path
                        d="M 10,70 Q 70,68 120,55 T 230,48 T 350,15"
                        fill="none"
                        stroke="#0B7F8A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="animate-draw-chart"
                      />

                      <circle cx="350" cy="15" r="4.5" fill="#142F55" stroke="#1FD6CB" strokeWidth="2.5" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2 px-1">
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                  </div>
                </div>

                {/* Bottom Bar with 5px radius */}
                <a
                  href="#health-check-form"
                  className="w-full bg-[#142F55] hover:bg-[#0C1E3C] text-white p-3.5 rounded-[5px] flex items-center justify-between px-5 transition-colors group text-[13px] font-bold"
                >
                  <span>Profit, cash and next decisions, together.</span>
                  <ArrowRight className="w-4 h-4 text-[#1FD6CB] transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Three Tags Under Card */}
              <div className="flex justify-center items-center gap-4 text-xs font-bold text-slate-600 mt-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-[2px] bg-[#0B7F8A]" />
                  Clarity
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-[2px] bg-[#0B7F8A]" />
                  Control
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-[2px] bg-[#0B7F8A]" />
                  Better decisions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
