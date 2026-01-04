import { ExternalLink, Github } from 'lucide-react';
import { useProjects } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const { data: projects } = useProjects();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="pt-8 pb-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          {/* Projects List - Full Width Cards */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {projects?.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  'group relative bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col md:flex-row h-auto md:h-80',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-48 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent md:bg-gradient-to-r" />
                  {project.image_url && (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-overlay transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-12">
                    {project.tech_stack?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/5 text-primary border-primary/10 text-[11px] px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Show Project Button in Bottom Right */}
                  <div className="absolute bottom-6 right-6">
                    <Button
                      onClick={() => window.location.href = `/projects/${project.id}`}
                      className="rounded-full px-6 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                    >
                      Show Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
