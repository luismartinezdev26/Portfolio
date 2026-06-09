"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ChipColor = "secondary" | "primary" | "tertiary";

interface SkillChipProps {
  label: string;
  color?: ChipColor;
}

const colorMap: Record<ChipColor, string> = {
  secondary:
    "border-secondary/30 text-secondary",
  primary:
    "border-primary/30 text-primary",
  tertiary:
    "border-tertiary/30 text-tertiary",
};

export function SkillChip({ label, color = "secondary" }: SkillChipProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "px-4 py-2 bg-surface-container-highest border rounded-full font-mono text-code-label tracking-widest",
        colorMap[color]
      )}
    >
      {label}
    </motion.span>
  );
}
