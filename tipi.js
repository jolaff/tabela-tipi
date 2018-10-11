const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Esta é a TIPI');
});

app.listen(3000);
