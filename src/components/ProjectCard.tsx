import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Project } from '../types';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { GitBranch, Layers, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.15} direction="up" distance={40} className="w-full">
      <div
        id={`project-card-${project.number}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl md:rounded-3xl bg-[#111317] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        {/* Ambient background glow on hover */}
        <div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
          style={{
            background:
              index === 0
                ? 'radial-gradient(800px circle at 80% 20%, rgba(229, 72, 77, 0.08), transparent 50%)'
                : 'radial-gradient(800px circle at 80% 20%, rgba(56, 139, 253, 0.08), transparent 50%)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text & Metadata Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Header meta: Index + Year + Category */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#E5484D] tracking-widest px-2.5 py-1 rounded-full bg-[#E5484D]/10 border border-[#E5484D]/20">
                    {project.number}
                  </span>
                  <span className="text-xs text-[#8A99A8] font-medium tracking-wide">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#606E7B]">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-5 group-hover:text-[#F1F5F9] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#8A99A8] leading-relaxed mt-4 font-sans-body">
                {project.description}
              </p>

              <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans-body">
                <div className="rounded-xl bg-black/20 border border-white/[0.06] p-3.5">
                  <dt className="font-mono uppercase tracking-wider text-[#768696]">My role</dt>
                  <dd className="mt-1.5 text-[#D7E2EA] leading-relaxed">{project.role}</dd>
                </div>
                <div className="rounded-xl bg-black/20 border border-white/[0.06] p-3.5">
                  <dt className="font-mono uppercase tracking-wider text-[#768696]">Status</dt>
                  <dd className="mt-1.5 text-[#D7E2EA] leading-relaxed">{project.status}</dd>
                </div>
              </dl>

              {/* Highlights / Features if present */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-5 space-y-2">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5484D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags & Action Button */}
            <div className="pt-4 space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-[#8A99A8] border border-white/[0.06] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                  <LiveProjectButton
                    id={`live-btn-${project.number}`}
                    href={project.liveUrl}
                    label="Explore Live Site"
                  />
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-xs sm:text-sm font-medium text-[#D7E2EA] hover:bg-white/[0.09] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5484D] transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      View code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Project Screenshot / Visual Media Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0C0F] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.6)] group-hover:border-white/[0.18] transition-all duration-500">
              {/* Browser Window Header Chrome Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161920] border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-black/40 text-[11px] font-mono text-[#606E7B] max-w-[220px] truncate">
                  <Layers className="w-3 h-3 text-[#8A99A8]" />
                  <span className="truncate">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <span className="text-[10px] font-mono text-[#475569] uppercase">1080p HD</span>
              </div>

              {/* Main Media Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0C0E12]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{ scale: isHovered ? 1.04 : 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Subtle sheen highlight across preview */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/[0.04] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-7 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ['Challenge', project.challenge],
            ['Approach', project.solution],
            ['Outcome', project.outcome],
          ].map(([label, text]) => (
            <div key={label}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5484D]">{label}</h4>
              <p className="mt-2 text-sm text-[#A7B4C0] leading-relaxed font-sans-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};
