import ApiClient from "../api/ApiClient";

class OrderService {
  putOrder(amountPersons, amountDays, fromDate, toDate) {
    localStorage.setItem("order", JSON.stringify({amountPersons, amountDays, fromDate, toDate}));
  }

  async postOrder(requestBody) {
    // const response = await ApiClient.post('/dev/order/order-service/v1/create-order', null, requestBody);
    const response = await ApiClient.post('http://localhost:8083/', 'order/order-service/v1/create-order', null, requestBody);
    return response.data;
  }
}

export default new OrderService();