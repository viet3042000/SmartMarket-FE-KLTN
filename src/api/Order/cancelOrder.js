import ApiClient from "../ApiClient";
import { v4 } from "uuid";

export const cancelOrder = async (orderId = null) => {
    requestBody = {...requestBody, detail: {orderId}};
    // const response = await ApiClient.post('http://localhost:8083/', 'order/order-service/v1/cancel-order', null, requestBody);
    const response = await ApiClient.post('http://localhost:80/', 'order/order-service/v1/cancel-order', null, requestBody);
    return response.data;
  };
  let requestBody= {
    "requestId": v4(),
    "requestTime": Date.now(),
    "targetId": "Order Service"
  };
  
  export default cancelOrder;