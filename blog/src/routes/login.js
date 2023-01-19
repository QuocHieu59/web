const express = require('express');
const route = express.Router();

const LoginController = require('../app/controllers/logincontroller')

route.get('/', LoginController.register)
route.get('/login', LoginController.login)
route.post('/store', LoginController.store)
route.post('/check', LoginController.check)
route.get('/admin', LoginController.admin)
module.exports = route;