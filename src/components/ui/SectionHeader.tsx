"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center mb-16" : "mb-16"}
    >
      <h2 className="font-display text-headline-xl text-primary mb-4 font-bold">
        {title}
      </h2>
      <div className="h-1 w-20 bg-secondary rounded-full" />
      {subtitle && (
        <p className="text-on-surface-variant max-w-2xl font-sans text-body-lg mt-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
