import { Navbar } from "@/components/Navbar";
import { BackgroundElements } from "@/components/BackgroundElements";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Megaphone,
  Settings,
  FlaskConical,
  DollarSign,
} from "lucide-react";
import { LogoStrip } from "@/components/LogoStrip";

const services = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Fundraising",
    desc: "Narrative development, financial modeling, and investor materials to help you raise your next round with confidence.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "FP&A, Forecasting & OKR Setting",
    desc: "Building planning infrastructure from scratch — budgets, rolling forecasts, KPI frameworks, and operating cadence that actually get used.",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "GTM Strategy",
    desc: "Defining your go-to-market motion, identifying the right channels, and building the systems to execute and iterate.",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Scaling Operational Processes",
    desc: "Designing the cross-functional workflows, tooling, and team structures that let your company grow without breaking.",
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: "MVP Development & Hypothesis Testing",
    desc: "Structuring experiments, defining success criteria, and building lightweight systems to validate ideas before you scale them.",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Business Model, Pricing & Unit Economics Advisory",
    desc: "Pressure-testing your model, optimizing pricing strategy, and building the unit economics framework to guide profitable growth.",
  },
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundElements />
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
            Consulting
          </h1>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-12">
            Working with founders & operators
          </p>

          <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden mb-16 max-w-3xl">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/50" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I work with founders and operators at early-stage companies who are navigating the challenges of building and scaling.{" "}
              <strong className="text-foreground font-semibold">Here's what I can help with:</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
                <div className="text-primary mb-5 bg-primary/10 w-fit p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <LogoStrip />

          <div className="mt-4 glass-panel p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Interested in working together?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Reach out and let's talk through what you're building and where I can add the most value.
            </p>
            <a
              href="mailto:jacob.krushel@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground font-mono text-sm">
        <p>© {new Date().getFullYear()} Jacob Krushel. All rights reserved.</p>
      </footer>
    </div>
  );
}
