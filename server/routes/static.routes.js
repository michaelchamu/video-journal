const Path = require('path');

module.exports = [
  {
    method: ['GET'],
    path: '/assets/base/{video*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '..', 'videos/interviews'),
      },
    },
  },
  {
    method: ['GET'],
    path: '/assets/reactions/{video*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'videos/reactions'),
      },
    },
  },
];
