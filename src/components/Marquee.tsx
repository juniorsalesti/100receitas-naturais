import React from 'react';

const ITEMS = [
  "Inchaço e retenção",
  "Digestão travada",
  "Disposição e energia",
  "Noites de sono tranquilas",
  "Receitas centenárias",
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1D3A32] text-[#F6F1E4] py-3.5 sm:py-4 overflow-hidden border-y border-[#3E6259]/50 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
          {ITEMS.map((item, index) => (
            <div key={`m1-${index}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-medium tracking-wide">
              <span className="font-seal text-[#B8912F] font-bold text-sm sm:text-base">林</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless continuous loop */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
          {ITEMS.map((item, index) => (
            <div key={`m2-${index}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-medium tracking-wide">
              <span className="font-seal text-[#B8912F] font-bold text-sm sm:text-base">林</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Triplicate set for wide screens */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
          {ITEMS.map((item, index) => (
            <div key={`m3-${index}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-medium tracking-wide">
              <span className="font-seal text-[#B8912F] font-bold text-sm sm:text-base">林</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
