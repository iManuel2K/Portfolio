import React from 'react';
import { FadeIn } from './FadeIn';
import { Layers, Film, Globe, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const servicesList = [
    {
      id: 'automotive-product',
      icon: <Layers className="w-6 h-6 text-[#E5484D]" />,
      title: '3D Product & Automotive CGI',
      tagline: 'Hyper-realistic visual assets for marketing and design validation',
      deliverables: [
        'CAD & Sub-D High Poly Modeling',
        'Physical PBR Material Synthesis',
        'Virtual Studio & Outdoor Environments',
        'Ultra-High-Res 8K Still Renders',
      ],
    },
    {
      id: 'motion-cinematics',
      icon: <Film className="w-6 h-6 text-[#E5484D]" />,
      title: 'Motion Design & Commercials',
      tagline: 'Dynamic visual stories that capture attention and drive engagement',
      deliverables: [
        'Cinematic Product Reveal Films',
        'Mechanical Exploded & X-Ray Views',
        'Social Media 3D Loops & Teasers',
        'Color Grading & Sound Synchronization',
      ],
    },
    {
      id: 'interactive-webgl',
      icon: <Globe className="w-6 h-6 text-[#E5484D]" />,
      title: 'Interactive 3D Web Experiences',
      tagline: 'Bringing lightweight 3D models directly to the browser',
      deliverables: [
        'Real-Time WebGL Configurators',
        'Split-View Concept Sliders',
        'GLTF/GLB Asset Optimization',
        'Seamless Responsive Integration',
      ],
    },
    {
      id: 'creative-direction',
      icon: <Palette className="w-6 h-6 text-[#E5484D]" />,
      title: 'Creative Direction & Web Presence',
      tagline: 'End-to-end design systems tailored to bespoke craft',
      deliverables: [
        'Modern Website Architecture',
        'Digital Portfolio Identity',
        'Typography & Layout Systems',
        'Performance & SEO Optimization',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <FadeIn direction="down">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
              Specialized Disciplines
            </span>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              Capabilities & Offerings
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <p className="text-sm sm:text-base text-[#8A99A8] max-w-md font-sans-body">
            Tailored 3D and visual solutions designed for ambitious brands, innovative startups, and bespoke artisans.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {servicesList.map((service, index) => (
          <FadeIn key={service.id} delay={index * 0.1} direction="up" className="h-full">
            <div
              id={`service-card-${service.id}`}
              className="group h-full p-8 rounded-2xl md:rounded-3xl bg-[#111317] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#E5484D]/40 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8A99A8] mt-2 leading-relaxed font-sans-body">
                  {service.tagline}
                </p>

                <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-2.5">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 text-[#E5484D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D7E2EA] group-hover:text-[#E5484D] transition-colors focus:outline-none"
                >
                  <span>Inquire for this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
