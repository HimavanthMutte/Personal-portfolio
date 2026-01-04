import { Navbar } from '@/components/portfolio/Navbar';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { Footer } from '@/components/portfolio/Footer';

const Experience = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <ExperienceSection />
            </main>
            <Footer />
        </div>
    );
};

export default Experience;
