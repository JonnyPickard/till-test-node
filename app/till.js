const { _twoDP } = require('./helpers.js');
const { priceList } = require('./helpers.js');
const { calculateTotalDiscount } = require('./discounts');

var _total = 0;
var _basket = [];

const _scanItem = (item) => {
  _checkItemIsAvailable(item);
  _basket.push([item, _fetchItemPrice(item)]);
  return [_basket, _calculateRunningTotal(_basket)];
};

const _calculateRunningTotal = (basket) => {
  return basket.reduce((total, price)=> {
    return total + price[1];
  }, 0);
};

const _checkItemIsAvailable = (item) => {
  if (!priceList[item]) { throw 'Sorry this item is currently unavailable'; }
};

const _fetchItemPrice = (item) => {
  return priceList[item];
};

const _calculateTax = (runningTotal, tax = 8.64) => {
  return _twoDP(runningTotal * (1 - tax / 100));
};

const _calculateTotal = (basket) => {
  if (!basket) { return 0; }
  const discountedTotal = calculateTotalDiscount(basket);
  const total = _calculateTax(discountedTotal);

  return total;
};

const _checkout = function(basket = _basket) {
  const total = _calculateTotal(basket);
  return [basket, total];
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
  checkItemIsAvailable: _checkItemIsAvailable,
  checkout: _checkout,
  calculateRunningTotal: _calculateRunningTotal
};
