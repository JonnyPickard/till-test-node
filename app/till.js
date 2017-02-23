const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];
const { _twoDP } = require('./helpers.js');

var total = 0;
var basket = [];

module.exports = {
  total: total,
  basket: basket,

  scanItem: (item) => {
    basket.push(item);
  },

  calculateBasePrice: (basket) => {
    const total = basket.reduce(function(count, item) {
      return count + priceList[item];
    }, 0);
    return _twoDP(total);
  },

  calculateTax: (runningTotal, tax = 8.64) => {
    return _twoDP(runningTotal * (1 - tax / 100));
  },

  calculateTotal: function(order) {
    var runningTotal = this.total;
    runningTotal = this.calculateBasePrice(order);
    const finalTotal = this.calculateTax(runningTotal);

    return finalTotal;
  },

  calculateChange: (total, moneyGiven) => {
    return moneyGiven - total;
  }
};
