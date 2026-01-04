import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { About, Project, Experience, Skill, Education, Certificate, ContactMessage } from './models/index.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.get('/api/about', async (req, res) => {
    try {
        const data = await About.findOne();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/projects', async (req, res) => {
    try {
        const data = await Project.find().sort({ display_order: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/experience', async (req, res) => {
    try {
        const data = await Experience.find().sort({ display_order: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/skills', async (req, res) => {
    try {
        const data = await Skill.find().sort({ display_order: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/education', async (req, res) => {
    try {
        const data = await Education.find().sort({ display_order: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/certificates', async (req, res) => {
    try {
        const data = await Certificate.find().sort({ display_order: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const newMessage = new ContactMessage(req.body);
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
