const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const till = require('./app/till');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/till/scan-item', (req, res) =>{
  const item = req.body.item;
  const basket = till.scanItem(item);
  res.send(basket);
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
