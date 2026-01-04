import { useParams, Link } from 'react-router-dom';
import { useProjects } from '@/hooks/usePortfolioData';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/portfolio/Navbar';
import { Footer } from '@/components/portfolio/Footer';

const ProjectDetails = () => {
    const { id } = useParams();
    const { data: projects } = useProjects();
    const project = projects?.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Project not found</p>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
                        <Link to="/projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                    </Button>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            {project.github_url && (
                                <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-primary/10 transition-all" asChild>
                                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-5 w-5" />
                                        View Code
                                    </a>
                                </Button>
                            )}
                            {project.live_url && (
                                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-all" asChild>
                                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-5 w-5" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden mb-12 border border-border/50 shadow-2xl relative group">
                        {project.image_url ? (
                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                <Tag size={120} />
                            </div>
                        )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-primary rounded-full" />
                                    About the Project
                                </h2>
                                <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                                    {project.description}
                                    {/* Ideally we'd have a long_description field, for now we repeat or expect long description here */}
                                    <p>
                                        This project was developed with a focus on performance, scalability, and user experience.
                                        The architecture follows industry best practices, ensuring clean code and maintainability.
                                    </p>
                                </div>
                            </section>

                            {project.tech_stack && (
                                <section>
                                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                        <div className="w-2 h-8 bg-primary rounded-full" />
                                        Technologies Used
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech_stack.map((tech) => (
                                            <Badge key={tech} className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg">
                                <h3 className="font-semibold mb-4">Project Details</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <Calendar size={14} className="text-primary" />
                                            Status
                                        </span>
                                        <span className="font-medium">Completed</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <Tag size={14} className="text-primary" />
                                            Category
                                        </span>
                                        <span className="font-medium">Web Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
