type PageTitleProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageTitle({ title, description, className }: PageTitleProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
