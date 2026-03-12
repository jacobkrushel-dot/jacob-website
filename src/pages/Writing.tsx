import { Navbar } from "@/components/Navbar";
import { BackgroundElements } from "@/components/BackgroundElements";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

export default function Writing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundElements />
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
            Writing
          </h1>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-16">
            Essays, reflections, and frameworks
          </p>

          <div className="space-y-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              >
                <Link href={`/writing/${article.slug}`}>
                  <div className="group glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.15)] transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/15 transition-colors" />
                    <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                      {article.date}
                    </p>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground font-mono text-sm">
        <p>© {new Date().getFullYear()} Jacob Krushel. All rights reserved.</p>
      </footer>
    </div>
  );
}
