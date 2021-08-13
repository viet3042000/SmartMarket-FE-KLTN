import counterReducer from './counterReducer';
import loggedReducer from './isLoggedIn';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  auth: authReducer,
  message: messageReducer
});

export default allReducers;