import { ScrollReveal } from './ScrollReveal';
import { 
  ArrowRight, 
  Calculator, 
  FileSpreadsheet, 
  TrendingUp, 
  Wallet, 
  BookOpen, 
  Receipt, 
  Users2, 
  Building2, 
  FileCheck2, 
  Compass,
  Store,
  Landmark
} from 'lucide-react';

const coreServices = [
  {
    title: "CFO Advisory Services",
    desc: "Strategic financial leadership, optimizing capital structure, guiding investments, and navigating complex corporate finance challenges.",
    icon: Compass
  },
  {
    title: "Financial Reporting",
    desc: "Detailed, actionable statements including P&L, balance sheets, and custom KPI dashboards for stakeholders.",
    icon: FileSpreadsheet
  },
  {
    title: "Budgeting & Forecasting",
    desc: "Building financial models to predict cash flow, plan expenditure, and support sustainable growth.",
    icon: TrendingUp
  },
  {
    title: "Cash Flow Management",
    desc: "Optimizing liquidity, monitoring working capital, and ensuring funds are available to operate efficiently.",
    icon: Wallet
  },
  {
    title: "Accounting Services",
    desc: "Comprehensive recording and management of daily financial transactions to maintain accurate ledgers.",
    icon: BookOpen
  },
  {
    title: "Bookkeeping Services",
    desc: "Tracking accounts payable and receivable, bank reconciliation, and general ledger maintenance.",
    icon: Receipt
  },
  {
    title: "Payroll Services",
    desc: "Monthly payroll processing, WPS salary transfers, gratuity and leave accrual tracking, and clean records.",
    icon: Users2
  },
  {
    title: "Finance Operations Outsourcing",
    desc: "Complete end-to-end management of the finance function, acting as the company's dedicated internal team.",
    icon: Building2
  },
  {
    title: "VAT Registration",
    desc: "Navigating UAE VAT requirements and helping businesses register correctly with the FTA.",
    icon: FileCheck2
  },
  {
    title: "VAT Filing",
    desc: "Timely and accurate calculation and submission of VAT returns.",
    icon: Calculator
  }
];

const specificOfferings = [
  {
    title: "Accounting Services in Dubai & UAE",
    subtitle: "Outsourced accounting and bookkeeping on a fixed monthly fee.",
    tag: "Fixed Monthly"
  },
  {
    title: "Corporate Tax Registration",
    subtitle: "EmaraTax registration, TRN delivery, and free-zone assessment.",
    tag: "Corporate Tax"
  },
  {
    title: "VAT Registration & Filing",
    subtitle: "TRN applications, quarterly returns, and input VAT recovery.",
    tag: "FTA Compliant"
  },
  {
    title: "E-commerce Accounting",
    subtitle: "Gateway and marketplace reconciliation, channel-level profitability, and COD tracking.",
    tag: "Online Retail"
  },
  {
    title: "Payroll Services",
    subtitle: "WPS salary files, payslips, and gratuity accruals.",
    tag: "WPS & HR"
  },
  {
    title: "Outsourced CFO Services",
    subtitle: "Monthly reports, cash-flow forecasts, and a standing meeting focused on the numbers.",
    tag: "Strategic Partner"
  }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           <ScrollReveal delay={0.1}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors h-full flex flex-col">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">01 / Foundations</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accounting and Compliance</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mt-auto">
                  Reliable bookkeeping, reconciliations, accounting, VAT support, and finance operations handled with care.
                </p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors h-full flex flex-col">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">02 / Visibility</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">A Clearer Owner View</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mt-auto">
                  Monthly reporting that brings cash, profitability, receivables, and the story behind them into focus.
                </p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.3}>
             <div className="group border-l-2 border-gray-200 pl-6 hover:border-[#1C0F38] transition-colors h-full flex flex-col">
                <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase group-hover:text-[#1C0F38] transition-colors">03 / Direction</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Perspective</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mt-auto">
                  CFO guidance for the questions around pricing, hiring, cash flow, and the next stage of growth.
                </p>
             </div>
           </ScrollReveal>
        </div>

        {/* Specific UAE Offerings */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-900/60 mb-2 block">Specialized Solutions</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Tailored Offerings for UAE Businesses</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specificOfferings.map((offering, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-[#F6F7FA] p-8 rounded-[2rem] border border-gray-100/80 hover:border-indigo-200 transition-all group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#1C0F38] border border-gray-200/60 shadow-2xs">
                      {offering.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1C0F38] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1C0F38] transition-colors">
                    {offering.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mt-auto">
                    {offering.subtitle}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Everything Your Finance Function Needs */}
        <div className="bg-[#F6F7FA] rounded-[3rem] p-8 md:p-14 border border-gray-100">
           <ScrollReveal>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-[#1C0F38]/60 mb-2 block">Comprehensive Suite</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                   Everything your finance function needs.
                 </h2>
               </div>
               <button className="flex items-center gap-2 text-sm font-bold text-[#1C0F38] hover:text-[#2A1B54] transition-colors">
                 Explore All Services <ArrowRight className="w-4 h-4" />
               </button>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={index} 
                      className="bg-white border border-gray-200/80 p-6 rounded-2xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all flex items-start gap-4"
                    >
                       <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-[#1C0F38] shrink-0 mt-0.5">
                         <Icon className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-base mb-1">{service.title}</h4>
                         <p className="text-xs text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                       </div>
                    </div>
                  );
                })}
             </div>
           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
