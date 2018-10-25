const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Tabela Model
require('../models/tabela');
const Tabela = mongoose.model('tabela');

// Index Route
router
  .route('/')
  .get((req, res) => {
    Tabela.find({})
      .sort({ num: 1 })
      .exec((err, tabelas) => {
        if (err) {
          throw err;
        }
        res.render('index', { tabelas: tabelas });
      });
  })

  // Busca POST Route
  .post((req, res) => {
    Tabela.find({ $text: { $search: req.body.buscaNCM } }).exec(
      (err, resultado) => {
        res.send(resultado);
      }
    );
  });

// Seção Page Route
router.get('/secao/:num', (req, res) => {
  Tabela.findOne({ num: req.params.num }).exec((err, secao) => {
    if (err) {
      throw err;
    }
    res.render('secao', { secao: secao });
  });
});

// Capitulo Page Route
router.get('/secao/:num/capitulo/:cap', (req, res) => {
  Tabela.findOne({ num: req.params.num }, (err, tabelas) => {
    for (i in tabelas.capitulo) {
      let cap = tabelas.capitulo[i];
      if (cap.num == req.params.cap) {
        res.render('capitulo', { cap: cap, tabelas: tabelas });
      }
    }
  });
});

module.exports = router;
