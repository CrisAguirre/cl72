const express = require('express');
const router = express.Router();
const Trophy = require('../models/Trophy');

// POST - Award a trophy to a user (upsert)
router.post('/', async (req, res) => {
    try {
        const { userId, username, trophyId, name, description, icon, category } = req.body;
        const trophy = await Trophy.findOneAndUpdate(
            { userId, trophyId },
            { userId, username, trophyId, name, description, icon, category },
            { upsert: true, new: true }
        );
        res.status(201).json(trophy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET - All trophies (admin)
router.get('/', async (req, res) => {
    try {
        const trophies = await Trophy.find().sort({ earnedAt: -1 });
        res.json(trophies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Trophies by user
router.get('/user/:userId', async (req, res) => {
    try {
        const trophies = await Trophy.find({ userId: req.params.userId }).sort({ earnedAt: -1 });
        res.json(trophies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Summary grouped by user
router.get('/summary', async (req, res) => {
    try {
        const summary = await Trophy.aggregate([
            { $group: { _id: '$userId', username: { $first: '$username' }, count: { $sum: 1 }, trophies: { $push: '$$ROOT' } } },
            { $project: { _id: 0, userId: '$_id', username: 1, count: 1, trophies: 1 } }
        ]);
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
