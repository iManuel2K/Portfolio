import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface InteractiveHeroCharacterProps {
  onInteractionTrigger?: (zone: "cap" | "surf" | "keys") => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const InteractiveHeroCharacter: React.FC<
  InteractiveHeroCharacterProps
> = ({ onInteractionTrigger }) => {
  const [activeZone, setActiveZone] = useState<"cap" | "surf" | "keys" | null>(
    null,
  );
  const [waterSplash, setWaterSplash] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [keyHits, setKeyHits] = useState(0);

  // Keyboard shortcut listener to trigger the right-side light or zones when typing keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in form inputs
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))
        return;

      if (e.key.toLowerCase() === "c") {
        setActiveZone("cap");
        setTimeout(() => setActiveZone(null), 1800);
      } else if (e.key.toLowerCase() === "s") {
        triggerSurfSplash();
      } else {
        // Any other key triggers right-side lighting!
        setActiveZone("keys");
        setKeyHits((prev) => prev + 1);
        setTimeout(() => {
          setActiveZone((curr) => (curr === "keys" ? null : curr));
        }, 1600);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerSurfSplash = () => {
    setActiveZone("surf");
    setWaterSplash(true);
    if (onInteractionTrigger) onInteractionTrigger("surf");

    // Generate water droplet particles
    const newParticles: Particle[] = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      x: 35 + Math.random() * 30, // Percentage width
      y: 70 + Math.random() * 15,
      vx: (Math.random() - 0.5) * 160,
      vy: -(80 + Math.random() * 160),
      size: 3 + Math.random() * 7,
      opacity: 0.8 + Math.random() * 0.2,
    }));
    setParticles(newParticles);

    setTimeout(() => {
      setWaterSplash(false);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] select-none group">
      {/* 1. Dynamic Right-Side Lighting (Spotlight Beam & Rim Glow when Keys are touched) */}
      <AnimatePresence>
        {activeZone === "keys" && (
          <>
            {/* Volumetric beam from top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-12 -right-16 sm:-right-24 w-[320px] sm:w-[420px] h-[480px] pointer-events-none z-30 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(ellipse at 85% 30%, rgba(251, 191, 36, 0.45) 0%, rgba(245, 158, 11, 0.25) 35%, rgba(229, 72, 77, 0.1) 60%, transparent 80%)",
                filter: "blur(30px)",
              }}
            />

            {/* Specular Edge Rim Light Over Robot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 rounded-2xl pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent 40%, rgba(251, 191, 36, 0.15) 75%, rgba(255, 255, 255, 0.5) 96%)",
                mixBlendMode: "overlay",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* 2. Main Character Render Container */}
      <div className="relative overflow-visible">
        {/* Subtle ground shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/80 blur-xl rounded-full pointer-events-none" />

        {/* The Base Character Image - Transparent Cutout */}
        <motion.img
          id="interactive-hero-img"
          src="/assets/hero_robot.png"
          alt="IMNL 3D Interactive Hero Robot"
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[580px] sm:max-h-[640px] md:max-h-[700px] object-contain block select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-all duration-500"
          animate={{
            filter:
              activeZone === "keys"
                ? "brightness(1.2) contrast(1.12) drop-shadow(0 0 25px rgba(251,191,36,0.4))"
                : waterSplash
                  ? "brightness(0.95) saturate(1.25) drop-shadow(0 0 20px rgba(56,189,248,0.35))"
                  : "brightness(1) contrast(1) saturate(1)",
            scale: activeZone === "cap" ? 1.02 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* 3. REALISTIC CAP LIFT ANIMATION OVERLAY */}
        <AnimatePresence>
          {activeZone === "cap" && (
            <motion.div
              initial={{ y: 0, scale: 1, rotate: 0 }}
              animate={{
                y: [-4, -36, -28],
                rotate: [0, -6, -4],
                scale: [1, 1.05, 1.03],
              }}
              exit={{
                y: [null, -10, 0],
                rotate: [null, -2, 0],
                scale: [null, 1.01, 1],
                transition: { duration: 0.35, ease: "easeIn" },
              }}
              transition={{
                duration: 0.55,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="absolute top-0 left-[12%] w-[76%] pointer-events-none z-35 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
            >
              {/* Isolated high-res 3D cap physically lifting off the robot's head */}
              <img
                src="/assets/hero_cap_isolated.png"
                alt="Lifting Cap 3D"
                className="w-full h-auto object-contain pointer-events-none filter drop-shadow-[0_15px_25px_rgba(229,72,77,0.35)]"
              />
              {/* Subtle dynamic shadow under the lifted cap */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.8 }}
                animate={{ opacity: 0.6, scaleX: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/70 blur-md rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. REALISTIC OCEAN WATER SPLASH & DROPLET SIMULATION */}
        <AnimatePresence>
          {waterSplash && (
            <>
              {/* Real 3D simulated water splash asset bursting along the surfboard */}
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.75 }}
                animate={{
                  y: [-10, -25, -15],
                  opacity: [0, 1, 0.9],
                  scale: [0.8, 1.08, 1.02],
                }}
                exit={{
                  opacity: 0,
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.6 },
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[4%] -left-[14%] w-[90%] sm:w-[95%] pointer-events-none z-40 mix-blend-screen"
              >
                <img
                  src="/assets/water_splash.png"
                  alt="Dynamic Ocean Water Splash"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                />
              </motion.div>

              {/* Surface wet specular sheen on surfboard & legs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.75, 0.4] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8 }}
                className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-cyan-400/20 via-sky-300/10 to-transparent mix-blend-overlay"
              />

              {/* High-speed water droplet particles flying off the board */}
              <div className="absolute inset-0 pointer-events-none z-45 overflow-hidden">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{
                      x: `${p.x}%`,
                      y: `${p.y}%`,
                      opacity: p.opacity,
                      scale: 1,
                    }}
                    animate={{
                      x: `calc(${p.x}% + ${p.vx}px)`,
                      y: `calc(${p.y}% + ${p.vy}px)`,
                      opacity: [p.opacity, p.opacity * 0.9, 0],
                      scale: [1, 1.2, 0.2],
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute rounded-full bg-white border border-cyan-300/70 shadow-[0_0_8px_rgba(186,230,253,0.95)]"
                    style={{ width: `${p.size}px`, height: `${p.size}px` }}
                  />
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        {/* 5. INTERACTIVE HITBOX ZONES CALIBRATED TO HERO_ROBOT */}

        {/* Hitbox A: The Red Cap (Top Head Area: 0% to 22%) */}
        <div
          id="hero-zone-cap"
          className="absolute top-0 left-[15%] right-[15%] h-[22%] cursor-pointer z-30 transition-colors"
          onMouseEnter={() => {
            setActiveZone("cap");
            if (onInteractionTrigger) onInteractionTrigger("cap");
          }}
          onMouseLeave={() => setActiveZone(null)}
          title="Hover: Lift Cap"
        >
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/75 text-white/80 border border-white/10 backdrop-blur-sm pointer-events-none">
              Hover Cap
            </span>
          </div>
        </div>

        {/* Hitbox B: The BMW Keys / Robotic Hand (Mid-Left Area around waist: 50% to 75% height, 15% to 45% width) */}
        <div
          id="hero-zone-keys"
          className="absolute top-[52%] left-[18%] w-[28%] h-[24%] cursor-pointer z-30 transition-colors"
          onMouseEnter={() => {
            setActiveZone("keys");
            if (onInteractionTrigger) onInteractionTrigger("keys");
          }}
          onMouseLeave={() => setActiveZone(null)}
          onClick={() => {
            setActiveZone("keys");
            setKeyHits((p) => p + 1);
          }}
          title="Touch Keys: Volumetric Right-Side Light"
        >
          <div className="absolute -top-3 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm pointer-events-none whitespace-nowrap">
              Touch Keys
            </span>
          </div>
        </div>

        {/* Hitbox C: The Surfboard (Left Back / Lower Rails: 15% to 80% height on far left, plus lower board) */}
        <div
          id="hero-zone-surfboard"
          className="absolute top-[18%] left-0 w-[24%] h-[68%] cursor-pointer z-30 transition-colors"
          onMouseEnter={triggerSurfSplash}
          onClick={triggerSurfSplash}
          title="Hover or Click Surfboard: Ocean Water Splash"
        >
          <div className="absolute top-10 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm pointer-events-none whitespace-nowrap">
              Surf Splash
            </span>
          </div>
        </div>
      </div>

      {/* Floating Interactive HUD Status Pill */}
      <div className="mt-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full transition-colors ${
              activeZone ? "bg-[#E5484D] animate-ping" : "bg-emerald-400"
            }`}
          />
          <span className="text-white/70 font-mono text-[11px]">
            {activeZone === "cap"
              ? "✨ Cap Lifted (Hovering Cap)"
              : activeZone === "surf"
                ? "🌊 Water Splash Spray"
                : activeZone === "keys"
                  ? "⚡ Right-Side Light Flare (Key Active)"
                  : "Interactive: Hover Cap, Surfboard, or Press any Key"}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-white/40">
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/70">
            C
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/70">
            S
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/70">
            Keys
          </kbd>
        </div>
      </div>
    </div>
  );
};
