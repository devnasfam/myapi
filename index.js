const http = require('http');

const fs = require('fs');

const cors = require('cors');

const server = http.createServer();

server.use(cors());

server.on('request', (req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });

  fs.readFile('package.json', 'utf8', (err, data) => {

    if (err) {

      console.error(err);

      res.statusCode = 500;

      res.end('Internal Server Error');

      return;

    }

    const dataObj = JSON.parse(data);

    res.end(JSON.stringify(dataObj));

  });

});

server.listen(443);

