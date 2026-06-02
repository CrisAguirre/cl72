const mongoose = require('mongoose');

const evaluationResultSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        default: 'cl7-2026'
    },
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    activityId: {
        type: Number,
        required: true
    },
    activityName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    answers: {
        type: Object,
        required: true
    },
    attemptNumber: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('EvaluationResult', evaluationResultSchema);
