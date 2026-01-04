import 'dotenv/config';
import mongoose from 'mongoose';
import { About, Project, Experience, Skill, Education, Certificate } from './models/index.js';

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const seedData = async () => {
    try {
        await About.deleteMany({});
        await Project.deleteMany({});
        await Experience.deleteMany({});
        await Skill.deleteMany({});
        await Education.deleteMany({});
        await Certificate.deleteMany({});

        // Seed About
        await About.create({
            name: 'Himavanth Mutte',
            title: 'Full Stack Developer & UI/UX Enthusiast',
            tagline: 'Designing and building next-gen digital experiences.',
            bio: 'I am a highly motivated Full Stack Developer with a passion for creating elegant, efficient, and user-centric web applications. With expertise in the MERN stack and a keen eye for design, I bridge the gap between complex backend logic and beautiful frontend interfaces. I thrive in collaborative environments and am always eager to tackle new challenges in the ever-evolving world of technology.',
            avatar_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
            resume_url: '#'
        });

        // Seed Projects
        await Project.create([
            {
                title: 'Lumina Portfolio Engine',
                description: 'A professional-grade portfolio management system designed for developers. Features dynamic content loading from a MongoDB backend, integrated analytics, and a fully customizable theme engine with glassmorphism UI elements.',
                image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
                tech_stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
                live_url: '#',
                github_url: '#',
                display_order: 1,
                featured: true
            },
            {
                title: 'Quantum SaaS Dashboard',
                description: 'A high-performance administration dashboard for enterprise SaaS platforms. Key features include real-time data visualization using Chart.js, multi-tenant authentication, and a robust permission management system.',
                image_url: 'https://images.unsplash.com/photo-1551288049-bbbda536ad31?w=800&auto=format&fit=crop&q=60',
                tech_stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'shadcn/ui'],
                live_url: '#',
                github_url: '#',
                display_order: 2,
                featured: true
            },
            {
                title: 'EcoSphere Marketplace',
                description: 'A specialized e-commerce platform dedicated to sustainable and eco-friendly products. Implemented a custom recommendation algorithm and integrated Stripe for secure global payments.',
                image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60',
                tech_stack: ['React', 'Redux toolkit', 'Express', 'JWT', 'Stripe API'],
                live_url: '#',
                github_url: '#',
                display_order: 3,
                featured: false
            },
            {
                title: 'StreamLine Video Editor',
                description: 'A browser-based lightweight video editing tool utilizing WebAssembly for processing. Allows users to trim, merge, and apply filters directly in the browser without server-side transcoding.',
                image_url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop&q=60',
                tech_stack: ['JS', 'FFmpeg.wasm', 'WebWorkers', 'Canvas API'],
                live_url: '#',
                github_url: '#',
                display_order: 4,
                featured: false
            },
            {
                title: 'SecureGuard IDS',
                description: 'An Intelligent Intrusion Detection System that correlates network-level alerts with application-level actions. Built to demonstrate advanced security auditing techniques in modern web architectures.',
                image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
                tech_stack: ['Python', 'FastAPI', 'Redis', 'Docker', 'Logging Infrastructure'],
                live_url: '#',
                github_url: '#',
                display_order: 5,
                featured: true
            }
        ]);

        // Seed Experience
        await Experience.create([
            {
                company: 'InnovateX Global',
                role: 'Lead Full Stack Architect',
                location: 'San Francisco, CA (Remote)',
                start_date: '2023-01',
                end_date: 'Present',
                description: 'Directing the development of high-scale cloud applications. Responsibilities include system architecture design, leading a team of 10+ engineers, and implementing best practices for DevOps and CI/CD pipelines.',
                achievements: [
                    'Architected a microservices transition that improved system uptime to 99.99%',
                    'Mentored junior developers, resulting in a 30% increase in team productivity',
                    'Reduced infrastructure costs by 25% through efficient resource scaling'
                ],
                certificate_url: '#',
                display_order: 1
            },
            {
                company: 'Nexus Digital',
                role: 'Senior Software Engineer',
                location: 'Hyderabad, India',
                start_date: '2021-06',
                end_date: '2022-12',
                description: 'Developed and optimized complex business logic for Fintech solutions. Focused on high-security payment processing and real-time transaction monitoring systems.',
                achievements: [
                    'Implemented advanced encryption standards for all financial data at rest and in transit',
                    'Optimized database queries decreasing page load times by 1.2 seconds',
                    'Launched a new mobile-first banking module with 500k+ active users'
                ],
                certificate_url: '#',
                display_order: 2
            },
            {
                company: 'Creative Code Solutions',
                role: 'Web Developer',
                location: 'Bangalore, India',
                start_date: '2019-05',
                end_date: '2021-05',
                description: 'Built responsive and interactive user interfaces for various client projects ranging from startups to established enterprises.',
                achievements: [
                    'Pioneered the use of Framer Motion for advanced UI animations within the company',
                    'Standardized UI component libraries across the organization using Storybook',
                    'Delivered 15+ successful web projects on time and within budget'
                ],
                display_order: 3
            }
        ]);

        // Seed Skills
        const skillsData = [
            { name: 'HTML', icon_name: 'html' },
            { name: 'CSS', icon_name: 'css' },
            { name: 'JavaScript', icon_name: 'js' },
            { name: 'TypeScript', icon_name: 'ts' },
            { name: 'React JS', icon_name: 'react' },
            { name: 'Next JS', icon_name: 'nextjs' },
            { name: 'Node JS', icon_name: 'nodejs' },
            { name: 'Express JS', icon_name: 'express' },
            { name: 'Tailwind CSS', icon_name: 'tailwind' },
            { name: 'Bootstrap', icon_name: 'bootstrap' },
            { name: 'Shadcn UI', icon_name: 'shadcn' },
            { name: 'Material UI', icon_name: 'materialui' },
            { name: 'MySQL', icon_name: 'mysql' },
            { name: 'SQLite', icon_name: 'sqlite' },
            { name: 'MongoDB', icon_name: 'mongodb' },
            { name: 'Git', icon_name: 'git' },
            { name: 'GitHub', icon_name: 'github' },
            { name: 'Postman', icon_name: 'postman' }
        ];

        await Skill.create(skillsData.map((s, i) => ({
            ...s,
            category: 'Technical',
            proficiency: 90,
            display_order: i + 1
        })));

        // Seed Education
        await Education.create([
            {
                institution: 'Indian Institute of Technology (IIT)',
                degree: 'Master of Technology',
                field_of_study: 'Computer Science & Engineering',
                start_year: 2021,
                end_year: 2023,
                grade: '9.2 CGPA',
                display_order: 1
            },
            {
                institution: 'Jawaharlal Nehru Technological University',
                degree: 'Bachelor of Technology',
                field_of_study: 'Information Technology',
                start_year: 2017,
                end_year: 2021,
                grade: '8.8 CGPA',
                display_order: 2
            }
        ]);

        // Seed Certificates
        await Certificate.create([
            {
                title: 'Google Professional Cloud Architect',
                issuer: 'Google Cloud Training',
                date: '2023-11',
                url: '#',
                concepts: ['GCP Infrastructure', 'Kubernetes Engine', 'Cloud Storage', 'Identity Management', 'Billing Optimization'],
                display_order: 1
            },
            {
                title: 'Meta Frontend Developer Professional Certificate',
                issuer: 'Coursera / Meta',
                date: '2022-09',
                url: '#',
                concepts: ['React Advanced Hooks', 'UX Research', 'API Design', 'Version Control with Git', 'JavaScript testing'],
                display_order: 2
            },
            {
                title: 'MongoDB Certified Developer Associate',
                issuer: 'MongoDB University',
                date: '2022-03',
                url: '#',
                concepts: ['Mongoose', 'Schema Design', 'Scaling with Sharding', 'Aggregation pipelines', 'Write Concerns'],
                display_order: 3
            }
        ]);

        console.log('Database Population with Full Dummy Data Complete');
        process.exit();
    } catch (err) {
        console.error('Seeding Error:', err);
        process.exit(1);
    }
};

seedData();
