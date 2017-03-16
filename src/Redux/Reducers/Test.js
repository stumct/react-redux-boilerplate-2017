import { combineReducers } from 'redux';

const hello = (state = 'HELLO', action) => {
  return state;
};

export default combineReducers({
  hello,
});
