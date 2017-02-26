const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const till = require('./app/till');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.post('/till/scan-item', upload.fields([]), (req, res) =>{
  const item = req.body.item;
  const basket = till.scanItem(item);
  console.log(basket);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(basket));
});

app.get('/till/checkout', (req, res) =>{
  res.send({total: till.checkout()});
});

app.get('/', (req, res) =>{
  res.sendFile('public/views/index.html', {root: __dirname });
});

const server = app.listen(port, () => {
  console.log('Express app listening on port', port);
  if (process.env.NODE_ENV === 'test') {
    server.close(() => { console.log('Closing express app'); });
  }
});

module.exports = server;
