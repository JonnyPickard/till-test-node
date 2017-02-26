const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];

module.exports = {
  _twoDP: (num) => { return Number(num.toFixed(2)); },
  priceList: priceList
};
