import { Lock, Zap, Wifi, MoreHorizontal, ArrowUpRight, CreditCard } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      <div className="bg-[#1C0F38] rounded-[3rem] p-12 md:p-20 pb-0 md:pb-0 flex flex-col lg:flex-row items-center lg:items-end gap-16 overflow-hidden relative shadow-2xl shadow-indigo-900/20">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_100%_0%,#000_30%,transparent_100%)] z-0"></div>

        {/* Left Content */}
        <div className="lg:w-1/2 relative z-10 pb-12 md:pb-20 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-white text-xs font-semibold mb-6 border border-indigo-400/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Key Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Powerful Features<br />Smarter Banking
          </h2>
          <p className="text-indigo-100 text-sm leading-relaxed mb-16 max-w-md">
            Everything you need to manage your finances securely, efficiently, and globally—all in one app.
          </p>
          
          <div className="relative max-w-[320px] mx-auto lg:mx-0">
             <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" alt="Man looking at phone" className="rounded-[2.5rem] w-full aspect-[4/5] object-cover shadow-2xl border-4 border-white/10" />
             
             {/* Floating Badges */}
             <div className="absolute -left-12 top-[20%] bg-white rounded-2xl p-4 shadow-2xl shadow-black/10 flex items-center gap-3 w-56 animate-bounce-slow border border-gray-100">
               <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                 <Lock className="w-5 h-5 text-[#1C0F38]" />
               </div>
               <div>
                 <div className="text-xs font-bold text-gray-900 mb-0.5">Secure Transfers</div>
                 <div className="text-[9px] text-gray-500 font-medium">End-to-end encryption for safety.</div>
               </div>
             </div>
             
             <div className="absolute -right-12 bottom-[20%] bg-white rounded-2xl p-4 shadow-2xl shadow-black/10 flex items-center gap-3 w-56 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
               <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                 <Zap className="w-5 h-5 text-[#1C0F38]" />
               </div>
               <div>
                 <div className="text-xs font-bold text-gray-900 mb-0.5">Instant Processing</div>
                 <div className="text-[9px] text-gray-500 font-medium">Real-time transactions anytime.</div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Content - App Mockup */}
        <div className="lg:w-1/2 relative z-10 flex justify-center lg:justify-end translate-y-[5%]">
           <div className="w-[340px] bg-white rounded-t-[3rem] shadow-2xl overflow-hidden border-[8px] border-b-0 border-gray-900 relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              
              <div className="p-6 pt-12 bg-[#F6F7FA] h-full flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                       <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                       <div>
                         <div className="text-[10px] text-gray-500 font-medium">Current Balance</div>
                         <div className="text-base font-bold text-gray-900">$671,890.90</div>
                       </div>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600">
                      <Lock className="w-4 h-4" />
                    </div>
                 </div>
                 
                 {/* Digital Card */}
                 <div className="bg-[#1C0F38] rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                    <div className="flex justify-between items-start mb-10">
                       <div className="font-semibold text-sm">NeoPay Digital Card</div>
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                       </div>
                    </div>
                    <div className="text-xl tracking-widest font-mono mb-6 drop-shadow-md">**** **** **** 4728</div>
                    <div className="flex justify-between text-xs text-indigo-100 font-medium">
                       <span>12/28</span>
                       <span>James</span>
                    </div>
                 </div>

                 {/* Action Bar */}
                 <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm flex justify-between items-center px-6 relative z-10">
                    <div className="text-center group cursor-pointer">
                      <div className="w-12 h-12 mx-auto bg-[#F6F7FA] rounded-full flex items-center justify-center mb-1 text-gray-700 group-hover:bg-[#1C0F38] group-hover:text-white transition-colors"><ArrowUpRight className="w-5 h-5" /></div>
                      <div className="text-[10px] font-bold text-gray-600">Transfer</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                      <div className="w-12 h-12 mx-auto bg-[#F6F7FA] rounded-full flex items-center justify-center mb-1 text-gray-700 group-hover:bg-[#1C0F38] group-hover:text-white transition-colors"><Zap className="w-5 h-5" /></div>
                      <div className="text-[10px] font-bold text-gray-600">Top Up</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                      <div className="w-12 h-12 mx-auto bg-[#F6F7FA] rounded-full flex items-center justify-center mb-1 text-gray-700 group-hover:bg-[#1C0F38] group-hover:text-white transition-colors"><CreditCard className="w-5 h-5" /></div>
                      <div className="text-[10px] font-bold text-gray-600">Pay Bills</div>
                    </div>
                    <div className="text-center group cursor-pointer">
                      <div className="w-12 h-12 mx-auto bg-[#F6F7FA] rounded-full flex items-center justify-center mb-1 text-gray-700 group-hover:bg-[#1C0F38] group-hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></div>
                      <div className="text-[10px] font-bold text-gray-600">More</div>
                    </div>
                 </div>

                 {/* Recent Transactions */}
                 <div className="flex-1 bg-white rounded-t-[2.5rem] -mx-6 -mb-6 p-8 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] border-t border-gray-100">
                    <h4 className="text-sm font-bold text-gray-900 mb-6">Recent Transaction</h4>
                    <div className="space-y-5">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0"><Zap className="w-4 h-4"/></div>
                             <div>
                                <div className="text-xs font-bold text-gray-900">Starbucks Coffee</div>
                                <div className="text-[10px] text-gray-500 font-medium">NeoPay Reload</div>
                             </div>
                          </div>
                          <div className="text-xs font-bold text-gray-900">-$4.50</div>
                       </div>
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 rounded-full shrink-0"/>
                             <div>
                                <div className="text-xs font-bold text-gray-900">From Jane Smith</div>
                                <div className="text-[10px] text-gray-500 font-medium">Transfer</div>
                             </div>
                          </div>
                          <div className="text-xs font-bold text-green-600">+$250.00</div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating Notification */}
              <div className="absolute right-0 top-[40%] translate-x-1/4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 w-64 z-30">
                 <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1C0F38] flex items-center justify-center text-white shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-gray-900 mb-1">Seamless Money Transfers</h4>
                       <p className="text-[9px] text-gray-500 mb-2 font-medium leading-relaxed">You have a NeoPay wallet with a total of $671,890.90 for this time.</p>
                       <div className="text-[10px] font-mono text-gray-800 tracking-wider bg-gray-50 inline-block px-2 py-1 rounded">**** **** **** 4728</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
};
