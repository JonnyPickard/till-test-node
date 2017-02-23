const test = require('tape');
const till = require('../app/till.js');

test('calculate base total given the order', (t) => {
  const order = ['Cafe Latte', 'Cafe Latte',
                 'Blueberry Muffin', 'Choc Mudcake'];

  const runningTotal = till.calculateBasePrice(order);
  const expectedPrice = 19.95;

  t.equal(runningTotal, expectedPrice);
  t.end();
});

test('scan item', (t) => {
  const item = 'Cafe Latte';

  till.scanItem(item);

  const actualBasket = till.basket[0];
  const expectedBasket = 'Cafe Latte';

  t.equal(actualBasket, expectedBasket);
  t.end();
});

//

test('calculates tax given the running total', (t) => {
  const runningTotal = 20;
  const tax = 8.64;

  const expectedTotal = 18.27;
  const actualTotal = till.calculateTax(runningTotal, tax);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('calculates the total given the order', (t) => {
  const order = ['Cafe Latte', 'Cafe Latte',
                 'Blueberry Muffin', 'Choc Mudcake'];

  const expectedTotal = 18.23;
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
