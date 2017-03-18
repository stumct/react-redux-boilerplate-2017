import { combineReducers } from 'redux';

const hello = (state = 'HELLO', action) => {
  return state;
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const getHello = state => state.Test.hello;
export const getCounterValue = state => state.Test.counter;

export default combineReducers({
  counter,
  hello,
});
