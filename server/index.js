const express = require('express');
const path = require('path');
const app = express()

const port = process.env.PORT || 3000;

app.use('/dist', express.static('dist'));

app.get('/api/articles', (req, res) => {
  res.send(['foo']);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../index.html`));
});

app.listen(port, () => {
  console.log(`Medium app is listening on ${port}`);
})
