const { _twoDP } = require('./helpers.js');

const _fivePercentOffOverFifty = (total) => {
  return (total > 50) ? _twoDP(total * 0.95) : total;
};

const _tenPercentMuffinDiscount = (basket) => {
  return basket.map((item) => {
    return /Muffin/.test(x[0]) ?
      [item[0], _twoDP(item[1] * 0.9)] : [item[0], item[1]];
  });
};

const _calculateRunningTotal = (basket) => {
  return basket.reduce((total, price)=> {
    return total + price[1];
  }, 0);
};

const _calculateTotalDiscount = (basket) => {
  const itemDiscountedBasket = _tenPercentMuffinDiscount(basket);
  const runningTotal = _calculateRunningTotal(itemDiscountedBasket);
  return _fivePercentOffOverFifty(runningTotal);
};

module.exports = {
  fivePercentOffOverFifty: _fivePercentOffOverFifty,
  tenPercentMuffinDiscount: _tenPercentMuffinDiscount,
  calculateTotalDiscount: _calculateTotalDiscount,
  calculateRunningTotal: _calculateRunningTotal
};
