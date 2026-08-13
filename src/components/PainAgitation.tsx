import React from 'react';

export const PainAgitation: React.FC = () => {
  return (
    <section className="bg-[#20261F] text-[#F6F1E4] py-14 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#B8912F] uppercase mb-2 sm:mb-3">
            Pare tudo por 1 minuto
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#F6F1E4]">
            Você já tentou de tudo. O problema nunca foi sua força de vontade.
          </h2>
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base text-[#DCD3BB]/85 leading-relaxed font-normal">
            A maioria das mulheres cai em uma destas três armadilhas — e nenhuma delas cuida da raiz do inchaço, da digestão travada ou das noites mal dormidas.
          </p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4.5 sm:gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#1D3A32]/40 border border-[#3E6259]/60 p-5 sm:p-7 rounded-[4px] flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <span className="font-serif-display text-3xl sm:text-5xl font-bold text-[#B8912F] leading-none mb-3 sm:mb-4">
              01
            </span>
            <h3 className="text-base sm:text-xl font-bold text-[#F6F1E4] mb-2">
              Comprimido pra tudo
            </h3>
            <p className="text-xs xs:text-sm sm:text-[15px] text-[#DCD3BB]/80 leading-relaxed">
              Um remédio esconde o sintoma e abre espaço pra outro aparecer. Em pouco tempo você toma três, quatro, e a causa continua lá.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1D3A32]/40 border border-[#3E6259]/60 p-5 sm:p-7 rounded-[4px] flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <span className="font-serif-display text-3xl sm:text-5xl font-bold text-[#B8912F] leading-none mb-3 sm:mb-4">
              02
            </span>
            <h3 className="text-base sm:text-xl font-bold text-[#F6F1E4] mb-2">
              Chá de caixinha do mercado
            </h3>
            <p className="text-xs xs:text-sm sm:text-[15px] text-[#DCD3BB]/80 leading-relaxed">
              Quase todo o peso é folha seca sem princípio ativo relevante. Você toma trinta dias, não sente nada, e conclui que &ldquo;chá não funciona&rdquo;.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1D3A32]/40 border border-[#3E6259]/60 p-5 sm:p-7 rounded-[4px] flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <span className="font-serif-display text-3xl sm:text-5xl font-bold text-[#B8912F] leading-none mb-3 sm:mb-4">
              03
            </span>
            <h3 className="text-base sm:text-xl font-bold text-[#F6F1E4] mb-2">
              Receita solta da internet
            </h3>
            <p className="text-xs xs:text-sm sm:text-[15px] text-[#DCD3BB]/80 leading-relaxed">
              Sem saber a dose certa, o horário certo e quem não pode tomar, você vira cobaia de si mesma — e às vezes o quadro piora.
            </p>
          </div>

        </div>

        {/* Closing Highlight Quote */}
        <div className="mt-8 sm:mt-16 max-w-3xl mx-auto text-center border-t border-[#3E6259]/40 pt-6 sm:pt-10">
          <p className="font-serif-display italic text-sm xs:text-base sm:text-lg md:text-xl text-[#F6F1E4]/95 leading-relaxed">
            &ldquo;A raiz é o que a Medicina Chinesa já sabia há 3 mil anos: alimento, planta e ritual — na dose certa, no momento certo. É exatamente isso que está dentro das 100 receitas da Mestra Lin.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};

