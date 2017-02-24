const test = require('tape');
const till = require('../app/till.js');

test('scan item', (t) => {
  const item = 'Cafe Latte';

  till.scanItem(item);

  const actualBasketItem = till.basket[0][0];
  const actualBasketPrice = till.basket[0][1];

  const expectedBasketItem = 'Cafe Latte';
  const expectedBasketPrice = 4.75;

  t.equal(actualBasketItem, expectedBasketItem);
  t.equal(actualBasketPrice, expectedBasketPrice);
  t.end();
});

test('fetch item price', (t) => {
  const item = 'Cafe Latte';
  const expectedPrice = 4.75;

  const actualPrice = till.fetchItemPrice(item);

  t.equal(actualPrice, expectedPrice);
  t.end();
});

test('calculates tax given the running total', (t) => {
  const runningTotal = 20;
  const tax = 8.64;

  const expectedTotal = 18.27;
  const actualTotal = till.calculateTax(runningTotal, tax);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('calculates the total given the order', (t) => {
  const order = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75],
                  ['Blueberry Muffin', 4.05], ['Choc Mudcake', 6.40]];

  const expectedTotal = 45.83;
  const actualTotal = till.calculateTotal(order);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('calculates change correctly given a users money', (t) => {
  const moneyGiven = 10;
  const total = 7.30;

  const expectedChange = 2.70;
  const actualChange = till.calculateChange(total, moneyGiven);

  t.equal(actualChange, expectedChange);
  t.end();
});
