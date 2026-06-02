const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

const TOTAL_ACTIVITIES = 8;
const XP_PER_ACTIVITY = 100;

function buildDefaultActivities() {
  return Array.from({ length: TOTAL_ACTIVITIES }, (_, i) => ({
    id: i + 1,
    status: i === 0 ? 'available' : 'locked',
    completedAt: null,
    xpEarned: 0
  }));
}

function toLegacyShape(progressDoc) {
  const plain = progressDoc.toObject ? progressDoc.toObject() : progressDoc;
  return {
    ...plain,
    labs: plain.activities
  };
}

async function getOrCreateProgress(userId, username) {
  let progress = await Progress.findOne({ userId });
  if (!progress) {
    progress = await Progress.create({
      userId,
      username,
      activities: buildDefaultActivities()
    });
  }
  return progress;
}

router.get('/:userId', async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.userId });
    if (!progress) {
      return res.json({
        userId: req.params.userId,
        username: '',
        activities: buildDefaultActivities(),
        labs: buildDefaultActivities(),
        totalXP: 0,
        level: 1,
        isNew: true
      });
    }
    res.json(toLegacyShape(progress));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/:userId/start/:activityId', async (req, res) => {
  try {
    const activityId = Number(req.params.activityId);
    const progress = await getOrCreateProgress(req.params.userId, req.body.username || 'Estudiante');
    const item = progress.activities.find((a) => a.id === activityId);

    if (!item) return res.status(404).json({ message: 'Actividad no encontrada' });
    if (item.status === 'available') {
      item.status = 'in-progress';
      progress.lastActivity = new Date();
      await progress.save();
    }
    res.json(toLegacyShape(progress));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:userId/complete/:activityId', async (req, res) => {
  try {
    const activityId = Number(req.params.activityId);
    const progress = await getOrCreateProgress(req.params.userId, req.body.username || 'Estudiante');
    const item = progress.activities.find((a) => a.id === activityId);

    if (!item) return res.status(404).json({ message: 'Actividad no encontrada' });

    if (item.status !== 'completed') {
      item.status = 'completed';
      item.completedAt = new Date();
      const percentage = typeof req.body.percentage === 'number' ? req.body.percentage : 100;
      item.xpEarned = Math.round((percentage / 100) * XP_PER_ACTIVITY);
    }

    const next = progress.activities.find((a) => a.id === activityId + 1);
    if (next && next.status === 'locked') next.status = 'available';

    progress.totalXP = progress.activities.reduce((acc, curr) => acc + curr.xpEarned, 0);
    progress.level = Math.max(1, Math.floor(progress.totalXP / 200) + 1);
    progress.lastActivity = new Date();
    await progress.save();

    res.json(toLegacyShape(progress));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const activities = req.body.activities || req.body.labs || buildDefaultActivities();
    const payload = {
      userId: req.params.userId,
      username: req.body.username || 'Estudiante',
      activities,
      totalXP: req.body.totalXP || 0,
      level: req.body.level || 1,
      lastActivity: req.body.lastActivity ? new Date(req.body.lastActivity) : new Date(),
      updatedAt: new Date()
    };
    const saved = await Progress.findOneAndUpdate({ userId: req.params.userId }, payload, { upsert: true, new: true });
    res.json(toLegacyShape(saved));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    await Progress.findOneAndDelete({ userId: req.params.userId });
    res.json({ message: 'Progreso eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (_req, res) => {
  try {
    const all = await Progress.find().sort({ updatedAt: -1 });
    res.json(all.map((item) => toLegacyShape(item)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
