process.env.NODE_ENV = 'test';
process.env.PORT = 3333;
const test = require('tape');
const request = require('supertest');
const app = require('../../server.js');

test('GET "/till/checkout"', (t) => {
  request(app)
    .get('/till/checkout')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) { throw err; }
      let actualResponse = res.body;
      let expectedResponse = 0;
      t.equal(actualResponse[1], expectedResponse,
        'Should return the correct response');
      t.end();
    });
});

test('GET "/" should render index.html', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) { throw err; }

      t.end();
    });
});

test('GET "/checkout" should render server.html', (t) => {
  request(app)
    .get('/checkout')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) { throw err; }

      t.end();
    });
});

test('POST "/till/scan-item"', (t) => {
  const item = {item: 'Blueberry Muffin'};
  request(app)
  .post('/till/scan-item')
  .send(item)
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    if (err) { throw err; }
    let actualResponse = res.body;
    let expectedResponse = 'Blueberry Muffin';
    t.equal(actualResponse[0][0][0], expectedResponse,
       'Should return the correct response');
    t.end();
  });
});

test('POST "/till/pay"', (t) => {
  const moneyGiven = {moneyGiven: 10};
  request(app)
  .post('/till/pay')
  .send(moneyGiven)
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    if (err) { throw err; }
    let actualResponse = res.body;
    let expectedResponse = 'Payment successfull';
    t.equal(actualResponse[3], expectedResponse,
      'Should return the correct response');
    t.end();
  });
});
