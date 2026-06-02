const mongoose = require('mongoose');

const conclusionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    labId: {
        type: Number,
        required: true,
        default: 5
    },
    labName: {
        type: String,
        required: true,
        default: 'RA Propia - Generador 3D'
    },
    conclusionText: {
        type: String,
        required: true
    },
    scannedModels: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Conclusion', conclusionSchema);
