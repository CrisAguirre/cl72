const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/current', async (_req, res) => {
  try {
    const course = await Course.findOne({ courseId: 'cl7-2026' });
    if (!course) return res.status(404).json({ message: 'Curso no inicializado' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
