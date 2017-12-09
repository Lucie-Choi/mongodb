const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  age: Number
});
const Character = mongoose.model('character', CharacterSchema);
module.exports = Character;
