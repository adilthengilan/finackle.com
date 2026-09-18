import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, MapPin, Building2, TrendingUp } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#F6F8FC] border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Header & Key Pillars */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
                About Finackle
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-6 tracking-tight">
                Helping Businesses Build Finance Functions They Can Rely On
              </h2>

              <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-semibold block">Jurisdiction & Base</span>
                    <span className="text-sm font-bold text-[#13215D]">United Arab Emirates</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-semibold block">Office Location</span>
                    <span className="text-sm font-bold text-[#13215D]">Ajman Free Zone C1 Building</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667085] font-semibold block">Core Positioning</span>
                    <span className="text-sm font-bold text-[#13215D]">Strategic Finance & Business Insights</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: The 4 Prompt-Mandated Paragraphs */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E5EAF2] shadow-sm space-y-6 text-[#667085] text-base md:text-lg leading-relaxed font-normal">
            <ScrollReveal delay={0.1}>
              <p className="text-[#13215D] font-semibold text-lg md:text-xl leading-relaxed">
                Finackle was founded to support growing businesses that need more than basic bookkeeping. Many business owners receive financial reports each month but still struggle to understand what the numbers mean for cash flow, profitability, and future decisions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p>
                We combine reliable finance operations with meaningful reporting and strategic guidance. Our approach ensures that financial records are accurate, processes are structured, and leadership teams have the visibility they need to steer their business with confidence.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                Based in the United Arab Emirates, Finackle works closely with SMEs, e-commerce brands, restaurant operators, and service businesses, helping them build finance functions that support long-term stability and sustainable growth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-[#EEF2FB] border border-[#142360]/20 rounded-2xl p-6 text-[#142360] font-semibold text-base md:text-lg">
                Finackle is a strategic finance partner helping business owners understand performance, improve cash flow visibility, and make confident business decisions.
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
