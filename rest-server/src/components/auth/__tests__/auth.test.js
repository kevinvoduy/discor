import request from 'supertest';

require('dotenv').config();

const app = require('../../../').app;
const server = require('../../../').serve;

const payload = {
  username: 'kevinvoduy',
  password: 'password',
};

afterEach(done => {
  server.close();
  done();
});

describe('creates a user', () => {
  test('it should create a user', async() => {
    await request(app.listen(1234))
    .post('/api/auth/test')
    .send(payload)
    .expect(200);
  });
});
