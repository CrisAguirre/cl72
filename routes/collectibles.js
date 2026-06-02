const express = require('express');
const router = express.Router();
const Collectible = require('../models/Collectible');

// POST - Unlock a collectible (upsert)
router.post('/', async (req, res) => {
    try {
        const { userId, username, collectibleId, name, description, icon, rarity } = req.body;
        const col = await Collectible.findOneAndUpdate(
            { userId, collectibleId },
            { userId, username, collectibleId, name, description, icon, rarity },
            { upsert: true, new: true }
        );
        res.status(201).json(col);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET - All collectibles (admin)
router.get('/', async (req, res) => {
    try {
        const cols = await Collectible.find().sort({ earnedAt: -1 });
        res.json(cols);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Collectibles by user
router.get('/user/:userId', async (req, res) => {
    try {
        const cols = await Collectible.find({ userId: req.params.userId }).sort({ earnedAt: -1 });
        res.json(cols);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Summary grouped by user
router.get('/summary', async (req, res) => {
    try {
        const summary = await Collectible.aggregate([
            { $group: { _id: '$userId', username: { $first: '$username' }, count: { $sum: 1 }, collectibles: { $push: '$$ROOT' } } },
            { $project: { _id: 0, userId: '$_id', username: 1, count: 1, collectibles: 1 } }
        ]);
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
