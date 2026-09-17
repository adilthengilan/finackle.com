import { motion } from "motion/react";

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6"
        >
           <div className="w-1.5 h-1.5 rounded-full bg-[#5A5CE8]"></div>
           <span className="text-xs font-semibold text-gray-700">Future of Finackle</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[40px] font-medium tracking-tight text-gray-900 mb-4 max-w-2xl mx-auto leading-tight"
        >
          Discover the Future of Seamless Global Payments
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-gray-500 text-sm max-w-md mx-auto"
        >
           Simplify your global transactions with fast, secure, and seamless payment solutions designed for modern businesses.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
         
         {/* Top Left: Balance Visibility */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-[#F9FAFB] rounded-[32px] p-8 md:p-10 border border-gray-100 overflow-hidden flex flex-col justify-between"
         >
            <div className="mb-8">
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Balance Visibility at Your Fingertips</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Instantly view your account balances and spending insights for smarter decisions.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-auto">
               <div className="text-xs font-medium text-gray-500 mb-1">Total Spending</div>
               <div className="text-3xl font-bold text-gray-900 mb-8">$ 7,889.90</div>
               
               <div className="flex items-end justify-between h-32 gap-2 relative px-2">
                  {[40, 30, 80, 50, 60, 45].map((height, i) => (
                     <div key={i} className="flex flex-col items-center gap-3 flex-1 relative">
                        {i === 2 && (
                           <div className="absolute -top-10 bg-[#5A5CE8] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 whitespace-nowrap">
                              $890
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5A5CE8] rotate-45"></div>
                           </div>
                        )}
                        <div 
                           className={`w-full max-w-[32px] rounded-t-md transition-all ${i === 2 ? 'bg-[#5A5CE8]' : 'bg-gray-200'}`} 
                           style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-[10px] text-gray-400 font-medium">
                           {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </motion.div>

         {/* Top Right: Track and Achieve */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 bg-[#F9FAFB] rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col justify-between overflow-hidden"
         >
            <div className="mb-8">
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Track and Achieve Your Financial Goals</h3>
               <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Monitor earnings and savings progress to reach your goals faster and confidently.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-auto relative">
               <div className="flex justify-between items-start mb-6">
                  <div>
                     <div className="text-xs font-medium text-gray-500 mb-1">Earning Overview</div>
                     <div className="text-3xl font-bold text-gray-900">$4,235.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1.5 text-xs text-gray-500"><div className="w-2 h-2 rounded-full bg-[#5A5CE8]"></div> Savings</div>
                     <div className="flex items-center gap-1.5 text-xs text-gray-500"><div className="w-2 h-2 rounded-full bg-gray-300"></div> Earning</div>
                  </div>
               </div>

               <div className="relative h-32 w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                     {/* Grid lines */}
                     {[0, 25, 50, 75, 100].map(y => (
                        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
                     ))}
                     {/* Data lines */}
                     <path d="M0,80 C50,80 100,20 150,50 C200,90 250,30 300,70 C350,10 400,40 400,40" fill="none" stroke="#d1d5db" strokeWidth="2"/>
                     <path d="M0,100 C50,90 100,50 150,60 C200,80 250,20 300,40 C350,30 400,60 400,60" fill="none" stroke="#5A5CE8" strokeWidth="3"/>
                     {/* Tooltip dot */}
                     <circle cx="250" cy="20" r="4" fill="#5A5CE8" />
                  </svg>
                  
                  <div className="absolute top-[5%] left-[58%] bg-[#5A5CE8] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                     $42,430
                  </div>
               </div>
               
               <div className="flex justify-between mt-4 text-[10px] font-medium text-gray-400 px-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <span key={m}>{m}</span>)}
               </div>
            </div>
         </motion.div>

         {/* Bottom Left: Fast and Secure */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 bg-[#F9FAFB] rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col justify-between overflow-hidden"
         >
            <div className="mb-8 relative z-10">
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast and Secure Payments Worldwide</h3>
               <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Send and receive payments instantly with bank-level security and encryption.</p>
            </div>
            
            <div className="relative h-64 mt-auto">
               <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] opacity-5" style={{ backgroundSize: '15px 15px' }}></div>
               
               {/* Floating elements */}
               <div className="absolute top-4 left-10 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 transform -rotate-6">
                  <div className="text-[10px] font-bold text-gray-900 mb-1">Markets</div>
                  <div className="text-[8px] text-gray-400">Top crypto assets</div>
                  <div className="mt-2 text-xs font-bold text-[#5A5CE8]">$10,589.78</div>
               </div>

               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 z-10">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <span className="text-xs font-bold text-gray-900">Secured Payment</span>
               </div>
               
               <div className="absolute top-10 right-10 w-40 h-24 bg-[#E8F8C8] rounded-2xl shadow-xl transform rotate-12 p-3 flex flex-col justify-between border border-green-200">
                  <div className="flex justify-between items-start">
                     <div className="text-[8px] font-bold text-gray-700">Bank Transfer</div>
                     <div className="w-4 h-3 bg-gray-900 rounded-[2px] opacity-20"></div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">$3,200.00</div>
               </div>
               
               <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-4">
                  <div>
                     <div className="text-[10px] font-bold text-gray-900">Global Users</div>
                     <div className="flex -space-x-2 mt-1">
                        <img src="https://i.pravatar.cc/100?img=1" className="w-5 h-5 rounded-full border border-white" alt="User" />
                        <img src="https://i.pravatar.cc/100?img=2" className="w-5 h-5 rounded-full border border-white" alt="User" />
                        <img src="https://i.pravatar.cc/100?img=3" className="w-5 h-5 rounded-full border border-white" alt="User" />
                     </div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">200k+</div>
               </div>
               
               {/* Location pin */}
               <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
            </div>
         </motion.div>

         {/* Bottom Right: Payment Gateway */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 bg-[#F9FAFB] rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col justify-between overflow-hidden"
         >
            <div className="mb-8">
               <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Payment Gateway Integration</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Access multiple international payment gateways to accept and manage payments seamlessly.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-auto">
               <div className="text-xs font-medium text-gray-500 mb-1">Your Wallets</div>
               <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-gray-900">$983,284.00</div>
                  <div className="text-[10px] text-gray-400 font-medium">All Accounts</div>
               </div>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                     <div>
                        <div className="text-[10px] text-gray-500">Account Type</div>
                        <div className="text-xs font-bold text-gray-900">Credit Card</div>
                        <div className="text-[10px] text-gray-400">**** **** **** 8789</div>
                     </div>
                     <div className="text-[#1434CB] font-bold italic tracking-tighter text-sm">VISA</div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                     <div>
                        <div className="text-[10px] text-gray-500">Account Type</div>
                        <div className="text-xs font-bold text-gray-900">Credit Card</div>
                        <div className="text-[10px] text-gray-400">**** **** **** 1234</div>
                     </div>
                     <div className="text-sm font-bold text-gray-600">Payoneer</div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                     <div>
                        <div className="text-[10px] text-gray-500">Account Type</div>
                        <div className="text-xs font-bold text-gray-900">Debit Card</div>
                        <div className="text-[10px] text-gray-400">**** **** **** 5678</div>
                     </div>
                     <div className="flex items-center gap-[-2px]">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-90"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-90 -ml-1"></div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>

      </div>
    </section>
  );
}
