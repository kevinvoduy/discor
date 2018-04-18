const getUsername = data => {
  return {
    type: 'GET_USERNAME',
    payload: data,
  };
};

export default getUsername;