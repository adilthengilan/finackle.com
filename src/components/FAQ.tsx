import { motion } from "motion/react";

const faqs = [
  "1. What is this platform used for?",
  "2. Is my financial data secure here?",
  "3. Can I connect multiple bank accounts?",
  "4. Does it work for small businesses?",
  "5. How quickly can I get started?",
  "6. Are there any hidden fees?",
  "7. Can I make international payments?",
  "8. Is there customer support available?",
  "9. Does it support multiple currencies?",
  "10. Can I track my spending and savings goals?"
];

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6"
        >
           <div className="w-1.5 h-1.5 rounded-full bg-[#5A5CE8]"></div>
           <span className="text-xs font-semibold text-gray-700">FAQ</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[40px] font-medium tracking-tight text-gray-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-gray-500 text-sm max-w-md mx-auto"
        >
           We help to keep track of your expense and incomes. It shows the flow of records over a specific period of time. Such as weekly, monthly or yearly.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
         {faqs.map((faq, i) => {
           const isActive = i === 2 || i === 3;
           return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col border border-gray-100 rounded-xl overflow-hidden"
              >
                <div className={`flex justify-between items-center p-5 cursor-pointer ${isActive ? 'bg-[#F9FAFB]' : 'bg-white'}`}>
                  <span className="text-sm font-semibold text-gray-900">{faq}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                     {isActive ? <line x1="5" y1="12" x2="19" y2="12"></line> : <><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></>}
                  </svg>
                </div>
                {isActive && (
                   <div className="p-5 pt-0 bg-[#F9FAFB] text-sm text-gray-500 leading-relaxed">
                      {i === 2 && "Absolutely. You can connect and manage multiple bank accounts for seamless financial tracking and management."}
                      {i === 3 && "Yes. Our platform is designed for individuals, freelancers, and businesses of all sizes to manage finances effortlessly."}
                   </div>
                )}
              </motion.div>
           );
         })}
      </div>
      </div>
    </section>
  );
}
