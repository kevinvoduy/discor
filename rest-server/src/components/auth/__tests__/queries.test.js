import signupQuery from '../authQueries';

const payload = {
  username: 'testuser2',
  password: 'password',
};

describe('User sign up queries', () => {
  test('it should properly add user to database', () => {
    signupQuery(payload)
      .then(result => {
        const { id, query } = result;
        expect(query.rowCount).toBe(1);
        expect(id).toBe(2);
      });
  });
});