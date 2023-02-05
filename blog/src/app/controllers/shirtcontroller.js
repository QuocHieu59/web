const shirt = require('../controllers/models/women_shirt');
const data = require('../controllers/models/data');
const inf = require('../controllers/models/inf');
const { mongooseToObiect } = require('../../util/mongoose');
class ShirtController {
    show(req, res, next) {
        shirt.findOne({slug: req.params.slug })
            .then((shirt) => {
                res.render('shirts/show', {
                    shirt : mongooseToObiect(shirt)
                });
            })
            .catch(next);
    }

    card(req, res, next) {
        inf.find({})
        .then(inf => {
            inf = inf.map(inf => inf.toObject())
            res.render('shirts/card', {
                inf: inf
              });
        })
        .catch(next)
        
    }

    storeKX(req, res, next) {
        const info = inf(req.body)  
        info.save();
        res.redirect('/shirt/list');
        
    }

    store(req, res, next) {
        const Data = data(req.body)
        Data.save();
        inf.deleteMany({}, function(err, result) {
            console.log("Documents deleted: ", result.deletedCount);
            res.redirect('/shirt/list');
        })
    }

    
    storeshirt(req, res, next) {
        const Shirt = shirt(req.body)
        Shirt.save();
        res.redirect('/me/storedshirt')
    }
    list(req, res, next) {
        shirt.find({})
        .then(shirt => {
            shirt = shirt.map(shirt => shirt.toObject())
            res.render('shirts/list', {
                shirt: shirt
              });
          })
          .catch(error => next(error));
    }
    create(req, res, next) {
        res.render('shirts/create')
    }
    edit(req, res, next) {
        shirt.findById(req.params.id)
            .then(shirt => res.render('shirts/edit', {
                shirt: mongooseToObiect(shirt)
            }))
            .catch(next)
    }
    update(req, res, next) {
        
         shirt.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/me/storedshirt'))
        .catch(next)
    }
    delete(req, res, next) {
        shirt.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    deleteinf(req, res, next) {
        inf.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}   


module.exports = new ShirtController;

