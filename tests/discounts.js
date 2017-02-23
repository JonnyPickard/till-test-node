const test = require('tape');
const discounts = require('../app/discounts.js');

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
  const muffin = 'Blueberry Muffin';
  const price = 2;

  const expectedTotal = 1.8;
  const actualTotal = discounts.tenPercentMuffinDiscount(muffin, price);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('discount 10% fails if the item is not a muffin', (t) => {
  const muffin = 'Blueberry uffin';
  const price = 2;

  const expectedTotal = 1.8;
  const actualTotal = discounts.tenPercentMuffinDiscount(muffin, price);

  t.notEqual(actualTotal, expectedTotal);
  t.end();
});
