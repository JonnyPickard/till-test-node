module.exports = {
  fivePercentOffOverFifty: (total) => {
    if (total > 50) {
      return Number((total * 0.95).toFixed(2));
    }
  },
  tenPercentMuffinDiscount: (item, price) => {
    return /Muffin/.test(item) ? Number((price * 0.9).toFixed(2)) : price;
  }
};
