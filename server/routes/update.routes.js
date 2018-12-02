const { ObjectID } = require('mongodb');
const path = require('path');
const { Video } = require('../models/Video.model');
const { InternationalComments } = require('../models/Comment.model');
const {
  uploadReactionFiles,
  uploadCommentFiles,
} = require('../helper/services.helper');

module.exports = [{
  method: ['PATCH'],
  path: '/api/video/{snippet}',
  config: {
    payload: {
      maxBytes: 1000 * 1000 * 50,
      output: 'stream',
    },
  },
  handler: (request, h) => Video.find({ 'videoSnippet.position': request.params.snippet })
    .then((snippet) => {
      if (snippet.length === 0) return h.response({ statusCode: 404 });
      return uploadReactionFiles(
        request.payload.video,
        request.params.snippet,
        request.payload.reaction,
      ).then((result, err) => {
        if (err) return err;

        // else save the reaction to the array of reactions
        return Video.findByIdAndUpdate(
          // eslint-disable-next-line no-underscore-dangle
          { _id: snippet[0]._id }, {
            $push: {
              reactions: { reactionPath: result.path },
            },
          },
        )
          .then(video => (video.length === 0
                            ? h.response({ statusCode: 404 })
                            : h.response({ statusCode: 200 })))
          .catch(othererror => h.response({ statusCode: 404, othererror }));
      });
    })
    .catch(unknownerror => h.response({ statusCode: 400, unknownerror })),
},
{
  method: ['PATCH'],
  path: '/api/reaction/{reaction}',
  config: {
    payload: {
      maxBytes: 1000 * 1000 * 50,
      output: 'stream',
    },
  },
  handler: (request, h) => Video.find({ 'reactions._id': ObjectID(request.params.reaction) }).then((reaction) => {
    if (reaction.length === 0) return h.response({ statusCode: 404 });
    return uploadCommentFiles(
      request.payload.video,
      request.payload.reactionPath,
    ).then((result, error) => {
      if (error) return h.response({ statusCode: 400, error });

      const comment = new InternationalComments({
        reactionId: ObjectID(request.params.reaction),
        country: request.payload.country,
        commentPath: result.path,
        dateCreated: new Date(),
      });
      return comment
        .save()
        .then(addedComment => (comment.length === 0
                        ? h.response({ statusCode: 404, message: 'value not added' })
                        : h.response({ statusCode: 201, addedComment })));
    });
  }),
},
];
