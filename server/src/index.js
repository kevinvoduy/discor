require('babel-register');
require('babel-polyfill')

import http from 'http';
import graphqlHTTP from 'express-graphql';
import App from './config/express';
import schema from '../src/config/graphql/schema/user.js';

const data = {
  1: {
    id: 1,
    firstName: 'Kevin',
    lastName: 'Vo',
    age: 26,
    profession: 'Engineer',
  }
}

const root = {
  user: ({ id }) => {
    return data[id];
  },
};

const app = App.express;
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const server = http.createServer(app);
const PORT = process.env.PORT || 3030;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  else console.log('Successfully connected to port', PORT);
});

module.exports = app;
