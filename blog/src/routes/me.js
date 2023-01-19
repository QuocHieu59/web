const express = require('express');
const route = express.Router();

const mecontroller = require('../app/controllers/mecontroller');

route.get('/storedshirt', mecontroller.storedShirt);
route.get('/cart', mecontroller.cart);
module.exports = route;