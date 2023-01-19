const express = require('express');
const route = express.Router();

const homecontroller = require('../app/controllers/homecontroller');

route.get('/', homecontroller.index);

module.exports = route;