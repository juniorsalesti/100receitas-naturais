import React from 'react';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-14 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* H1 Headline */}
            <h1 className="font-serif-display text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-[1.2] sm:leading-[1.18] font-bold text-[#20261F] tracking-tight">
              Seu corpo não está <span className="italic text-[#B23A2E] font-medium">errado</span>. Só está sem o cuidado certo.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg text-[#333B30] leading-relaxed max-w-2xl font-normal">
              100 receitas tradicionais inspiradas na Medicina Chinesa, reunidas pela Mestra Lin, para você aliviar o inchaço, melhorar a digestão, ganhar disposição e voltar a dormir a noite inteira — sem remédio caro e sem depender pra sempre da farmácia.
            </p>

            {/* 3 Pain Points */}
            <ul className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-[#20261F]">
                <span className="text-[#B23A2E] font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5">→</span>
                <span>Você acorda cansada mesmo depois de &ldquo;dormir&rdquo; 7 horas.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-[#20261F]">
                <span className="text-[#B23A2E] font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5">→</span>
                <span>A barriga incha no fim do dia e a roupa aperta diferente.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-[#20261F]">
                <span className="text-[#B23A2E] font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5">→</span>
                <span>O intestino trava, a digestão pesa, e cada remédio novo esconde o sintoma sem resolver a causa.</span>
              </li>
            </ul>

            {/* Primary CTA */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:items-start">
              <a
                href="#oferta"
                onClick={scrollToOffer}
                className="cta-pulse w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center text-center px-6 sm:px-8 py-3.5 sm:py-4.5 text-sm xs:text-base sm:text-lg font-bold text-[#FDFBF7] bg-[#B23A2E] hover:bg-[#8C2C22] rounded-[4px] transition-all duration-200 shadow-md shadow-[#B23A2E]/25 active:scale-[0.98]"
              >
                Quero as 100 receitas da Mestra Lin →
              </a>

              {/* Trust Badges */}
              <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-3.5 sm:gap-x-6 text-xs sm:text-sm text-[#6B6350] font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#3E6259] font-bold">✓</span> Acesso imediato
                </span>
                <span className="text-[#DCD3BB] hidden xs:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#3E6259] font-bold">✓</span> 7 dias de garantia
                </span>
                <span className="text-[#DCD3BB] hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#3E6259] font-bold">✓</span> Celular ou computador
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md pb-6 sm:pb-0">
              {/* Outer decorative subtle offset */}
              <div className="absolute inset-0 bg-[#EFE7D2] rounded-[6px] transform rotate-1 translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 border border-[#DCD3BB] -z-10" />

              {/* Image Frame */}
              <div className="relative bg-[#EFE7D2] p-2 sm:p-3 rounded-[6px] border border-[#DCD3BB] shadow-xl shadow-black/8 overflow-hidden">
                <img
                  src={IMAGES.teacher}
                  alt="Mestra Lin com o livro de receitas tradicionais"
                  className="w-full h-auto object-cover rounded-[4px] aspect-[4/5] filter brightness-[1.01]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Floating Badge */}
              <div className="absolute -bottom-2 sm:-bottom-6 left-2 right-2 sm:left-auto sm:-left-6 sm:right-auto bg-[#F6F1E4] border border-[#DCD3BB] p-3 sm:p-4 rounded-[6px] shadow-lg shadow-black/10 sm:max-w-[290px] flex items-center gap-3">
                <div className="font-serif-display text-3xl sm:text-5xl font-bold text-[#B23A2E] leading-none shrink-0">
                  100
                </div>
                <div className="text-xs sm:text-[13px] text-[#333B30] leading-snug font-medium">
                  receitas com ingredientes, preparo e contraindicações — <span className="font-semibold text-[#20261F]">por sintoma</span>.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

