import { User, Zap, Briefcase } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center bg-[#F6F7FA]">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
         <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Our Pricing
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">
         Simple & Transparent Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-center max-w-5xl mx-auto">
         {/* Card 1 */}
         <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Basic Starter</h3>
            <ul className="space-y-4 mb-10 text-sm text-gray-600 font-medium">
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Free Account Setup</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Instant Transfers (up to $500/month)</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Link Debit & Credit Cards</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Basic Spending Analytics</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Secure Payment Encryption</li>
            </ul>
            <button className="w-full py-3.5 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors mb-6">
              Get Started Free
            </button>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-gray-900">$0.00</span>
              <span className="text-sm text-gray-500 mb-2 font-medium">/Month</span>
            </div>
         </div>

         {/* Card 2 - Pro */}
         <div className="bg-white rounded-[2.5rem] p-8 border-2 border-[#1C0F38] shadow-2xl shadow-indigo-900/10 relative transform md:-translate-y-4 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1C0F38] text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/20 border-4 border-white">
              <Zap className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#1C0F38] mb-8 mt-4 text-center">Pro Plan</h3>
            <ul className="space-y-4 mb-10 text-sm text-gray-600 font-semibold">
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#1C0F38] mt-1.5 shrink-0"></div> Unlimited Transfers & Payments</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#1C0F38] mt-1.5 shrink-0"></div> Advanced Analytics & Insights</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#1C0F38] mt-1.5 shrink-0"></div> Priority 24/7 Customer Support</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#1C0F38] mt-1.5 shrink-0"></div> Multi-Currency Wallet Support</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#1C0F38] mt-1.5 shrink-0"></div> Fraud Detection & Alerts</li>
            </ul>
            <button className="w-full py-3.5 rounded-full bg-[#1C0F38] text-white font-semibold hover:bg-[#1E3DD9] transition-colors mb-6 shadow-md shadow-indigo-900/20">
              Upgrade to Pro
            </button>
            <div className="flex items-end gap-1 mb-8 justify-center">
              <span className="text-5xl font-bold text-gray-900">$9.99</span>
              <span className="text-sm text-gray-500 mb-2 font-medium">/Month</span>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full bg-[#1C0F38] text-white text-xs font-bold py-3 rounded-b-[2.3rem] text-center flex items-center justify-center gap-1.5">
              <Zap className="w-3 h-3 fill-current" /> Most Popular
            </div>
         </div>

         {/* Card 3 */}
         <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Plan</h3>
            <ul className="space-y-4 mb-10 text-sm text-gray-600 font-medium">
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Unlimited Transactions & Storage</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> API & System Integrations</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Bulk Payment Automation</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Dedicated Finance Manager</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div> Advanced Team Controls</li>
            </ul>
            <button className="w-full py-3.5 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors mb-6">
              Get Business Plan
            </button>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-gray-900">$29.99</span>
              <span className="text-sm text-gray-500 mb-2 font-medium">/Month</span>
            </div>
         </div>
      </div>
    </section>
  );
};
