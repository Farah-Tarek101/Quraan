import 'dotenv/config'; // Correct way to load dotenv in ES modules
// Temporary comment to trigger new Vercel deployment
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import quranRoutes from './routes/quran.js';
import prayerRoutes from './routes/prayer.js';
import azkarRoutes from './routes/azkar.js';
import hadithRoutes from './routes/hadith.js';
import authRoutes from './routes/auth.js'; // Import auth routes

console.log('Vercel Environment Check:');
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('VITE_API_BASE_URL:', process.env.VITE_API_BASE_URL);
console.log('MONGO_URI (first 10 chars):', process.env.MONGO_URI ? process.env.MONGO_URI.substring(0, 10) : 'Not Set');
console.log('JWT_SECRET (present):', !!process.env.JWT_SECRET);

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
// Ensure process.env.FRONTEND_URL is correctly set on Vercel (e.g., to https://quraan-kappa.vercel.app)
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/quran', quranRoutes);
app.use('/prayer', prayerRoutes);
app.use('/azkar', azkarRoutes);
app.use('/hadith', hadithRoutes);
app.use('/auth', authRoutes); // Use auth routes

// Add a simple root route for testing
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Remove the app.listen() call for Vercel deployment
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app; // Export the Express app for Vercel
