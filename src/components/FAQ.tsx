import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Tenho pressão alta ou diabetes, posso usar as receitas?',
    answer: 'A maioria das receitas pode ser adaptada. Cada uma traz uma indicação clara de quem não deve tomar, e o Mapa de Segurança te mostra exatamente o que evitar no seu caso. Ainda assim, o ideal é mostrar a receita ao seu médico antes de começar.',
  },
  {
    question: 'Preciso imprimir o material?',
    answer: 'Não. Você recebe tudo em PDF e pode acessar pelo celular, tablet ou computador, quando quiser. Se preferir imprimir, também funciona normalmente.',
  },
  {
    question: 'Quanto tempo demora para eu receber o acesso?',
    answer: 'O acesso é imediato. Assim que o pagamento é confirmado, você recebe o link por e-mail e já pode abrir o material.',
  },
  {
    question: 'Serve para homens também?',
    answer: 'Serve. As receitas cuidam de sintomas como inchaço, má digestão, cansaço e insônia — que não têm gênero. Vários homens da família da Mestra Lin usam as mesmas fórmulas.',
  },
  {
    question: 'E se eu não gostar do material?',
    answer: 'Você tem 7 dias de garantia incondicional. Basta enviar um e-mail pedindo o reembolso e devolvemos o valor pago, sem perguntas.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-24 bg-[#F6F1E4] relative">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#3E6259] uppercase mb-1.5 sm:mb-2">
            Antes de comprar
          </span>
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl font-bold text-[#20261F] tracking-tight leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#EFE7D2] border border-[#DCD3BB] rounded-[4px] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left min-h-[52px] p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 font-serif-display font-semibold text-sm xs:text-base sm:text-lg text-[#20261F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B23A2E] active:bg-[#E7DFC6]"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`w-7 h-7 shrink-0 rounded-full bg-[#F6F1E4] border border-[#DCD3BB] flex items-center justify-center text-lg font-bold text-[#3E6259] transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-[#B23A2E]' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 pt-0 text-xs xs:text-sm sm:text-base text-[#333B30] leading-relaxed border-t border-[#DCD3BB]/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

