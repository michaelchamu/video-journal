const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const InternationalCommentsSchema = new mongoose.Schema({
  reactionId: {
    type: ObjectID,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  commentPath: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
});

const InternationalComments = mongoose.model('InternationalComments', InternationalCommentsSchema);
module.exports = { InternationalComments };
