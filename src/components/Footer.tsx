import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D3A32] text-[#F6F1E4] pt-12 sm:pt-16 pb-24 sm:pb-16 border-t border-[#3E6259]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <div className="stamp-seal w-8 h-8 sm:w-9 sm:h-9 text-base sm:text-lg shadow-sm">
            林
          </div>
          <span className="font-serif-display font-semibold text-lg sm:text-xl text-[#FDFBF7] tracking-tight">
            Mestra Lin
          </span>
        </div>

        {/* Legal Disclaimer */}
        <p className="text-xs sm:text-sm text-[#DCD3BB]/75 leading-relaxed max-w-4xl mb-6 sm:mb-8">
          <strong>Aviso legal:</strong> As receitas apresentadas neste material têm caráter complementar e não substituem consulta, diagnóstico ou tratamento médico. Se você faz uso contínuo de medicamentos ou possui alguma condição de saúde, converse com seu médico antes de iniciar qualquer receita.
        </p>

        {/* Copyright & Divider */}
        <div className="pt-5 sm:pt-6 border-t border-[#3E6259]/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#DCD3BB]/60 text-center sm:text-left">
          <div>
            &copy; 2026 Mestra Lin. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade &amp; Termos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

