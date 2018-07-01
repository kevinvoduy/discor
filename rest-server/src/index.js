
import http from 'http';
import path from 'path';
import serverless from 'serverless-http';

import App from './config/express';
import '../src/config/database/pg';

// import graphqlHTTP from 'express-graphql';
// import schema from '../src/config/graphql/schema/user';
// import '../src/config/database/mongo';

// this should be enabled in production
// import '../src/config/database/setup';

import { success } from '../src/lib/logger';

if (process.env.NODE_ENV !== 'production') {
	require('babel-register');
	require('babel-polyfill');
}

// const data = [
// 	{
// 		id: 1,
// 		firstName: 'Kevin',
// 		lastName: 'Vo',
// 		age: 26,
// 		profession: 'Engineer',
//   },
//   {
// 		id: 2,
// 		firstName: 'Christine',
// 		lastName: 'Vo',
// 		age: 24,
// 		profession: 'Teacher',
// 	}
// ];

// const getUser = ({ id }) => {
//   return data.filter(person => {
//     return person.id === id;
//   })[0];
// };

// const getByLastName = ({ lastName }) => {
//   return data.filter(person => {
//     return person.lastName === lastName;
//   });
// };

// const root = {
//   user: getUser,
//   name: getByLastName,
// };

const app = App.express;

// app.use('/graphql', graphqlHTTP({
// 	schema: schema,
// 	rootValue: root,
// 	graphiql: true,
// }));

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;


server.listen(PORT, err => {
	if (err) throw new Error;
	else success('successfully connected to server:', PORT);
});

// temp access
app.all('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../client/public/index.html'));
});

module.exports.handler = serverless(app);
