import React from 'react';

export const DecisionsStrip: React.FC = () => {
  const items = [
    'Profitability',
    'Margins',
    'Cash runway',
    'Hiring & expansion',
    'Cost changes',
    'Pricing',
    'VAT & Corporate Tax',
    'Working capital',
  ];

  return (
    <div className="bg-[#D6F3F2] border-y border-[#1FD6CB]/30 overflow-hidden py-4 select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeating sequence 1 */}
        <div className="flex items-center gap-8 text-[13.5px] sm:text-[14px] font-bold text-[#0B7F8A]">
          <span className="uppercase tracking-[0.14em] text-[#0F1F38] font-extrabold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B7F8A]"></span>
            BUILT FOR THE DECISIONS BEHIND GROWTH
          </span>
          {items.map((item, idx) => (
            <React.Fragment key={`strip-1-${idx}`}>
              <span className="text-[#1FD6CB]">·</span>
              <span className="hover:text-[#0F1F38] transition-colors">{item}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Repeating sequence 2 for seamless loop */}
        <div className="flex items-center gap-8 text-[13.5px] sm:text-[14px] font-bold text-[#0B7F8A]">
          <span className="uppercase tracking-[0.14em] text-[#0F1F38] font-extrabold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B7F8A]"></span>
            BUILT FOR THE DECISIONS BEHIND GROWTH
          </span>
          {items.map((item, idx) => (
            <React.Fragment key={`strip-2-${idx}`}>
              <span className="text-[#1FD6CB]">·</span>
              <span className="hover:text-[#0F1F38] transition-colors">{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
