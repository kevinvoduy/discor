export const addUsername = ({ username }) => {
  return `
    INSERT INTO users (username, user_uid)
    VALUES ('${username}', '${username}')
    RETURNING id
  `;
};

// --- IMPORTANT: create user_uid --- //

export const addPassword = (id, { password }) => {
  return `
    INSERT INTO credentials (user_id, hash)
    VALUES (${id}, '${password}')
  `;
};