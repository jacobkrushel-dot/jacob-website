import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location === "/") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass-panel border-white/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-display font-bold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="text-primary">J</span>
          <span>KRUSHEL</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href={location === "/" ? "#about" : "/"}
            onClick={handleAbout}
            className={cn(
              "text-sm font-medium transition-colors tracking-wide uppercase",
              location === "/" ? "text-muted-foreground hover:text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            About
          </a>
          <Link
            href="/writing"
            className={cn(
              "text-sm font-medium transition-colors tracking-wide uppercase",
              location === "/writing" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            Writing
          </Link>
          <Link
            href="/consulting"
            className={cn(
              "text-sm font-medium transition-colors tracking-wide uppercase",
              location === "/consulting" ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            Consulting
          </Link>
        </nav>

        <a
          href={location === "/" ? "#contact" : "/"}
          className="hidden md:inline-flex px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary border border-primary/50 rounded-full hover:bg-primary/10 hover:border-glow transition-all duration-300"
        >
          Get in Touch
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden glass-panel border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              <a
                href={location === "/" ? "#about" : "/"}
                onClick={handleAbout}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                About
              </a>
              <Link
                href="/writing"
                className={cn(
                  "text-base font-medium transition-colors tracking-wide uppercase",
                  location === "/writing" ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                Writing
              </Link>
              <Link
                href="/consulting"
                className={cn(
                  "text-base font-medium transition-colors tracking-wide uppercase",
                  location === "/consulting" ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                Consulting
              </Link>
              <a
                href={location === "/" ? "#contact" : "/"}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
