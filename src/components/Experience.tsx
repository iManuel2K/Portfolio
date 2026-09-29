import React from 'react';
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

const roles = [
  {
    period: '2019 — 2022',
    company: 'Sybit GmbH',
    role: 'Application Development Apprenticeship',
    description:
      'Built a professional foundation in application development, frontend implementation, data-driven software and collaborative delivery.',
    skills: ['Application development', 'Java', 'JavaScript', 'Team delivery'],
  },
  {
    period: '2022 — 2025',
    company: 'dfv Mediengruppe',
    role: 'Junior Developer',
    description:
      'Developed and maintained publishing and internal web products across backend, frontend and CMS workflows in a production environment.',
    skills: ['PHP', 'MySQL', 'JavaScript', 'Vue / React', 'CMS'],
  },
  {
    period: '2025 — Present',
    company: 'Independent',
    role: 'Freelance Web & Product Developer',
    description:
      'Designing and building websites and digital products for businesses and self-initiated ventures—from product strategy and interface design to full-stack implementation and launch.',
    skills: ['React', 'Next.js', 'TypeScript', 'Product design', 'SEO', 'Full-stack development'],
  },
];

export const Experience: React.FC = () => (
  <section
    id="experience"
    className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
            <BriefcaseBusiness className="w-4 h-4" />
            <span>Professional experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
            Built in real product teams.
          </h2>
          <p className="mt-5 text-base text-[#A7B4C0] font-sans-body leading-relaxed">
            Trained application developer with production experience across frontend, backend and content platforms.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-[#A7B4C0] font-sans-body">
            <MapPin className="w-4 h-4 text-[#E5484D]" />
            Rüsselsheim / Frankfurt, Germany
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-8 space-y-5">
        {roles.map((item, index) => (
          <FadeIn key={item.company} delay={index * 0.1} direction="up">
            <article className="rounded-2xl bg-[#111317] border border-white/[0.08] p-6 sm:p-8 hover:border-white/[0.16] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E5484D]">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#A7B4C0] sm:text-right whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm sm:text-base text-[#A7B4C0] font-sans-body leading-relaxed max-w-3xl">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-[#D7E2EA]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
