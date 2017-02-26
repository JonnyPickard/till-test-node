Till Tech Test NodeJS
=====================

[MA Till Tech Test](https://github.com/makersacademy/till_tech_test)

This is the MA practice till tech test built with NodeJS + ES6, ExpressJS, HTML, Vanilla JS, Boostrap and a touch of jQuery.

#### Tested with

- Unit tests: tape.  
- Api tests: tape + supertest.  
- Feature test: codeceptjs, selium webdriver, webdriverio.  

#### To run

- Clone this repository & `$ cd` in the root directory.
- `$ npm install` to install dependencies.
- `$ npm start` to boot a sever.
  - site can then be viewed on https://localhost:3000

#### To test
- `$ npm test` to test unit tests.
- `$ npm run-api` to test the api.
- To feature test (use separate terminal tabs for the following).
  - `$ npm start` to boot the server.
  - `$ webdriver-manager start` to boot selenium webdriver.
  - `$ npm run feature-test` to run the test.
