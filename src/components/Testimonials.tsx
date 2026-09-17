import { motion } from "motion/react";

const reviews = [
  {
    text: "Quick setup, easy to use, and very reliable. Highly recommended for anyone looking for smarter finance management. I can track payments, send invoices, and grow my savings faster with their smart tools and insights.",
    name: "Zain Malik",
    role: "Interaction Designer",
    img: "https://i.pravatar.cc/100?img=11"
  },
  {
    text: "I've tried many finance apps, but this one stands out. It combines simplicity, security, and powerful features that actually help me reach my financial goals efficiently. Their real-time balance updates and spending analytics keep me in control of my finances. I feel more confident planning my personal and business expenses every month.",
    name: "Khalid Amir",
    role: "Visual Experience Architect",
    img: "https://i.pravatar.cc/100?img=12"
  },
  {
    text: "Managing my finances used to feel stressful, with different apps for everything. Since switching to this platform, I can handle my accounts, payments, invoices, and even plan my goals in one place. It saves me time and reduces anxiety.",
    name: "Tariq Zahir",
    role: "Digital Experience Designer",
    img: "https://i.pravatar.cc/100?img=13"
  },
  {
    text: "Managing my spending, savings, and payments in one app saves me so much time and worry daily. I love how simple and secure this platform is. It makes managing my finances feel effortless every single day.",
    name: "Rami Kadir",
    role: "User Experience Specialist",
    img: "https://i.pravatar.cc/100?img=14"
  },
  {
    text: "Highly recommended for small business owners like me who need fast, secure, and reliable payment solutions to grow their business every day. I've tried many finance apps before, but none provided such detailed analytics, simple design, and powerful tools all together seamlessly.",
    name: "Samir Rahman",
    role: "User Interface Strategist",
    img: "https://i.pravatar.cc/100?img=15",
    highlight: true
  },
  {
    text: "I run a small business and was looking for a secure way to manage my payments and track expenses. This platform not only simplified all of that but also gave me insights that helped me increase profits.",
    name: "Faris Nabil",
    role: "Human-Centered Designer",
    img: "https://i.pravatar.cc/100?img=16"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-gray-100">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6"
        >
           <div className="w-1.5 h-1.5 rounded-full bg-[#5A5CE8]"></div>
           <span className="text-xs font-semibold text-gray-700">Testimonials</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[40px] font-medium tracking-tight text-gray-900 mb-4 max-w-2xl mx-auto"
        >
          Experience the Future of Global Payments
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-gray-500 text-sm max-w-md mx-auto"
        >
           Design a financial operating system that works for your business and streamlined cash flow management
        </motion.p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto relative">
         
         <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none flex items-end justify-center pb-8">
            <button className="bg-[#5A5CE8] hover:bg-[#4a4bd1] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md pointer-events-auto flex items-center gap-2">
               See More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
         </div>

         {reviews.map((review, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`break-inside-avoid rounded-3xl p-8 relative ${review.highlight ? 'bg-[#5A5CE8] text-white shadow-xl' : 'bg-[#F9FAFB] text-gray-900 border border-gray-100'}`}
            >
               <div className={`text-5xl font-serif mb-4 leading-none ${review.highlight ? 'text-white/20' : 'text-gray-200'}`}>"</div>
               <p className={`text-sm leading-relaxed mb-8 relative z-10 ${review.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                  {review.text}
               </p>
               <div className="flex items-center gap-3 relative z-10">
                  <img src={review.img} className="w-10 h-10 rounded-full object-cover" alt={review.name} />
                  <div>
                     <div className="font-bold text-sm">{review.name}</div>
                     <div className={`text-[10px] ${review.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>{review.role}</div>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </section>
  );
}
