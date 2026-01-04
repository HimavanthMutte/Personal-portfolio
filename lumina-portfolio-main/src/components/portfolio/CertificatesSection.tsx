import { Award, ExternalLink } from 'lucide-react';
import { useCertificates } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const CertificatesSection = () => {
  const { data: certificates } = useCertificates();
  const { ref, isVisible } = useScrollAnimation();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section id="certificates" className="pt-4 pb-24">
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
              Credentials & Achievements
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certificates?.map((cert, index) => (
              <div
                key={cert.id}
                className={cn(
                  'group relative bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-100 hover:shadow-primary/10',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium mt-1">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-xs text-muted-foreground mt-1">Issued {formatDate(cert.date)}</p>
                    )}
                  </div>

                  {/* Core Concepts Bullet Points */}
                  {cert.concepts && cert.concepts.length > 0 && (
                    <div className="mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Concepts</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {cert.concepts.map((concept, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto flex justify-end">
                    {cert.url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </a>
                      </Button>
                    )}
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
