const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const EvaluationResult = require('../models/EvaluationResult');
const Submission = require('../models/Submission');

router.get('/overview', async (_req, res) => {
  try {
    const [progressCount, evalCount, submissionCount, avgScore] = await Promise.all([
      Progress.countDocuments(),
      EvaluationResult.countDocuments(),
      Submission.countDocuments(),
      EvaluationResult.aggregate([
        { $group: { _id: null, avg: { $avg: '$percentage' } } }
      ])
    ]);

    res.json({
      studentsWithProgress: progressCount,
      evaluationsSubmitted: evalCount,
      evidencesSubmitted: submissionCount,
      avgPercentage: avgScore[0] ? Math.round(avgScore[0].avg) : 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
