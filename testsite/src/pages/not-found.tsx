import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center terminal-grid p-4">
      <Card className="w-full max-w-md mx-4 bg-card border-border/50 shadow-2xl shadow-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4 gap-3">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-mono text-foreground tracking-tight">
              404_NOT_FOUND
            </h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground font-mono">
            The requested system resource could not be located.
          </p>
          
          <div className="mt-6 border-t border-border/50 pt-4">
            <Link href="/" className="text-sm font-mono text-primary hover:underline flex items-center gap-2">
              <span className="text-muted-foreground">&gt;</span> return_to_root
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
