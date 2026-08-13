import React from 'react';

const BONUSES = [
  {
    tag: 'BÔNUS 1',
    title: 'Plano de 30 Dias',
    description: 'Seu mês inteiro organizado receita por receita — semana a semana — pra você só seguir, sem precisar decidir nada sozinha.',
    value: 'R$ 67',
  },
  {
    tag: 'BÔNUS 2',
    title: 'Guia dos Chás',
    description: 'O passo a passo certo de tempo de infusão, temperatura da água e quantidade de folhas pra cada chá render o máximo efeito.',
    value: 'R$ 47',
  },
  {
    tag: 'BÔNUS 3',
    title: 'Saúde e Autocuidado na Horta',
    description: 'Como cultivar em casa as ervas mais usadas nas receitas — mesmo em vaso pequeno — pra você ter ingrediente fresco sempre à mão.',
    value: 'R$ 47',
  },
];

export const Bonus: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#F6F1E4] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#B23A2E] uppercase mb-1.5 sm:mb-2">
            Comprando hoje você também recebe
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight">
            3 bônus para você sair do zero direto pro resultado
          </h2>
        </div>

        {/* 3 Bonus Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4.5 sm:gap-6 lg:gap-8">
          {BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#EFE7D2] border border-[#DCD3BB] p-5 sm:p-7 rounded-[4px] shadow-sm flex flex-col justify-between hover:border-[#3E6259]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 bg-[#1D3A32] text-[#FDFBF7] rounded-[3px] tracking-wider uppercase">
                    {bonus.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#6B6350]">
                    Vendido separadamente
                  </span>
                </div>

                <h3 className="font-serif-display text-lg xs:text-xl font-bold text-[#20261F] mb-2 sm:mb-3">
                  {bonus.title}
                </h3>
                <p className="text-xs xs:text-sm text-[#333B30] leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#DCD3BB] flex items-center justify-between">
                <span className="text-xs text-[#6B6350]">Valor regular:</span>
                <span className="font-serif-display font-bold text-sm text-[#B23A2E]">
                  {bonus.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="mt-8 sm:mt-12 bg-[#1D3A32] text-[#F6F1E4] p-4.5 sm:p-6 rounded-[4px] text-center border border-[#3E6259] shadow-md max-w-3xl mx-auto">
          <p className="text-xs xs:text-sm sm:text-base font-normal leading-relaxed">
            Os bônus juntos valem <strong className="font-bold text-[#B8912F] text-sm xs:text-base sm:text-lg">R$ 161</strong> — e estão inclusos hoje, sem custo adicional, junto com as 100 receitas.
          </p>
        </div>

      </div>
    </section>
  );
};

