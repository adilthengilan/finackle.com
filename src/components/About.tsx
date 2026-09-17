import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <div className="flex-1 max-w-xl">
           <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6"
           >
              <div className="w-1.5 h-1.5 rounded-full bg-[#5A5CE8]"></div>
              <span className="text-xs font-semibold text-gray-700">About Us</span>
           </motion.div>
           
           <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[44px] font-medium tracking-tight text-gray-900 leading-[1.1] mb-6"
           >
              Empowering your finances with smart and seamless solutions daily
           </motion.h2>

           <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed mb-8"
           >
              We provide innovative tools and secure services to simplify money management, helping you achieve your financial goals with confidence every day.
           </motion.p>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
           >
              <button className="bg-[#5A5CE8] hover:bg-[#4a4bd1] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-md shadow-indigo-100 inline-flex items-center gap-2 mb-16">
                 Get Started Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-12 pt-8 border-t border-gray-100"
           >
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">160M+</div>
                 <div className="text-xs font-medium text-gray-500">Transactions yearly</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">24K+</div>
                 <div className="text-xs font-medium text-gray-500">Business</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">$16M+</div>
                 <div className="text-xs font-medium text-gray-500">Transaction</div>
              </div>
           </motion.div>
        </div>

        {/* Right Side: Mockup UI */}
        <div className="flex-1 w-full bg-[#F9FAFB] rounded-[40px] p-8 md:p-12 relative flex items-center justify-center min-h-[500px]">
           <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] opacity-5 rounded-[40px]" style={{ backgroundSize: '20px 20px' }}></div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-[340px] z-10"
           >
              {/* Floating Card */}
              <div className="absolute -top-16 -right-10 w-[240px] h-[140px] bg-gradient-to-br from-[#6a6cf0] to-[#4547c4] rounded-2xl p-4 text-white shadow-xl transform rotate-6 z-20 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-8 h-6 rounded bg-white/20 border border-white/30"></div>
                    <div className="font-bold italic tracking-tighter text-sm">VISA</div>
                 </div>
                 <div>
                    <div className="text-[8px] opacity-70 mb-1">Card Number</div>
                    <div className="font-mono tracking-widest text-sm">**** **** 6782</div>
                 </div>
                 <div className="flex justify-between text-[8px] uppercase">
                    <div>
                       <div className="opacity-70">Name</div>
                       <div className="font-bold">Enamul Haque</div>
                    </div>
                    <div>
                       <div className="opacity-70">Exp</div>
                       <div className="font-bold">09/29</div>
                    </div>
                    <div>
                       <div className="opacity-70">CVV</div>
                       <div className="font-bold">011</div>
                    </div>
                 </div>
              </div>

              {/* Main App Window */}
              <div className="bg-white rounded-[32px] p-6 shadow-2xl border border-gray-100">
                 <div className="flex items-center gap-3 mb-8">
                    <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full" alt="User" />
                    <div>
                       <div className="font-bold text-gray-900 text-sm">Sajibur Rahman</div>
                       <div className="text-[10px] text-gray-500">hellosajibur@gmail.com</div>
                    </div>
                 </div>

                 <div className="mb-6">
                    <div className="text-[10px] text-gray-500 mb-1">Amount</div>
                    <div className="text-3xl font-bold text-gray-900">$2,687,738</div>
                    <div className="text-[10px] text-gray-400 mt-1">Dec 25, 2026</div>
                 </div>

                 <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3 bg-gray-50">
                       <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                          Credit Card
                       </div>
                       <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3">
                       <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="10" rx="2"></rect><path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path><path d="M12 10v4"></path></svg>
                          Bank Account
                       </div>
                       <ChevronDown size={14} className="text-gray-400" />
                    </div>
                 </div>

                 <button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-full">
                    Send Payment
                 </button>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
