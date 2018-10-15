const express = require('express');
const mongoose = require('mongoose');
const secaoController = require('./controllers/secaoController');

const app = express();

// Database Config
const db = require('./config/database');

// Connect to Database
mongoose
  .connect(
    db.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected on mLab...'));

// Set template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Load TIPI Model
const Tipi = require('./models/tipi');

// Index Route
app.get('/', (req, res) => {
  Tipi.find({}, (err, tipis) => {
    if (err) throw err;
    console.log(tipis);
    res.render('index', { tipi: tipis });
  });
});

//Port listen
app.listen(3000);
