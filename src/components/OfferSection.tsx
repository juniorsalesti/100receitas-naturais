import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, IMAGES } from '../constants';

export const OfferSection: React.FC = () => {
  const [mockupLoaded, setMockupLoaded] = useState(false);
  // Pure JS memory countdown timer (restarts on page load)
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 52); // 14m 52s initial countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatDigits = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="oferta" className="py-14 sm:py-24 bg-[#20261F] text-[#F6F1E4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#B8912F] uppercase mb-1.5 sm:mb-2">
            A oferta de hoje
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F1E4] tracking-tight leading-tight">
            Leve as 100 receitas e os 3 bônus agora
          </h2>
        </div>

        {/* Product Mockup Image */}
        <div className="max-w-md mx-auto mb-8 sm:mb-12 flex justify-center min-h-[260px] xs:min-h-[300px] sm:min-h-[380px] items-center">
          <div className="relative group w-full flex justify-center">
            <div className="absolute inset-0 bg-[#3E6259]/20 blur-2xl rounded-full transform group-hover:scale-105 transition-transform" />
            <picture className="relative flex justify-center">
              <source
                type="image/avif"
                srcSet={IMAGES.productMockup.avifSrcSet}
                sizes={IMAGES.productMockup.sizes}
              />
              <source
                type="image/webp"
                srcSet={IMAGES.productMockup.webpSrcSet}
                sizes={IMAGES.productMockup.sizes}
              />
              <img
                src={IMAGES.productMockup.src}
                srcSet={IMAGES.productMockup.webpSrcSet}
                sizes={IMAGES.productMockup.sizes}
                alt="Mockup do e-book 100 Receitas Tradicionais da Mestra Lin e Bônus"
                width={IMAGES.productMockup.width}
                height={IMAGES.productMockup.height}
                className={`relative w-full max-w-[270px] xs:max-w-[320px] sm:max-w-[420px] h-auto object-contain rounded-[6px] shadow-2xl filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-opacity duration-300 ${
                  mockupLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
                onLoad={() => setMockupLoaded(true)}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = IMAGES.productMockup.fallback;
                }}
                referrerPolicy="no-referrer"
              />
            </picture>
          </div>
        </div>

        {/* Offer Pricing Card */}
        <div className="max-w-[560px] mx-auto bg-[#F6F1E4] text-[#20261F] rounded-[6px] border border-[#DCD3BB] shadow-2xl overflow-hidden">
          
          {/* Top Banner */}
          <div className="bg-[#1D3A32] text-[#FDFBF7] py-3 px-3 sm:px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-[#3E6259]">
            Acesso imediato após confirmação do pagamento
          </div>

          <div className="p-4.5 xs:p-6 sm:p-8">
            
            {/* Value checklist */}
            <div className="space-y-2.5 sm:space-y-3.5 pb-5 sm:pb-6 border-b border-[#DCD3BB]">
              <div className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base font-semibold text-[#20261F]">
                <span className="text-[#3E6259] font-bold text-base shrink-0 mt-0.5">✓</span>
                <span>100 Receitas Tradicionais da Mestra Lin (PDF)</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#333B30]">
                <span className="text-[#3E6259] font-bold text-sm shrink-0 mt-0.5">✓</span>
                <span>Bônus 1 — Plano de 30 Dias</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#333B30]">
                <span className="text-[#3E6259] font-bold text-sm shrink-0 mt-0.5">✓</span>
                <span>Bônus 2 — Guia dos Chás</span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#333B30]">
                <span className="text-[#3E6259] font-bold text-sm shrink-0 mt-0.5">✓</span>
                <span>Bônus 3 — Saúde e Autocuidado na Horta</span>
              </div>
            </div>

            {/* Price Presentation */}
            <div className="py-5 sm:py-6 text-center">
              <div className="text-sm sm:text-base text-[#6B6350] line-through font-medium">
                De R$ 197,00
              </div>
              
              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span className="text-xs sm:text-sm font-semibold uppercase text-[#6B6350]">Por apenas</span>
                <span className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#B23A2E] tracking-tight">
                  R$ 17,00
                </span>
              </div>

              <div className="mt-1.5 text-xs sm:text-[13px] text-[#6B6350] font-medium">
                Pagamento único · Pix, cartão ou boleto
              </div>
            </div>

            {/* 100% Width CTA Button */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse w-full min-h-[54px] inline-flex items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4.5 text-base sm:text-lg font-bold text-[#FDFBF7] bg-[#B23A2E] hover:bg-[#8C2C22] rounded-[4px] transition-all duration-200 shadow-md shadow-[#B23A2E]/30 active:scale-[0.98]"
            >
              Quero as 100 receitas agora →
            </a>

            {/* Countdown Box */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#DCD3BB]/80 text-center">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 font-mono font-bold text-sm sm:text-base text-[#B23A2E]">
                <span className="bg-[#EFE7D2] px-2 sm:px-2.5 py-1 rounded border border-[#DCD3BB]">
                  {formatDigits(hours)}
                </span>
                <span>:</span>
                <span className="bg-[#EFE7D2] px-2 sm:px-2.5 py-1 rounded border border-[#DCD3BB]">
                  {formatDigits(minutes)}
                </span>
                <span>:</span>
                <span className="bg-[#EFE7D2] px-2 sm:px-2.5 py-1 rounded border border-[#DCD3BB]">
                  {formatDigits(seconds)}
                </span>
              </div>
              <p className="mt-2 text-[11px] sm:text-xs text-[#6B6350] font-medium">
                Condição especial encerra ao fim deste cronômetro
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

