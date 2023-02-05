const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    Name: { type: String, require: true },
    number: { type: String, require: true },
    address: { type: String, require: true },
    size: {type: String},
    SL: {type: String},
    tong: {type: String},
    thang: {type: Date, default: Date.now  },
  });

  module.exports = mongoose.model('data', data, 'data');