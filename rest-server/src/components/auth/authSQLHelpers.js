const signupSQLHelper = ({ username }) => {
  return `
    INSERT INTO users (username)
    VALUES ('${username}')
    RETURNING id
  `;
};

export default signupSQLHelper;
