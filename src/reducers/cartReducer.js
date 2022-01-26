import { ADD_TO_CART, DELETE_FROM_CART } from "../const/types";

const currentRequestBody = JSON.parse(localStorage.getItem("requestBody"));
const initialState = currentRequestBody ? { requestBody: currentRequestBody } : { requestBody: null };

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_TO_CART:
        return {
          requestBody: payload,
        };
      case DELETE_FROM_CART:
        return {
          requestBody: payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;