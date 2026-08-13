import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL } from '../constants';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let offerVisible = false;

    // IntersectionObserver to detect when #oferta is in the viewport
    const offerElement = document.getElementById('oferta');
    let observer: IntersectionObserver | null = null;

    if (offerElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          offerVisible = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0.1 }
      );
      observer.observe(offerElement);
    }

    const updateVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 500 && !offerVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      if (observer && offerElement) {
        observer.unobserve(offerElement);
      }
    };
  }, []);

  return (
    <aside
      aria-label="Barra de compra rápida"
      style={{ paddingBottom: 'max(10px, env(safe-area-inset-bottom, 10px))' }}
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#1D3A32]/98 backdrop-blur-md text-[#F6F1E4] border-t border-[#3E6259] pt-2.5 sm:pt-3 px-3 sm:px-6 shadow-2xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left Side: Price & summary */}
        <div className="flex items-baseline gap-1.5 sm:gap-3 truncate min-w-0">
          <span className="font-serif-display font-bold text-lg sm:text-2xl text-[#FDFBF7] tracking-tight shrink-0">
            R$ 17,00
          </span>
          <span className="text-[11px] sm:text-sm text-[#DCD3BB]/85 truncate hidden xs:inline">
            100 receitas + 3 bônus
          </span>
        </div>

        {/* Right Side: Buy button with 44px min touch height */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 min-h-[44px] inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold text-[#FDFBF7] bg-[#B23A2E] hover:bg-[#8C2C22] rounded-[4px] transition-all shadow-md shadow-[#B23A2E]/20 active:scale-[0.97]"
        >
          Comprar agora →
        </a>

      </div>
    </aside>
  );
};

