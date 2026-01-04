import { Navbar } from '@/components/portfolio/Navbar';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { Footer } from '@/components/portfolio/Footer';

const Education = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <EducationSection />
            </main>
            <Footer />
        </div>
    );
};

export default Education;
