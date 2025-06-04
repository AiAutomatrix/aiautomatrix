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

  // Padding classes specifically for compensating the angle
  // These will override the respective sides of basePaddingClasses if an angle is present.
  // pt-40/pb-40 provides 10rem (160px) padding, which should cover 5vw + 20px angle height on most screens.
  const angledTopPaddingClass = angledTop ? 'pt-40' : '';
  const angledBottomPaddingClass = angledBottom ? 'pb-40' : '';
  
  const sectionClasses = cn(
    basePaddingClasses, // Default padding for content
    backgroundColor,
    angledTopGeometryClass, // Applies clip-path and margin for top angle
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
