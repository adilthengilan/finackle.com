import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> How It Works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Master Your Money in Minutes
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl font-medium">
          A seamless journey to send, spend, and track every transaction effortlessly. From storing funds to tracking every payment — NeoPay keeps your money in motion, hassle-free.
        </p>
      </div>

      <div className="flex gap-8 mb-12 overflow-x-auto pb-4 hide-scrollbar border-b border-gray-200">
         <button className="text-sm font-bold text-[#1C0F38] border-b-2 border-[#1C0F38] pb-4 whitespace-nowrap px-2 translate-y-[2px]">Tracking</button>
         <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-4 whitespace-nowrap px-2">Payments</button>
         <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-4 whitespace-nowrap px-2">Insights</button>
         <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-4 whitespace-nowrap px-2">Analytics</button>
         <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-4 whitespace-nowrap px-2 flex items-center gap-1">Invest <ArrowUpRight className="w-3 h-3" /></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         {/* Left - Dashboard Mockup */}
         <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex gap-8 min-h-[420px]">
            {/* Sidebar mock */}
            <div className="w-[180px] border-r border-gray-100 pr-6 hidden sm:block py-2">
               <div className="flex items-center gap-2 mb-8 text-xs text-gray-500 font-bold">
                 <ArrowRight className="w-4 h-4 rotate-180" /> Wallet details
               </div>
               <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl mb-8">
                 <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full shadow-sm" alt="User" />
                 <div>
                   <div className="text-[11px] font-bold text-gray-900">Thomas William</div>
                   <div className="text-[9px] text-gray-500">contact@thomas.com</div>
                 </div>
               </div>
               <div className="mb-8">
                 <div className="flex justify-between items-center mb-1">
                   <div className="text-[10px] text-gray-500 font-medium">Your Balance</div>
                   <div className="w-8 h-4 bg-gray-200 rounded-full flex items-center px-0.5"><div className="w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
                 </div>
                 <div className="text-xl font-bold text-gray-900 mb-2">$12,580.40</div>
                 <div className="inline-block bg-green-100 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded">Active Balance</div>
               </div>
               <div>
                 <div className="text-[11px] font-bold text-gray-900 mb-4">Transaction History</div>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center text-[10px]">
                     <span className="text-gray-500 font-medium">Starbucks Payment</span>
                     <span className="font-bold text-gray-900">$5.40</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px]">
                     <span className="text-gray-500 font-medium">Transfer to John</span>
                     <span className="font-bold text-gray-900">$300</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px]">
                     <span className="text-gray-500 font-medium">Salary Deposit</span>
                     <span className="font-bold text-green-600">$2,500</span>
                   </div>
                 </div>
               </div>
            </div>
            {/* Main panel mock */}
            <div className="flex-1 py-2 pr-2">
               <h3 className="text-lg font-bold text-gray-900 mb-2">Hi, Thomas! Your NeoPay Card</h3>
               <p className="text-[11px] text-gray-500 mb-8 leading-relaxed font-medium">Manage cards, view transaction history, and set limits directly from the app.</p>
               
               <div className="bg-[#1C0F38] rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden aspect-[1.6] flex flex-col">
                  <div className="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                  <div className="absolute left-0 bottom-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="font-semibold text-sm mb-auto">NeoPay Digital Card</div>
                  
                  <div>
                    <div className="text-2xl tracking-widest font-mono mb-6 drop-shadow-sm">**** **** **** 4728</div>
                    <div className="flex justify-between text-xs text-indigo-100 font-medium">
                       <div>
                         <div className="text-[9px] uppercase tracking-wider opacity-70 mb-1">Valid Thru</div>
                         <span>12/28</span>
                       </div>
                       <div className="text-right">
                         <div className="text-[9px] uppercase tracking-wider opacity-70 mb-1">Cardholder</div>
                         <span>Alexander James</span>
                       </div>
                    </div>
                  </div>
                  {/* Master card circles mock */}
                  <div className="absolute bottom-8 right-8 flex">
                    <div className="w-8 h-8 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 opacity-80 -ml-4 mix-blend-multiply"></div>
                  </div>
               </div>
            </div>
         </div>

         {/* Right - Steps */}
         <div className="space-y-4">
            <div className="bg-white p-8 rounded-[1.5rem] border border-indigo-100 shadow-md shadow-blue-100/30 transition-all hover:border-indigo-300 cursor-pointer">
               <h4 className="text-lg font-bold text-gray-900 mb-2">1. Create Your Account</h4>
               <p className="text-sm text-gray-500 leading-relaxed font-medium">Sign up in minutes with your email or phone number. Secure verification ensures your data stays safe.</p>
            </div>
            <div className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 cursor-pointer">
               <h4 className="text-lg font-bold text-gray-900 mb-2">2. Link Your Bank or Cards</h4>
               <p className="text-sm text-gray-500 leading-relaxed font-medium">Easily connect your bank accounts or credit/debit cards for instant transactions.</p>
            </div>
            <div className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 cursor-pointer">
               <h4 className="text-lg font-bold text-gray-900 mb-2">3. Make Payments & Transfers</h4>
               <p className="text-sm text-gray-500 leading-relaxed font-medium">Send and receive money instantly, pay bills, and shop online with just a few taps.</p>
            </div>
            <div className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 cursor-pointer">
               <h4 className="text-lg font-bold text-gray-900 mb-2">4. Track & Manage Finances</h4>
               <p className="text-sm text-gray-500 leading-relaxed font-medium">Monitor your spending habits, view transaction history, and get real-time analytics.</p>
            </div>
         </div>
      </div>
    </section>
  );
};
