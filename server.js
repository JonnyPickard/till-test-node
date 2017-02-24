const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const till = require('./app/till');

app.post('/till/scan-item', (req, res) =>{

});

app.listen(port, () => {
  console.log('Express app listening on port', port);
});

module.exports = app;
