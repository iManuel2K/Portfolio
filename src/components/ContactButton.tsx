import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  magnetic?: boolean;
  className?: string;
  icon?: 'arrow' | 'mail' | 'none';
  id?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Let's Talk",
  onClick,
  href,
  variant = 'primary',
  magnetic = true,
  className = '',
  icon = 'arrow',
  id = 'contact-btn',
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 select-none overflow-hidden cursor-pointer';

  const variants = {
    primary:
      'bg-[#E5484D] hover:bg-[#F2555A] text-white shadow-[0_0_24px_rgba(229,72,77,0.35)] hover:shadow-[0_0_32px_rgba(229,72,77,0.55)] border border-[#FF6B6B]/30',
    secondary:
      'bg-[#18181B] hover:bg-[#27272A] text-[#D7E2EA] hover:text-white border border-white/10 hover:border-white/20',
    outline:
      'bg-transparent hover:bg-white/[0.06] text-[#D7E2EA] hover:text-white border border-white/20 hover:border-white/40',
  };

  const content = (
    <motion.div
      id={id}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 tracking-wide">{label}</span>
      {icon === 'arrow' && (
        <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
      {icon === 'mail' && (
        <Mail className="relative z-10 w-4 h-4" />
      )}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );

  const wrapper = href ? (
    <a href={href} className="inline-block group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5484D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]" onClick={onClick}>
      {content}
    </a>
  ) : (
    <button type="button" onClick={onClick} className="inline-block group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5484D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]">
      {content}
    </button>
  );

  return magnetic ? <Magnet strength={0.3}>{wrapper}</Magnet> : wrapper;
};
