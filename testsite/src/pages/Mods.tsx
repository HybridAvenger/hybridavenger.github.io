import { MODS } from "../data/mods";
import { Puzzle, ExternalLink, Gamepad2 } from "lucide-react";

export default function Mods() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-mono tracking-tight flex items-center gap-3">
          <Puzzle className="w-8 h-8 text-primary" />
          MOD_INDEX
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm font-mono border-l-2 border-primary/50 pl-4 py-1">
          Curated list of modifications, tweaks, and overhauls.
          <br/>
          Registry count: <span className="text-primary font-bold">{MODS.length}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MODS.map((mod, i) => (
          <div 
            key={i} 
            className="group relative flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300"
          >
            {/* Top decorative bar */}
            <div className="h-1 w-full bg-border group-hover:bg-primary transition-colors"></div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="px-2 py-0.5 bg-secondary border border-border rounded text-[10px] font-mono text-muted-foreground uppercase tracking-wider group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
                  {mod.category}
                </div>
                {mod.game && (
                  <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                    <Gamepad2 className="w-3 h-3" />
                    {mod.game}
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                {mod.name}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1 leading-relaxed">
                {mod.description}
              </p>
              
              <a 
                href={mod.url} 
                className="inline-flex items-center justify-center gap-2 w-full py-2 bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 text-sm font-mono font-medium rounded transition-all text-foreground hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                ACCESS_LINK
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            
            {/* Grid texture overlay on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity" style={{
              backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
