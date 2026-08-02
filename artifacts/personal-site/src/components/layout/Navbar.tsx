import { Link, useLocation } from "wouter";
import { Cpu, Puzzle } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 bg-primary/10 flex items-center justify-center rounded border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Cpu className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono font-bold tracking-tight text-lg glitch-hover">
            SYS_PROFILE
          </span>
        </Link>
        
        <nav className="flex items-center gap-1">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
              location === "/" 
                ? "bg-secondary text-primary border border-primary/20" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            ~/specs
          </Link>
          <Link 
            href="/mods" 
            className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
              location === "/mods" 
                ? "bg-secondary text-primary border border-primary/20" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            ~/mods
          </Link>
        </nav>
      </div>
    </header>
  );
}
