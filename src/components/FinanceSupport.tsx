import { ScrollReveal } from './ScrollReveal';
import { Search, Map, Anchor, MessageSquare } from 'lucide-react';

export const FinanceSupport = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> How We Support Your Finance Function
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            You should not have to interpret financial reports on your own.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed font-medium">
            You need more than accurate records. You need finance support designed to notice patterns, explain trade-offs, and understand the business behind the figures.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <ScrollReveal delay={0.1}>
           <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col hover:border-indigo-200 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#1C0F38] flex items-center justify-center mb-8 group-hover:bg-[#1C0F38] group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Second Set of Eyes</h3>
              <p className="text-gray-500 font-medium leading-relaxed mt-auto">We look for the small shifts that deserve a bigger conversation.</p>
           </div>
         </ScrollReveal>

         <ScrollReveal delay={0.2}>
           <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col hover:border-indigo-200 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 text-indigo-400 flex items-center justify-center mb-8 group-hover:bg-indigo-50/500 group-hover:text-white transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Clearer Next Move</h3>
              <p className="text-gray-500 font-medium leading-relaxed mt-auto">Reports end with useful questions, not a pile of unexplained totals.</p>
           </div>
         </ScrollReveal>

         <ScrollReveal delay={0.3}>
           <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col hover:border-indigo-200 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Steady Point of View</h3>
              <p className="text-gray-500 font-medium leading-relaxed mt-auto">Someone who can hold the detail while you hold the direction.</p>
           </div>
         </ScrollReveal>

         <ScrollReveal delay={0.4}>
           <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col hover:border-indigo-200 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Straightforward Advice</h3>
              <p className="text-gray-500 font-medium leading-relaxed mt-auto">Clear financial insight based on the numbers, including early warnings that need attention.</p>
           </div>
         </ScrollReveal>
      </div>
    </section>
  );
};
