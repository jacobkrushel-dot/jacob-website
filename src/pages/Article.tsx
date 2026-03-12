import { Navbar } from "@/components/Navbar";
import { BackgroundElements } from "@/components/BackgroundElements";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { getArticleBySlug } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground font-mono mb-6">Article not found.</p>
          <Link href="/writing" className="text-primary hover:underline font-medium">
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundElements />
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/writing">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Writing
            </span>
          </Link>

          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {article.date}
          </p>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight mb-12">
            {article.title}
          </h1>

          <div className="w-16 h-px bg-primary/40 mb-12" />

          <div className="article-body text-muted-foreground leading-relaxed space-y-6">
            {article.content}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <Link href="/writing">
              <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> Back to Writing
              </span>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground font-mono text-sm">
        <p>© {new Date().getFullYear()} Jacob Krushel. All rights reserved.</p>
      </footer>

      <style>{`
        .article-body h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-family: var(--font-sans);
          letter-spacing: -0.02em;
        }
        .article-body p {
          color: hsl(var(--muted-foreground));
        }
        .article-body strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
        .article-body ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
          space-y: 0.5rem;
        }
        .article-body ul li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.6rem;
          color: hsl(var(--muted-foreground));
        }
        .article-body ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: hsl(var(--primary) / 0.6);
        }
        .article-body a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
