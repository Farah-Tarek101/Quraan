import 'dotenv/config'; // Correct way to load dotenv in ES modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import quranRoutes from './routes/quran.js';
import prayerRoutes from './routes/prayer.js';
import azkarRoutes from './routes/azkar.js';
import hadithRoutes from './routes/hadith.js';
import authRoutes from './routes/auth.js'; // Import auth routes

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/quran', quranRoutes);
app.use('/api/prayer', prayerRoutes);
app.use('/api/azkar', azkarRoutes);
app.use('/api/hadith', hadithRoutes);
app.use('/api/auth', authRoutes); // Use auth routes

// Remove the app.listen() call for Vercel deployment
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app; // Export the Express app for Vercel
