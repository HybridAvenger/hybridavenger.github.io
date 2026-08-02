import { useState, useEffect, useCallback } from "react";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "./components/layout/Navbar";
import Specs from "./pages/Specs";
import Mods from "./pages/Mods";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

// Hash-based location hook so the built site works when opened as a local file
function useHashLocation(): [string, (to: string) => void] {
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";
  const [loc, setLoc] = useState(getHash);

  useEffect(() => {
    const handler = () => setLoc(getHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Specs} />
      <Route path="/mods" component={Mods} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter hook={useHashLocation}>
          <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
