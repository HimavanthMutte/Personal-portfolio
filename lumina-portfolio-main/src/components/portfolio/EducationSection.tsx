import { GraduationCap } from 'lucide-react';
import { useEducation } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export const EducationSection = () => {
  const { data: education } = useEducation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="pt-8 pb-24">
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
              My Academic Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-foreground to-muted" />

            {education?.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'relative pl-20 pb-12 last:pb-0 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />

                {/* Content Card */}
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.institution}</h3>
                        <p className="text-primary font-medium">{item.degree}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {item.start_year} - {item.end_year || 'Present'}
                    </span>
                  </div>

                  {item.field_of_study && (
                    <p className="text-muted-foreground mb-2">{item.field_of_study}</p>
                  )}

                  {item.grade && (
                    <div className="mt-2 inline-flex">
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-md">
                        Grade: {item.grade}
                      </span>
                    </div>
                  )}

                  {item.percentage && (
                    <div className="mt-2 inline-flex">
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-md">
                        Percentage: {item.percentage}
                      </span>
                    </div>
                  )}

                  {item.description && (
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
