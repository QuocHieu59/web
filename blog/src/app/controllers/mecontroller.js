const Shirt = require('../controllers/models/women_shirt');
const nick = require('../controllers/models/nick')
const Data = require('../controllers/models/data')
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

    nick(req, res, next) {
        nick.find({})
        .then(nick => {
            nick = nick.map(nick => nick.toObject())
            res.render('me/nick', {
                nick: nick
              });
        })
        .catch(next)
        
    }

    cart(req, res, next) {
        Data.find({})
        .then(Data => {
            Data = Data.map(Data => Data.toObject())
            res.render('me/cart', {
                Data: Data
              });
        })
        .catch(next)
        
    }
    
    
 
}

module.exports = new meController;

