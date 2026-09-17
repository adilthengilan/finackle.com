import { Globe, ArrowUpRight, Users, Wallet } from 'lucide-react';

export const WhyChoose = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
         <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Why Choose NeoPay
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl mb-4">
              Why Millions of<br />Users Trust NeoPay
            </h2>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed">
              Built with enterprise-level security and designed for ease of use, we empower individuals and businesses to transaction.
            </p>
         </div>
         <div className="lg:text-right pt-4">
            <div className="text-6xl md:text-7xl font-bold text-[#1C0F38] mb-2 tracking-tight">93.84%</div>
            <p className="text-gray-500 text-sm font-medium">Instant Transfers NeoPay</p>
         </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         {/* Left Card */}
         <div className="lg:col-span-5 bg-gray-100/80 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative min-h-[420px] shadow-sm border border-gray-100">
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="font-bold text-gray-900 text-lg">Active Customers</h3>
                 <div className="text-right">
                   <div className="text-sm font-bold text-gray-900">12,300 customers</div>
                   <div className="text-[9px] text-gray-500 font-medium">Consistent user engagement.</div>
                 </div>
               </div>
               <div className="bg-white rounded-2xl p-4 shadow-sm inline-flex flex-col mt-4 border border-gray-50">
                  <div className="flex items-center gap-2 mb-1 text-xs text-gray-500 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center"><Wallet className="w-3 h-3 text-indigo-600" /></div> Total Savings Overall
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-2xl font-bold text-gray-900">$34,240,000.90</span>
                     <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center"><ArrowUpRight className="w-3 h-3"/></span>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-full max-w-md h-[280px]">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Customer using app" className="w-full h-full object-cover rounded-tl-[3rem] opacity-90 shadow-2xl" />
               
               {/* Fake floating chart over image */}
               <div className="absolute top-8 left-8 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 flex-col">
                  <div className="w-full h-full rounded-full border-[5px] border-gray-100 border-l-[#1C0F38] border-t-[#1C0F38] border-r-[#1C0F38] flex items-center justify-center relative">
                     <span className="text-sm font-bold text-gray-900">78%</span>
                  </div>
                  <span className="text-[7px] font-bold text-gray-500 uppercase mt-1 absolute bottom-4">Performance</span>
               </div>
            </div>
         </div>

         {/* Middle Card */}
         <div className="lg:col-span-4 bg-gray-100/80 rounded-[2rem] p-8 flex flex-col h-full shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center mb-6 shadow-sm">
              <Globe className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
            <p className="text-sm text-gray-600 mb-auto leading-relaxed">
              Whether it's midnight or midday, our multilingual support team is always available to assist you.
            </p>
            <div className="mt-8">
              <button className="bg-[#1C0F38] text-white px-6 py-3 rounded-full text-sm font-semibold w-fit mb-8 shadow-md shadow-indigo-900/20 hover:bg-[#1E3DD9] transition-colors">
                Customer Support
              </button>
              <ul className="space-y-3 text-xs text-gray-700 font-semibold">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1C0F38] rounded-full"></div> 24/7 Live Chat</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1C0F38] rounded-full"></div> Multilingual Team</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1C0F38] rounded-full"></div> Priority Assistance for Premium Users</li>
              </ul>
            </div>
         </div>

         {/* Right Column (Stacked Cards) */}
         <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-gray-100/80 rounded-[2rem] p-6 flex-1 shadow-sm border border-gray-100">
               <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-gray-900 text-lg leading-tight max-w-[120px]">Faster Transfers, Global Access</h3>
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                   <Users className="w-5 h-5 text-gray-800" />
                 </div>
               </div>
               <p className="text-xs text-gray-500 leading-relaxed font-medium mt-auto pt-4">Send and receive money instantly across 200+ countries with competitive exchange rates.</p>
            </div>
            
            <div className="bg-gray-100/80 rounded-[2rem] p-6 flex-1 relative overflow-hidden flex flex-col justify-end shadow-sm border border-gray-100 min-h-[180px]">
               {/* Decorative Chart */}
               <div className="absolute top-8 left-0 w-full h-1/2 opacity-70">
                  <svg className="w-full h-full text-[#1C0F38] stroke-[#1C0F38] fill-none" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <path d="M0,30 Q10,5 25,25 T55,10 T80,45 T100,10" strokeWidth="2.5" />
                  </svg>
                  {/* Faded background chart line */}
                   <svg className="w-full h-full text-indigo-200 stroke-blue-200 fill-none absolute top-2 left-0" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <path d="M0,40 Q15,15 35,35 T65,20 T85,45 T100,25" strokeWidth="1.5" />
                  </svg>
               </div>
               
               <div className="relative z-10 mt-auto pt-16">
                 <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                   <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold">$</div>
                      <div className="text-[9px] text-gray-400 font-medium">Total Engagement</div>
                   </div>
                   <div className="flex justify-between items-end">
                     <div className="text-2xl font-bold text-gray-900">$980,000</div>
                     <span className="text-gray-900 font-bold text-[10px] flex items-center mb-1"><ArrowUpRight className="w-3 h-3 mr-0.5 text-gray-400"/> 24.6%</span>
                   </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
