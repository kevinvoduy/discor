export default function(state={}, action) {
  switch(action.type) {
    case 'SAVE_USERNAME':
      return Object.assign({}, state, {
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      });
    default:
      return state;
  }
}
