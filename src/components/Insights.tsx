import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Calculator, ArrowRight, BookOpen, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

const latestInsights = [
  {
    title: "UAE E-Invoicing 2026–2027: What Every Business Needs to Prepare For",
    excerpt: "Finackle explains the UAE's move toward mandatory electronic invoicing, the Peppol-based model, implementation phases, preparation requirements and the importance of getting accounting systems ready.",
    tag: "E-Invoicing",
    date: "Aug 2026"
  },
  {
    title: "FTA Decision No. 13 of 2026: What Businesses Must Verify Before Deducting Input Tax",
    excerpt: "Finackle discusses the verification requirements surrounding input VAT deduction and how finance, procurement and supplier processes need to work together.",
    tag: "VAT Compliance",
    date: "Jul 2026"
  },
  {
    title: "Best Accounting Software for UAE Small Businesses",
    excerpt: "Finackle compares accounting platforms from the perspective of UAE VAT, Corporate Tax, e-invoicing readiness, integrations and business requirements.",
    tag: "Software Guide",
    date: "Jul 2026"
  }
];

const allArticleCards = [
  { title: "How to Choose the Right Accounting Firm in the UAE — 2026 Guide", category: "Advisory" },
  { title: "Delayed Reports, Inaccurate Books & Cash Flow Stress: Solving Common Accounting Pain Points", category: "Operations" },
  { title: "How to Register for VAT in the UAE: A Step-by-Step Guide — 2026", category: "VAT" },
  { title: "UAE Corporate Tax 2026: What Every Business Needs to Know", category: "Corporate Tax" },
  { title: "VAT Filing in the UAE: Deadlines, Penalties & How to Stay Compliant", category: "VAT" },
  { title: "Bookkeeping Requirements for UAE Free Zone Companies", category: "Compliance" },
  { title: "10 Signs Your Business Needs Professional Bookkeeping", category: "Bookkeeping" },
  { title: "Cash Flow vs Profit: Why a Profitable Business Can Still Run Out of Money", category: "Cash Flow" },
  { title: "The Complete Guide to Outsourced Accounting Services", category: "Operations" },
  { title: "Why Monthly Financial Reports Matter More Than Annual Accounts", category: "Reporting" },
  { title: "UAE E-Invoicing 2026–2027: What Every Business Needs to Prepare For", category: "E-Invoicing" },
  { title: "Accounting & Bookkeeping for E-commerce Businesses in the UAE", category: "E-commerce" },
  { title: "Accounting for Startups in the UAE: A Founder's Guide", category: "Startups" },
  { title: "The Complete Guide to Shopify Accounting in 2026 — for UAE Sellers", category: "E-commerce" },
  { title: "9 Costly Accounting Mistakes UAE Businesses Make", category: "Compliance" },
  { title: "Best Accounting Software for UAE Small Businesses — 2026 UAE Compliance Guide", category: "Software" },
  { title: "Restaurant Accounting in the UAE: The Complete Guide — 2026", category: "F&B" },
  { title: "How Talabat and Deliveroo Commissions Really Hit Your P&L", category: "F&B" },
  { title: "VAT for Restaurants in the UAE: A Practical Guide — 2026", category: "F&B" },
  { title: "How to Read Your Profit and Loss Statement: A Plain-English Guide for UAE Business Owners", category: "Reporting" },
  { title: "Free Zone vs Mainland: The Accounting and Tax Differences That Matter", category: "Corporate Tax" }
];

export const Insights = () => {
  // Calculator state
  const [taxableIncome, setTaxableIncome] = useState<number>(500000);
  const [annualRevenue, setAnnualRevenue] = useState<number>(2500000);
  const [applyRelief, setApplyRelief] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "VAT", "Corporate Tax", "Reporting", "E-commerce", "F&B", "Compliance"];

  const filteredArticles = selectedCategory === "All" 
    ? allArticleCards.slice(0, 9) 
    : allArticleCards.filter(a => a.category === selectedCategory);

  // Corporate Tax calculation
  const smallBusinessReliefEligible = annualRevenue <= 3000000;
  const effectiveRelief = applyRelief && smallBusinessReliefEligible;
  
  const threshold = 375000;
  const taxableOverThreshold = Math.max(0, taxableIncome - threshold);
  const calculatedTax = effectiveRelief ? 0 : Math.round(taxableOverThreshold * 0.09);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Latest Insights (Section 14) */}
      <div className="mb-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-[#1C0F38] text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Latest Insights
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Finackle Insights</h2>
              <p className="text-gray-500 font-medium text-base mt-2">
                Practical guidance on accounting, bookkeeping, VAT, and Corporate Tax for businesses in the UAE.
              </p>
            </div>
            <button className="text-sm font-bold text-[#1C0F38] hover:text-[#2A1B54] transition-colors flex items-center gap-2">
              Browse All Articles <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestInsights.map((post, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100/90 shadow-xl shadow-gray-200/30 group block h-full flex flex-col hover:border-indigo-200 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C0F38] bg-indigo-50 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1C0F38] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 mt-auto">
                  {post.excerpt}
                </p>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#1C0F38] group-hover:text-white group-hover:border-[#1C0F38] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Editorial Article Directory (Section 13) */}
      <div className="mb-32">
        <ScrollReveal>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Editorial Guides & Knowledge Base</h3>
            <p className="text-sm text-gray-500 font-medium">Read our comprehensive advisory insights for UAE business founders.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat 
                    ? "bg-[#1C0F38] text-white shadow-sm" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((art, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200/70 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800/70 block mb-2">
                    {art.category}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#1C0F38] transition-colors leading-snug">
                    {art.title}
                  </h4>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1C0F38] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Corporate Tax Calculator Section (Section 15) */}
      <ScrollReveal>
        <div className="bg-[#1C0F38] rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-indigo-900/20 text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left side text & info */}
            <div className="lg:col-span-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <Calculator className="w-6 h-6 text-indigo-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">UAE Corporate Tax Calculator</h2>
              <p className="text-indigo-100 font-medium leading-relaxed mb-6">
                Enter your taxable income and see your estimated Corporate Tax in seconds — including the 0% band, the 9% rate, and whether Small Business Relief could apply.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-indigo-100/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span><strong>0% up to AED 375,000:</strong> The first AED 375,000 of taxable income is taxed at 0% under the standard regime.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-indigo-100/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span><strong>9% Above the Threshold:</strong> Taxable income above the threshold is taxed at 9%.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-indigo-100/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span><strong>Small Business Relief:</strong> Businesses with revenue of AED 3 million or less may elect relief, subject to the applicable conditions.</span>
                </div>
              </div>
            </div>

            {/* Right side Interactive Calculator Form */}
            <div className="lg:col-span-6 bg-white/5 border border-white/15 p-8 rounded-[2rem] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                <span>Interactive Estimator</span>
                <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-indigo-200">2026 Fiscal Regime</span>
              </h3>

              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-indigo-200 mb-2">
                    Estimated Annual Taxable Income (AED)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="10000"
                    value={taxableIncome}
                    onChange={(e) => setTaxableIncome(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-bold text-lg focus:outline-none focus:border-indigo-300"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-indigo-200 mb-2">
                    Annual Gross Revenue (AED)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="50000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-bold text-lg focus:outline-none focus:border-indigo-300"
                  />
                </div>

                {smallBusinessReliefEligible && (
                  <label className="flex items-center gap-3 bg-indigo-500/20 border border-indigo-400/30 p-4 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={applyRelief}
                      onChange={(e) => setApplyRelief(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-0 cursor-pointer"
                    />
                    <div className="text-xs text-indigo-100 font-medium">
                      <strong>Elect for Small Business Relief (SBR)</strong>
                      <p className="text-indigo-200/80">Eligible because gross revenue is ≤ AED 3,000,000.</p>
                    </div>
                  </label>
                )}
              </div>

              {/* Result display */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                <p className="text-xs uppercase tracking-widest font-bold text-indigo-200 mb-1">Estimated Corporate Tax</p>
                <div className="text-4xl font-black text-white mb-2">
                  AED {calculatedTax.toLocaleString()}
                </div>
                {effectiveRelief ? (
                  <span className="inline-block text-xs font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
                    0% Tax via Small Business Relief
                  </span>
                ) : taxableIncome <= threshold ? (
                  <span className="inline-block text-xs font-bold text-indigo-200 bg-white/10 px-3 py-1 rounded-full">
                    Within 0% Tax Threshold (≤ AED 375,000)
                  </span>
                ) : (
                  <span className="inline-block text-xs font-bold text-indigo-200">
                    9% applied on AED {taxableOverThreshold.toLocaleString()} above threshold
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};
