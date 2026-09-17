import { Lock, Zap } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      <div className="bg-[#1C0F38] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl shadow-indigo-900/20">
        
        {/* Left Image */}
        <div className="md:w-5/12 relative z-10 flex justify-center">
           <div className="relative max-w-[280px] w-full">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Professional in suit" className="rounded-[2.5rem] w-full object-cover shadow-2xl border-4 border-white/10 aspect-[3/4]" />
              
              {/* Floating Badges */}
              <div className="absolute -left-12 top-1/4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 w-56 animate-bounce-slow">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 mb-0.5">Secure Transfers</div>
                  <div className="text-[9px] text-gray-500 font-medium">End-to-end encryption for safety.</div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 w-56 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 mb-0.5">Instant Processing</div>
                  <div className="text-[9px] text-gray-500 font-medium">Real-time transactions anytime.</div>
                </div>
              </div>
           </div>
        </div>

        {/* Right Text */}
        <div className="md:w-7/12 relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/20 backdrop-blur-sm shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Secure & Encrypted
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
             Take Control of Your<br />Finances Today
           </h2>
           <p className="text-indigo-100 text-base leading-relaxed mb-10 max-w-lg">
             Join thousands of users and businesses already simplifying payments and managing money securely with NeoPay.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Get Started Now
             </button>
             <button className="bg-white text-[#1C0F38] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg shadow-black/10">
                View Plans
             </button>
           </div>
        </div>

        {/* Background Blur Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>
    </section>
  );
};
