Till Tech Test NodeJS
=====================

[MA Till Tech Test](https://github.com/makersacademy/till_tech_test)

This is the MA practice till tech test built with NodeJS + ES6, ExpressJS, HTML, Vanilla JS, Bootstrap and a touch of jQuery.

#### About

I decided to use full stack JavaScript with server side NodeJS. For the purposes of the test I didn't think a DB was necessary although I thought a log order feature using MongoDB would be useful in a real life scenario for the employees to refer to the order details via a separate API.  

Being a relatively small project I also thought using a front end framework such as Angular or Ember would have been unnecessary. For this reason I chose to use Vanilla JavaScript with a touch of jQuery as it was included anyway for Bootstrap.

In terms of testing I'm a big fan of very simple assertions e.g. A should equal B. For this reason I chose Tape over a more complex framework like Mocha or Jasmine.

I chose Codeceptjs for feature tests purely out of curiosity for trying a new acceptance test framework. Having previously used Protractor, Nightwatchjs and Zombiejs on my Node projects I was pleasantly surprised and found it very easy to implement.

Finally Supertest is my go to API testing framework for JavaScript. I chose to use Tape with it again for simple assertions. Overall I feel I achieved quite a good level of test coverage.

Here are a few features I can think of implementing in the future:

- Log order feature with separate API for employees to check orders.
  - Employees could also use this to send back an estimated order time.
- More detailed receipts.
- Implementing a payment system.
- Work with a designer or use Adobe illustrator to come up with a unique design.
- User signup/ login.
- Token based authentication.
- Convert the whole API to use JSON and convert the front end into an SPA.

#### Tested with

- Unit tests: Tape.  
- Api tests: Tape + Supertest.  
- Feature test: CodeceptJS, Selenium Webdriver, WebdriverIO.  

#### To run

> Note: Make sure you have node and npm installed: [Node install link.](https://nodejs.org/en/)  
> Note: For feature tests make sure you have Java installed: [Java install link.](https://java.com/en/download/help/download_options.xml)


- Clone this repository & `$ cd` into the root directory.
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
