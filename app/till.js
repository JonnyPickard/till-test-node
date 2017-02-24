const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];
const { _twoDP } = require('./helpers.js');
const { calculateTotalDiscount } = require('./discounts');

var _total = 0;
var _basket = [];

const _checkItemIsAvailable = (item) => {
  if (!priceList[item]) { throw 'Sorry this item is currently unavailable'; }
};

const _scanItem = (item) => {
  _checkItemIsAvailable(item);
  _basket.push([item, _fetchItemPrice(item)]);
  return _basket;
};

const _fetchItemPrice = (item) => {
  return priceList[item];
};

const _calculateTax = (runningTotal, tax = 8.64) => {
  return _twoDP(runningTotal * (1 - tax / 100));
};

const _calculateTotal = (basket) => {
  const discountedTotal = calculateTotalDiscount(basket);

  return _calculateTax(discountedTotal);
};

const _calculateChange = (total, moneyGiven) => {
  return moneyGiven - total;
};

module.exports = {
  total: _total,
  basket: _basket,
  scanItem: _scanItem,
  fetchItemPrice: _fetchItemPrice,
  calculateTax: _calculateTax,
  calculateChange: _calculateChange,
  calculateTotal: _calculateTotal,
  checkItemIsAvailable: _checkItemIsAvailable
};
