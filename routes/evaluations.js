const express = require('express');
const router = express.Router();
const EvaluationResult = require('../models/EvaluationResult');

// POST - Save evaluation result
router.post('/', async (req, res) => {
    try {
        const userId = req.body.userId;
        const username = req.body.username;
        const activityId = req.body.activityId ?? req.body.labId;
        const activityName = req.body.activityName ?? req.body.labName;
        const score = req.body.score;
        const totalQuestions = req.body.totalQuestions;
        const percentage = req.body.percentage;
        const answers = req.body.answers;

        // Count previous attempts
        const attemptCount = await EvaluationResult.countDocuments({ userId, activityId });

        const result = new EvaluationResult({
            userId,
            username,
            activityId,
            activityName,
            score,
            totalQuestions,
            percentage,
            answers,
            attemptNumber: attemptCount + 1
        });

        const savedResult = await result.save();
        res.status(201).json(savedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET - Get all results
router.get('/', async (req, res) => {
    try {
        const results = await EvaluationResult.find().sort({ createdAt: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Get results by user
router.get('/user/:userId', async (req, res) => {
    try {
        const results = await EvaluationResult.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Get results by lab
router.get('/activity/:activityId', async (req, res) => {
    try {
        const results = await EvaluationResult.find({ activityId: req.params.activityId }).sort({ createdAt: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/lab/:labId', async (req, res) => {
    try {
        const results = await EvaluationResult.find({ activityId: req.params.labId }).sort({ createdAt: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Get stats summary per lab
router.get('/stats', async (req, res) => {
    try {
        const stats = await EvaluationResult.aggregate([
            {
                $group: {
                    _id: '$activityId',
                    activityName: { $first: '$activityName' },
                    totalAttempts: { $sum: 1 },
                    avgPercentage: { $avg: '$percentage' },
                    maxPercentage: { $max: '$percentage' },
                    minPercentage: { $min: '$percentage' },
                    uniqueUsers: { $addToSet: '$userId' }
                }
            },
            {
                $project: {
                    _id: 0,
                    activityId: '$_id',
                    activityName: 1,
                    totalAttempts: 1,
                    avgPercentage: { $round: ['$avgPercentage', 1] },
                    maxPercentage: 1,
                    minPercentage: 1,
                    uniqueUsers: { $size: '$uniqueUsers' }
                }
            },
            { $sort: { activityId: 1 } }
        ]);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
