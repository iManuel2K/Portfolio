import React from "react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";
import { ArrowUpRight, Mail } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const contactEmail = "imanuel.harizi@proton.me";

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/imanuel.harizi/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/imanuel-harizi-332458241/",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#E5484D]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        <FadeIn direction="up">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
            Have a project in mind?
          </span>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight max-w-3xl uppercase leading-tight">
            Let&apos;s create something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5484D] via-[#FF8A48] to-[#FFFFFF]">
              unforgettable
            </span>{" "}
            together.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="text-base sm:text-lg text-[#8A99A8] max-w-xl font-sans-body">
            Open for commissioned 3D CGI campaigns, bespoke concept
            visualization, and creative technical partnerships.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.3}
          direction="up"
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <ContactButton
            id="footer-contact-modal-btn"
            label="Start a Conversation"
            onClick={onOpenContact}
            variant="primary"
          />

          <a
            id="footer-direct-mailto"
            href={`mailto:${contactEmail}`}
            className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-[#D7E2EA] hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#8A99A8]" />
            <span>{contactEmail}</span>
          </a>
        </FadeIn>

        {/* Social Links Row */}
        <FadeIn delay={0.4} direction="up" className="pt-12 w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pb-12 border-b border-white/[0.06]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8A99A8] hover:text-white transition-colors"
              >
                <span>{social.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#606E7B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Copyright Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#606E7B] pt-6 gap-4 font-sans-body">
          <p>© 2026 IMNL 3D. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>
              Crafted with Kanit typography, Tailwind, &amp; Framer Motion
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
