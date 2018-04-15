const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: Int
    firstName: String
    lastName: String
    age: Int
    profession: String
  }

  type Query {
    user(id: Int): User
  }
`);

module.exports = schema;