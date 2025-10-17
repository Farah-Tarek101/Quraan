import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark/Unmark an Ayah as read
// @route   PUT /api/auth/markAyah
// @access  Private
const markAyah = async (req, res) => {
  const { surahNumber, ayahNumber } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      const isMarked = user.markedAyahs.some(
        (ayah) => ayah.surahNumber === surahNumber && ayah.ayahNumber === ayahNumber
      );

      if (isMarked) {
        // Unmark the Ayah
        user.markedAyahs = user.markedAyahs.filter(
          (ayah) => !(ayah.surahNumber === surahNumber && ayah.ayahNumber === ayahNumber)
        );
        await user.save();
        res.json({ message: 'Ayah unmarked', markedAyahs: user.markedAyahs });
      } else {
        // Mark the Ayah
        user.markedAyahs.push({ surahNumber, ayahNumber });
        await user.save();
        res.status(200).json({ message: 'Ayah marked', markedAyahs: user.markedAyahs });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all marked Ayahs for the logged-in user
// @route   GET /api/auth/markedAyahs
// @access  Private
const getMarkedAyahs = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json(user.markedAyahs);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { registerUser, loginUser, markAyah, getMarkedAyahs };
