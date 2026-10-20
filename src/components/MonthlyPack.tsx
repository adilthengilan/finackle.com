import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const MonthlyPack: React.FC = () => {
  const whatsappUrl = `https://wa.me/971545022747?text=${encodeURIComponent(
    'Hello Finackle, please send me a sample monthly management pack.'
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-3">
                SEE BEFORE YOU COMMIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#0F1F38] tracking-tight mb-6">
                What lands in your inbox every month.
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#3B4D66] font-normal mb-8">
                A short management pack built on reconciled numbers. Every page ends with what it means
                for you and what we suggest next.
              </p>

              {/* 4 Ticks */}
              <div className="space-y-3.5 mb-10">
                <div className="flex items-center gap-3 text-[15px] font-semibold text-[#0F1F38]">
                  <Check className="w-5 h-5 text-[#0B7F8A] stroke-[2.5]" />
                  <span>Profit &amp; loss with month-on-month commentary</span>
                </div>
                <div className="flex items-center gap-3 text-[15px] font-semibold text-[#0F1F38]">
                  <Check className="w-5 h-5 text-[#0B7F8A] stroke-[2.5]" />
                  <span>13-week cash forecast and runway</span>
                </div>
                <div className="flex items-center gap-3 text-[15px] font-semibold text-[#0F1F38]">
                  <Check className="w-5 h-5 text-[#0B7F8A] stroke-[2.5]" />
                  <span>KPIs for your business model</span>
                </div>
                <div className="flex items-center gap-3 text-[15px] font-semibold text-[#0F1F38]">
                  <Check className="w-5 h-5 text-[#0B7F8A] stroke-[2.5]" />
                  <span>Compliance status and upcoming deadlines</span>
                </div>
              </div>

              {/* Action button with Sharp Edges */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#142F55] hover:bg-[#0C1E3C] text-white px-7 py-4 rounded-[5px] text-[15px] font-bold tracking-tight shadow-md hover:shadow-xl transition-all duration-200 group"
              >
                <span>Request a sample report</span>
                <ArrowRight className="w-4 h-4 text-[#1FD6CB] transition-transform group-hover:translate-x-1" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Fanning 3 Sample Pages with Sharp Edges */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15}>
              <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] group cursor-pointer">
                {/* Left Page (Page 3 · Cash) - Sharp */}
                <div className="absolute w-[260px] sm:w-[290px] bg-white rounded-[5px] p-5 shadow-lg border border-[#D3DDE3] transition-all duration-500 ease-out -rotate-6 translate-x-[-45px] sm:translate-x-[-65px] group-hover:-rotate-12 group-hover:translate-x-[-85px] sm:group-hover:translate-x-[-110px] z-10">
                  <div className="flex justify-between items-center text-[10.5px] font-extrabold uppercase tracking-wider text-[#667085] mb-2">
                    <span>PAGE 3 · CASH</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F1F38] mb-3">13-week forecast</h4>
                  {/* Mini bar chart */}
                  <div className="h-16 flex items-end gap-1.5 mb-3 pt-2">
                    <div className="w-4 bg-[#0B7F8A] h-[60%] rounded-[5px]" />
                    <div className="w-4 bg-[#0B7F8A] h-[75%] rounded-[5px]" />
                    <div className="w-4 bg-[#0B7F8A] h-[90%] rounded-[5px]" />
                    <div className="w-4 bg-[#0B7F8A] h-[70%] rounded-[5px]" />
                    <div className="w-4 bg-[#9A5A12] h-[30%] rounded-[5px]" />
                    <div className="w-4 bg-[#9A5A12] h-[25%] rounded-[5px]" />
                    <div className="w-4 bg-[#0B7F8A] h-[65%] rounded-[5px]" />
                  </div>
                  <div className="p-2 bg-[#FBEBD6] rounded-[5px] text-[11px] font-semibold text-[#9A5A12] leading-tight font-editorial italic">
                    Weeks 5–6 dip below your cash floor.
                  </div>
                </div>

                {/* Right Page (Page 4 · Compliance) - Sharp */}
                <div className="absolute w-[260px] sm:w-[290px] bg-white rounded-[5px] p-5 shadow-lg border border-[#D3DDE3] transition-all duration-500 ease-out rotate-6 translate-x-[45px] sm:translate-x-[65px] group-hover:rotate-12 group-hover:translate-x-[85px] sm:group-hover:translate-x-[110px] z-10">
                  <div className="flex justify-between items-center text-[10.5px] font-extrabold uppercase tracking-wider text-[#667085] mb-2">
                    <span>PAGE 4 · COMPLIANCE</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F1F38] mb-3">Upcoming</h4>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between p-1.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="text-[#3B4D66]">VAT return</span>
                      <span className="font-bold text-[#0B7F8A]">Prepared</span>
                    </div>
                    <div className="flex justify-between p-1.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="text-[#3B4D66]">Corporate Tax</span>
                      <span className="font-bold text-[#3B4D66]">Scheduled</span>
                    </div>
                    <div className="flex justify-between p-1.5 bg-[#F4F7F8] rounded-[5px]">
                      <span className="text-[#3B4D66]">WPS payroll</span>
                      <span className="font-bold text-[#0B7F8A]">On track</span>
                    </div>
                    <div className="flex justify-between p-1.5 bg-[#FBEBD6] rounded-[5px]">
                      <span className="text-[#9A5A12]">Receipts</span>
                      <span className="font-bold text-[#9A5A12]">2 missing</span>
                    </div>
                  </div>
                </div>

                {/* Middle Page (Front) - Sharp */}
                <div className="relative w-[280px] sm:w-[320px] bg-white rounded-[5px] p-6 shadow-2xl border border-[#D3DDE3] transition-all duration-500 ease-out group-hover:-translate-y-4 z-20">
                  <div className="flex justify-between items-center text-[11px] font-extrabold uppercase tracking-wider text-[#667085] mb-2">
                    <span>PAGE 1 · SUMMARY</span>
                    <span className="text-[#0B7F8A] bg-[#D6F3F2] px-2 py-0.5 rounded-[5px] font-bold">
                      SAMPLE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1F38] mb-4">
                    September at a glance
                  </h3>

                  <div className="space-y-2 text-xs sm:text-[13px] mb-4">
                    <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                      <span className="text-[#667085]">Revenue</span>
                      <span className="font-bold text-[#0F1F38] tabular-nums">
                        312,450 <span className="text-[#0B7F8A] text-xs font-bold">(+9%)</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                      <span className="text-[#667085]">Gross margin</span>
                      <span className="font-bold text-[#0F1F38] tabular-nums">
                        42.0% <span className="text-[#9A5A12] text-xs font-bold">(−0.8)</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D3DDE3]/40">
                      <span className="text-[#667085]">Net profit</span>
                      <span className="font-bold text-[#0F1F38] tabular-nums">44,379</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#667085]">Cash runway</span>
                      <span className="font-bold text-[#0B7F8A] tabular-nums">4.2 mo</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#D6F3F2] rounded-[5px] text-[12.5px] font-medium text-[#0B7F8A] leading-relaxed font-editorial italic">
                    Delivery-app fees rose 18%. Review pricing on top 10 items.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
