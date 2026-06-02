const User = require('../models/User');
const defaultUsers = require('./defaultUsers');

async function bootstrapUsers() {
  for (const user of defaultUsers) {
    await User.findOneAndUpdate(
      { userId: user.userId },
      user,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }
  console.log('Default users verified (admin + demo student).');
}

module.exports = bootstrapUsers;
