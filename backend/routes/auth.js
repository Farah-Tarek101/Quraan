import express from 'express';
import { registerUser, loginUser, markAyah, getMarkedAyahs } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/markAyah', protect, markAyah);
router.get('/markedAyahs', protect, getMarkedAyahs);

export default router;
