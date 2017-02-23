const test = require('tape');
const till = require('../app/till.js');

test('calculates base price given the order', (t) => {
  const order = [ {2: 'Cafe Latte'},
                  {1: 'Blueberry Muffin'},
                  {1: 'Choc Mudcake'}];

  const runningTotal = till.calculateBasePrice(order);
  const expectedPrice = 19.95;

  t.equal(runningTotal, expectedPrice);
  t.end();
});

test('calculates tax given the running total', (t) => {
  const runningTotal = 20;
  const tax = 8.64;

  const expectedTotal = 17.28;
  const actualTotal = till.calculateTax(runningTotal, tax);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('calculates the total given the order', (t) => {
  const order = [ {2: 'Cafe Latte'},
                  {1: 'Blueberry Muffin'},
                  {1: 'Choc Mudcake'}];

  const expectedTotal = 17.24;
  const actualTotal = till.calculateTotal(order);

  t.equal(actualTotal, expectedTotal);
  t.end();
});
