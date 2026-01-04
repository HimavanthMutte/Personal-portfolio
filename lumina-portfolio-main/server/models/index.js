import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    name: String,
    title: String,
    tagline: String,
    bio: String,
    avatar_url: String,
    resume_url: String
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image_url: String,
    tech_stack: [String],
    live_url: String,
    github_url: String,
    display_order: Number,
    featured: Boolean
});

const ExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    location: String,
    start_date: String,
    end_date: String,
    description: String,
    achievements: [String],
    certificate_url: String,
    display_order: Number
});

const SkillSchema = new mongoose.Schema({
    name: String,
    category: String,
    proficiency: Number,
    icon_name: String,
    source: String,
    key_topics: [String],
    isCertificatePresent: Boolean,
    certificate_url: String,
    display_order: Number
});

const EducationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    field_of_study: String,
    start_year: Number,
    end_year: Number,
    grade: String,
    display_order: Number
});

const CertificateSchema = new mongoose.Schema({
    title: String,
    issuer: String,
    date: String,
    url: String,
    concepts: [String],
    display_order: Number
});

const ContactMessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    created_at: { type: Date, default: Date.now }
});

export const About = mongoose.model('About', AboutSchema);
export const Project = mongoose.model('Project', ProjectSchema);
export const Experience = mongoose.model('Experience', ExperienceSchema);
export const Skill = mongoose.model('Skill', SkillSchema);
export const Education = mongoose.model('Education', EducationSchema);
export const Certificate = mongoose.model('Certificate', CertificateSchema);
export const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);
