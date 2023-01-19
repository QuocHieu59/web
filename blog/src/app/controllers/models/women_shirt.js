const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const women_shirt = new Schema({
    name: { type: String },
    des: { type: String },
    img: { type: String },
    money: { type: Number },
    slug: { type: String}
  });

  module.exports = mongoose.model('women_shirt', women_shirt, 'women_shirt');


  