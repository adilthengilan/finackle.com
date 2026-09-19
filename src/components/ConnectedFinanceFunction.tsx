import { ScrollReveal } from './ScrollReveal';
import { Layers, BarChart3, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    tag: "01 / FINANCE OPERATIONS",
    title: "Build a Reliable Finance Foundation",
    description: "Create the reliable financial foundation your business needs to operate with confidence.",
    icon: Layers,
    services: [
      "Accounting & bookkeeping",
      "Reconciliations",
      "Finance process improvement",
      "Accounting system support",
      "Payroll support"
    ]
  },
  {
    tag: "02 / REPORTING & BUSINESS INSIGHTS",
    title: "Understand What Your Numbers Mean",
    description: "Turn financial information into meaningful reporting and business insights.",
    icon: BarChart3,
    services: [
      "Monthly management reporting",
      "KPI dashboards",
      "Profitability analysis",
      "Cash flow forecasting",
      "Business performance analysis"
    ]
  },
  {
    tag: "03 / FINANCE ADVISORY",
    title: "Make Better Growth Decisions",
    description: "Get practical finance guidance when your business decisions become more complex.",
    icon: TrendingUp,
    services: [
      "CFO advisory",
      "Budgeting & forecasting",
      "Growth planning",
      "Pricing decisions",
      "Financial strategy"
    ]
  }
];

export const ConnectedFinanceFunction = () => {
  return (
    <section id="finance-function" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              Our Finance Function
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              One Connected Finance Function
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              From reliable finance operations to business insights and strategic guidance, Finackle connects the numbers with the decisions that matter.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Major Connected Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-[#F6F8FC] rounded-[2.5rem] p-8 md:p-10 border border-[#E5EAF2] hover:border-[#142360]/40 hover:bg-white hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5EAF2]">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#142360] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#E5EAF2]">
                      {cap.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#142360] flex items-center justify-center border border-[#E5EAF2] group-hover:bg-[#142360] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Headline & Description */}
                  <h3 className="text-2xl font-bold text-[#13215D] mb-3 leading-snug group-hover:text-[#142360] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed font-normal mb-8">
                    {cap.description}
                  </p>

                  {/* Service Items inside Category */}
                  <div className="mt-auto bg-white rounded-2xl p-6 border border-[#E5EAF2]">
                    <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block mb-4">
                      Core Services Included
                    </span>
                    <ul className="space-y-3">
                      {cap.services.map((srv, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-[#13215D]">
                          <CheckCircle className="w-4 h-4 text-[#142360] shrink-0" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Bar */}
        <ScrollReveal delay={0.3}>
          <div className="bg-[#13215D] rounded-2xl p-6 md:p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-1">
                Want to evaluate where your finance function stands today?
              </h4>
              <p className="text-xs md:text-sm text-slate-300 font-normal">
                Book a Finance Health Check to review your reporting, finance processes, and opportunities to improve visibility and decision-making.
              </p>
            </div>
            <a 
              href="#health-check-form"
              className="bg-[#142360] text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold hover:bg-[#1a2d7c] transition-all shrink-0 flex items-center gap-2 shadow-md border border-white/20"
            >
              Book a Finance Health Check <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
