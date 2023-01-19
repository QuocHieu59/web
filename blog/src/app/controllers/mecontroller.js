const Shirt = require('../controllers/models/women_shirt');
const info = require('../controllers/models/inf')
const { mutipleMongooseToObject } = require('../../util/mongoose');
class meController {
    storedShirt(req, res, next) {
        Shirt.find({})
        .then(shirt => {
            shirt = shirt.map(shirt => shirt.toObject())
            res.render('me/storedshirt', {
                shirt: shirt
              });
        })
        .catch(next)
        
    }
    cart(req, res, next) {
        info.find({})
        .then(info => {
            info = info.map(info => info.toObject())
            res.render('me/cart', {
                info: info
              });
        })
        .catch(next)
        
    }
    
    
 
}

module.exports = new meController;

