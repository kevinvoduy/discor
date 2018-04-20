export const addUsername = ({ username }) => {
  return `
    INSERT INTO users (username)
    VALUES ('${username}')
    RETURNING id
  `;
};

export const addPassword =(id, { password }) => {
  return `
    INSERT INTO credentials (user_id, hash)
    VALUES (${id}, '${password}')
  `;
};
