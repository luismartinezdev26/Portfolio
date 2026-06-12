import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassPanel({ children, className, glow }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl",
        glow && "glow-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
