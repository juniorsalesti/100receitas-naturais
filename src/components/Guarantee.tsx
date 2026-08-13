import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#EFE7D2] border-b border-[#DCD3BB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F6F1E4] border border-[#DCD3BB] p-5 sm:p-10 rounded-[6px] shadow-sm flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          
          {/* Badge */}
          <div className="shrink-0 flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#1D3A32] text-[#F6F1E4] p-3 sm:p-4 text-center border-4 border-[#3E6259] shadow-md">
            <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#B8912F] leading-none">
              7
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5 sm:mt-1 text-[#DCD3BB] leading-tight">
              Dias de garantia
            </span>
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif-display text-lg xs:text-xl sm:text-2xl font-bold text-[#20261F] mb-1.5 sm:mb-2.5">
              Você tem 7 dias pra testar sem risco.
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-[#333B30] leading-relaxed">
              Se dentro de 7 dias você achar que as receitas não são pra você, é só pedir reembolso. Devolvemos cada centavo, sem perguntas e sem burocracia. O risco é todo nosso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

