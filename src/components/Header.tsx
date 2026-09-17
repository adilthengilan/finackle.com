import { ArrowUpRight } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#1C0F38] text-white pt-6 pb-4 px-6 md:px-12 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-black text-2xl tracking-tight">FINACKLE.</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-indigo-100">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Industries</a>
          <a href="#" className="hover:text-white transition-colors">How We Work</a>
          <a href="#" className="hover:text-white transition-colors">Insights</a>
          <a href="#" className="hover:text-white transition-colors">Tools</a>
        </nav>
        <button className="hidden md:flex items-center gap-2 text-sm font-bold bg-white text-[#1C0F38] px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-colors shadow-sm">
          Talk to an Expert <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
