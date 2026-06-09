"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillChip } from "@/components/ui/SkillChip";

const stats = [
  { value: "3+", label: "AÑOS DE EXPERIENCIA" },
  { value: "Full Stack", label: "DESARROLLO WEB" },
  { value: "QA", label: "AUTOMATIZACIÓN" },
];

const skills = [
  { label: "React", color: "secondary" as const },
  { label: "JavaScript", color: "primary" as const },
  { label: "Node.js", color: "tertiary" as const },
  { label: "HTML", color: "secondary" as const },
  { label: "CSS", color: "primary" as const },
  { label: "PostgreSQL", color: "tertiary" as const },
  { label: "Git", color: "secondary" as const },
  { label: "Docker", color: "primary" as const },
  { label: "REST APIs", color: "tertiary" as const },
];

export function About() {
  return (
    <section className="py-section-gap-desktop bg-surface-container-low" id="sobre-mi">
      <div className="max-w-container-max mx-auto px-6">
        <SectionHeader title="Sobre mí" />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <GlassPanel className="p-8">
              <p className="font-sans text-body-lg leading-relaxed text-on-surface-variant">
                Ingeniero de Sistemas con experiencia en desarrollo Full Stack y
                aseguramiento de calidad (QA), enfocado en aplicaciones web,
                integración de APIs y automatización de procesos. Experiencia en
                desarrollo backend, integración de servicios REST y validación
                de funcionalidades. Con conocimientos en React, Node.js,
                PostgreSQL, Git, Docker y metodologías ágiles.
              </p>
            </GlassPanel>

            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassPanel glow className="p-6 text-center">
                    <div className="text-secondary font-display text-[40px] font-extrabold mb-2">
                      {stat.value}
                    </div>
                    <div className="font-mono text-code-label text-on-surface-variant tracking-widest">
                      {stat.label}
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <GlassPanel className="p-8">
              <h3 className="font-display text-headline-lg text-on-surface mb-6 font-semibold">
                Skills Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillChip
                    key={skill.label}
                    label={skill.label}
                    color={skill.color}
                  />
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
