"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
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
                        luismartinez.dev26@gmail.com
                      </div>
                      <div className="font-mono text-code-label tracking-widest text-on-surface-variant text-sm">
                        Colombia
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/luismartinezdev26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="w-5 h-5 text-on-surface" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/luis-martinez-cantero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-5 h-5 text-on-surface" />
                    </a>
                  </div>
                </div>
              </div>

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("sending");
                  const form = e.currentTarget;
                  const data = {
                    name: (form.elements.namedItem("name") as HTMLInputElement).value,
                    email: (form.elements.namedItem("email") as HTMLInputElement).value,
                    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
                  };
                  if (!data.name || !data.email || !data.message) {
                    setStatus("error");
                    return;
                  }
                  try {
                    const res = await fetch("https://formspree.io/f/meoadeak", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    if (!res.ok) throw new Error("Failed");
                    setStatus("sent");
                    form.reset();
                  } catch {
                    setStatus("error");
                  }
                }}
              >
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Nombre
                  </label>
                  <input
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-code-label text-on-surface-variant mb-2 tracking-widest">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface transition-colors rounded-t-lg outline-none px-3 py-2"
                    name="message"
                    rows={4}
                    placeholder="Tu mensaje..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" && <Loader2 size={20} className="animate-spin" />}
                  {status === "sent" ? "¡Enviado!" : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
