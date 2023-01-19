const homeRouter = require('./home')
const shirtRouter = require('./shirt')
const meRouter = require('./me')
const loginRouter = require('./login')
function route(app) {
    app.use('/shirt', shirtRouter);
    app.use('/me', meRouter);
    app.use('/home', homeRouter);
    app.use('/', loginRouter)
}

module.exports = route;