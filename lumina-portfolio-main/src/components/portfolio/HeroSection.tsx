import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAbout } from '@/hooks/usePortfolioData';

export const HeroSection = () => {
  const { data: about } = useAbout();
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const tagline = about?.tagline || 'Full-Stack Developer & AI Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= tagline.length) {
        setDisplayedText(tagline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [tagline]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen p-5 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Welcome to my portfolio
          </p>

          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent-foreground bg-clip-text text-transparent">
              {about?.name || 'Himavanth Mutte'}
            </span>
          </h1>

          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayedText}
              <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${isTypingComplete ? 'animate-pulse' : ''}`} />
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View Projects
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              asChild
              className="h-auto w-auto p-4 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="https://github.com/HimavanthMutte/" target="_blank" rel="noopener noreferrer">
                <Github className="h-24 w-24" />
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="h-auto w-auto p-4 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="https://linkedin.com/in/himavanth-mutte/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-24 w-24" />
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="h-auto w-auto p-4 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="mailto:himu.mutte5@gmail.com">
                <Mail className="h-24 w-24" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
