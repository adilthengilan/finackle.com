import { ScrollReveal } from './ScrollReveal';
import { Briefcase, Building, Layers, ShieldCheck, Target, ArrowRight } from 'lucide-react';

const services = [
  "CFO Advisory Services",
  "Financial Reporting",
  "Budgeting & Forecasting",
  "Cash Flow Management",
  "Accounting Services",
  "Bookkeeping Services",
  "Payroll Services",
  "Finance Operations Outsourcing",
  "VAT Registration",
  "VAT Filing"
];

export const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Connected Finance Function Blocks */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> How We Work Together
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              One Connected Finance Function.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              The essential finance work stays accurate and on time. The value comes from connecting it to the decisions in front of you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           <ScrollReveal delay={0.1}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">01 / Foundations</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accounting and Compliance</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Reliable bookkeeping, reconciliations, accounting, VAT support, and finance operations handled with care.
                </p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">02 / Visibility</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">A Clearer Owner View</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Monthly reporting that brings cash, profitability, receivables, and the story behind them into focus.
                </p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.3}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">03 / Direction</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Perspective</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  CFO guidance for the questions around pricing, hiring, cash flow, and the next stage of growth.
                </p>
             </div>
           </ScrollReveal>
        </div>

        {/* Everything Your Finance Function Needs */}
        <div className="bg-[#F6F7FA] rounded-[3rem] p-8 md:p-16 border border-gray-100">
           <ScrollReveal>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                 Everything your finance function needs.
               </h2>
               <button className="flex items-center gap-2 text-sm font-bold text-[#1C0F38] hover:text-indigo-800 transition-colors">
                 Explore All Services <ArrowRight className="w-4 h-4" />
               </button>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <div className="flex flex-wrap gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 px-6 py-4 rounded-2xl text-sm font-bold text-gray-800 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#1C0F38]"></span> {service}
                  </div>
                ))}
             </div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
