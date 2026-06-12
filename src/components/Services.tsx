"use client";

import { motion } from "framer-motion";
import { Monitor, Server, GitBranch, TestTube, CheckCircle } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Construcción de interfaces web modernas con React y JavaScript. Maquetación con HTML y CSS, integración de componentes reutilizables y consumo de APIs REST.",
    icon: Monitor,
    color: "secondary",
    features: ["React / JavaScript", "HTML / CSS", "Consumo de APIs REST"],
  },
  {
    title: "Desarrollo Backend",
    description:
      "Creación de servicios backend con Node.js, integración de APIs REST y manejo de bases de datos PostgreSQL. Enfoque en código limpio y mantenible.",
    icon: Server,
    color: "primary",
    features: ["Node.js", "APIs REST", "PostgreSQL"],
  },
  {
    title: "Integración de APIs",
    description:
      "Conexión y orquestación de servicios externos, automatización de flujos de datos y aseguramiento de la comunicación entre sistemas.",
    icon: GitBranch,
    color: "tertiary",
    features: ["REST APIs", "Automatización", "Integración continua"],
  },
  {
    title: "Automatización y QA",
    description:
      "Pruebas automatizadas con Playwright, aseguramiento de calidad funcional, reporte de incidencias y validación de requerimientos en entornos ágiles.",
    icon: TestTube,
    color: "secondary",
    features: ["Playwright", "QA funcional", "Scrum / Ágil"],
  },
];

const iconColors: Record<string, string> = {
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
  primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
  tertiary: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary/20",
};

const textColors: Record<string, string> = {
  secondary: "text-secondary/80",
  primary: "text-primary/80",
  tertiary: "text-tertiary/80",
};

const borderColors: Record<string, string> = {
  secondary: "",
  primary: "border-t-2 border-primary/20",
  tertiary: "",
};

export function Services() {
  return (
    <section
      className="py-section-gap-desktop bg-surface-container-lowest"
      id="servicios"
    >
      <div className="max-w-container-max mx-auto px-6">
        <SectionHeader
          title="Servicios Core"
          subtitle="Desarrollo web, integración de sistemas y aseguramiento de calidad."
          align="left"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassPanel
                  className={`p-10 rounded-3xl group hover:-translate-y-2 transition-all duration-500 ${borderColors[service.color]}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors ${iconColors[service.color]}`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="font-display text-headline-lg text-on-surface mb-4 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-body-md mb-6">
                    {service.description}
                  </p>
                  <ul
                    className={`space-y-3 font-mono text-code-label tracking-widest ${textColors[service.color]}`}
                  >
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle size={14} /> {feature}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
