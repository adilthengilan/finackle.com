import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, TrendingUp, AlertCircle, ShieldAlert } from 'lucide-react';

export const Reporting = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Monthly Reporting Intro */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Monthly Reporting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              A Monthly Review,<br />Not Just a Data Dump
            </h2>
            <p className="text-xl font-medium text-[#1C0F38] mb-4">A Report That Explains Why the Numbers Matter.</p>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Our monthly reporting transforms month-end figures into concise insights that help you understand what changed, why it matters, and what needs attention next.
            </p>
          </div>
          <button className="bg-white border border-gray-200 text-[#1C0F38] px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm">
            See How Monthly Reporting Could Work
          </button>
        </div>
      </ScrollReveal>

      {/* Dashboard Mockup */}
      <ScrollReveal delay={0.2}>
        <div className="bg-[#1C0F38] rounded-[3rem] p-4 md:p-12 shadow-2xl shadow-indigo-900/20 mb-24 relative overflow-hidden">
           {/* Abstract BG */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
           
           <div className="bg-[#F6F7FA] rounded-[2rem] p-6 md:p-10 shadow-2xl relative z-10 border border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-gray-200 gap-4">
                 <div>
                    <h3 className="text-2xl font-bold text-gray-900">Monthly Owner's Report</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">July 2026 · Prepared for Discussion</p>
                 </div>
                 <div className="bg-gray-200/50 text-gray-600 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider flex items-center gap-1.5">
                   <AlertCircle className="w-3 h-3" /> Fictional Sample
                 </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-10">
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Revenue</p>
                    <div className="text-3xl font-black text-gray-900 mb-2">AED 412K</div>
                    <div className="flex items-center text-[11px] text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> +8% vs June
                    </div>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Gross Margin</p>
                    <div className="text-3xl font-black text-gray-900 mb-2">34.2%</div>
                    <div className="flex items-center text-[11px] text-red-600 font-bold bg-red-50 w-fit px-2 py-1 rounded">
                      -1.1 pts
                    </div>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Cash Balance</p>
                    <div className="text-3xl font-black text-gray-900 mb-2">AED 238K</div>
                    <div className="text-[11px] text-gray-500 font-medium">Across 2 accounts</div>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Cash Runway</p>
                    <div className="text-3xl font-black text-[#1C0F38] mb-2">4.2 months</div>
                    <div className="text-[11px] text-gray-500 font-medium">Payroll covered</div>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider flex items-center gap-1">Overdue Receivables <ShieldAlert className="w-3 h-3 text-red-500"/></p>
                    <div className="text-3xl font-black text-gray-900 mb-2">AED 86K</div>
                    <div className="text-[11px] text-red-500 font-bold">2 invoices overdue</div>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Accounts Payable</p>
                    <div className="text-3xl font-black text-gray-900 mb-2">AED 64K</div>
                    <div className="text-[11px] text-gray-500 font-medium">Due in 30 days</div>
                 </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* Trend Mock */}
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <h4 className="text-sm font-bold text-gray-900 mb-6 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#1C0F38]" /> Revenue Trend</h4>
                    <div className="relative h-24 flex items-end justify-between px-2">
                       {/* Mock Sparkline */}
                       <svg className="absolute inset-0 w-full h-full text-indigo-100 fill-indigo-50/50 stroke-[#1C0F38]" preserveAspectRatio="none" viewBox="0 0 100 50">
                         <path d="M0,45 L15,40 L35,35 L55,25 L75,15 L100,5 L100,50 L0,50 Z" strokeWidth="2" strokeLinejoin="round" />
                       </svg>
                       <div className="text-[9px] font-bold text-gray-400 relative z-10 pb-1">Feb</div>
                       <div className="text-[9px] font-bold text-gray-400 relative z-10 pb-1">Mar</div>
                       <div className="text-[9px] font-bold text-gray-400 relative z-10 pb-1">Apr</div>
                       <div className="text-[9px] font-bold text-gray-400 relative z-10 pb-1">May</div>
                       <div className="text-[9px] font-bold text-gray-400 relative z-10 pb-1">Jun</div>
                       <div className="text-[9px] font-bold text-[#1C0F38] relative z-10 pb-1 bg-white/80 px-1 rounded">Jul</div>
                    </div>
                 </div>

                 {/* Discussion Points */}
                 <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100/50">
                    <h4 className="text-sm font-bold text-[#1C0F38] mb-3">Discussion Points</h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Sales grew again, but margin slipped because supplier prices rose in June. Two invoices are more than 60 days overdue, so they are flagged for follow-up this week.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </ScrollReveal>

      {/* From Reports to Decisions */}
      <div className="mt-32">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              From Reports to Decisions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              The Numbers Are Only Useful When They Change the Conversation. Here are examples of questions a finance partner can help you answer using current information and clear assumptions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
              <div className="text-[10px] font-black text-gray-400 tracking-widest mb-4 uppercase">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protect the Cash</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mt-auto">
                AED 86K is sitting in overdue invoices. We would agree the follow-up plan before looking at new spending.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#1C0F38] p-8 rounded-[2rem] shadow-xl shadow-indigo-900/20 h-full flex flex-col text-white">
              <div className="text-[10px] font-black text-indigo-300 tracking-widest mb-4 uppercase">02</div>
              <h3 className="text-xl font-bold mb-4">Price With Confidence</h3>
              <p className="text-indigo-100 font-medium leading-relaxed text-sm mt-auto">
                Gross margin is 34.2% this month. The next pricing conversation starts with the cost changes behind that number.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
              <div className="text-[10px] font-black text-gray-400 tracking-widest mb-4 uppercase">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan the Next Hire</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm mt-auto">
                With 4.2 months of cash runway, we can model a hiring date that keeps the business comfortable, not just optimistic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
