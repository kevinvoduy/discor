const saveUsernameAction = data => {
  console.log('action :', data);
  return {
    type: 'SAVE_USERNAME',
    payload: data,
  };
};

export default saveUsernameAction;