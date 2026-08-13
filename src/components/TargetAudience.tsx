import React from 'react';

const YES_ITEMS = [
  'Já cansou de gastar com remédio e ver o mesmo sintoma voltar em pouco tempo',
  'Acorda inchada, mal digere ou vive sem energia há meses (ou anos)',
  'Prefere cuidar do corpo com o que a natureza oferece, de forma consciente',
  'Quer uma rotina simples de seguir — não uma dieta restritiva',
  'Já ouviu de alguém mais velho um chá que funcionou, e quer o conhecimento certo pra usar em casa',
];

const NO_ITEMS = [
  'Você busca uma &ldquo;cura milagrosa&rdquo; em 3 dias',
  'Você não está disposta a seguir uma rotina simples, ainda que por poucos minutos ao dia',
  'Você acredita que remédio de tarja preta resolve tudo sem nenhuma consequência',
  'Você quer trocar acompanhamento médico por receita caseira, em vez de usar as duas coisas juntas',
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#EFE7D2] border-y border-[#DCD3BB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#3E6259] uppercase mb-1.5 sm:mb-2">
            Pra quem é
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight">
            Isso aqui é pra você — ou não é?
          </h2>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          
          {/* YES Column */}
          <div className="bg-[#E7EFEA] border border-[#3E6259]/30 p-5 sm:p-8 rounded-[4px] shadow-sm flex flex-col">
            <div className="flex items-center gap-3 pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-[#3E6259]/20">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3E6259] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                ✓
              </span>
              <h3 className="font-serif-display text-lg xs:text-xl font-bold text-[#1D3A32]">
                As 100 receitas são pra você que:
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-[15px] text-[#20261F] flex-1">
              {YES_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-[#3E6259] font-bold text-sm sm:text-base mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="bg-[#F8EAE8] border border-[#B23A2E]/25 p-5 sm:p-8 rounded-[4px] shadow-sm flex flex-col">
            <div className="flex items-center gap-3 pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-[#B23A2E]/20">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B23A2E] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                ✕
              </span>
              <h3 className="font-serif-display text-lg xs:text-xl font-bold text-[#8C2C22]">
                Não é pra você se:
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-[15px] text-[#333B30] flex-1">
              {NO_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-[#B23A2E] font-bold text-sm sm:text-base mt-0.5 shrink-0">✕</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

