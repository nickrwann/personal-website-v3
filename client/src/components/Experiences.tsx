interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperiencesProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section className="py-16 px-6 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border pt-12">
          <h2 
            className="text-3xl sm:text-4xl font-semibold font-display text-foreground mb-12"
            data-testid="text-experiences-heading"
          >
            Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="relative"
                data-testid={`card-experience-${experience.id}`}
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-12 bottom-0 w-px bg-border hidden sm:block" />
                )}
                
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary hidden sm:block" />
                  
                  <div className="space-y-2">
                    <h3 
                      className="text-xl sm:text-2xl font-semibold text-foreground"
                      data-testid={`text-role-${experience.id}`}
                    >
                      {experience.role}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <p 
                        className="text-base sm:text-lg font-medium text-foreground"
                        data-testid={`text-company-${experience.id}`}
                      >
                        {experience.company}
                      </p>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <p 
                        className="text-sm sm:text-base text-muted-foreground"
                        data-testid={`text-period-${experience.id}`}
                      >
                        {experience.period}
                      </p>
                    </div>
                    
                    <p 
                      className="text-base text-muted-foreground leading-relaxed pt-2"
                      data-testid={`text-description-${experience.id}`}
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
