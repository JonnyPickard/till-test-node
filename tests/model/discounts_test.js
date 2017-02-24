const test = require('tape');
const discounts = require('../../app/discounts.js');

test('discounts 5% if the price is greater than 50', (t) => {
  const totalBefore = 55;

  const expectedTotal = 52.25;
  const actualTotal = discounts.fivePercentOffOverFifty(totalBefore);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('discount 5% fails if the price is less than 50', (t) => {
  const totalBefore = 45;

  const expectedTotal = 52.25;
  const actualTotal = discounts.fivePercentOffOverFifty(totalBefore);

  t.notEqual(actualTotal, expectedTotal);
  t.end();
});

test('discounts 10% if the item is a muffin', (t) => {
  const basket = [['Blueberry Muffin', 4.05]];

  const expectedPrice = 3.65;
  const actualPrice = discounts.tenPercentMuffinDiscount(basket)[0][1];

  t.equal(actualPrice, expectedPrice);
  t.end();
});

test('discount 10% fails if the item is not a muffin', (t) => {
  const basket = [['Blueberry uffin', 4.05]];

  const expectedPrice = 4.05;
  const actualPrice = discounts.tenPercentMuffinDiscount(basket)[0][1];

  t.equal(actualPrice, expectedPrice);
  t.end();
});

test('calculates running total', (t) => {
  const basket = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75],
                  ['Blueberry Muffin', 3.65], ['Choc Mudcake', 6.40]];

  const expectedTotal = 52.8;
  const actualTotal = discounts.calculateRunningTotal(basket);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('calculates total discount', (t) => {
  const basket = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75],
                  ['Blueberry Muffin', 4.05], ['Choc Mudcake', 6.40]];

  const expectedTotal = 50.16;
  const actualTotal = discounts.calculateTotalDiscount(basket);

  t.equal(actualTotal, expectedTotal);
  t.end();
});
