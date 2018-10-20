const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//Load Routes
const rotas = require('./routes/rotas');

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

// Express Layouts
app.use(expressLayouts);

// Static files
app.use(express.static('./public'));

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

//Use Routes
app.use('/secao', rotas);

//Port listen
app.listen(3000);
