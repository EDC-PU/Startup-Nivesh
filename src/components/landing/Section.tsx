import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20 lg:py-24', className)}>
      <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <h2 className={cn('text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-10 md:mb-16', className)}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <p className={cn('max-w-3xl mx-auto text-center text-lg text-muted-foreground md:text-xl mb-10 md:mb-16', className)}>
      {children}
    </p>
  );
}
