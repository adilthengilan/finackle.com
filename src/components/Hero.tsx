import { ArrowRight, Eye, FileText, CheckCircle, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero = () => {
  return (
    <section className="bg-[#1C0F38] pt-12 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-100 text-xs font-semibold mb-8 border border-indigo-400/30 backdrop-blur-sm shadow-sm">
              Helping Business Owners Make Better Financial Decisions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Your Strategic<br />Finance Partner.
            </h1>
            
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Finackle provides outsourced accounting, financial reporting, and CFO advisory services that help business owners understand business performance, improve cash flow visibility, and make confident financial decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1C0F38] px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2">
                Talk to a Finance Expert
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Pills */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-indigo-400/30 bg-white/5 text-white text-sm backdrop-blur-sm shadow-sm font-medium">
              <Eye className="w-4 h-4 text-indigo-300" /> 01 — Visibility
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-indigo-400/30 bg-white/5 text-white text-sm backdrop-blur-sm shadow-sm font-medium">
              <FileText className="w-4 h-4 text-indigo-300" /> 02 — Context
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-indigo-400/30 bg-white/5 text-white text-sm backdrop-blur-sm shadow-sm font-medium">
              <CheckCircle className="w-4 h-4 text-indigo-300" /> 03 — Useful Questions
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-indigo-400/30 bg-white/5 text-white text-sm backdrop-blur-sm shadow-sm font-medium">
              <Clock className="w-4 h-4 text-indigo-300" /> 04 — Timely Action
            </div>
          </div>
        </ScrollReveal>

        {/* Industries Strip */}
        <ScrollReveal delay={0.3}>
          <div className="border-t border-white/10 pt-10 text-center">
             <p className="text-xs text-indigo-200 uppercase tracking-widest font-semibold mb-8">Industries We Support</p>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/70 font-bold text-lg md:text-xl">
               <span className="hover:text-white transition-colors cursor-default">E-commerce</span>
               <span className="hover:text-white transition-colors cursor-default">Restaurants and F&B</span>
               <span className="hover:text-white transition-colors cursor-default">Trading and Distribution</span>
               <span className="hover:text-white transition-colors cursor-default">Professional Services</span>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
