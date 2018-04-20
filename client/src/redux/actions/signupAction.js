const saveUsernameAction = data => {
  return {
    type: 'SAVE_USERNAME',
    payload: data,
  };
};

export default saveUsernameAction;