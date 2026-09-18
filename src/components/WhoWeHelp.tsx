import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const situations = [
  {
    title: "Have grown beyond basic bookkeeping",
    description: "Transactions and volume have expanded to a point where standard entry-logging no longer provides the operational insight needed to steer the business."
  },
  {
    title: "Need better visibility over cash and profitability",
    description: "Revenue is moving, but you need exact clarity on which channels, outlets, or clients actually contribute to net bank balance."
  },
  {
    title: "Need reliable monthly reporting",
    description: "You require structured management reports and reconciliations delivered consistently on a predictable monthly cadence."
  },
  {
    title: "Want finance expertise without hiring a full finance team",
    description: "You need the strategic guidance of a senior finance professional and the execution of a diligent back-office, without high internal overhead."
  },
  {
    title: "Want better control as they scale",
    description: "You want documented processes, reliable systems, and compliance safeguards that remove fragility and personal dependency."
  }
];

export const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="py-24 px-6 md:px-12 bg-[#F6F8FC] border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              Who We Help
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              Designed For Businesses That Are Ready for Better Financial Visibility.
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              Finackle is designed for growing businesses that need more than basic bookkeeping.
            </p>
          </div>
        </ScrollReveal>

        {/* Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {situations.map((sit, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="bg-white rounded-[2rem] p-8 border border-[#E5EAF2] hover:border-[#142360]/40 hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                <div className="w-10 h-10 rounded-full bg-[#EEF2FB] text-[#142360] flex items-center justify-center mb-6 group-hover:bg-[#142360] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-[#13215D] mb-3 leading-snug group-hover:text-[#142360] transition-colors">
                  {sit.title}
                </h3>
                
                <p className="text-sm text-[#667085] leading-relaxed font-normal mt-auto">
                  {sit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* Prompt card linking directly to Health Check */}
          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-br from-[#142360] to-[#13215D] text-white rounded-[2rem] p-8 shadow-xl shadow-black/20 h-full flex flex-col justify-between border border-white/20">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EEF2FB] bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
                  Next Step
                </span>
                <h3 className="text-xl font-bold mb-3 leading-snug">
                  Recognize your business in these situations?
                </h3>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                  Schedule a 30-minute Finance Health Check to review your reporting setup and uncover immediate visibility gains.
                </p>
              </div>
              <a 
                href="#health-check-form"
                className="bg-white text-[#142360] text-xs md:text-sm font-bold px-6 py-3.5 rounded-full hover:bg-[#EEF2FB] transition-all flex items-center justify-center gap-2 mt-6 shadow-sm"
              >
                Book Your Finance Health Check <ArrowRight className="w-4 h-4 text-[#142360]" />
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
