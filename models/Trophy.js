const mongoose = require('mongoose');

const trophySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    trophyId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    category: { type: String, enum: ['mision', 'evaluacion', 'progreso'], default: 'mision' },
    earnedAt: { type: Date, default: Date.now }
});

// Unique per user per trophy
trophySchema.index({ userId: 1, trophyId: 1 }, { unique: true });

module.exports = mongoose.model('Trophy', trophySchema);
