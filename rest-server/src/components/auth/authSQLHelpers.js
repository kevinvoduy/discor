export const addUsername = ({ username, firstname, lastname }) => {
  return `
    INSERT INTO users (username, user_uid, firstname, lastname)
    VALUES ('${username}', '${username}', '${firstname}', '${lastname}')
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