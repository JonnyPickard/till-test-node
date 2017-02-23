const test = require('tape');
const till = require('../app/till.js');

test('calculates base price', (t) => {
  const order = [ {2: 'Cafe Latte'},
                  {1: 'Blueberry Muffin'},
                  {1: 'Choc Mudcake'}];

  const runningTotal = till.caculateBasePrice(order);
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
