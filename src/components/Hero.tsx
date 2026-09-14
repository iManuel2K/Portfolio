import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Magnet } from "./Magnet";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [displayName, setDisplayName] = React.useState("Imanuel");

  React.useEffect(() => {
    // Initially shows Imanuel, then smoothly animates to IMNL and cycles periodically
    const timer = setTimeout(() => {
      setDisplayName("IMNL");
    }, 2200);

    const interval = setInterval(() => {
      setDisplayName((prev) => (prev === "Imanuel" ? "IMNL" : "Imanuel"));
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] bg-gradient-to-b from-[#E5484D]/10 via-[#1C1F26]/30 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Sub-badge / Eyebrow */}
        <FadeIn delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-[#8A99A8] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E5484D]" />
            <span className="tracking-wide">
              3D Artist • CGI Specialist • Creative Technologist
            </span>
          </div>
        </FadeIn>

        {/* Main Display Headline */}
        <FadeIn delay={0.2} direction="up" distance={25}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4">
            <span>Hi, i&apos;m</span>
            <span className="inline-flex relative min-h-[1.1em] items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={displayName}
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#E5484D] inline-block"
                >
                  {displayName}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </FadeIn>

        {/* Subheading / Quote */}
        <FadeIn delay={0.3} direction="up" distance={20}>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-[#8A99A8] font-normal max-w-2xl font-sans-body leading-relaxed">
            a 3d creator driven by crafting{" "}
            <span className="text-white font-medium">striking</span> and{" "}
            <span className="text-white font-medium">unforgettable</span>{" "}
            projects
          </p>
        </FadeIn>

        {/* HERO PORTRAIT WITH MAGNET & 4 3D FLOATING ICONS */}
        <div className="relative my-8 sm:my-12 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] flex justify-center items-center">
          {/* Subtle backdrop circle behind robot */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.06] blur-[2px] scale-90 sm:scale-95 pointer-events-none" />

          {/* FLOATER 1: Top-Left (Moon 3D) */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [-4, 4, -4],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -left-4 sm:-top-8 sm:-left-10 z-20 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/assets/moon_icon.png"
              alt="Moon 3D Object"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if local asset is loading
                (e.target as HTMLImageElement).src =
                  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png";
              }}
            />
          </motion.div>

          {/* FLOATER 2: Bottom-Left (P59 3D Star/Crystal) */}
          <motion.div
            animate={{
              y: [8, -8, 8],
              rotate: [6, -6, 6],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute -bottom-2 -left-6 sm:bottom-4 sm:-left-12 z-20 w-16 h-16 sm:w-22 sm:h-22 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/assets/p59_1.png"
              alt="Geometric 3D Object"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png";
              }}
            />
          </motion.div>

          {/* FLOATER 3: Top-Right (Lego 3D Brick) */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-10 z-20 w-16 h-16 sm:w-22 sm:h-22 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/assets/lego_icon.png"
              alt="Lego 3D Block"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png";
              }}
            />
          </motion.div>

          {/* FLOATER 4: Bottom-Right (Torus / Ring 3D Object) */}
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute -bottom-2 -right-6 sm:bottom-4 sm:-right-12 z-20 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/assets/group_134.png"
              alt="Torus 3D Shape"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png";
              }}
            />
          </motion.div>

          {/* MAIN HERO CHARACTER IMAGE WITH MAGNET PHYSICS */}
          <Magnet
            strength={0.4}
            className="relative z-10 cursor-grab active:cursor-grabbing w-full"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex justify-center items-center py-2"
            >
              {/* Glow filter under character */}
              <div className="absolute bottom-8 w-3/4 h-12 bg-black/60 blur-xl rounded-full pointer-events-none" />

              <img
                id="hero-robot-portrait"
                src="/assets/hero_robot.png"
                alt="IMNL 3D Hero Robot Character"
                referrerPolicy="no-referrer"
                className="w-auto h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] max-w-full object-cover rounded-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] select-none transition-transform duration-300 hover:scale-[1.02]"
                draggable={false}
              />
            </motion.div>
          </Magnet>
        </div>

        {/* Action Buttons */}
        <FadeIn delay={0.4} direction="up" distance={20}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              id="hero-explore-work-btn"
              href="#projects"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#F1F5F9] font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <ContactButton
              id="hero-contact-btn"
              label="Discuss a Project"
              onClick={onOpenContact}
              variant="secondary"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
