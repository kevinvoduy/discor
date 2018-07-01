export const addUsername = ({ username, firstname, lastname }, uuid) => {
  return `
    INSERT INTO users (username, uuid, firstname, lastname)
    VALUES ('${username}', '${uuid}', '${firstname}', '${lastname}')
    RETURNING uuid
  `;
};

// --- IMPORTANT: create user_uid --- //

export const addPassword = (id, { password }) => {
  return `
    INSERT INTO credentials (user_id, hash)
    VALUES ('${id}', '${password}')
  `;
};