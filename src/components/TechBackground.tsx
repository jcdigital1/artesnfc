import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#05070A]">
      {/* Top subtle ambient glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#0066FF]/20 via-[#00D2FF]/10 to-transparent blur-[120px] rounded-full animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Mid subtle accent glow */}
      <div
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-[#0055FF]/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      {/* Mid-right subtle accent glow */}
      <div
        className="absolute top-2/3 -right-48 w-[500px] h-[500px] bg-[#00A3FF]/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      {/* Bottom conversion section glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-[#0066FF]/25 via-[#00C2FF]/10 to-transparent blur-[140px] rounded-full"
        aria-hidden="true"
      />

      {/* Ultra-subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Very faint luminous points */}
      <div className="absolute top-[18%] left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 blur-[1px]" />
      <div className="absolute top-[28%] right-[12%] w-2 h-2 rounded-full bg-blue-400/25 blur-[1px]" />
      <div className="absolute top-[55%] left-[8%] w-1.5 h-1.5 rounded-full bg-cyan-300/30 blur-[1px]" />
      <div className="absolute top-[75%] right-[16%] w-2 h-2 rounded-full bg-blue-500/20 blur-[1px]" />
    </div>
  );
};
