const { _twoDP } = require('./helpers.js');

const _fivePercentOffOverFifty = (total) => {
  return (total > 50) ? _twoDP(total * 0.95) : total;
};

const _tenPercentMuffinDiscount = (item, price) => {
  return /Muffin/.test(item) ? _twoDP(price * 0.9) : price;
};

module.exports = {
  fivePercentOffOverFifty: _fivePercentOffOverFifty,
  tenPercentMuffinDiscount: _tenPercentMuffinDiscount
};
