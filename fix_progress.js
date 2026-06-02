const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const Progress = require('./models/Progress');

mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 15000 })
  .then(async () => {
    try {
      const user = await User.findOne({ username: 'Docente' });
      if (!user) {
        console.log('User not found');
      } else {
        console.log('User ID:', user.userId);
        const result = await Progress.updateOne(
          { userId: user.userId },
          { 
            $set: { 
              username: user.username,
              labs: [
                { id: 1, status: 'completed' },
                { id: 2, status: 'completed' },
                { id: 3, status: 'available' }
              ]
            }
          },
          { upsert: true }
        );
        console.log('Update result:', result);
      }
    } catch (e) {
      console.error('Error updating:', e);
    }
    process.exit(0);
  });
