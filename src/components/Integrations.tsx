import { Slack, Github, Figma, Framer, Trello, Twitter, Twitch, Dribbble } from 'lucide-react';

export const Integrations = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#DFE4FF] via-transparent to-transparent pointer-events-none opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
         <div className="inline-block px-3 py-1 bg-white border border-gray-100 shadow-sm rounded-full text-xs font-semibold text-gray-600 mb-8">Features</div>
         <h2 className="text-4xl md:text-5xl font-bold text-[#150E28] tracking-tight leading-tight mb-6">
            Connect with the<br/>integrations you love
         </h2>
         <p className="text-gray-500 max-w-lg mx-auto text-sm mb-12 leading-relaxed">
            Shape extraordinary commerce experiences, process every payment with precision, and accelerate business growth.
         </p>
         <button className="bg-[#1C0F38] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#2A1854] transition-colors mb-28 shadow-xl shadow-indigo-900/20">
            Explore Now
         </button>

         {/* Icons Row - Floating Effect */}
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-400 shadow-md border border-white transform -translate-y-4 hover:scale-110 transition-transform"><Figma className="w-6 h-6"/></div>
            <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-500 shadow-lg border border-white transform translate-y-2 hover:scale-110 transition-transform"><Trello className="w-7 h-7"/></div>
            <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-gray-800 shadow-xl border border-white transform -translate-y-6 hover:scale-110 transition-transform"><Github className="w-8 h-8"/></div>
            
            {/* Main Logo Center */}
            <div className="w-28 h-28 bg-[#1C0F38] rounded-[2rem] flex flex-col items-center justify-center shadow-2xl shadow-indigo-500/40 border-[6px] border-white/50 z-10 mx-2 md:mx-6 transform hover:scale-105 transition-transform">
               <div className="flex gap-1 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
               </div>
               <span className="font-bold text-white text-sm">Finackle.</span>
            </div>

            <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-orange-500 shadow-xl border border-white transform -translate-y-4 hover:scale-110 transition-transform"><Slack className="w-8 h-8"/></div>
            <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-400 shadow-lg border border-white transform translate-y-3 hover:scale-110 transition-transform"><Twitter className="w-7 h-7"/></div>
            <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-pink-500 shadow-md border border-white transform -translate-y-2 hover:scale-110 transition-transform"><Dribbble className="w-6 h-6"/></div>
         </div>
      </div>
    </section>
  );
};
