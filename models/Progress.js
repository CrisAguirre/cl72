const mongoose = require('mongoose');

const activityProgressSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  status: {
    type: String,
    enum: ['locked', 'available', 'in-progress', 'completed'],
    default: 'locked'
  },
  completedAt: { type: Date, default: null },
  xpEarned: { type: Number, default: 0 }
});

const progressSchema = new mongoose.Schema({
  courseId: { type: String, required: true, default: 'cl7-2026' },
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  activities: { type: [activityProgressSchema], default: [] },
  totalXP: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastActivity: { type: Date, default: null },
  updatedAt: { type: Date, default: Date.now }
});

progressSchema.pre('save', function () {
  this.updatedAt = new Date();
});

module.exports = mongoose.model('Progress', progressSchema);
