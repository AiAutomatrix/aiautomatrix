import type { ReactNode } from 'react';

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
  const sectionClasses = [
    'py-12 sm:py-16 lg:py-20',
    backgroundColor,
    angledTop ? 'angled-section-top pt-20' : '', // Add padding to make content visible below angle
    angledBottom ? 'angled-section-bottom pb-20' : '', // Add padding to make content visible above angle
    className,
  ].join(' ');

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
