import React from 'react';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from './FadeIn';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      number: '01',
      category: 'Automotive CGI & Concept Design',
      year: '2024',
      title: 'CapCar — The Digital Garage for Project Cars',
      description:
        'A full digital platform and 3D visualization suite for automotive builders. Users can preview aerodynamic body kits, paint variations, custom wheel setups, and compare their starting vehicle against aggressive concept directions.',
      tags: ['3D Automotive CGI', 'Interactive Comparison', 'Concept Design', 'UI/UX Architecture'],
      image: '/assets/capcar.png',
      liveUrl: 'https://capcar.com',
      highlights: [
        'Interactive real-time split concept direction slider',
        'Custom 3D tuned widebody and aerodynamic modeling',
        'Digital parts catalog and garage management interface',
      ],
    },
    {
      number: '02',
      category: 'Web Design & Brand Craftsmanship',
      year: '2024',
      title: 'Harizi Bau — Modern Construction & Renovation',
      description:
        'A modern digital presence built for high-end tile, flooring, and luxury bathroom renovation craft in Rüsselsheim am Main, Frankfurt, and Wiesbaden. Showcases precise renovation work with architectural clarity and effortless client acquisition.',
      tags: ['Architectural Showcase', 'Web Development', 'Brand Direction', 'Responsive Experience'],
      image: '/assets/harizi-bau.png',
      liveUrl: 'https://harizibau.de',
      highlights: [
        'Editorial typography and clean, warm neutral aesthetic',
        'Interactive service scope and project inquiry funnel',
        'Regional service coverage across Rhine-Main metropolitan area',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <FadeIn direction="down">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5484D]">
              <FolderGit2 className="w-4 h-4" />
              <span>Selected Portfolio</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              Featured Case Studies
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <p className="text-sm sm:text-base text-[#8A99A8] max-w-md font-sans-body">
            Deep dives into commercial executions combining bespoke 3D visualization, interactive media, and tailored digital strategy.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
