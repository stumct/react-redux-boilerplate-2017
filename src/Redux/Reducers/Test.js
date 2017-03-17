import { combineReducers } from 'redux';

const hello = (state = 'HELLO', action) => {
  return state;
};

export const getHello = state => state.Test.hello;

export default combineReducers({
  hello,
});
