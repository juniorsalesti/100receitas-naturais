import React from 'react';

interface ChapterItem {
  number: string;
  chapter: string;
  title: string;
  description: string;
  tag: string;
}

const CHAPTERS: ChapterItem[] = [
  {
    number: '01',
    chapter: 'Capítulo 1',
    title: 'Receitas Tradicionais para Gripe e Resfriados',
    description: 'Chás de gengibre, infusões tônicas de raízes e vapores ancestrais para desobstruir as vias aéreas, cortar calafrios e fortalecer a imunidade logo nos primeiros sinais.',
    tag: 'Imunidade & Vias Aéreas',
  },
  {
    number: '02',
    chapter: 'Capítulo 2',
    title: 'Receitas Tradicionais para Digestão e Intestino',
    description: 'Fórmulas para combater o intestino preso, gases, queimação e estufamento após as refeições, regulando o elemento Terra (baço e estômago).',
    tag: 'Saúde Intestinal',
  },
  {
    number: '03',
    chapter: 'Capítulo 3',
    title: 'Receitas Tradicionais para Memória e Concentração',
    description: 'Bebidas e infusões para clareza mental, foco no trabalho, combate ao nevoeiro mental e nutrição profunda da mente (Shen).',
    tag: 'Foco & Mente Clara',
  },
  {
    number: '04',
    chapter: 'Capítulo 4',
    title: 'Receitas Tradicionais para Sono, Ansiedade e Relaxamento',
    description: 'Rituais noturnos e chás calmantes para desacelerar pensamentos agitados, acalmar o coração e proporcionar noites inteiras de sono restaurador.',
    tag: 'Descanso & Paz',
  },
  {
    number: '05',
    chapter: 'Capítulo 5',
    title: 'Receitas Tradicionais para Pressão Alta e Circulação',
    description: 'Preparações botânicas para aliviar a sensação de peso nas pernas, equilibrar o fluxo sanguíneo e harmonizar o elemento Fogo de forma natural.',
    tag: 'Fluxo & Circulação',
  },
  {
    number: '06',
    chapter: 'Capítulo 6',
    title: 'Receitas Tradicionais para Dores nas Articulações',
    description: 'Emplastros térmicos tradicionais, caldos fortalecedores e infusões anti-inflamatórias para joelhos, lombar, rigidez matinal e dores no corpo.',
    tag: 'Articulações & Coluna',
  },
  {
    number: '07',
    chapter: 'Capítulo 7',
    title: 'Receitas Tradicionais para Pele, Cabelo e Unhas',
    description: 'Tônicos nutritivos para brilho, firmeza e queda de cabelo, nutrindo o sangue e os líquidos corporais de dentro para fora.',
    tag: 'Beleza Ancestral',
  },
  {
    number: '08',
    chapter: 'Capítulo 8',
    title: 'Receitas Tradicionais para Energia e Disposição',
    description: 'Tônicos de revigoramento para quem acorda exausta, restaurando a energia vital (o Qi) sem causar taquicardia ou picos passageiros.',
    tag: 'Vitalidade & Qi',
  },
  {
    number: '09',
    chapter: 'Capítulo 9',
    title: 'Receitas Tradicionais para Emagrecimento e Metabolismo',
    description: 'Mistelas termogênicas suaves e estimulantes de digestão para acelerar a queima calórica, drenar retenção hídrica e eliminar toxinas acumuladas.',
    tag: 'Metabolismo & Drenagem',
  },
  {
    number: '10',
    chapter: 'Capítulo 10',
    title: 'Receitas Especiais da Mestra Lin',
    description: 'Os segredos mais guardados da tradição familiar da Mestra Lin — elixires de longevidade, combinações secretas e rituais de equilíbrio para o corpo todo.',
    tag: 'Segredos da Família Lin',
  },
];

export const InsideBook: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#F6F1E4] relative">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#3E6259] uppercase mb-1.5 sm:mb-2">
            Dentro do livro
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight">
            100 receitas divididas em 10 capítulos práticos
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#333B30] font-normal leading-relaxed">
            Cada capítulo aborda um sintoma específico com receitas detalhadas: ingredientes fáceis de achar, modo de preparo exato, melhor horário para tomar e contraindicações.
          </p>
        </div>

        {/* 10 Chapters Grid */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4.5 sm:gap-6">
          {CHAPTERS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EFE7D2] border border-[#DCD3BB] p-5 sm:p-7 rounded-[4px] shadow-xs hover:shadow-md hover:border-[#3E6259]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Chapter Label and Tag */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-[#1D3A32] text-[#FDFBF7] rounded-[3px] tracking-wider uppercase">
                    <span className="text-[#B8912F]">§</span> {item.chapter}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#F6F1E4] text-[#3E6259] rounded border border-[#DCD3BB] truncate">
                    {item.tag}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-serif-display text-lg xs:text-xl font-bold text-[#20261F] mb-2 sm:mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs xs:text-sm sm:text-[14.5px] text-[#333B30] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom check */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-[#DCD3BB]/80 flex items-center gap-1.5 text-xs font-semibold text-[#3E6259]">
                <span>✓ Receitas com dosagem, modo de preparo e contraindicações</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


