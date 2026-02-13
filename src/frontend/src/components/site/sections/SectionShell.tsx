import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionShellProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function SectionShell({ id, title, subtitle, children, className = '', noPadding = false }: SectionShellProps) {
  return (
    <section id={id} className={`${noPadding ? 'py-0' : 'py-16 md:py-24'} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
            <Separator className="mt-6 max-w-24 mx-auto" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
