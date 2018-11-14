const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  video_path: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  date_created: {
    type: Date,
    required: true,
  },
  reactions: [{
    reaction_path: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    date_created: {
      type: Date,
      required: true,
    },
  }],
});

const Video = mongoose.model('Video', VideoSchema);
module.exports = { Video };
