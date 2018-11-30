const { Video } = require('../models/Video.model');
const { InternationalComments } = require('../models/Comment.model');

module.exports = [
  {
    method: ['GET'],
    path: '/',
    handler: (request, reply) => reply.response('Server running'),
  },
  {
    method: ['GET'],
    path: '/api/video',
    handler: (request, reply) => Video.find({})
      .then((result) => {
        if (!result) {
          return reply.response({ statusCode: 404 });
        }
        return result;
      })
      .catch(err => reply.response({ statusCode: 400, err })),
  },
  {
    method: ['GET'],
    path: '/api/video/{id}',
    handler: (request, reply) => Video.find({ _id: request.params.id })
      .then((result) => {
        if (!result) {
          return reply.response({ statusCode: 404 });
        }
        return result;
      })
      .catch(err => reply.response({ statusCode: 400, err })),
  },
  {
    method: ['GET'],
    path: '/api/comments/{id}',
    handler: (request, reply) => InternationalComments.find({ reactionId: request.params.id })
      .then((result) => {
        if (!result) {
          return reply.response({ statusCode: 404 });
        }
        return result;
      })
      .catch(err => reply.response({ statusCode: 400, err })),
  },
];
