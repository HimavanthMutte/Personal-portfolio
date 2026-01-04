import { Navbar } from '@/components/portfolio/Navbar';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { CertificatesSection } from '@/components/portfolio/CertificatesSection';
import { Footer } from '@/components/portfolio/Footer';


const Skills = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <SkillsSection />
                <CertificatesSection />
            </main>
            <Footer />
        </div>
    );
};

export default Skills;
