import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Final CTA */}
        <ScrollReveal>
          <div className="bg-[#F6F7FA] rounded-[3rem] p-10 md:p-16 text-center border border-gray-100 mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight max-w-2xl mx-auto">
              Bring the Finance Question You've Been Putting Off.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Tell us where the numbers feel unclear. We will listen, ask useful questions, and show you where better visibility could begin.
            </p>
            <button className="bg-[#1C0F38] text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-900/20 inline-flex items-center gap-2">
              Talk to a Finance Expert <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-gray-100 pb-16">
          <div className="md:col-span-5">
            <h3 className="font-black text-2xl tracking-tight text-[#1C0F38] mb-4">FINACKLE.</h3>
            <p className="text-gray-900 font-bold mb-2">Strategic Finance & Accounting Solutions</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Helping businesses streamline operations and achieve financial clarity.
            </p>
          </div>
          
          <div className="md:col-span-3">
             <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
             <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li>B.C. 1308408 Ajman Free Zone C1 Building<br/>Ajman, United Arab Emirates</li>
                <li><a href="mailto:contactus@finackle.com" className="hover:text-[#1C0F38] transition-colors">contactus@finackle.com</a></li>
                <li><a href="tel:+971545022747" className="hover:text-[#1C0F38] transition-colors">+971 545022747</a></li>
             </ul>
          </div>
          
          <div className="md:col-span-2">
             <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
             <ul className="space-y-3 text-sm text-gray-500 font-medium flex flex-col">
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">Services</a>
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">Industries</a>
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">How We Work</a>
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">Tools</a>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-bold text-gray-900 mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-gray-500 font-medium flex flex-col">
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">About</a>
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">Insights</a>
                <a href="#" className="hover:text-[#1C0F38] transition-colors w-fit">Contact</a>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
          <p>© {new Date().getFullYear()} Finackle. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
