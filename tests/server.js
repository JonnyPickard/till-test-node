const test = require('tape');
const request = require('supertest');
// const app = require('../server.js');

// test('POST /till/scan-item', (t) => {
//   const item = {item: 'Blueberry Muffin'};
//   request(app)
//     .post('/till/scan-item')
//     .send(item)
//     .expect(201)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       console.log(err);
//       var response = res.body;
//       console.log(response);
//       if (err) { throw err; }
//       t.equal(response, response);
//       t.end();
//     });
// });
