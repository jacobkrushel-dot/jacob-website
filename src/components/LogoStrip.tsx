const companies = [
  { name: "Monument", url: "https://joinmonument.com/" },
  { name: "Build Health", url: "https://onbuildhealth.com/" },
  { name: "LabFinder", url: "https://www.labfinder.com/" },
  { name: "TMX", url: "https://usetmx.com/about" },
  { name: "Morning Brew", url: "https://www.morningbrew.com/" },
  { name: "Ollie", url: "https://www.ollie.com/" },
  { name: "Amavitae", url: "https://www.facebook.com/amavitae/" },
];

const doubled = [...companies, ...companies];

export function LogoStrip() {
  return (
    <div className="mt-20 mb-4">
      <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-10">
        Companies I've worked with
      </p>

      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        <div
          className="flex items-center gap-14 logo-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map((company, i) => (
            <a
              key={i}
              href={company.url}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 opacity-30 hover:opacity-100 transition-opacity duration-300"
              title={company.name}
            >
              <span className="font-display font-bold text-white text-xl tracking-widest uppercase whitespace-nowrap">
                {company.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee {
          animation: marquee 28s linear infinite;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
