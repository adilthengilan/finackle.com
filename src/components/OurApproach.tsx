import { ScrollReveal } from './ScrollReveal';
import { Layers, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const pillars = [
  {
    number: "01",
    title: "Reliable Foundations",
    description: "Accurate accounting, reconciliations, and compliance processes create the foundation for trustworthy financial information.",
    icon: Layers,
    details: "Without clean ledgers and validated balances, every downstream decision is built on guesswork. We build the discipline first."
  },
  {
    number: "02",
    title: "Insight Beyond Numbers",
    description: "We go beyond reporting figures by helping businesses understand trends, identify risks, recognise opportunities, and make informed decisions.",
    icon: Lightbulb,
    details: "We translate raw P&L lines into clear business drivers, pinpointing margin shifts, cash velocity, and overhead trends."
  },
  {
    number: "03",
    title: "Finance Support That Evolves",
    description: "As your business grows, we adapt our support from accounting operations and reporting to finance improvement and strategic guidance.",
    icon: TrendingUp,
    details: "Whether preparing for capital, expanding into new sales channels, or scaling headcounts, our scope flexes to match your ambition."
  }
];

export const OurApproach = () => {
  return (
    <section id="our-approach" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              Our Approach
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              A Structured Approach to Better Financial Visibility
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              How we structure our collaboration so your finance operations stay resilient while your leadership gains clear visibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Large Horizontal Cards */}
        <div className="space-y-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-[#F6F8FC] rounded-[2.5rem] p-8 md:p-10 border border-[#E5EAF2] hover:border-[#142360]/40 hover:bg-white hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Icon & Number */}
                    <div className="md:col-span-4 flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center shrink-0 group-hover:bg-[#142360] group-hover:text-white transition-colors shadow-2xs">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-widest text-[#667085]/70 block mb-1">
                          Pillar {pillar.number}
                        </span>
                        <h3 className="text-2xl font-bold text-[#13215D] group-hover:text-[#142360] transition-colors leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Middle Core Copy */}
                    <div className="md:col-span-5">
                      <p className="text-[#13215D] font-semibold text-base md:text-lg leading-relaxed mb-2">
                        "{pillar.description}"
                      </p>
                    </div>

                    {/* Right Extra Context */}
                    <div className="md:col-span-3 text-xs md:text-sm text-[#667085] leading-relaxed border-t md:border-t-0 md:border-l border-[#E5EAF2] pt-4 md:pt-0 md:pl-6 font-normal">
                      {pillar.details}
                    </div>

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
