import { Navbar } from '@/components/portfolio/Navbar';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { Footer } from '@/components/portfolio/Footer';

const Projects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <ProjectsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
