const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const writeFile = (filePath, file) => {
  try {
    const stream = fs.createWriteStream(filePath);
    file.pipe(stream);
    return true;
  } catch (err) {
    return err;
  }
};
const uploadFile = (file) => {
  const promise = new Promise((resolve, reject) => {
    const result = writeFile(__dirname, '..', 'videos/interviews', file.hapi.filename, file);
    if (result) resolve({ statusCode: 201, message: 'file uploaded' });
    else reject(result);
    // try {
    //   const stream = fs.createWriteStream(
    //     path.join(__dirname, '..', 'videos/interviews', file.hapi.filename),
    //   );
    //   // upload video to path
    //   file.pipe(stream);
    //   resolve({ statusCode: 201, message: 'file uploaded' });
    // } catch (err) {
    //   reject(err);
    // }
  });
  return promise;
};

const uploadReactionFile = (file) => {
  const promise = new Promise((resolve, reject) => {
    try {
      const stream = fs.createWriteStream(
        path.join(__dirname, '..', 'videos/reactions', file.hapi.filename),
      );
      // upload video to path
      file.pipe(stream);
      resolve({ statusCode: 201, message: 'file uploaded' });
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

const uploadSetUpFile = (file, snippet) => {
  const promise = new Promise((resolve, reject) => {
    const videoSnippets = ['1', '2', '3', '4', '5', '6', '7', '8'];
    try {
      if (_.includes(videoSnippets, snippet)) {
        const directory = path.join(__dirname, '..', `videos/vs${snippet}`);
        let result = false;
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
          result = writeFile(
            path.join(__dirname, '..', `videos/vs${snippet}`, `vs${snippet}.mp4`),
            file,
          );
        } else {
          result = writeFile(
            path.join(__dirname, '..', `videos/vs${snippet}`, `vs${snippet}.mp4`),
            file,
          );
        }
        return result
          ? resolve({
            statusCode: 201,
            path: path.join(`vs${snippet}`, `vs${snippet}.mp4`),
          })
          : reject(result);
      }
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

module.exports = { uploadFile, uploadReactionFile, uploadSetUpFile };
