export default function(state={}, action) {
  switch(action.type) {
    case 'SAVE_USERNAME':
      return Object.assign({}, state, {
        username: action.payload,
      });
    default:
      return state;
  }
}
