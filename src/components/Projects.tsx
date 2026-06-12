"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: "secondary" | "primary";
  gradient: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "medipet",
    title: "MediPet Montería",
    description:
      "Plataforma web para clínica veterinaria con agendamiento de citas, servicios integrales, testimonios y sistema de emergencias 24/7.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    color: "secondary",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
    url: "https://medipet-monteria.vercel.app/",
    image: "/images/medipet.png",
  },
  {
    id: "ferreteria",
    title: "Ferretería Central",
    description:
      "Sitio web de ferretería con catálogo de productos, categorías, formulario de contacto e integración con WhatsApp.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    color: "primary",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
    url: "https://ferreteria-san-carlos.vercel.app/",
    image: "/images/ferreteria.png",
  },
  {
    id: "energym",
    title: "EnerGym Elite",
    description:
      "Landing page de gimnasio de alto rendimiento con planes de membresía, horarios de clases, instalaciones y formulario de contacto.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    color: "secondary",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
    url: "https://energym-sancarlos.vercel.app/",
    image: "/images/energym.png",
  },
  {
    id: "leyendas",
    title: "Leyendas del Fútbol Colombiano",
    description:
      "Sitio web homenaje a los grandes íconos del fútbol colombiano con biografías, estadísticas y galería de momentos históricos.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    color: "primary",
    gradient: "from-primary/20 via-secondary/10 to-transparent",
    url: "#",
    image: "/images/leyendas.png",
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
                className="group overflow-hidden transition-all duration-500 h-full"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-surface-container/50 group-hover:bg-surface-container/30 transition-colors duration-500" />
                    <Image
                      src={project.image}
                      alt={`Preview de ${project.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
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
                  <h3 className="font-display text-headline-lg text-on-surface mb-2 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-body-md mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={20} />
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
