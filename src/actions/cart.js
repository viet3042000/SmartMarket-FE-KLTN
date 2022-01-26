import { ADD_TO_CART, DELETE_FROM_CART } from "../const/types";

export const addToCart = requestBody => ({
    type: ADD_TO_CART,
    payload: requestBody,
});

export const deleteFromCart = requestBody => ({
    type: DELETE_FROM_CART,
    payload: requestBody,
});