import ApiClient from "../ApiClient";

export const getAllOrder = async () => {
  const response = await ApiClient.post('order/order-service/v1/get-all-orders', null, requestBody);
  return response.data;
};

const requestBody= {
  "requestId": "requestId",
  "requestTime": "requestTime",
  "targetId": "BIC",
    "type": "BICTravelInsurance",
  "detail": {
    "page": 1, 
    "size": "4"
  }
};

export default getAllOrder;