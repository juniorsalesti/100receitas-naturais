import React, { useState } from 'react';
import { IMAGES } from '../constants';

export const AboutTeacher: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="py-14 sm:py-24 bg-[#EFE7D2] border-y border-[#DCD3BB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm">
              <div className="relative bg-[#F6F1E4] p-2 sm:p-3 rounded-[4px] border border-[#DCD3BB] shadow-xl shadow-black/8 overflow-hidden aspect-[4/5]">
                {!imgLoaded && (
                  <div className="absolute inset-2 sm:inset-3 bg-[#E7DFC6] animate-pulse rounded-[3px]" aria-hidden="true" />
                )}
                <picture className="w-full h-full block">
                  <source
                    type="image/avif"
                    srcSet={IMAGES.teacher.avifSrcSet}
                    sizes="(max-width: 640px) 280px, 400px"
                  />
                  <source
                    type="image/webp"
                    srcSet={IMAGES.teacher.webpSrcSet}
                    sizes="(max-width: 640px) 280px, 400px"
                  />
                  <img
                    src={IMAGES.teacher.src}
                    srcSet={IMAGES.teacher.webpSrcSet}
                    sizes="(max-width: 640px) 280px, 400px"
                    alt="Mestra Lin segurando o livro de receitas tradicionais"
                    width={400}
                    height={500}
                    className={`w-full h-full object-cover rounded-[3px] aspect-[4/5] transition-opacity duration-300 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setImgLoaded(true)}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = IMAGES.teacher.fallback;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>

              {/* Red Seal stamp in bottom right corner */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 stamp-seal w-12 h-12 sm:w-14 sm:h-14 text-xl sm:text-2xl shadow-lg border-2 border-[#F6F1E4]">
                林
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center mt-2 lg:mt-0">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#3E6259] uppercase mb-1.5 sm:mb-2">
              Quem ensina
            </span>

            <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight mb-4 sm:mb-6">
              A Mestra Lin aprendeu o que sabe antes de aprender a ler.
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-[#333B30] leading-relaxed">
              <p>
                Desde criança, ao lado da avó, a Mestra Lin observava quais raízes aliviavam a dor, qual chá acalmava o sono e qual receita desinchava o corpo depois de um dia inteiro de trabalho no campo. Não era teoria — era o que a família usava havia gerações, muito antes de existir uma farmácia por perto.
              </p>

              {/* Quote Block with gold left border */}
              <div className="my-4 sm:my-6 pl-4 sm:pl-5 border-l-4 border-[#B8912F] py-2 bg-[#F6F1E4]/60 rounded-r-[4px]">
                <p className="font-serif-display italic text-sm xs:text-base sm:text-lg text-[#20261F] font-medium leading-snug">
                  &ldquo;Eu não ensino remédio milagroso. Ensino o que minha avó fazia quando não tinha outra opção — e que continua funcionando.&rdquo;
                </p>
                <span className="block mt-1.5 sm:mt-2 text-xs font-semibold text-[#6B6350] tracking-wide uppercase">
                  — Mestra Lin
                </span>
              </div>

              <p>
                Depois de décadas levando essas receitas para quem passava por ela, a Mestra Lin reuniu as 100 fórmulas que mais pediam de volta em um único material — organizado, com dose certa e contraindicações claras, para você aplicar em casa hoje.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

