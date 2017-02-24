const test = require('tape');
const request = require('supertest');
const app = require('../../server.js');

test('POST /till/scan-item', (t) => {
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
      t.equal(actualResponse[0][0], expectedResponse);
      t.end();
    });
});

test('GET /till/checkout', (t) => {
  request(app)
    .get('/till/checkout')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) { throw err; }
      let actualResponse = res.body.total;
      let expectedResponse = 0;
      t.equal(actualResponse, expectedResponse);
      t.end();
    });
});