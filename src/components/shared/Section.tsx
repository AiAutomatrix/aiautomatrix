import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
  angledTop?: boolean;
  angledBottom?: boolean;
  backgroundColor?: string; // e.g., 'bg-background' or 'bg-muted'
};

export function Section({
  title,
  subtitle,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  id,
  angledTop = false,
  angledBottom = false,
  backgroundColor = 'bg-transparent'
}: SectionProps) {
  // Base padding for the section content area
  const basePaddingClasses = 'py-12 sm:py-16 lg:py-20';

  // Classes for angled geometry (clip-path and negative margins)
  const angledTopGeometryClass = angledTop ? 'angled-section-top' : '';
  const angledBottomGeometryClass = angledBottom ? 'angled-section-bottom' : '';

  // Dynamic padding to ensure content clears the angle + 2rem buffer
  const dynamicAnglePaddingValue = 'calc(5vw + 20px + 2rem)'; // 2rem is 32px, so calc(5vw + 52px)

  const angledTopPaddingClass = angledTop ? `pt-[${dynamicAnglePaddingValue}]` : '';
  const angledBottomPaddingClass = angledBottom ? `pb-[${dynamicAnglePaddingValue}]` : '';
  
  const sectionClasses = cn(
    basePaddingClasses, // Default padding for content
    backgroundColor,
    angledTopGeometryClass, // Applies clip-path for top angle
    angledBottomGeometryClass, // Applies clip-path and margin for bottom angle
    angledTopPaddingClass, // Overrides top padding if angledTop
    angledBottomPaddingClass, // Overrides bottom padding if angledBottom
    className, // User-supplied classes, can override all previous settings
  );

  return (
    <section id={id} className={sectionClasses.trim()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {subtitle && (
              <p className={`text-base font-semibold leading-7 text-primary ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`mt-2 text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl ${titleClassName}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
