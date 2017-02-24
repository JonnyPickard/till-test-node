const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const till = require('./app/till');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/till/scan-item', (req, res) =>{
  const item = req.body.item;
  res.send(till.scanItem(item));
});

app.get('/till/checkout', (req, res) =>{
  res.send({total: till.calculateTotal()});
});

const server = app.listen(port, () => {
  console.log('Express app listening on port', port);
  server.close(() => { console.log('Closing express app'); });
});

module.exports = server;
