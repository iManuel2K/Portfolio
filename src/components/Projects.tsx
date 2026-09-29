import React from "react";
import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";
import { FolderGit2 } from "lucide-react";

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      number: "01",
      category: "Product Engineering & Automotive UX",
      year: "2026",
      title: "CapCar — The Digital Garage for Project Cars",
      description:
        "A self-initiated product for project-car enthusiasts to organize vehicles, discover compatible parts, plan modifications and keep the story of a build in one place.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Product Design",
      ],
      image: "/assets/capcar.png",
      liveUrl: "https://capcar.dev/",
      githubUrl: "https://github.com/iManuel2K/capcar",
      role: "Product design, frontend architecture and full-stack implementation",
      status: "Public beta",
      challenge:
        "Bring fragmented build planning, fitment research, parts discovery and vehicle history into one coherent enthusiast workflow.",
      solution:
        "Designed a modular product experience around the Garage, compatible parts, build planning and Roadbook, with authentication, internationalization and provider-backed search.",
      outcome:
        "A working public beta with real interactive flows—not a static automotive concept page.",
      highlights: [
        "Garage and vehicle workflows with authenticated product areas",
        "Parts discovery, fitment concepts and provider integration",
        "Roadbook, responsive UI and multilingual architecture",
      ],
    },
    {
      number: "02",
      category: "Business Website & Local Conversion",
      year: "2026",
      title: "Harizi Bau — Modern Construction & Renovation",
      description:
        "A real business website for an established renovation company, designed to make its craftsmanship clear and generate qualified enquiries across the Rhine-Main region.",
      tags: [
        "Web Development",
        "UX & Conversion",
        "Local SEO",
        "Responsive Design",
      ],
      image: "/assets/harizi-bau.png",
      liveUrl: "https://harizibau.de",
      role: "Strategy, design, development, content structure and launch",
      status: "Live business website",
      challenge:
        "Translate 30 years of practical renovation experience into a trustworthy digital presence for regional homeowners and partners.",
      solution:
        "Built a focused service narrative, proof-led project presentation, regional SEO structure and direct enquiry journey around the company’s real work.",
      outcome:
        "A production website that gives the family business a credible home beyond marketplace profiles.",
      highlights: [
        "Editorial typography and clean, warm neutral aesthetic",
        "Clear service scope and project enquiry journey",
        "Regional search coverage for the Rhine-Main area",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
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
            Real products presented with context, responsibilities, technical
            decisions and working outcomes.
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
