const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.static(__dirname + '/public'));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(PORT, () => {
  console.info(`server listening on port ${PORT}`);
});
