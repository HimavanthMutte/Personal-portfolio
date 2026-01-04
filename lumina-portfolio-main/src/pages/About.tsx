import { Navbar } from '@/components/portfolio/Navbar';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { Footer } from '@/components/portfolio/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
