import { ScrollReveal } from './ScrollReveal';
import { Database, CheckSquare, Presentation, Zap, FileText, Calendar, Users, Lock } from 'lucide-react';

export const Process = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      
      {/* Process Steps */}
      <div className="mb-32">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              From Records to Readiness
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Clarity Comes From a Dependable Process. We bring the right level of finance support at each stage without requiring you to interpret the work on your own.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
           {/* Connecting Line Mock (hidden on mobile) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-1/2"></div>
           
           <ScrollReveal delay={0.1}>
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
               <div className="w-12 h-12 bg-indigo-50 text-[#1C0F38] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                 <Database className="w-5 h-5" />
               </div>
               <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase">01 / 04</div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Record</h3>
               <p className="text-xs text-gray-500 font-medium">Keep the financial detail accurate and current.</p>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
               <div className="w-12 h-12 bg-indigo-50 text-[#1C0F38] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                 <CheckSquare className="w-5 h-5" />
               </div>
               <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase">02 / 04</div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Reconcile</h3>
               <p className="text-xs text-gray-500 font-medium">Check the accounts so the picture is consistent.</p>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.3}>
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
               <div className="w-12 h-12 bg-indigo-50 text-[#1C0F38] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                 <Presentation className="w-5 h-5" />
               </div>
               <div className="text-[10px] font-black text-gray-400 tracking-widest mb-2 uppercase">03 / 04</div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Explain</h3>
               <p className="text-xs text-gray-500 font-medium">Turn the month into a report you can actually use.</p>
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.4}>
             <div className="bg-[#1C0F38] p-8 rounded-[2rem] shadow-xl shadow-indigo-900/20 text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-white text-[#1C0F38] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <Zap className="w-5 h-5" />
                 </div>
                 <div className="text-[10px] font-black text-indigo-300 tracking-widest mb-2 uppercase">04 / 04</div>
                 <h3 className="text-lg font-bold mb-2">Act</h3>
                 <p className="text-xs text-indigo-100 font-medium">Bring context to the decisions in front of you.</p>
               </div>
             </div>
           </ScrollReveal>
        </div>
      </div>

      {/* Hands-On Service */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-gray-900 text-xs font-bold mb-6 border border-gray-200 shadow-sm">
                A Hands-On Finance Service
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                Approachable Day to Day.<br />Experienced When the Work Becomes Complex.
             </h2>
             <p className="text-gray-500 text-base leading-relaxed font-medium mb-8">
                You can bring the question before it becomes a problem. We can bring the right level of detail, keep the language plain, and explain what is known, what needs checking, and what the next steps could be.
             </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <ScrollReveal delay={0.1}>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full hover:border-indigo-200 transition-colors group">
                <FileText className="w-6 h-6 text-[#1C0F38] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900 mb-2">Plain English, Every Month</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">We explain what changed, why it matters, and what may deserve your attention next.</p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full hover:border-indigo-200 transition-colors group">
                <Calendar className="w-6 h-6 text-[#1C0F38] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900 mb-2">A Dependable Rhythm</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Records, reconciliations, reporting, and compliance work follow a considered cadence.</p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.3}>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full hover:border-indigo-200 transition-colors group">
                <Users className="w-6 h-6 text-[#1C0F38] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900 mb-2">Senior Review & Perspective</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Important work is reviewed with the care that growing businesses need.</p>
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.4}>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full hover:border-indigo-200 transition-colors group">
                <Lock className="w-6 h-6 text-[#1C0F38] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900 mb-2">Your Business, Your Info</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Your finance records remain yours, with a clear and current view of the work behind them.</p>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
