const fs = require('fs');
const path = require('path');

const uploadFile = (file) => {
  const promise = new Promise((resolve, reject) => {
    try {
      const stream = fs.createWriteStream(path.join(__dirname, '..', 'videos/interviews', file.hapi.filename));
      // upload video to path
      file.pipe(stream);
      resolve({ statusCode: 201, message: 'file uploaded' });
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

const uploadReactionFile = (file) => {
  console.log('hit');
  const promise = new Promise((resolve, reject) => {
    try {
      const stream = fs.createWriteStream(path.join(__dirname, '..', 'videos/reactions', file.hapi.filename));
      // upload video to path
      file.pipe(stream);
      resolve({ statusCode: 201, message: 'file uploaded' });
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};
module.exports = { uploadFile, uploadReactionFile };
