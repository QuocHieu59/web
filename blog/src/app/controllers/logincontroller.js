const nick = require('../controllers/models/nick')

class LoginController {
    register(req, res, next) {
        res.render('register')
    }
 async  store(req, res, next) {
    try {
        const name = req.body.name
        const pass = req.body.psw;
        const cpass = req.body.cpsw;
        const nickname = await nick.findOne({name: name})
        
         if(pass === cpass && !nickname  ){
            const Nick = nick(req.body)
        Nick.save()
        .then(() => res.redirect('/login'))
        }
        else{
            res.redirect('/')
        }
    } catch (error) {
        res.redirect('/')
    }}

    login(req, res, next) {
       res.render('login')
        
    }
    admin(req, res, next) {
        res.render('admin')
         
     }
   async check(req, res, next) {
       try {
        const name = req.body.name
        const pass = req.body.psw
        const nickname = await nick.findOne({name: name})
        if(pass === '123456789' && name === 'admin') {
            res.redirect('/shirt/create')
        }
         else if(nickname.psw === pass){
            res.redirect('/home')
        } else{
            res.redirect('/login');
        } 
       } catch (error) {
            res.redirect('/login')
       }
        
    }
} 

module.exports = new LoginController;