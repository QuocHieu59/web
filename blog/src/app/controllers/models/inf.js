const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inf = new Schema({
    // Name: { type: String, require: true },
    // number: { type: String, require: true },
    // address: { type: String, require: true },
    size: {type: String},
    SL: {type: Number},
    money: {type: Number}
  });

  module.exports = mongoose.model('inf', inf, 'inf');