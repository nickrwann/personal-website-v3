interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section className="py-16 px-6 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border pt-12">
          <h2 
            className="text-3xl sm:text-4xl font-semibold font-display text-foreground mb-8"
            data-testid="text-about-heading"
          >
            About Me
          </h2>
          
          <div 
            className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4"
            data-testid="text-about-content"
          >
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
