import request from 'supertest';

require('dotenv').config();

const app = require('../../../').app;
const server = require('../../../').serve;

const payload = {
  firstname: 'test',
  lastname: 'user',
  username: 'testuser',
  password: 'password',
};

afterEach(done => {
  server.close();
  done();
});

describe('creates a user', () => {

  test('it should fail if no password is supplied', async() => {
    await request(app.listen(1235))
    .post('/api/auth/signup')
    .send({ username: 'testuser1' })
    .expect(400);
  });

  test('it should fail if no username is supplied', async() => {
    await request(app.listen(1236))
      .post('/api/auth/signup')
      .send({ password: 'password' })
      .expect(400);
  });

  test('it should hit endpoint & create a user', async() => {
    await request(app.listen(1234))
    .post('/api/auth/signup')
    .send(payload)
    .expect(200);
  });
});
