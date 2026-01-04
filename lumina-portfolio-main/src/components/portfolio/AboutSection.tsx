import { useRef } from 'react';
import { User, Target, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAbout } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export const AboutSection = () => {
  const { data: about } = useAbout();
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    { icon: User, title: 'Who I Am', description: 'A passionate developer who loves creating elegant solutions' },
    { icon: Code, title: 'What I Do', description: 'Building modern, scalable web applications with cutting-edge tech' },
    { icon: Target, title: 'My Goals', description: 'To create impactful products that solve real-world problems' },
  ];

  return (
    <section id="about" className="pt-8 pb-24 bg-card/50">
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
              Get to know me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {about?.bio || 'I\'m a passionate full-stack developer with years of experience building modern web applications. I specialize in creating elegant solutions that make a real impact.'}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or mentoring aspiring developers.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className={cn(
                    'bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1',
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
