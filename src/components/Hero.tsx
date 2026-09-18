import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 px-6 md:px-12 overflow-hidden text-[#13215D] bg-gradient-to-b from-white via-[#f0fcfb] to-[#1acbc9]">
      {/* Premium Ambient Blur Orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1acbc9]/30 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-[#1acbc9]/40 rounded-full blur-3xl pointer-events-none -ml-40"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/60 rounded-full blur-2xl pointer-events-none"></div>

      {/* Subtle Geometric Dot Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#13215D0d_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Hero Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4">
            
            {/* Frosted Glass Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl text-[#13215D] text-xs font-bold tracking-wider uppercase mb-8 border border-white/90 shadow-[0_4px_20px_rgba(26,203,201,0.2)] ring-1 ring-[#1acbc9]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1acbc9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#142360]"></span>
              </span>
              <span className="font-extrabold tracking-widest text-[#13215D]">Strategic Finance & Business Insights</span>
            </div>
            
            {/* H1 in Deep Navy */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#13215D] leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              Turning Financial Data into Better Business Decisions
            </h1>
            
            {/* Supporting Text in Deep Navy */}
            <p className="text-[#13215D]/85 text-base md:text-xl leading-relaxed max-w-3xl mb-10 font-normal">
              Finackle helps SMEs, e-commerce businesses, and F&B companies build reliable finance operations, understand business performance, improve cash flow visibility, and make confident decisions.
            </p>
            
            {/* Action Buttons with Glass and Deep Navy Accents */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-14">
              <a 
                href="#health-check-form"
                className="w-full sm:w-auto bg-[#13215D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#142360] hover:shadow-2xl hover:shadow-[#13215D]/30 transition-all flex items-center justify-center gap-2.5 text-base shadow-lg group"
              >
                Book a Finance Health Check
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#finance-function"
                className="w-full sm:w-auto bg-white/75 border border-white/90 text-[#13215D] px-8 py-4 rounded-full font-bold hover:bg-white/95 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base backdrop-blur-xl shadow-sm"
              >
                Explore Our Services
              </a>
            </div>

            {/* Frosted Glass Trust Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[11px] font-semibold text-[#13215D] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#13215D]" />
                UAE Free Zones &amp; Mainland
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[11px] font-semibold text-[#13215D] shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#13215D]" />
                30-Min Confidential Strategy Call
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[11px] font-semibold text-[#13215D] shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#13215D]" />
                IFRS &amp; FTA Tax Reconciled
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Premium Frosted Glass Feature Cards */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1: Cash Flow & Runway */}
            <div className="relative group bg-white/55 hover:bg-white/75 backdrop-blur-xl rounded-3xl p-7 border border-white/80 shadow-[0_10px_35px_rgba(19,33,93,0.06)] hover:shadow-[0_16px_45px_rgba(19,33,93,0.12)] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#13215D] mb-5 shadow-sm">
                <TrendingUp className="w-6 h-6 text-[#13215D]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#1acbc9]/20 text-[#13215D] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#1acbc9]/30">
                Visibility
              </div>
              <h3 className="text-lg font-bold text-[#13215D] mb-2 tracking-tight">
                Cash Flow &amp; Runway Modeling
              </h3>
              <p className="text-xs text-[#13215D]/80 leading-relaxed font-medium">
                13-week forward-looking projections so you anticipate working capital requirements and never face surprises.
              </p>
            </div>

            {/* Card 2: Executive Business Reporting */}
            <div className="relative group bg-white/55 hover:bg-white/75 backdrop-blur-xl rounded-3xl p-7 border border-white/80 shadow-[0_10px_35px_rgba(19,33,93,0.06)] hover:shadow-[0_16px_45px_rgba(19,33,93,0.12)] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#13215D] mb-5 shadow-sm">
                <BarChart3 className="w-6 h-6 text-[#13215D]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#1acbc9]/20 text-[#13215D] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#1acbc9]/30">
                Monthly Cadence
              </div>
              <h3 className="text-lg font-bold text-[#13215D] mb-2 tracking-tight">
                Executive Insights Dashboard
              </h3>
              <p className="text-xs text-[#13215D]/80 leading-relaxed font-medium">
                Clear profit margins, customer acquisition economics, and unit profitability explained in plain business language.
              </p>
            </div>

            {/* Card 3: Strategic CFO Advisory */}
            <div className="relative group bg-white/55 hover:bg-white/75 backdrop-blur-xl rounded-3xl p-7 border border-white/80 shadow-[0_10px_35px_rgba(19,33,93,0.06)] hover:shadow-[0_16px_45px_rgba(19,33,93,0.12)] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#13215D] mb-5 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#13215D]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#1acbc9]/20 text-[#13215D] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#1acbc9]/30">
                Strategic Guidance
              </div>
              <h3 className="text-lg font-bold text-[#13215D] mb-2 tracking-tight">
                Fractional CFO Partnership
              </h3>
              <p className="text-xs text-[#13215D]/80 leading-relaxed font-medium">
                Senior finance leadership to guide pricing decisions, capital allocation, and sustainable growth strategies.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
