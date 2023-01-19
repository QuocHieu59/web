const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nick = new Schema({
    name: { type: String },
    psw: { type: String },
  });


  module.exports = mongoose.model('nick', nick, 'nick');