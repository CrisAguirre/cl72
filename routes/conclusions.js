const express = require('express');
const router = express.Router();
const Conclusion = require('../models/Conclusion');

// POST - Save a conclusion
router.post('/', async (req, res) => {
    try {
        const { userId, username, labId, labName, conclusionText, scannedModels } = req.body;

        const conclusion = new Conclusion({
            userId,
            username,
            labId: labId || 5,
            labName: labName || 'RA Propia - Generador 3D',
            conclusionText,
            scannedModels: scannedModels || []
        });

        const saved = await conclusion.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET - Get all conclusions
router.get('/', async (req, res) => {
    try {
        const conclusions = await Conclusion.find().sort({ createdAt: -1 });
        res.json(conclusions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Get conclusions by user
router.get('/user/:userId', async (req, res) => {
    try {
        const conclusions = await Conclusion.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(conclusions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
