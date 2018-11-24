const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  video_path: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    required: true,
  },
  reactions: [
    {
      local_reaction: {
        type: String,
      },
      internation_reactions: [
        {
          country: {
            type: String,
          },
          date_created: {
            type: Date,
            required: true,
          },
          video_link: {
            type: Date,
            required: true,
          },
        },
      ],
    },
  ],
});

const Video = mongoose.model('Video', VideoSchema);
module.exports = { Video };
