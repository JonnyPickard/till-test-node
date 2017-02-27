const test = require('tape');
const till = require('../../app/till.js');

test('_scanItem, should return [[basket], runningTotal]', (t) => {
  const item = 'Cafe Latte';

  till.scanItem(item);
  const actualArray = till.scanItem(item);
  const expectedArray = [[['Cafe Latte', 4.75], ['Cafe Latte', 4.75]], 9.5];

  const actualBasketItem = till.basket[0][0];
  const actualBasketPrice = till.basket[0][1];

  const expectedBasketItem = 'Cafe Latte';
  const expectedBasketItemPrice = 4.75;

  t.equal(actualBasketItem, expectedBasketItem,
     'Should add the correct item to the basket');
  t.equal(actualBasketPrice, expectedBasketItemPrice,
      'Should add the items price to the basket');
  t.equal(actualArray[1], expectedArray[1],
      'Should correctly return the running total');

  t.end();
});

test('_calculateRunningTotal, calculates running total', (t) => {
  const basket = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                  ['Cafe Latte', 4.75],
                  ['Blueberry Muffin', 3.65], ['Choc Mudcake', 6.40]];

  const expectedTotal = 52.8;
  const actualTotal = till.calculateRunningTotal(basket);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('_checkItemIsAvailable, checks that the item is available', (t) => {
  const item = 'Cafe Lat';

  t.throws(() => { till.checkItemIsAvailable(item); });
  t.end();
});

test('_fetchItemPrice, gets the item price', (t) => {
  const item = 'Cafe Latte';
  const expectedPrice = 4.75;

  const actualPrice = till.fetchItemPrice(item);

  t.equal(actualPrice, expectedPrice);
  t.end();
});

test('_calculateTax, calculates tax given the running total', (t) => {
  const runningTotal = 20;
  const tax = 8.64;

  const expectedTotal = 18.27;
  const actualTotal = till.calculateTax(runningTotal, tax);

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('_calculateTotal, calculates the total given the order', (t) => {
  const order = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75],
                 ['Blueberry Muffin', 4.05], ['Choc Mudcake', 6.40]];

  const expectedTotal = 45.83;
  const actualTotal = till.calculateTotal(order, () => {return 50.16;});

  t.equal(actualTotal, expectedTotal);
  t.end();
});

test('_checkout, returns [basket, total]', (t) => {
  const order = [['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75], ['Cafe Latte', 4.75],
                 ['Cafe Latte', 4.75],
                 ['Blueberry Muffin', 4.05], ['Choc Mudcake', 6.40]];

  const expectedTotal = 45.83;
  const expectedBasketItem = 'Cafe Latte';
  const actualTotal = till.checkout(order);

  t.equal(actualTotal[1], expectedTotal,
    'Should correctly return the final total');
  t.equal(actualTotal[0][0][0], expectedBasketItem,
    'Should correctly return the basket');
  t.end();
});

test('_calculateChange,' +
     'calculates change correctly given a users money', (t) => {

  const moneyGiven = 10;
  const total = 7.30;

  const expectedChange = 2.70;
  const actualChange = till.calculateChange(total, moneyGiven);

  t.equal(actualChange, expectedChange);
  t.end();
});

test('_pay,' +
     'processes the payment & resets the till,' +
     'should return correct change', (t) => {

  const finalTotal = 4.34;
  const moneyGiven = 10;

  const expectedChange = 5.66;
  const actualChange = till.pay(moneyGiven, finalTotal);

  t.equal(actualChange[1], 0, 'Till total should be reset');
  t.equal(actualChange[2][0], undefined, 'Till basket should be reset');


  t.equal(actualChange[0], expectedChange);
  t.end();
});
