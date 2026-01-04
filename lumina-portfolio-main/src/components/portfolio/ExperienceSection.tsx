import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useExperience } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


export const ExperienceSection = () => {
  const { data: experience } = useExperience();
  const { ref, isVisible } = useScrollAnimation();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section id="experience" className="pt-8 pb-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
              My Professional Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          {/* Experience Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experience?.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'group relative bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Date in top-right */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 text-sm text-muted-foreground flex items-center gap-1 font-medium bg-background/50 px-3 py-1 rounded-full border border-border/50">
                  <Calendar className="h-4 w-4 text-primary" />
                  {formatDate(item.start_date)} - {item.end_date ? formatDate(item.end_date) : 'Present'}
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4 pr-32"> {/* Avoid overlap with date */}
                      <h3 className="text-xl font-semibold transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-primary font-medium">{item.company}</p>

                      {item.location && (
                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    )}

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* View Certificate Button in bottom-right */}
                {item.certificate_url && (
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={item.certificate_url} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
