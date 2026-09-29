import React from 'react';
import { FadeIn } from './FadeIn';
import { Code2, PanelsTopLeft, Waypoints, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const servicesList = [
    {
      id: 'web-product',
      icon: <Code2 className="w-6 h-6 text-[#E5484D]" />,
      title: 'Web Product Development',
      tagline: 'From product structure and data flows to production-ready implementation',
      deliverables: [
        'React & Next.js Applications',
        'TypeScript & API Integration',
        'Authentication & Data Workflows',
        'Testing, Performance & Deployment',
      ],
    },
    {
      id: 'frontend-interface',
      icon: <PanelsTopLeft className="w-6 h-6 text-[#E5484D]" />,
      title: 'Frontend & Interface Engineering',
      tagline: 'Distinctive interfaces built for clarity, speed and real users',
      deliverables: [
        'Responsive Design Systems',
        'Accessible UI Components',
        'Interaction & Motion',
        'Cross-Device Quality Assurance',
      ],
    },
    {
      id: 'interactive-web',
      icon: <Waypoints className="w-6 h-6 text-[#E5484D]" />,
      title: 'Interactive Web Experiences',
      tagline: 'Purposeful visual interactions that strengthen the product story',
      deliverables: [
        'Automotive Visual Concepts',
        'Interactive Comparisons',
        'Motion-Led Product Stories',
        'Responsive Creative Development',
      ],
    },
    {
      id: 'creative-direction',
      icon: <Palette className="w-6 h-6 text-[#E5484D]" />,
      title: 'Creative Direction & Digital Presence',
      tagline: 'Focused digital identities for products and specialist businesses',
      deliverables: [
        'Modern Website Architecture',
        'Product & Portfolio Identity',
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
            Product engineering and creative development for useful, memorable digital experiences.
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
                  <span>Discuss this capability</span>
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
