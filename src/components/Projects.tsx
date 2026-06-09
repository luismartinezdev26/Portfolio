"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { GlassPanel } from "@/components/ui/GlassPanel";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: "secondary" | "primary";
  gradient: string;
}

const projects: Project[] = [
  {
    id: "proyecto-1",
    title: "Proyecto 01",
    description:
      "Próximamente estaré compartiendo aquí los proyectos en los que estoy trabajando. Mantente al tanto.",
    tags: ["En progreso"],
    color: "secondary",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
  },
  {
    id: "proyecto-2",
    title: "Proyecto 02",
    description:
      "Próximamente estaré compartiendo aquí los proyectos en los que estoy trabajando. Mantente al tanto.",
    tags: ["En progreso"],
    color: "primary",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
  },
  {
    id: "proyecto-3",
    title: "Proyecto 03",
    description:
      "Próximamente estaré compartiendo aquí los proyectos en los que estoy trabajando. Mantente al tanto.",
    tags: ["En progreso"],
    color: "secondary",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
  },
];

const tagColorMap = {
  secondary: "text-secondary border-secondary/20",
  primary: "text-primary border-primary/20",
};

export function Projects() {
  return (
    <section className="py-section-gap-desktop relative overflow-hidden" id="proyectos">
      <div className="max-w-container-max mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-headline-xl text-primary mb-4 font-bold">
              Proyectos Destacados
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </motion.div>
          <a
            href="#"
            className="text-secondary font-mono text-code-label hover:underline tracking-widest hidden md:block"
          >
            PRÓXIMAMENTE →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassPanel
                glow
                className="group overflow-hidden transition-all duration-500"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-surface-container/50 group-hover:bg-surface-container/30 transition-colors duration-500" />
                  <div className="font-display text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-all duration-500">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-widest font-mono border px-2 py-0.5 rounded ${
                          tagColorMap[project.color]
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-headline-lg text-on-surface mb-3 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-body-md mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
