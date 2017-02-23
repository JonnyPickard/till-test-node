const fs = require('fs');
const content = fs.readFileSync('./app/hipstercoffee.json');
const jSONContent = JSON.parse(content);
const priceList = jSONContent[0].prices[0];

module.exports = {
  caculateBasePrice: (order) => {
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
    return Number((runningTotal * (tax / 10)).toFixed(2));
  }
};
