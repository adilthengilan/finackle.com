import { CreditCard, ShieldCheck, RefreshCw, Lock, Shield, User } from 'lucide-react';

export const Benefits = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F6F7FA]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0F38] text-white text-xs font-semibold mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why NeoPay Makes Your<br />Finances Effortless
          </h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm lg:mt-16 font-medium">
          Experience the future of money management with powerful tools designed to simplify payments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Left side Graphic */}
         <div className="bg-[#F1F5F9] rounded-[3rem] p-12 aspect-square flex flex-col items-center justify-center relative overflow-hidden border border-gray-100">
            {/* Network / Globe Graphic Simulation */}
            <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border-[1.5px] border-dashed border-gray-300 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[1.5px] border-dashed border-gray-300 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 border-[1.5px] border-dashed border-gray-200 rounded-full animate-[spin_30s_linear_infinite]"></div>
              
              {/* Floating icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-white"><Lock className="w-4 h-4"/></div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-white"><Shield className="w-4 h-4"/></div>
              <div className="absolute bottom-4 left-1/4 -translate-y-1/2 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-indigo-400 shadow-sm border border-white"><User className="w-4 h-4"/></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shadow-sm border border-white"><CreditCard className="w-3 h-3"/></div>
            </div>
            
            <div className="absolute bottom-10 left-10 right-10 bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white">
               <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted Banking Network</h3>
               <p className="text-xs text-gray-500 leading-relaxed font-medium">
                 Connect seamlessly with global banks for secure and reliable money management. Easily create & use virtual cards for safer online payments.
               </p>
            </div>
         </div>

         {/* Right side Stacked Cards */}
         <div className="space-y-6">
            <div className="bg-white shadow-xl shadow-gray-200/40 rounded-[2rem] p-8 flex items-center gap-6 transform transition-transform hover:-translate-y-1">
               <div className="text-gray-900 font-bold text-lg min-w-[180px]">Smart Digital Cards</div>
               <p className="text-xs text-gray-500 leading-relaxed pl-6 border-l border-gray-100 font-medium">Easily create, manage, and use virtual cards for safer online payments.</p>
            </div>
            <div className="bg-white shadow-xl shadow-gray-200/40 rounded-[2rem] p-8 flex items-center gap-6 transform transition-transform hover:-translate-y-1">
               <div className="text-gray-900 font-bold text-lg min-w-[180px]">Bank Security</div>
               <p className="text-xs text-gray-500 leading-relaxed pl-6 border-l border-gray-100 font-medium">Easily create, manage, and use virtual cards for safer online payments.</p>
            </div>
            <div className="bg-white shadow-xl shadow-gray-200/40 rounded-[2rem] p-8 flex items-center gap-6 transform transition-transform hover:-translate-y-1">
               <div className="text-gray-900 font-bold text-lg min-w-[180px]">Global Transfers</div>
               <p className="text-xs text-gray-500 leading-relaxed pl-6 border-l border-gray-100 font-medium">Easily create, manage, and use virtual cards for safer online payments.</p>
            </div>
         </div>
      </div>
    </section>
  );
};
