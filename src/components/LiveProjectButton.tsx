import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Magnet } from './Magnet';

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
  id?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label = 'Visit Live Project',
  className = '',
  id,
}) => {
  return (
    <Magnet strength={0.25}>
      <motion.a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-xs sm:text-sm font-medium text-[#D7E2EA] hover:text-white transition-all duration-300 backdrop-blur-md ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span>{label}</span>
        <ExternalLink className="w-3.5 h-3.5 text-[#8A99A8] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </motion.a>
    </Magnet>
  );
};
