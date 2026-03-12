import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 md:px-12 relative z-10"
      >
        {title && (
          <div className="mb-16 md:mb-20 flex items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              {title}
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
