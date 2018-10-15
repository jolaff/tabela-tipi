const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TIPISchema = new Schema({
  seção: String,
  descrição: String,
  notas: [String]
});

module.exports = mongoose.model('tipis', TIPISchema);
