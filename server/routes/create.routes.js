const path = require('path');
const { uploadSetUpFile, generateThumbnail } = require('../helper/services.helper');
const { Video } = require('../models/Video.model');

module.exports = [
  {
    method: ['POST'],
    path: '/api/video/setup',
    config: {
      payload: {
        maxBytes: 1000 * 1000 * 50,
        output: 'stream',
      },
    },
    handler: (request, h) => uploadSetUpFile(request.payload.video, request.payload.snippet)
      .then((result, err) => {
        // attempt save metadata
        if (err) h.response({ statusCode: 400, err });
        else {
          const filePath = path.join(
            __dirname,
            '..',
            `videos/vs${request.payload.snippet}`,
            `vs${request.payload.snippet}.mp4`,
          );
          return generateThumbnail(filePath).then((success, error) => {
            if (error) return error;

            const video = Video({
              'videoSnippet.position': request.payload.snippet,
              'videoSnippet.path': result.path,
              'videoSnippet.thumbnail': success,
              date_created: new Date(),
            });

            return video
              .save()
              .then((snippet) => {
                if (!snippet) return h.response({ statusCode: 400, err });
                return h.response({ statusCode: 201, message: 'created' });
              })
              .catch(saveError => h.response({ statusCode: 400, saveError }));
          });
        }
      })
      .catch(err => h.response({ statusCode: 400, err })),
  },
];
