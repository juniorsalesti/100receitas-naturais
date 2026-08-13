import React from 'react';
import { CHECKOUT_URL } from '../constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#EFE7D2] border-t border-[#DCD3BB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20261F] tracking-tight leading-tight mb-4 sm:mb-6">
          Se você chegou até aqui, vale a pena tentar.
        </h2>

        <p className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-[#333B30] leading-relaxed mb-6 sm:mb-10 font-normal">
          Por <strong className="text-[#B23A2E] font-bold">R$ 17,00</strong> você leva 100 receitas construídas ao longo de gerações — com dose certa, modo de preparo e contraindicações claras. Se funcionar pra você, é uma rotina pra vida toda. Se não funcionar, você tem 7 dias pra pedir de volta.
        </p>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center text-center px-6 sm:px-10 py-3.5 sm:py-5 text-sm xs:text-base sm:text-lg font-bold text-[#FDFBF7] bg-[#B23A2E] hover:bg-[#8C2C22] rounded-[4px] transition-all duration-200 shadow-lg shadow-[#B23A2E]/25 active:scale-[0.98]"
        >
          Quero as 100 receitas da Mestra Lin →
        </a>

        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#6B6350]">
          <span>✓ Pagamento 100% Seguro</span>
          <span className="hidden xs:inline">·</span>
          <span>✓ 7 Dias de Garantia</span>
        </div>

      </div>
    </section>
  );
};

