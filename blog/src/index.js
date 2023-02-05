const path = require('path')
const express = require('express')
var morgan = require('morgan')
const {engine} = require('express-handlebars');
const methodOverride = require('method-override')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true,}),)
const route = require('./routes/index');
const db = require('./config/db/index');

//connect;

db.connect();

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
// Template engine
app.engine(
  'hbs', 
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      tich: (a, b) => a*b,
      thang: (a) => {
        var month = a.getMonth() + 1;
        return month;
      }
    }
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));


route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})