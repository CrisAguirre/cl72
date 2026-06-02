const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { signJwt } = require('../utils/jwt');
const { requireAuth, requireAdmin } = require('../middleware/auth');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    
    if (user) {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        return res.status(500).json({ message: 'JWT_SECRET no configurado en el servidor' });
      }

      const token = signJwt(
        { userId: user.userId, username: user.username, role: user.role, displayName: user.displayName },
        secret
      );

      res.json({
        username: user.username,
        role: user.role,
        userId: user.userId,
        displayName: user.displayName,
        token
      });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
});

router.get('/users', requireAuth, requireAdmin, async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }).sort({ role: 1, displayName: 1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error consultando usuarios', error: error.message });
  }
});

router.get('/me', requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
