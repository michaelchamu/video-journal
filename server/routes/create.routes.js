const { uploadFile } = require('../helper/services.helper');
const { Video } = require('../models/Video.model');

module.exports = [{
  method: ['POST'],
  path: '/api/video',
  config: {
    payload: {
      maxBytes: 1000 * 1000 * 50,
      output: 'stream',
    },
  },
  handler: (request, h) => uploadFile(request.payload.video).then((result, err) => {
    if (err) {
      h.response({ statusCode: 400, err });
    }
    // get video, longitude, latitude
    const video = new Video({
      video_path: request.payload.video.hapi.filename,
      'location.type': 'Point',
      'location.coordinates': [request.payload.longitude, request.payload.latitude],
      date_created: new Date(),
    });
    return video.save().then(() => {
      if (err) return h.response({ statusCode: 400, err });
      return h.response({ statusCode: 201, message: 'created' });
    }).catch(err => h.response({ statusCode: 400, err }));
  }),
}];
