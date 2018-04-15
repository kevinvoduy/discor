import { buildSchema }  from 'graphql';

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

export default schema;