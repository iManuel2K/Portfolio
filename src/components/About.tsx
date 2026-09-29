import React from 'react';
import { Code2, Compass, Layers3, Palette } from 'lucide-react';
import { FadeIn } from './FadeIn';

const skillGroups = [
  {
    title: 'Product engineering',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    title: 'Data & platform',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Docker', 'Git', 'CI/CD'],
  },
  {
    title: 'Frontend & UX',
    skills: ['HTML', 'CSS / SCSS', 'Tailwind CSS', 'Responsive UI', 'Accessibility', 'SEO', 'Figma'],
  },
];

const pillars = [
  {
    icon: <Code2 className="w-5 h-5 text-[#E5484D]" />,
    title: 'Product engineering',
    description:
      'Production-minded web applications built across frontend, backend, data and deployment workflows.',
  },
  {
    icon: <Palette className="w-5 h-5 text-[#E5484D]" />,
    title: 'Interface craft',
    description:
      'Responsive interfaces where visual identity, usability, accessibility and performance support the product together.',
  },
  {
    icon: <Layers3 className="w-5 h-5 text-[#E5484D]" />,
    title: 'Creative technology',
    description:
      'Interactive visuals, automotive concepts and motion used selectively to make useful products more memorable.',
  },
];

export const About: React.FC = () => (
  <section
    id="about"
    className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-6 space-y-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
            <Compass className="w-4 h-4" />
            <span>About Imanuel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
            Engineering products with a visual point of view.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <p className="text-base sm:text-lg text-[#A7B4C0] font-sans-body leading-relaxed">
            I&apos;m Imanuel Harizi, a trained application developer and creative
            product builder based near Frankfurt. I combine professional web
            development experience with UI/UX, interactive visuals and a strong
            interest in automotive products.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="text-sm sm:text-base text-[#A7B4C0] font-sans-body leading-relaxed">
            My work ranges from production-oriented business software to
            customer-facing platforms and expressive web experiences. The goal
            is always the same: make complex workflows clear, reliable and good
            to use.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" className="pt-2">
          <a
            href="https://github.com/iManuel2K"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5484D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] transition-colors"
          >
            View GitHub profile
            <span aria-hidden="true">↗</span>
          </a>
        </FadeIn>
      </div>

      <div className="lg:col-span-6 space-y-5">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.1} direction="up">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121419] border border-white/[0.07] hover:border-white/[0.15] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-[#A7B4C0] mt-2 leading-relaxed font-sans-body">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>

    <FadeIn delay={0.2} direction="up" className="mt-12 sm:mt-16">
      <div className="rounded-2xl bg-[#101217] border border-white/[0.07] p-6 sm:p-8">
        <p className="text-xs font-mono uppercase tracking-wider text-[#768696] mb-5">Core toolkit</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-white mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#171B22] border border-white/[0.08] text-xs font-medium text-[#D7E2EA]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  </section>
);
