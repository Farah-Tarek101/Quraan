import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Azkar API works!' });
});

export default router;
