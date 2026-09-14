import React from 'react';
import { FadeIn } from './FadeIn';
import { Box, Cpu, Sparkles, Wand2, Compass, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const tools = [
    'Blender 4.x',
    'Cinema 4D',
    'Unreal Engine 5',
    'Octane Render',
    'Substance 3D Painter',
    'Three.js / WebGL',
    'Figma',
    'DaVinci Resolve',
  ];

  const pillars = [
    {
      icon: <Box className="w-5 h-5 text-[#E5484D]" />,
      title: 'Architectural & Product Realism',
      description:
        'Physical material accuracy with millimeter-precise topology, ray-traced caustics, and cinematic lighting setups.',
    },
    {
      icon: <Wand2 className="w-5 h-5 text-[#E5484D]" />,
      title: 'Stylized & Character CGI',
      description:
        'Creating unique 3D characters, mascots, and expressive avatars with customized apparel, streetwear flair, and personality.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#E5484D]" />,
      title: 'Interactive Web Realities',
      description:
        'Bridging high-end 3D graphics into modern web platforms, interactive configurators, and responsive digital showcases.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and Story */}
        <div className="lg:col-span-6 space-y-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
              <Compass className="w-4 h-4" />
              <span>About The Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
              Crafting visual narratives that refuse to be ignored.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <p className="text-base sm:text-lg text-[#8A99A8] font-sans-body leading-relaxed">
              I am a 3D artist and digital creator bridging the boundary between digital precision and human emotion. From automotive styling and concept garages to commercial architecture and digital brand assets, every polygon is placed with deliberate intent.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-sm sm:text-base text-[#8A99A8] font-sans-body leading-relaxed">
              Whether building an interactive concept for project car enthusiasts or translating fine craftsmanship into a clean digital presence for master builders, my focus is singular: deliver unforgettable visual impact.
            </p>
          </FadeIn>

          {/* Tools & Workflow Pills */}
          <FadeIn delay={0.3} direction="up" className="pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#606E7B] mb-3">
              Production Stack & Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-lg bg-[#14181F] border border-white/[0.08] text-xs font-medium text-[#D7E2EA]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Key Pillars & Metrics */}
        <div className="lg:col-span-6 space-y-5">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.12} direction="up">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#121419] border border-white/[0.06] hover:border-white/[0.14] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#8A99A8] mt-2 leading-relaxed font-sans-body">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Stat Strip */}
          <FadeIn delay={0.4} direction="up">
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div className="text-[11px] text-[#8A99A8] mt-1 font-mono uppercase">Original 3D</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#E5484D]">4K / 8K</div>
                <div className="text-[11px] text-[#8A99A8] mt-1 font-mono uppercase">Resolution</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">&lt;16ms</div>
                <div className="text-[11px] text-[#8A99A8] mt-1 font-mono uppercase">Web 60FPS</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
