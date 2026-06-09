"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

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

function LinkedInIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  return (
    <section className="py-section-gap-desktop relative" id="contacto">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <GlassPanel className="p-12 rounded-[40px] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-headline-xl text-primary mb-6 font-bold">
                  Iniciemos algo grande.
                </h2>
                <p className="text-on-surface-variant font-sans text-body-lg mb-10">
                  ¿Tienes un proyecto en mente o quieres conectar? Estoy abierto
                  a nuevas oportunidades y colaboraciones.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                      <Mail size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-mono text-code-label tracking-widest text-secondary">
                        l.martinez@email.com
                      </div>
                      <div className="font-mono text-code-label tracking-widest text-on-surface-variant text-sm">
                        Colombia
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="w-5 h-5 text-on-surface" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-5 h-5 text-on-surface" />
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Nombre
                  </label>
                  <input
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    type="text"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    type="email"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    rows={4}
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
