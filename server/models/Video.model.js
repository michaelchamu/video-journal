const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  videoSnippet: {
    position: { type: Number },
    path: { type: String },
    thumbnail: { type: String },
  },
  date_created: {
    type: Date,
    required: true,
  },
  reactions: [
    {
      reactionPath: { type: String },
      thumbnail: { type: String },
    },
  ],
});

const Video = mongoose.model('Video', VideoSchema);
module.exports = { Video };
