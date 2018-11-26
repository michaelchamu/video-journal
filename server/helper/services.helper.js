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
const uploadCommentFiles = (file, snippet, reaction) => {
  const promise = new Promise((resolve, reject) => {
    const directory = path.join(__dirname, '..', `videos/vs${snippet}/reactions/r${reaction}`);
    // check if reaction exists
    if (fs.existsSync(directory)) {
      // check if comments directory exists
      const comments = path.join(
        __dirname,
        '..',
        `videos/vs${snippet}/reactions/r${reaction}/comments`,
      );
      if (fs.existsSync(comments)) {
        fs.readdir(comments, (err, contents) => {
          if (err) reject(err);
          else {
            const result = writeFile(
              path.join(
                __dirname,
                '..',
                `videos/vs${snippet}/reactions/r${reaction}/comments`,
                `c${contents.length + 1}.mp4`,
              ),
              file,
            );
            return result
              ? resolve({
                statusCode: 201,
                path: path.join(
                  `vs${snippet}/reactions/r${reaction}/comments`,
                  `c${contents.length + 1}.mp4`,
                ),
              })
              : reject(result);
          }
        });
      } else {
        fx.mkdir(comments, (err) => {
          if (err) reject(err);
          else {
            fs.readdir(comments, (err, contents) => {
              if (err) reject(err);
              else {
                const result = writeFile(
                  path.join(
                    __dirname,
                    '..',
                    `videos/vs${snippet}/reactions/r${reaction}/comments`,
                    `c${contents.length + 1}.mp4`,
                  ),
                  file,
                );
                return result
                  ? resolve({
                    statusCode: 201,
                    path: path.join(
                      `vs${snippet}/reactions/r${reaction}/comments`,
                      `c${contents.length + 1}.mp4`,
                    ),
                  })
                  : reject(result);
              }
            });
          }
        });
      }
    } else {
      reject(new Error('reaction comment cannot exist without reaction'));
    }
  });
  return promise;
};

const uploadReactionFiles = (file, snippet, reaction) => {
  const promise = new Promise((resolve, reject) => {
    // count number of files in direcor
    const directory = path.join(__dirname, '..', `videos/vs${snippet}/reactions/r${reaction}`);
    if (!fs.existsSync(directory)) {
      fx.mkdir(path.join(__dirname, '..', `videos/vs${snippet}/reactions/r${reaction}`), (err) => {
        if (err) {
          reject(err);
        } else {
          const result = writeFile(
            path.join(
              __dirname,
              '..',
              `videos/vs${snippet}/reactions/r${reaction}`,
              `r${reaction}.mp4`,
            ),
            file,
          );
          return result
            ? resolve({
              statusCode: 201,
              path: path.join(`vs${snippet}/reactions/r${reaction}`, `r${reaction}.mp4`),
            })
            : reject(result);
        }
      });
    } else {
      const result = writeFile(
        path.join(
          __dirname,
          '..',
          `videos/vs${snippet}/reactions/r${reaction}`,
          `r${reaction}.mp4`,
        ),
        file,
      );
      return result
        ? resolve({
          statusCode: 201,
          path: path.join(`vs${snippet}/reactions/r${reaction}`, `r${reaction}.mp4`),
        })
        : reject(result);
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

module.exports = { uploadCommentFiles, uploadReactionFiles, uploadSetUpFile };
