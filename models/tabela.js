const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TabelaSchema = new Schema({
  num: Number,
  roman: String,
  descrição: String,
  notas: [],
  capitulo: {
    num: Number,
    titulo: String,
    notas_capitulo: []
  }
});

module.exports = mongoose.model('tabelas', TabelaSchema);
