const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create NotasCapSchema
const NotasCapSchema = new Schema({
  texto: String,
  sub_nota: Array
});

// Create CapituloSchema
const CapituloSchema = new Schema({
  num: Number,
  titulo: String,
  notas_capitulo: [NotasCapSchema]
});

// Create TabelaSchema
const TabelaSchema = new Schema({
  num: Number,
  roman: String,
  descrição: String,
  notas: Array,
  capitulo: [CapituloSchema]
});

module.exports = mongoose.model('tabela', TabelaSchema);
