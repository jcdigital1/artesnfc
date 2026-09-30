import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaButtonProps {
  text: string;
  subtext?: string;
  className?: string;
  size?: 'default' | 'large';
  icon?: boolean;
}

export const CHECKOUT_URL = 'https://go.pepperpay.com.br/k08jj';

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  subtext,
  className = '',
  size = 'default',
  icon = true,
}) => {
  const isLarge = size === 'large';

  return (
    <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
      <a
        href={CHECKOUT_URL}
        className={`group relative inline-flex items-center justify-center w-full overflow-hidden rounded-2xl font-bold tracking-wide text-white transition-all duration-200 select-none
          bg-gradient-to-r from-[#0055FE] via-[#0077FE] to-[#00C2FF]
          border-t border-cyan-200/50 border-x border-cyan-400/30 border-b border-[#003899]
          shadow-[0_6px_0_#003899,0_12px_28px_rgba(0,119,254,0.4)]
          hover:shadow-[0_6px_0_#003899,0_16px_36px_rgba(0,194,255,0.55)]
          hover:brightness-105
          active:translate-y-1 active:shadow-[0_2px_0_#003899,0_6px_16px_rgba(0,119,254,0.4)]
          ${isLarge ? 'py-4 px-6 sm:py-5 sm:px-8 text-lg sm:text-xl' : 'py-3.5 px-5 sm:py-4 sm:px-7 text-base sm:text-lg'}
        `}
      >
        {/* Subtle inner top glow highlight */}
        <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        {/* Shimmer light beam animation */}
        <span
          className="pointer-events-none absolute -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
          aria-hidden="true"
        />

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-2.5 drop-shadow-sm whitespace-nowrap">
          <span>{text}</span>
          {icon && (
            <ArrowRight className="w-5 h-5 text-cyan-200 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </span>
      </a>

      {subtext && (
        <span className="mt-2 text-xs sm:text-sm text-slate-400 font-medium tracking-tight">
          {subtext}
        </span>
      )}
    </div>
  );
};
