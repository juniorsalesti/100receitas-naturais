import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { IMAGES } from '../constants';

interface PurchaseEvent {
  name: string;
  location: string;
  timeAgo: string;
}

const PURCHASES: PurchaseEvent[] = [
  { name: 'Maria Clara S.', location: 'São Paulo, SP', timeAgo: 'há 2 minutos' },
  { name: 'Juliana M.', location: 'Belo Horizonte, MG', timeAgo: 'há 4 minutos' },
  { name: 'Roberto C.', location: 'Curitiba, PR', timeAgo: 'há 6 minutos' },
  { name: 'Ana Paula R.', location: 'Rio de Janeiro, RJ', timeAgo: 'há instantes' },
  { name: 'Luciana F.', location: 'Porto Alegre, RS', timeAgo: 'há 3 minutos' },
  { name: 'Carlos Eduardo T.', location: 'Campinas, SP', timeAgo: 'há 8 minutos' },
  { name: 'Patrícia V.', location: 'Salvador, BA', timeAgo: 'há 5 minutos' },
  { name: 'Beatriz L.', location: 'Brasília, DF', timeAgo: 'há 2 minutos' },
  { name: 'Sandra M.', location: 'Florianópolis, SC', timeAgo: 'há 7 minutos' },
  { name: 'Marcos Vinícius A.', location: 'Goiânia, GO', timeAgo: 'há 11 minutos' },
  { name: 'Fernanda G.', location: 'Fortaleza, CE', timeAgo: 'há 4 minutos' },
  { name: 'Cláudia D.', location: 'Santos, SP', timeAgo: 'há 9 minutos' },
  { name: 'Tereza Cristina H.', location: 'Vitória, ES', timeAgo: 'há 1 minuto' },
  { name: 'Denise P.', location: 'Recife, PE', timeAgo: 'há 14 minutos' },
  { name: 'Renata B.', location: 'Ribeirão Preto, SP', timeAgo: 'há 3 minutos' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const displayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastIndexRef = useRef<number>(-1);

  // Function to show the next notification
  const showNext = () => {
    // Pick a random index different from the previous one
    let nextIndex: number;
    do {
      nextIndex = Math.floor(Math.random() * PURCHASES.length);
    } while (nextIndex === lastIndexRef.current && PURCHASES.length > 1);

    lastIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
    setIsVisible(true);

    // Stay visible for 5.5 seconds unless hovered
    displayTimeoutRef.current = setTimeout(() => {
      hideCurrent();
    }, 5500);
  };

  const hideCurrent = () => {
    setIsVisible(false);
    // Pause between 8 to 13 seconds before showing the next one
    const randomInterval = 8000 + Math.floor(Math.random() * 5000);
    nextTimeoutRef.current = setTimeout(() => {
      showNext();
    }, randomInterval);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
    hideCurrent();
  };

  useEffect(() => {
    // Initial delay of 4 seconds after page load
    const initialTimer = setTimeout(() => {
      showNext();
    }, 4000);

    return () => {
      clearTimeout(initialTimer);
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      if (nextTimeoutRef.current) clearTimeout(nextTimeoutRef.current);
    };
  }, []);

  // Handle pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (displayTimeoutRef.current) {
      clearTimeout(displayTimeoutRef.current);
      displayTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (isVisible && !displayTimeoutRef.current) {
      // Resume timer with 3.5 seconds
      displayTimeoutRef.current = setTimeout(() => {
        hideCurrent();
      }, 3500);
    }
  };

  const currentPurchase = currentIndex !== null ? PURCHASES[currentIndex] : null;

  return (
    <div
      id="purchase-notification-container"
      className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-40 pointer-events-none select-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {isVisible && currentPurchase && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="pointer-events-auto flex items-center gap-3 bg-[#FCFAF5]/98 text-[#20261F] p-3 sm:p-3.5 rounded-xl border border-[#DCD3BB] shadow-xl shadow-[#1D3A32]/12 backdrop-blur-md max-w-[330px] sm:max-w-[360px]"
          >
            {/* Book Thumbnail */}
            <div className="relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-[#F0EAE1] rounded-lg border border-[#E5DEC9] p-1 flex items-center justify-center overflow-hidden">
              <img
                src={IMAGES.productMockup.src}
                alt="100 Receitas"
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = IMAGES.productMockup.fallback;
                }}
              />
              <span className="absolute -bottom-0.5 -right-0.5 bg-[#2E7D32] text-white rounded-full p-0.5 shadow">
                <CheckCircle2 className="w-2.5 h-2.5" />
              </span>
            </div>

            {/* Notification Content */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-[13px] font-bold text-[#20261F] truncate">
                  {currentPurchase.name}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.2 rounded shrink-0">
                  Verificado
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#333B30] mt-0.5 leading-tight">
                Acabou de comprar as <strong className="font-semibold text-[#B23A2E]">100 Receitas</strong>
              </p>

              <div className="flex items-center gap-1 text-[10px] text-[#6B6350] mt-1">
                <span className="truncate">{currentPurchase.location}</span>
                <span>·</span>
                <span className="shrink-0 font-medium text-[#7C735E]">{currentPurchase.timeAgo}</span>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Fechar notificação"
              className="absolute top-2 right-2 p-1 text-[#6B6350] hover:text-[#20261F] hover:bg-[#EFE7D2] rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
