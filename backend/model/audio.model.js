const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
      },
      Title: String,
      Author: String,
      Narrator: String,
      Length: String,
      Categories: [String],
      Summary: String,
      CoverImage: String,
     
});

const AudiobookModel = mongoose.model('Audiobook', audiobookSchema);

module.exports = {AudiobookModel};
