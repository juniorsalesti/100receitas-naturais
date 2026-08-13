import React from 'react';

const TESTIMONIALS = [
  {
    initials: 'R',
    name: 'Rosana',
    age: '58 anos',
    time: 'Usa há 3 semanas',
    quote: 'Voltei a dormir a noite inteira depois de anos acordando de madrugada. O chá pro sono da Mestra Lin virou ritual aqui em casa.',
  },
  {
    initials: 'M',
    name: 'Marisa',
    age: '61 anos',
    time: 'Usa há 2 meses',
    quote: 'Meu intestino travava por dias. Com a receita certa, no segundo dia já senti diferença — sem aquela dor de sempre.',
  },
  {
    initials: 'S',
    name: 'Solange',
    age: '49 anos',
    time: 'Usa há 5 semanas',
    quote: 'O inchaço no fim do dia diminuiu muito. Tomo a mistela de gengibre logo cedo e sinto a diferença até a tarde.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#F6F1E4] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#3E6259] uppercase mb-1.5 sm:mb-2">
            Quem já aplicou
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight">
            Resultado de quem trocou a dúvida pela rotina certa
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#EFE7D2] border border-[#DCD3BB] p-5 sm:p-7 rounded-[4px] shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#B8912F] text-sm sm:text-base mb-3 sm:mb-4">
                  {'★★★★★'.split('').map((star, sIdx) => (
                    <span key={sIdx}>{star}</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif-display italic text-xs xs:text-sm sm:text-[15px] text-[#20261F] leading-relaxed mb-4 sm:mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* User Info */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#DCD3BB] flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1D3A32] text-[#F6F1E4] font-serif-display font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#20261F]">
                    {t.name}, {t.age}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#6B6350]">
                    {t.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

