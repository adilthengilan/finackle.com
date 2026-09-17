import { motion } from "motion/react";

export function BottomCTA() {
  return (
    <section className="px-6 max-w-[1400px] mx-auto mb-10 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#5A5CE8] rounded-t-[40px] rounded-b-[10px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-indigo-200"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] opacity-10" style={{ backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 max-w-xl text-center md:text-left">
           <h2 className="text-3xl md:text-[40px] font-medium text-white leading-tight">
             Discover the full scale of Clause capabilities
           </h2>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 shrink-0">
           <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm">
             Get a Demo
           </button>
           <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
             Start for free
           </button>
        </div>
      </motion.div>
    </section>
  );
}
