const { _twoDP } = require('./helpers.js');

module.exports = {
  fivePercentOffOverFifty: (total) => {
    return (total > 50) ? _twoDP(total * 0.95) : total;
  },
  tenPercentMuffinDiscount: (item, price) => {
    return /Muffin/.test(item) ? _twoDP(price * 0.9) : price;
  }
};
