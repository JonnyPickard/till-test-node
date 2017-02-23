module.exports = {
  fivePercentOffOverFifty: (total) => {
    if (total > 50) {
      return Number((total * 0.95).toFixed(2));
    }
  },
  tenPercentMuffinDiscount: (item, price) => {
    if (/Muffin/.test(item)) {
      return price * 0.9;
    } else {
      return price;
    }
  }
};
