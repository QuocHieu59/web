const express = require('express');
const route = express.Router();

const shirtcontroller = require('../app/controllers/shirtcontroller');

route.get('/create', shirtcontroller.create);
route.post('/storeshirt', shirtcontroller.storeshirt);
route.post('/storeKX', shirtcontroller.storeKX);
route.post('/store', shirtcontroller.store);
route.get('/card', shirtcontroller.card);
route.get('/:id/edit', shirtcontroller.edit);
route.put('/:id', shirtcontroller.update);
route.delete('/inf/:id', shirtcontroller.deleteinf);
route.delete('/:id', shirtcontroller.delete);
route.get('/list', shirtcontroller.list);
route.get('/:slug', shirtcontroller.show);


module.exports = route;