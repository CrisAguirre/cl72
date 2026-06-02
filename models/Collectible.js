const mongoose = require('mongoose');

const collectibleSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    collectibleId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    rarity: { type: String, enum: ['comun', 'raro', 'epico', 'legendario'], default: 'comun' },
    earnedAt: { type: Date, default: Date.now }
});

collectibleSchema.index({ userId: 1, collectibleId: 1 }, { unique: true });

module.exports = mongoose.model('Collectible', collectibleSchema);
