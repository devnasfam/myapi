const express = require('express');

const app = express();

const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/api/data', (req, res) => {

  res.send(jsonData);

});

app.listen(3000, () => {

  console.log('Server started on port 3000');

});
