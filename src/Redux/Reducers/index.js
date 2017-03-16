import { combineReducers } from 'redux';
import Test from './Test';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  Test,
  Routing: routerReducer,
});
