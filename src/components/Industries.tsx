import { ScrollReveal } from './ScrollReveal';
import { ShoppingBag, Utensils, Truck, Briefcase, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    number: "01",
    name: "E-Commerce",
    icon: ShoppingBag,
    description: "Online retail and direct-to-consumer brands managing multi-channel orders, returns, and payment gateways.",
    areas: [
      "Revenue and margin analysis",
      "Payment reconciliation",
      "Inventory profitability",
      "Cash flow visibility"
    ]
  },
  {
    number: "02",
    name: "Restaurants & F&B",
    icon: Utensils,
    description: "Single and multi-outlet food and beverage operators navigating recipe costs, delivery platform commissions, and wastage.",
    areas: [
      "Outlet profitability",
      "Supplier controls",
      "Margin improvement"
    ]
  },
  {
    number: "03",
    name: "Trading & Distribution",
    icon: Truck,
    description: "Wholesalers and distributors handling high-volume inventory cycles, credit terms, and supplier commitments.",
    areas: [
      "Inventory controls",
      "Working capital management",
      "Customer profitability"
    ]
  },
  {
    number: "04",
    name: "Professional Services",
    icon: Briefcase,
    description: "Agencies, consultancies, and specialized service firms balancing client retainers, staff utilization, and project scope.",
    areas: [
      "Project profitability",
      "Reporting",
      "Financial planning"
    ]
  }
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 px-6 md:px-12 bg-[#F6F8FC] border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] text-[#142360] text-xs font-bold uppercase tracking-wider mb-6 border border-[#E5EAF2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span>
              Industries
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#13215D] leading-tight mb-5 tracking-tight">
              Finance Support Built Around Your Business
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed font-normal">
              Different businesses face different financial questions. Our approach adapts to the way your business operates.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Large Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#E5EAF2] hover:border-[#142360]/40 hover:shadow-xl hover:shadow-[#142360]/5 transition-all duration-300 h-full flex flex-col group">
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E5EAF2]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#142360] flex items-center justify-center group-hover:bg-[#142360] group-hover:text-white transition-colors shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#667085]/70 block">
                          Industry {ind.number}
                        </span>
                        <h3 className="text-2xl font-bold text-[#13215D] group-hover:text-[#142360] transition-colors">
                          {ind.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#667085] text-sm md:text-base font-normal leading-relaxed mb-8">
                    {ind.description}
                  </p>

                  <div className="mt-auto bg-[#F6F8FC] rounded-2xl p-5 border border-[#E5EAF2]">
                    <span className="text-[11px] font-bold text-[#142360] uppercase tracking-wider block mb-3">
                      Key Financial Focus Areas
                    </span>
                    <ul className="space-y-2.5">
                      {ind.areas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-[#13215D]">
                          <CheckCircle2 className="w-4 h-4 text-[#142360] shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
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
