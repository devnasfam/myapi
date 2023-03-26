const express = require('express');

const fs = require('fs');

const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {

  fs.readFile('api.json', 'utf8', (err, data) => {

    if (err) {

      console.error(err);

      res.status(500).send('Internal Server Error');

      return;

    }

    const dataObj = JSON.parse(data);

    res.end("Hello");

  });

});

const server = app.listen(3000, () => {

  console.log(`Server listening on port ${server.address().port}`);

});



