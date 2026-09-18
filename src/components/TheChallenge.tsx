import { ScrollReveal } from './ScrollReveal';
import { FileText, EyeOff, Compass, Layers } from 'lucide-react';

const challenges = [
  {
    number: "01",
    title: "Reports Are Available But Difficult to Interpret",
    description: "Financial reports exist, but the numbers do not always clearly explain what is changing or why it matters.",
    icon: FileText
  },
  {
    number: "02",
    title: "Limited Visibility",
    description: "Owners lack clear visibility into profitability, cash flow, and business performance.",
    icon: EyeOff
  },
  {
    number: "03",
    title: "Decisions Without Reliable Insights",
    description: "Important decisions are sometimes made without enough financial information or context.",
    icon: Compass
  },
  {
    number: "04",
    title: "Finance Becomes Harder as the Business Grows",
    description: "Processes become more complex, information becomes fragmented, and finance can become increasingly dependent on individuals.",
    icon: Layers
  }
];

export const TheChallenge = () => {
  return (
    <section id="challenge" className="relative pt-6 pb-24 md:pt-10 md:pb-28 px-6 md:px-12 overflow-hidden text-[#13215D] bg-gradient-to-b from-[#1acbc9] via-[#e2f9f8] to-[#F6F8FC] border-b border-[#E5EAF2]">
      {/* Blended Ambient Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1acbc9]/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#1acbc9]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Geometric Dot Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#13215D0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[#13215D] text-xs font-bold uppercase tracking-wider mb-6 border border-white/90 shadow-sm ring-1 ring-[#1acbc9]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13215D]"></span>
              The Challenge
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              Growing Businesses Often Have Financial Information, But Not the Clarity Needed to Make Better Decisions.
            </h2>
            <p className="text-base md:text-lg text-[#13215D]/80 leading-relaxed font-normal">
              Financial information may exist, but that does not always mean business owners have a clear view of what is really happening.
            </p>
          </div>
        </ScrollReveal>

        {/* Four Problem Cards with Frosted Glass styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-white/70 hover:bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 border border-white/85 shadow-[0_10px_35px_rgba(19,33,93,0.06)] hover:shadow-[0_16px_45px_rgba(19,33,93,0.12)] transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-black text-[#13215D]/50 tracking-widest uppercase group-hover:text-[#13215D] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/90 border border-white text-[#13215D] flex items-center justify-center transition-all group-hover:bg-[#13215D] group-hover:text-white shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#13215D] mb-3 leading-snug group-hover:text-[#142360] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#13215D]/75 font-normal leading-relaxed mt-auto">
                    {item.description}
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
