import { Navbar } from '@/components/portfolio/Navbar';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main>
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
