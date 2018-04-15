const express = require('express');
const parser = require('body-parser');
const path = require('path');
const graphqlHTTP = require('express-graphql');

const middleware = [
  parser.json(),
  parser.urlencoded ({ extended:  true }),
  express.static(path.resolve(__dirname, '../../../../client/public')),
]

class App {
  constructor() {
    this.express = express();
    this.mountMiddleware();
    // this.mountRoutes();
  }

  mountMiddleware() {
    this.express.use(...middleware);
  }

  // mountRoutes() {
  //   this.express.use('/api', router);
  // }
}

module.exports = new App();