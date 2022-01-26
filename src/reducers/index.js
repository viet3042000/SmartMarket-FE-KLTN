import counterReducer from './counterReducer';
import loggedReducer from './isLoggedIn';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import orderReducer from './orderReducer';
import { combineReducers } from "redux";
import cartReducer from './cartReducer';

const allReducers = combineReducers({
  // {counter: counterReducer} means that Redux state object has state.counter (state name = counter)
  // and counterReducer function is reducer of counter state
  // counter: counterReducer,
  
  isLogged: loggedReducer,
  auth: authReducer,
  message: messageReducer,
  order: orderReducer,
  requestBody: cartReducer,
});

export default allReducers;