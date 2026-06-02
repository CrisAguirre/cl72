const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'docente', 'estudiante'] },
  displayName: { type: String, required: true },
  userId: { type: String, required: true, unique: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
