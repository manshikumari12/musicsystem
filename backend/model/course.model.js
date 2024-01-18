const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

  Title: String,
  Instructor: String,
  Length: String,
  Description: String,
  CoverImage: String,
  
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = {CourseModel};
