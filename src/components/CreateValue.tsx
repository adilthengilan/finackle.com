import { ScrollReveal } from './ScrollReveal';
import { Eye, TrendingUp, SlidersHorizontal, ShieldCheck } from 'lucide-react';

const valueCards = [
  {
    number: "01",
    title: "Better Visibility",
    description: "Understand profitability, cash flow, and business performance through meaningful reporting.",
    icon: Eye
  },
  {
    number: "02",
    title: "Better Decisions",
    description: "Use financial insights to make confident decisions around pricing, hiring, and growth.",
    icon: TrendingUp
  },
  {
    number: "03",
    title: "Better Control",
    description: "Build reliable finance processes that reduce errors, delays, and dependency on individuals.",
    icon: SlidersHorizontal
  },
  {
    number: "04",
    title: "Experienced Perspective",
    description: "Get finance guidance when decisions become more complex.",
    icon: ShieldCheck
  }
];

export const CreateValue = () => {
  return (
    <section id="value" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              How We Create Value
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              You should not have to interpret financial reports on your own.
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              Accurate records are only the starting point. Finackle helps you understand what is changing, why it matters, and what actions you should consider next.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Equal Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-[#F6F8FC] rounded-[2rem] p-8 border border-[#E5EAF2] hover:border-[#142360]/50 hover:bg-white hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center transition-all group-hover:bg-[#142360] group-hover:text-white shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-[#667085]/60 tracking-widest uppercase group-hover:text-[#142360] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#13215D] mb-3 group-hover:text-[#142360] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed font-normal mt-auto">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
