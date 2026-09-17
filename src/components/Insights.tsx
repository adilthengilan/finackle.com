import { ScrollReveal } from './ScrollReveal';
import { Calculator, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: "UAE E-Invoicing 2026–2027: What Every Business Needs to Prepare For",
    excerpt: "Finackle explains the UAE's move toward mandatory electronic invoicing, the Peppol-based model, implementation phases, and the importance of getting accounting systems ready.",
    tag: "Compliance"
  },
  {
    title: "FTA Decision No. 13 of 2026: What Businesses Must Verify Before Deducting Input Tax",
    excerpt: "Finackle discusses the verification requirements surrounding input VAT deduction and how finance, procurement and supplier processes need to work together.",
    tag: "VAT"
  },
  {
    title: "Best Accounting Software for UAE Small Businesses",
    excerpt: "Finackle compares accounting platforms from the perspective of UAE VAT, Corporate Tax, e-invoicing readiness, integrations and business requirements.",
    tag: "Technology"
  }
];

export const Insights = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Editorial Insights */}
      <div className="mb-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-[#1C0F38] text-xs font-bold mb-4">
                Latest Articles
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Finackle Insights</h2>
            </div>
            <button className="text-sm font-bold text-[#1C0F38] hover:text-indigo-800 transition-colors flex items-center gap-2">
              View All Insights <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <a href="#" className="group block h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1C0F38] transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 mt-auto">
                  {post.excerpt}
                </p>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#1C0F38] group-hover:text-white group-hover:border-[#1C0F38] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Corporate Tax Calculator Section */}
      <ScrollReveal>
        <div className="bg-[#1C0F38] rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-indigo-900/20 text-white relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
          {/* Decorative graphic */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex-1 relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
              <Calculator className="w-6 h-6 text-indigo-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">UAE Corporate Tax Calculator</h2>
            <p className="text-indigo-100 font-medium leading-relaxed mb-8 max-w-md">
              Enter your taxable income and see your estimated Corporate Tax in seconds — including the 0% band, the 9% rate, and whether Small Business Relief could apply.
            </p>
            <button className="bg-white text-[#1C0F38] px-6 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg">
              Use Corporate Tax Calculator
            </button>
          </div>

          <div className="flex-1 relative z-10 w-full">
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2">0% up to AED 375,000</h4>
                <p className="text-sm text-indigo-100/80 font-medium">The first AED 375,000 of taxable income is taxed at 0% under the standard regime.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2 text-indigo-300">9% Above the Threshold</h4>
                <p className="text-sm text-indigo-100/80 font-medium">Taxable income above the threshold is taxed at 9%.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2">Small Business Relief</h4>
                <p className="text-sm text-indigo-100/80 font-medium">Businesses with revenue of AED 3 million or less may elect relief, subject to conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};
