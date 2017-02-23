const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];
const { _twoDP } = require('./helpers.js');

var _total = 0;
var _basket = [];

const _calculateBasePrice = (basket) => {
  return _twoDP(basket.reduce(function(count, item) {
    return count + priceList[item];
  }, 0));
};

const _scanItem = (item) => {
  _basket.push(item);
};

const _calculateTax = (runningTotal, tax = 8.64) => {
  return _twoDP(runningTotal * (1 - tax / 100));
};

const _calculateTotal = (order) => {
  const runningTotal = _calculateBasePrice(order);
  const finalTotal = _calculateTax(runningTotal);

  return finalTotal;
};

const _calculateChange = (total, moneyGiven) => {
  return moneyGiven - total;
};

module.exports = {
  total: _total,
  basket: _basket,
  scanItem: _scanItem,
  calculateBasePrice: _calculateBasePrice,
  calculateTax: _calculateTax,
  calculateChange: _calculateChange,
  calculateTotal: _calculateTotal
};
