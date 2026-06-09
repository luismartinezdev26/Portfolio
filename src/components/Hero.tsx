"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="inicio"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 text-secondary font-mono text-code-label tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              INGENIERÍA DE SISTEMAS | FULL STACK
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-display-lg text-on-surface leading-tight font-extrabold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Desarrollador Full Stack
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-body-lg text-on-surface-variant max-w-xl"
            >
              Construyo aplicaciones web, integro APIs y desarrollo soluciones
              escalables orientadas a resultados.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-body-md text-on-surface-variant max-w-xl"
            >
              Ingeniero de Sistemas con experiencia en desarrollo de software,
              automatización de procesos y aseguramiento de calidad.
              Especializado en React, Node.js y PostgreSQL.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#proyectos"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold font-display text-headline-lg flex items-center gap-2 hover:brightness-125 transition-all"
              >
                Ver Proyectos <ArrowRight size={24} />
              </a>
              <a
                href="#contacto"
                className="border border-secondary text-secondary px-8 py-4 rounded-xl font-bold font-display text-headline-lg hover:bg-secondary/10 transition-all"
              >
                Hablemos
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="hidden md:flex justify-center animate-float"
          >
            <div className="relative w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full" />
              <div className="w-full h-full rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-surface-container-high to-surface-container-highest flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary" />
                  <div className="font-mono text-code-label text-secondary tracking-widest">
                    {"<code>"}
                  </div>
                  <div className="font-display text-3xl font-bold text-primary mt-4">
                    Luis
                  </div>
                  <div className="font-display text-2xl font-bold text-secondary mt-1">
                    Martínez
                  </div>
                  <div className="font-mono text-code-label text-on-surface-variant tracking-widest mt-2">
                    {"</code>"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
