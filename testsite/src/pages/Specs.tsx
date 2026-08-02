import { CURRENT_BUILD, FUTURE_BUILD } from "../data/specs";
import { Server, Lock, ChevronRight, Zap } from "lucide-react";

function SpecRow({ item, index }: { item: any, index: number }) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-3 border-b border-border/50 hover:bg-secondary/20 transition-colors px-2 -mx-2 rounded-sm">
      <div className="flex items-center gap-3 w-full sm:w-1/3 mb-1 sm:mb-0">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-medium text-sm tracking-wide">{item.category}</span>
      </div>
      <div className="flex flex-col sm:items-end w-full sm:w-2/3 pl-7 sm:pl-0">
        <span className="text-foreground text-sm group-hover:text-primary transition-colors">{item.value}</span>
        {item.note && (
          <span className="text-muted-foreground text-xs font-mono mt-0.5 flex items-center gap-1 sm:justify-end">
            <ChevronRight className="w-3 h-3 opacity-50" />
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Specs() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 terminal-grid min-h-[calc(100vh-4rem)]">
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-mono tracking-tight flex items-center gap-3">
          <Server className="w-8 h-8 text-primary" />
          SYSTEM_SPECS
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm font-mono border-l-2 border-primary/50 pl-4 py-1">
          Current hardware configuration and active components.
          <br/>
          Status: <span className="text-primary font-bold">ONLINE</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* CURRENT BUILD */}
        <section className="bg-card/40 border border-border/60 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-primary/5 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 opacity-50"></div>
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
            <h2 className="text-xl font-bold font-mono flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              CURRENT_RIG
            </h2>
            <div className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ACTIVE
            </div>
          </div>

          <div className="flex flex-col">
            {CURRENT_BUILD.map((item, i) => (
              <SpecRow key={i} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* FUTURE BUILD */}
        <section className="bg-card/20 border border-border/30 rounded-xl p-6 sm:p-8 relative overflow-hidden opacity-80 filter grayscale-[50%] hover:grayscale-0 transition-all duration-500">
          {/* Striped background effect for construction vibe */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}></div>
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-muted via-muted-foreground/30 to-muted opacity-50"></div>
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/30">
            <h2 className="text-xl font-bold font-mono flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5" />
              PROJECT_NEXT
            </h2>
            <div className="px-2 py-1 bg-muted/20 border border-border rounded text-xs font-mono text-muted-foreground uppercase tracking-widest">
              In Planning
            </div>
          </div>

          <div className="flex flex-col opacity-60">
            {FUTURE_BUILD.map((item, i) => (
              <div key={i} className="flex flex-col py-3 border-b border-border/30 px-2 -mx-2">
                <span className="font-mono text-xs text-muted-foreground mb-1">{item.category}</span>
                <span className="text-muted-foreground text-sm line-through decoration-muted-foreground/40">{item.value}</span>
                {item.note && (
                  <span className="text-muted-foreground/60 text-xs font-mono mt-1 italic">
                    {item.note}
                  </span>
                )}
              </div>
            ))}
            
            <div className="py-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-border/30 mt-6 rounded-lg bg-background/20 backdrop-blur-sm">
              <Lock className="w-8 h-8 text-muted-foreground/40 mb-2" />
              <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
                Awaiting Authorization
                <br/>
                (And more funds)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
