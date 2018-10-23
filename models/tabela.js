const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create SubPosiçãoSchema
const SubPosiçãoSchema = new Schema({
  ncm: String,
  descrição: String,
  alíquota: String
});

// Create PosiçãoSchema
const PosiçãoSchema = new Schema({
  ncm: String,
  descrição: String,
  sub_posição: [SubPosiçãoSchema]
});

// Create NotasCapSchema
const NotasCapSchema = new Schema({
  texto: String,
  sub_nota: Array
});

// Create CapituloSchema
const CapituloSchema = new Schema({
  num: Number,
  titulo: String,
  notas_capitulo: [NotasCapSchema],
  posição: [PosiçãoSchema]
});

// Create TabelaSchema
const TabelaSchema = new Schema({
  num: Number,
  roman: String,
  descrição: Array,
  notas: Array,
  capitulo: [CapituloSchema]
});

module.exports = mongoose.model('tabela', TabelaSchema);
