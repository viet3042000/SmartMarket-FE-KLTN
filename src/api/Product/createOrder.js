import ApiClient from "../ApiClient";
import { v4 } from "uuid";

let requestBody = {
  "requestId": v4(),
  "requestTime": Date.now(),
  "targetId": "BIC",
  "type": "BICTravelInsurance",
  "detail": {
    "orders": {
      "ordBillFirstName": "Nguyen Anh Chin",
      "ordBillMobile": "097453686312",
      "ordBillStreet1": "TTP, Đn Phượng, Hà Nội",
      "ordBillEmail": "nghiemxuanhop98@gmail.com",
      "ordDate": "2020-02-17T10:37:22",
      "ordStatus": "1",
      "ordTotalQty": 4,
      "orderPaymentMethod": 11,
      "ordPaidMoney": 10000,
      "ordDiscountAmount": 0,
      "ordSource": "DSVN"
    },
    "trvDetails": [
      {
        "fullName": "Ari chan",
        "gender": 0,
        "dateOfBirth": "1990-12-20",
        "passportCard": "123"
      }
    ]
  }
};

export const createOrder = async () => {
  const response = await ApiClient.post('order/order-service/v1/create-order', null, requestBody);
  return response.data;
};

export const updateTrv = (amountPersons=null, amountDays=null, fromDate=null, toDate=null) => {
  const trv = {
    amountPersons,
    amountDays,
    "promotion": 0,
    "promotionAddress": "",
    "fromDate": (new Date(fromDate)).toISOString().replace(".000Z", ""),
    "toDate": (new Date(toDate)).toISOString().replace(".000Z", ""),
    "issueDate": null
  };
  requestBody = {...requestBody, detail: {...requestBody.detail, trv}};
};