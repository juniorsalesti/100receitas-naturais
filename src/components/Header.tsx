import React from 'react';
import { CHECKOUT_URL } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F1E4]/95 backdrop-blur-md border-b border-[#DCD3BB] transition-all">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-15 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="stamp-seal w-8.5 h-8.5 sm:w-10 sm:h-10 text-base sm:text-xl shadow-xs">
            林
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display font-semibold text-base sm:text-xl text-[#20261F] tracking-tight leading-none">
              Mestra Lin
            </span>
            <span className="text-[10px] sm:text-xs text-[#6B6350] tracking-wider uppercase font-medium mt-0.5 sm:mt-1">
              <span className="sm:hidden">Medicina Tradicional</span>
              <span className="hidden sm:inline">Medicina Chinesa Tradicional</span>
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-3.5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#B23A2E] hover:bg-[#8C2C22] rounded-[4px] transition-all duration-200 shadow-sm shadow-[#B23A2E]/20 active:scale-[0.98] active:bg-[#8C2C22]"
        >
          <span className="sm:hidden">Comprar Agora</span>
          <span className="hidden sm:inline">Quero as 100 receitas</span>
        </a>
      </div>
    </header>
  );
};

