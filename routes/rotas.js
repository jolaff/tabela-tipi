const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Tabela Model
require('../models/tabela');
const Tabela = mongoose.model('tabela');

// Seção Page Route
router.get('/:num', (req, res) => {
  Tabela.findOne({ num: req.params.num }).exec((err, tabelas) => {
    if (err) {
      throw err;
    }
    res.render('secao', { tabelas: tabelas });
  });
});

// Capitulo Page Route
router.get('/:num/capitulo/:cap', (req, res) => {
  Tabela.findOne({ num: req.params.num }, (err, tabelas) => {
    for (i in tabelas.capitulo) {
      let cap = tabelas.capitulo[i];
      if (cap.num == req.params.cap) {
        res.render('capitulo', { cap: cap });
      }
    }
    //res.render('capitulo', { tab: tabelas });
    /*     let capitulo = tabelas.capitulo
      .filter(cap => {
        return (cap.num = req.params.cap);
      })
      .pop();
    res.render('capitulo', { capitulo: capitulo }); */
  });
});

module.exports = router;
