import { Code2, Database, Wrench, Palette, BookOpen, ArrowUpRight } from 'lucide-react';
import { useSkills } from '@/hooks/usePortfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, any> = {
    react: Code2,
    typescript: Code2,
    nodejs: Database,
    mongodb: Database,
    tailwind: Palette,
};

const categoryColors: Record<string, string> = {
    Frontend: 'text-blue-500',
    Backend: 'text-green-500',
    Database: 'text-purple-500',
    Theory: 'text-orange-500',
    Tools: 'text-pink-500',
};

export const SkillsSection = () => {
    const { data: skills } = useSkills();
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="skills" className="relative pt-8 pb-12 overflow-hidden">
            {/* Decorative Mesh Background */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className={cn(
                        'transition-all duration-700',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    )}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16 px-4">
                        <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                            Technical Stack
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Mastery</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
                    </div>

                    {/* Integrated Skills Grid (Circular Cards, Centered Last Row) */}
                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                        {skills?.map((skill, index) => {
                            const iconName = skill.icon_name?.toLowerCase() || skill.name.toLowerCase();
                            const logoUrl = `https://skillicons.dev/icons?i=${iconName}`;

                            return (
                                <div
                                    key={skill._id}
                                    className={cn(
                                        'group relative flex flex-col items-center justify-center p-6 rounded-full bg-card border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer w-32 h-32 md:w-40 md:h-40',
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    )}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {/* Hover Background Fill */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300">
                                            <img
                                                src={logoUrl}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=random&color=fff&bold=true`;
                                                }}
                                            />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-semibold text-center group-hover:text-primary transition-colors uppercase tracking-tight">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
