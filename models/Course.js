const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false });

const quizQuestionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  prompt: { type: String, required: true },
  options: { type: [String], required: true },
  correctOptionIndex: { type: Number, required: true }
}, { _id: false });

const activitySchema = new mongoose.Schema({
  activityId: { type: Number, required: true },
  unit: { type: String, required: true, enum: ['semantico', 'sintactico', 'pragmatico'] },
  title: { type: String, required: true },
  objective: { type: String, required: true },
  startInstructions: { type: String, required: true },
  developmentInstructions: { type: String, required: true },
  closureInstructions: { type: String, required: true },
  resources: { type: [resourceSchema], default: [] },
  quizQuestions: { type: [quizQuestionSchema], default: [] }
}, { _id: false });

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  grade: { type: String, default: '7' },
  durationWeeks: { type: Number, default: 4 },
  passPercentage: { type: Number, default: 70 },
  activities: { type: [activitySchema], default: [] }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
