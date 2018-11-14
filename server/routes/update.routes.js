const { Video } = require('../models/Video.model');
const { uploadReactionFile } = require('../helper/services.helper');

module.exports = [{
  method: ['PATCH'],
  path: '/api/video/{id}',
  config: {
    payload: {
      maxBytes: 1000 * 1000 * 50,
      output: 'stream',
    },
  },
  handler: (request, h) => uploadReactionFile(request.payload.video).then((result, err) => {
    if (err) {
      h.response({ statusCode: 400, err });
    } else {
      return Video.findOneAndUpdate({ _id: request.params.id }, {
        $push: {
          reactions: {
            reaction_path: request.payload.video.hapi.filename,
            'location.type': 'Point',
            'location.coordinates': [request.payload.longitude, request.payload.latitude],
            date_created: new Date(),
          },
        },
      }).then((video) => {
        if (!video) { return h.response({ statusCode: 404 }); }
        return h.response({ statusCode: 201, video });
      }).catch(err => h.response({ statusCode: 400, err }));
    }
  }),
}];
