const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
const course = require('./config/courseContent');

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Course.findOneAndUpdate({ courseId: course.courseId }, course, { upsert: true, new: true });
    console.log('Course CL7 (8 unidades) seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding course:', error);
    process.exit(1);
  }
}

seed();
