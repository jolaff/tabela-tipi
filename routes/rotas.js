const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Tabela Model
require('../models/tabela');
const Tabela = mongoose.model('tabela');

// Seção Page Route
router.get('/:num', (req, res) => {
  Tabela.findOne({ num: req.params.num }).exec((err, secao) => {
    if (err) {
      throw err;
    }
    res.render('secao', { secao: secao });
  });
});

// Capitulo Page Route
router.get('/:num/capitulo/:cap', (req, res) => {
  Tabela.findOne({ num: req.params.num }, (err, tabelas) => {
    for (i in tabelas.capitulo) {
      let cap = tabelas.capitulo[i];
      if (cap.num == req.params.cap) {
        res.render('capitulo', { cap: cap, tabelas: tabelas });
      };
    };
  });
});

module.exports = router;
