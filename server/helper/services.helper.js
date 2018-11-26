const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fx = require('mkdir-recursive');

const writeFile = (filePath, file) => {
  try {
    const stream = fs.createWriteStream(filePath);
    file.pipe(stream);
    return true;
  } catch (err) {
    return err;
  }
};

// check and create folders returning the newly created folder path
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

const uploadReactionFiles = (file, snippet, reaction) => {
  console.log('here');
  const promise = new Promise((resolve, reject) => {
    // count number of files in direcor
    const directory = path.join(__dirname, '..', `videos/vs${snippet}/reactions/r${reaction}`);
    if (!fs.existsSync(directory)) {
      fx.mkdir(path.join(__dirname, '..', `videos/vs${snippet}/reactions/r${reaction}`), (err) => {
        if (err) {
          reject(err);
        } else {
          // eslint-disable-next-line no-shadow
          fs.readdir(directory, (err, contents) => {
            if (err) reject(err);
            else {
              const result = writeFile(
                path.join(
                  __dirname,
                  '..',
                  `videos/vs${snippet}/reactions/r${reaction}`,
                  `r${contents.length + 1}.mp4`,
                ),
                file,
              );
              return result
                ? resolve({
                  statusCode: 201,
                  path: path.join(
                    `vs${snippet}/reactions/r${reaction}`,
                    `r${contents.length + 1}.mp4`,
                  ),
                })
                : reject(result);
            }
          });
        }
      });
    } else {
      fs.readdir(directory, (err, contents) => {
        if (err) reject(err);
        else {
          const result = writeFile(
            path.join(
              __dirname,
              '..',
              `videos/vs${snippet}/reactions/r${reaction}`,
              `r${contents.length + 1}.mp4`,
            ),
            file,
          );
          return result
            ? resolve({
              statusCode: 201,
              path: path.join(
                `vs${snippet}/reactions/r${reaction}`,
                `r${contents.length + 1}.mp4`,
              ),
            })
            : reject(result);
        }
      });
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
      reject(new Error('entered incorrect video snippet range'));
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

module.exports = { uploadFile, uploadReactionFiles, uploadSetUpFile };
