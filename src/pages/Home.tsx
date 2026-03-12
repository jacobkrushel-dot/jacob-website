import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Blocks, 
  Network, 
  LineChart, 
  Presentation,
  MapPin,
  Calendar,
  ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <BackgroundElements />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">Available for new roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] tracking-tighter mb-6"
          >
            Jacob <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary text-glow">
              Krushel
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 max-w-3xl"
          >
            BizOps & Strategy Leader <span className="text-primary px-2">|</span> Founder <span className="text-primary px-2">|</span> Builder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed"
          >
            I build operational infrastructure and data-driven systems that help companies scale — from founding a SaaS startup to $1M ARR, to running finance and strategy at high-growth healthtech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Connect With Me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex gap-4">
              <a href="mailto:jacob.krushel@gmail.com" className="p-4 rounded-lg bg-card border border-white/5 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/jacobkrushel" target="_blank" rel="noreferrer" className="p-4 rounded-lg bg-card border border-white/5 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" title="What I'm Looking For">
          <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
              <p>
                I recently wrapped up my time at the SaaS startup I co-founded (Build Health), which we mostly bootstrapped to <strong className="text-foreground font-semibold">$1M ARR and profitability</strong>. 
                Prior to that, I ran finance and strategy at a healthtech startup (Monument), owning unit economics, cohort and retention analysis, and partnering closely with product and leadership on pricing decisions, payer partnerships, and scaling operating cadence from the ground up.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
              <p>
                I'm now looking for <strong className="text-foreground font-semibold">BizOps/Strategy roles</strong> where I can build operational infrastructure — whether that's establishing foundational systems at an early-stage company (FP&A, planning processes, operating cadence) or scaling existing operations at a Series A+ company. I'm most energized by roles that require driving data-informed decision-making, building cross-functional processes, and partnering with leadership to accelerate growth in ambiguous environments.
              </p>
            </div>
          </div>
        </Section>

        {/* STRENGTHS SECTION */}
        <Section id="strengths" title="What I Bring">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Systems Building",
                icon: <Blocks className="w-8 h-8" />,
                desc: "Designs operating systems (planning, KPIs, etc.) from zero in high-growth environments."
              },
              {
                title: "Cross-Functional Leadership",
                icon: <Network className="w-8 h-8" />,
                desc: "Drives alignment and execution across Product, Sales, Finance, Marketing and Ops."
              },
              {
                title: "Strategic Analysis",
                icon: <LineChart className="w-8 h-8" />,
                desc: "Translates ambiguous challenges into actionable frameworks and executive-ready insights."
              },
              {
                title: "Executive Influence",
                icon: <Presentation className="w-8 h-8" />,
                desc: "Presents to and influences C-suite executives, investors, and board members on strategic decisions."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
                <div className="text-primary mb-6 bg-primary/10 w-fit p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section id="experience" title="Career">
          <div className="space-y-12">
            {[
              {
                company: "Build Health",
                role: "Co-Founder & COO",
                date: "July 2022 – June 2025",
                location: "New York, NY",
                tagline: "SaaS for non-English-speaking SMBs",
                points: [
                  "Founded and scaled a SaaS platform serving non-English-speaking SMBs; built cross-functional team and operational infrastructure (3 → 10 employees) enabling customer acquisition and scalable growth",
                  "Owned pricing strategy, GTM strategy, and funnel experimentation; increased ARPU from $50 → $200 while maintaining CAC at ~$200; scaled to $1M ARR and profitability by June 2025",
                  "Created company operating cadence (forecasting, KPI reviews, resource allocation, and quarterly planning)",
                  "Built onboarding, support, and bilingual operations systems supporting 300+ SMBs, reducing go-live time to <1 hour"
                ]
              },
              {
                company: "Monument",
                role: "VP of Finance and Strategy",
                date: "July 2020 – July 2022",
                location: "New York, NY",
                tagline: "Telehealth company providing treatment for alcohol addiction",
                points: [
                  "Led company-wide KPI, planning, and reporting systems during a period of 15x membership growth; built FP&A infrastructure across 20+ states, 150+ clinicians, and four legal entities",
                  "Owned all quantitative analysis in pricing and GTM, unit economics, retention, capital raises and insurance — driving ARPU growth of 66% and margin expansion from 45% to 55%",
                  "Led acquisition of rival platform Tempest; built valuation models, secured board/investor approval, and owned diligence and integration (closed May 2022)"
                ]
              },
              {
                company: "The Walt Disney Company",
                role: "MBA Associate, Strategy & BD",
                date: "June 2019 – August 2019",
                location: "Burbank, CA",
                tagline: "Direct-to-Consumer & International",
                points: [
                  "Created and owned the Disney+ & Verizon partnership financial model (multi-million subscriber partnership); synthesized analysis into presentations to the group Chairman and CFO",
                  "Evaluated potential acquisition of WWE distribution rights for ESPN+ by modeling multiple AAV scenarios ($125M+ annually)"
                ]
              },
              {
                company: "Group Nine Media",
                role: "Director of Business Operations, The Dodo",
                date: "December 2014 – April 2018",
                location: "New York, NY",
                tagline: "Digital media holding company acquired by Vox Media",
                points: [
                  "Led annual and quarterly planning for a top digital media brand, modeling hiring and resource needs",
                  "Built the Content Acquisitions team from scratch — hired 7 direct reports, designed and operationalized video production and licensing workflows",
                  "Developed and executed a $1M branded content deal with Samsung"
                ]
              },
              {
                company: "Lerer Hippeau Ventures",
                role: "Chief-of-Staff to Ken Lerer",
                date: "May 2014 – May 2015",
                location: "New York, NY",
                tagline: "Seed stage VC firm",
                points: [
                  "Served as the Chief of Staff, managing all ongoing projects and the everyday operations and communications for a leading venture capitalist and media executive"
                ]
              },
              {
                company: "Bloomberg L.P.",
                role: "Fixed Income Specialist",
                date: "August 2013 – May 2014",
                location: "New York, NY",
                tagline: "",
                points: [
                  "Consulted Bloomberg users, with a focus on sell-side Fixed Income, on how to maximize their use of the terminal's analytical tools to make informed investment decisions"
                ]
              }
            ].map((job, i) => (
              <div key={i} className="relative pl-8 md:pl-12 border-l border-white/10 hover:border-primary/50 transition-colors duration-500 group">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-white/20 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{job.company}</h3>
                    <div className="text-xl font-medium text-white/80 mt-1">{job.role}</div>
                    {job.tagline && <div className="text-sm font-mono text-secondary mt-2">{job.tagline}</div>}
                  </div>
                  <div className="flex flex-col gap-2 text-sm font-mono text-muted-foreground">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md w-fit">
                      <Calendar className="w-4 h-4 text-primary" /> {job.date}
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md w-fit">
                      <MapPin className="w-4 h-4 text-primary" /> {job.location}
                    </div>
                  </div>
                </div>

                {job.points.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-primary/50 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION SECTION */}
        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">UCLA Anderson</h3>
              <p className="text-primary font-mono mb-4">July 2018 – June 2020</p>
              <p className="text-muted-foreground text-lg">M.B.A., Full-Time Program</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl group hover:border-secondary/30 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Vanderbilt University</h3>
              <p className="text-secondary font-mono mb-4">May 2013</p>
              <p className="text-muted-foreground text-lg">B.A., Economics & Philosophy</p>
            </div>
          </div>
        </Section>

        {/* CONTACT SECTION */}
        <Section id="contact" title="Get in Touch" className="pb-40">
          <div className="glass-panel p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Let's build something.</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Currently open to new opportunities in BizOps and Strategy leadership. 
              If you're scaling a team or building foundational infrastructure, I'd love to chat.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:jacob.krushel@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/50 text-foreground font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.3)] w-full md:w-auto justify-center"
              >
                <Mail className="w-5 h-5 text-primary" />
                jacob.krushel@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/jacobkrushel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/50 text-foreground font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.3)] w-full md:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                linkedin.com/in/jacobkrushel
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground font-mono text-sm">
        <p>© {new Date().getFullYear()} Jacob Krushel. All rights reserved.</p>
      </footer>
    </div>
  );
}
