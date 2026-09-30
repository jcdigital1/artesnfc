import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ART_IMAGES = [
  'https://i.postimg.cc/YqG5VXKd/Artes-01-1.jpg',
  'https://i.postimg.cc/Gh8WNMwz/Artes-01-3.jpg',
  'https://i.postimg.cc/ncjy5dbW/Plaquinha-01-1.jpg',
  'https://i.postimg.cc/sDQk8ndn/Plaquinha-01-12.jpg',
  'https://i.postimg.cc/8PJ23yQt/Artes-01-2.jpg',
  'https://i.postimg.cc/gcT9NC5g/Artes-01-4.jpg',
  'https://i.postimg.cc/SN2B5ZFT/Plaquinha-01-11.jpg',
  'https://i.postimg.cc/7YGFcB8Q/Plaquinha-01-2.jpg',
  'https://i.postimg.cc/HLxRw32Q/IMG-7015.webp',
];

export const ArtCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  const total = ART_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    setTouchDeltaX(currentX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null) {
      if (touchDeltaX < -45) {
        nextSlide();
      } else if (touchDeltaX > 45) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setTouchStartX(e.clientX);
    setTouchDeltaX(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStartX === null) return;
    setTouchDeltaX(e.clientX - touchStartX);
  };

  const handleMouseUp = () => {
    if (isDragging && touchStartX !== null) {
      if (touchDeltaX < -50) {
        nextSlide();
      } else if (touchDeltaX > 50) {
        prevSlide();
      }
    }
    setIsDragging(false);
    setTouchStartX(null);
    setTouchDeltaX(0);
    setTimeout(() => setIsPaused(false), 2500);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsPaused(false);
      }}
    >
      {/* Ambient background glow for active artwork */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 blur-[90px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main visual carousel container */}
      <div
        className="relative w-full py-4 cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Track with peek view on mobile */}
        <div className="relative h-[380px] xs:h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center">
          {ART_IMAGES.map((imgUrl, idx) => {
            // Calculate circular offset relative to currentIndex
            let offset = idx - currentIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Only render visible or adjacent slides for performance and smooth transitions
            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            // Positioning calculations
            // Mobile: 78% card width with 12% peek of adjacent cards
            // Desktop: 3 cards visible side-by-side with center highlighted
            const translateX = offset * 84 + (isDragging ? (touchDeltaX / 5) : 0);

            return (
              <div
                key={idx}
                className={`absolute transition-all duration-500 ease-out will-change-transform flex items-center justify-center
                  ${isCenter ? 'z-20 scale-100 opacity-100' : 'z-10 scale-[0.88] sm:scale-90 opacity-60 sm:opacity-75'}
                  ${Math.abs(offset) >= 2 ? 'opacity-20 scale-[0.78]' : ''}
                `}
                style={{
                  transform: `translateX(${translateX}%) scale(${isCenter ? 1 : 0.88})`,
                  width: 'min(82%, 360px)',
                }}
              >
                {/* Art Container Card */}
                <div
                  className={`relative w-full rounded-2xl p-2 sm:p-2.5 transition-all duration-300
                    bg-[#090E17]/90 backdrop-blur-md
                    border ${isCenter ? 'border-cyan-400/40 shadow-[0_10px_35px_rgba(0,200,255,0.2)]' : 'border-slate-800/80 shadow-lg'}
                  `}
                >
                  {/* Subtle glass reflection highlight */}
                  <div className="absolute inset-x-2 top-2 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent pointer-events-none z-10" />

                  {/* Clean Image: NO price, NO text overlay, NO badges */}
                  <div className="relative w-full h-[340px] xs:h-[380px] sm:h-[440px] md:h-[470px] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={imgUrl}
                      alt={`Modelo de Arte para Plaquinha NFC ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Arrows and Indicators */}
      <div className="flex items-center justify-between mt-3 px-2 sm:px-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Arte anterior"
          className="p-2 sm:p-2.5 rounded-full bg-[#0D1526]/80 text-slate-300 hover:text-cyan-300 hover:bg-[#132038] border border-blue-500/20 shadow-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicators Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {ART_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir para arte ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? 'w-7 sm:w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(0,200,255,0.7)]'
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Próxima arte"
          className="p-2 sm:p-2.5 rounded-full bg-[#0D1526]/80 text-slate-300 hover:text-cyan-300 hover:bg-[#132038] border border-blue-500/20 shadow-md transition-all active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Subtle swipe tip on mobile */}
      <p className="text-center text-xs text-slate-500 mt-2 sm:hidden font-medium">
        Arraste para o lado para ver mais modelos
      </p>
    </div>
  );
};
