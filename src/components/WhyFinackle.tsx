import { ScrollReveal } from './ScrollReveal';
import { Award, Globe2, Cpu, BarChart2, Lightbulb } from 'lucide-react';

const capabilities = [
  {
    number: "01",
    title: "Finance Expertise",
    description: "Experienced finance support focused on practical business needs.",
    icon: Award
  },
  {
    number: "02",
    title: "UAE Business Understanding",
    description: "An understanding of the financial and operational environment businesses face in the UAE.",
    icon: Globe2
  },
  {
    number: "03",
    title: "Accounting System Knowledge",
    description: "Support for building reliable accounting systems and processes.",
    icon: Cpu
  },
  {
    number: "04",
    title: "Reporting Capability",
    description: "Clear management reporting that helps owners understand performance.",
    icon: BarChart2
  },
  {
    number: "05",
    title: "Advisory Support",
    description: "Practical guidance when financial decisions become more complex.",
    icon: Lightbulb
  }
];

export const WhyFinackle = () => {
  return (
    <section id="why-finackle" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              Why Finackle
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              Finance Expertise Without the Cost of Building a Full Internal Finance Team.
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              Finackle helps growing businesses access experienced finance support without the cost of building a full internal finance team.
            </p>
          </div>
        </ScrollReveal>

        {/* Five Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-[#F6F8FC] rounded-[2rem] p-8 border border-[#E5EAF2] hover:border-[#142360]/40 hover:bg-white hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center transition-all group-hover:bg-[#142360] group-hover:text-white shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-[#667085]/60 tracking-widest uppercase group-hover:text-[#142360] transition-colors">
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#13215D] mb-3 group-hover:text-[#142360] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed font-normal mt-auto">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Sixth Card: Focus summary */}
          <ScrollReveal delay={0.4}>
            <div className="bg-[#13215D] text-white rounded-[2rem] p-8 border border-white/10 shadow-xl shadow-black/20 h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EEF2FB] bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
                  Commitment
                </span>
                <h3 className="text-xl font-bold mb-3">
                  A True Finance Partner, Not a Transactional Vendor
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  We embed within your cadence, translate raw entries into actionable roadmaps, and support your leadership through every phase of scale.
                </p>
              </div>
              <div className="pt-6 border-t border-white/15 mt-6 text-xs text-slate-300 font-medium">
                Headquartered in the UAE · Dedicated team support
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
