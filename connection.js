//Set up mongoose connection
var mongoose = require('mongoose');
var express = require('express');

var app = express();

var mongoDB = 'mongodb://lucie:lucie@ds133876.mlab.com:33876/connectingmlab';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
  name: String,
  age: Number
});
const Character = mongoose.model('character', CharacterSchema);
var mycharacter = Character({
  name: 'BOBO',
  age: 23
})
mycharacter.save(function(err){
  if (err) throw err;
  console.log('item saved');
})

const BookSchema = new Schema({
  title: String,
  page: Number
});
const Book = mongoose.model('book', BookSchema);
var mybook = Book({
  title: 'Joke',
  page: 23
})
mybook.save(function(err){
  if (err) throw err;
  console.log('item saved');
})
