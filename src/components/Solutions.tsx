import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Solutions() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Image with floating elements */}
        <div className="flex-1 w-full relative">
           <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F7F8] rounded-[40px] p-8 aspect-square md:aspect-auto md:h-[600px] flex items-end justify-center relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] opacity-5" style={{ backgroundSize: '15px 15px' }}></div>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Smiling professional" className="w-[85%] h-[85%] object-cover object-top rounded-t-full mix-blend-multiply opacity-90 relative z-10" />
           </motion.div>

           {/* Floating Flag Badges */}
           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="absolute top-1/4 left-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 overflow-hidden"
           >
              <img src="https://flagcdn.com/w40/cn.png" alt="China Flag" className="w-6 h-6 object-cover rounded-full" />
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="absolute top-1/2 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 overflow-hidden"
           >
              <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="w-6 h-6 object-cover rounded-full" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="absolute top-1/3 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 overflow-hidden"
           >
              <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh Flag" className="w-6 h-6 object-cover rounded-full" />
           </motion.div>
        </div>

        {/* Right Side: Text & Checklist */}
        <div className="flex-1">
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
              className="text-4xl md:text-[44px] font-medium tracking-tight text-gray-900 leading-[1.1] mb-6"
           >
              Innovative finance solutions built for today's global businesses
           </motion.h2>

           <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg"
           >
              Our platform offers advanced financial tools and global payment solutions to support the growth and success of modern businesses worldwide.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10"
           >
              {[
                 "50+ Countries Worldwide",
                 "98% Customer Satisfaction",
                 "Over 500k+ App Downloads",
                 "24/7 Customer Support"
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#5A5CE8] flex items-center justify-center text-white shrink-0">
                       <Check size={10} strokeWidth={3} />
                    </div>
                    {item}
                 </div>
              ))}
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
           >
              <button className="bg-[#5A5CE8] hover:bg-[#4a4bd1] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-md shadow-indigo-100 inline-flex items-center gap-2">
                 Get Started Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
