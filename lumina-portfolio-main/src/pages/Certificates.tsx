import { Navbar } from '@/components/portfolio/Navbar';
import { CertificatesSection } from '@/components/portfolio/CertificatesSection';
import { Footer } from '@/components/portfolio/Footer';

const Certificates = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Navbar />
            <main className="pt-16">
                <CertificatesSection />
            </main>
            <Footer />
        </div>
    );
};

export default Certificates;
