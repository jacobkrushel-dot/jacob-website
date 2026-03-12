import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { BackgroundElements } from "@/components/BackgroundElements";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundElements />
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link href="/">
          <span className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg hover:scale-105 transition-transform cursor-pointer">
            Go Home
          </span>
        </Link>
      </main>
    </div>
  );
}
