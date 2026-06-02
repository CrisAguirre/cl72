const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  activityId: { type: Number, required: true },
  phase: { type: String, required: true, enum: ['inicio', 'desarrollo', 'cierre'] },
  type: { type: String, required: true, enum: ['text', 'link'] },
  content: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Submission', submissionSchema);
