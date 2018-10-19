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

module.exports = router;
