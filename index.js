const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

//Body Parser
app.use(bodyParser.urlencoded());

// Load Tabela Model
const Tabela = require('./models/tabela');

// Index Route
app.get('/', (req, res) => {
  Tabela.find({}).exec((err, tabelas) => {
    if (err) {
      throw err;
    }
    res.render('index', { tabelas: tabelas });
  });
});

//Port listen
app.listen(3000);
