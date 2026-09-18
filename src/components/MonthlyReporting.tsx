import { ScrollReveal } from './ScrollReveal';
import { HelpCircle, ArrowRight } from 'lucide-react';

const questions = [
  {
    question: "Are we actually profitable?",
    category: "True Performance",
    note: "Beyond revenue headlines, isolating operating costs, platform fees, and real unit economics."
  },
  {
    question: "Which products or customers generate the best margins?",
    category: "Margin Optimization",
    note: "Separating volume drivers from profit drivers so marketing and sales focus where returns are highest."
  },
  {
    question: "How much cash runway do we have?",
    category: "Cash Visibility",
    note: "Real-time liquidity forecasting accounting for upcoming supplier commitments, payroll, and collection delays."
  },
  {
    question: "Can we afford the next hire?",
    category: "Expansion Planning",
    note: "Stress-testing headcount costs against seasonal cash flow before taking on long-term fixed liabilities."
  },
  {
    question: "Where are costs increasing?",
    category: "Cost Governance",
    note: "Spotting creeping software subscriptions, vendor rate changes, and distribution overheads early."
  }
];

export const MonthlyReporting = () => {
  return (
    <section id="reporting" className="py-24 px-6 md:px-12 bg-[#F6F8FC] border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
                Monthly Reporting
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-4 tracking-tight">
                A Monthly Review,<br />Not Just a Data Dump
              </h2>
              <p className="text-lg md:text-xl font-bold text-[#142360] mb-3">
                A Report That Explains Why the Numbers Matter.
              </p>
              <p className="text-base text-[#667085] leading-relaxed font-normal">
                Our monthly reporting transforms month-end figures into concise insights that help you understand what changed, why it matters, and what needs attention next.
              </p>
            </div>
            
            <a 
              href="#health-check-form" 
              className="bg-white border border-[#E5EAF2] text-[#142360] px-6 py-3.5 rounded-full font-bold hover:bg-[#EEF2FB] hover:border-[#142360]/40 transition-all shadow-sm text-sm"
            >
              See How Monthly Reporting Could Work
            </a>
          </div>
        </ScrollReveal>

        {/* Section 08: Questions We Help Answer */}
        <div className="mt-4">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E5EAF2]">
                <HelpCircle className="w-3.5 h-3.5 text-[#142360]" />
                Decision Support
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#13215D] tracking-tight mb-3">
                Questions We Help Answer
              </h2>
              <p className="text-base text-[#667085] font-normal leading-relaxed">
                The numbers are only useful when they change the conversation. Here are the core business decisions we help owners solve every month.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map((q, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-[2rem] p-7 border border-[#E5EAF2] hover:border-[#142360]/40 hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#142360] bg-[#EEF2FB] px-2.5 py-1 rounded-full border border-[#E5EAF2]">
                      {q.category}
                    </span>
                    <span className="text-xs font-black text-[#667085]/60">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#13215D] mb-3 leading-snug group-hover:text-[#142360] transition-colors">
                    "{q.question}"
                  </h3>

                  <p className="text-xs md:text-sm text-[#667085] leading-relaxed font-normal mt-auto pt-4 border-t border-[#E5EAF2]/80">
                    {q.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Sixth Card: Call to action card matching the grid */}
            <ScrollReveal delay={0.4}>
              <div className="bg-gradient-to-br from-[#13215D] to-[#142360] rounded-[2rem] p-7 text-white shadow-xl shadow-black/20 h-full flex flex-col justify-between border border-white/15">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/20 inline-block mb-4">
                    Your Business Question
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">
                    Have a specific finance question you've been putting off?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                    Let us review your setup in a 30-minute discussion and show you where visibility can begin.
                  </p>
                </div>
                <a 
                  href="#health-check-form" 
                  className="bg-white text-[#142360] text-xs font-bold px-5 py-3 rounded-full hover:bg-[#EEF2FB] transition-all flex items-center justify-center gap-2 mt-6"
                >
                  Book a Finance Health Check <ArrowRight className="w-3.5 h-3.5 text-[#142360]" />
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
