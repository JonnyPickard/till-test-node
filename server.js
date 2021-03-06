const express        = require('express');
const app            = express();
const port           = process.env.PORT || 3000;
const till           = require('./app/till');
const bodyParser     = require('body-parser');
const morgan         = require('morgan');
const multer         = require('multer');
const upload         = multer();
const sassMiddleware = require('node-sass-middleware');
const path           = require('path');

app.use(sassMiddleware({
  src: path.join(__dirname, 'public/stylesheets/sass'),
  dest: path.join(__dirname, 'public/stylesheets/'),
  debug: true,
  indentedSyntax: true,
  outputStyle: 'compressed',
  prefix: '/stylesheets'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.post('/till/scan-item', upload.fields([]), (req, res) =>{
  const item = req.body.item;
  const basket = till.scanItem(item);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(basket));
});

app.post('/till/pay', upload.fields([]), (req, res) => {
  const moneyGiven = req.body.moneyGiven;
  const paymentConfirmation = till.pay(moneyGiven);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(paymentConfirmation));
});

app.get('/till/checkout', (req, res) =>{
  const checkoutBasket = till.checkout();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(checkoutBasket));
});

app.get('/', (req, res) =>{
  res.sendFile('public/views/index.html', {root: __dirname });
});

app.get('/checkout', (req, res) =>{
  res.sendFile('public/views/checkout.html', {root: __dirname });
});

const server = app.listen(port, () => {
  console.log('Express app listening on port', port);
  if (process.env.NODE_ENV === 'test') {
    server.close(() => { console.log('Closing express app'); });
  }
});

module.exports = server;
