const mocha = require('mocha'); //npm install
const assert= require('assert');
const Character = require('../character');


var char = new Character({
  name:'Lucie',
  age: 23
})
//saving to the database
char.save();
