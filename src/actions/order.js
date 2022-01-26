import OrderService from "../services/orderService";

export const putOrder = (amountPersons, amountDays, fromDate, toDate) => (dispatch) => {
  OrderService.putOrder(amountPersons, amountDays, fromDate, toDate);
  dispatch({
    type: 'PUT_ORDER',
    payload: { amountPersons, amountDays, fromDate, toDate }
  });
};

export default putOrder;


// const fetchUserById = userId => {
//   // the inside "thunk function"
//   return async (dispatch, getState) => {
//     try {
//       // make an async call in the thunk
//       const user = await userAPI.fetchById(userId)
//       // dispatch an action when we get the response back
//       dispatch(userLoaded(user))
//     } catch (err) {
//       // If something went wrong, handle it here
//     }
//   }
}