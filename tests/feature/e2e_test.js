// jshint ignore: start
Feature('Select an item then go to /checkout and pay');

Scenario('Test add item and visit /checkout then pay', (I) => {
  I.amOnPage('/');
  I.see('Till');
  I.dontSee('#checkoutButton');
  I.selectOption('#itemList', 'Cafe Latte');
  I.click('#addItem');
  I.see('Total: £4.75', '#runningTotal');
  I.click('#checkout');
  I.seeInCurrentUrl('/checkout');
  I.see('Total: ', '#checkoutTotal');
  I.see('Cafe Latte', '#basketList');
  I.fillField('moneyGiven', '10');
  I.click('#payBtn');
  I.see('Payment successfull');
  I.see('Change: ');
});
