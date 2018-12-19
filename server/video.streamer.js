const express = require('express');
const fs = require('fs');
const Path = require('path');

const app = express();

app.use(express.static(Path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Running');
});

app.get('/api/service', (req, res) => {
  let status;
  const vs = req.query.vsFolder && req.query.vsFile
    ? `${req.query.vsFolder}/${req.query.vsFile}`
    : (status = false);
  const reaction = req.query.reactionFile
    ? `/reactions/${req.query.reactionFolder}/${req.query.reactionFile}`
    : '';
  const comments = req.query.commentsFile
    ? `reactions/${req.query.reactionFolder}/comments/${req.query.commentsFile}`
    : '';
  if (status === false) {
    res.status(404).send('video snippet required');
  } else {
    const specificFile = `${vs}${reaction}${comments}`;
    const path = Path.join(__dirname, '..', `server/videos/${specificFile}`);
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    console.log(range);
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(path, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
    }
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
