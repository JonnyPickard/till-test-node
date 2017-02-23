const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];

module.exports = {

  calculateBasePrice: (order) => {
    let total = 0;
    for (var i in order) {
      const item = Object.values(order[i]);
      const amount = Object.keys(order[i])[0];
      const price = priceList[item];

      total += price * amount;
    }
    return Number(total.toFixed(2));
  },

  calculateTax: (runningTotal, tax = 8.64) => {
    return Number((runningTotal * (1 - tax / 100)).toFixed(2));
  },

  calculateTotal: function(order) {
    const runningTotal = this.calculateBasePrice(order);
    const total = this.calculateTax(runningTotal);

    return total;
  },

  calculateChange: (total, moneyGiven) => {
    if (moneyGiven > total) {
      return moneyGiven - total;
    } else {
      throw 'more money required';
    }
  }
};
