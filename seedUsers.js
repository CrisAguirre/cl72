const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const defaultUsers = require('./config/defaultUsers');

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const user of defaultUsers) {
      await User.findOneAndUpdate(
        { userId: user.userId },
        user,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
    console.log('Successfully upserted default users');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
}

seed();
