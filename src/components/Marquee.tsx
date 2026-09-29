import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'PRODUCT ENGINEERING',
    'REACT & NEXT.JS',
    'TYPESCRIPT',
    'INTERFACE CRAFT',
    'FULL-STACK DEVELOPMENT',
    'ACCESSIBLE UX',
    'AUTOMOTIVE PRODUCTS',
    'INTERACTIVE WEB',
    'PERFORMANCE',
    'CREATIVE DIRECTION',
  ];

  return (
    <div
      id="marquee-section"
      aria-label="Core capabilities"
      className="relative w-full py-6 sm:py-8 bg-[#0E1014] border-y border-white/[0.06] overflow-hidden select-none"
    >
      {/* Left/Right Vignette Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#0E1014] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#0E1014] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center mx-4 sm:mx-8 shrink-0">
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-[#D7E2EA]/80 uppercase hover:text-white transition-colors cursor-default">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] ml-8 sm:ml-12" />
          </div>
        ))}
      </div>
    </div>
  );
};
