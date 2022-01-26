import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export const getAllOrder = async (page=null, size=null) => {
  const conditions={};
  requestBody = {...requestBody, detail: {page, size, conditions}};
  // const response = await ApiClient.post('dev/order/order-service/v1/get-all-orders', null, requestBody);
  const response = await ApiClient.post('http://localhost:8083/', 'order/order-service/v1/get-all-orders', null, requestBody);
  return response.data;
};
let requestBody= {
  "requestId": v4(),
  "requestTime": Date.now(),
  "targetId": "Order Service"
};

export default getAllOrder;