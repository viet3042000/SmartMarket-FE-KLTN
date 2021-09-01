import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import orderData from "../../data/orders.json";
import OrderData from "./OrderData.js";
import { v4 } from "uuid";

export function Order() {
  const [orders, setOrders] = useState(orderData);
  const state = useSelector(state=>state.auth);
  if (!state.user) return (<Login />);
  return (
  <div>
      <div className="w-screen h-screen ">
        <section className="bg-white py-8 mt-0">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              Your Order
            </a>
            <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
              {orders.detail.content.map((obj, index) => <OrderData key={index} {...obj} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
);
}

// export function Order() {
//   const state = useSelector(state=>state.auth);
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);
//             fetch("http://103.9.0.239:31441/dev/order/order-service/v1/create-order", {
//             method: "POST",
//             body: JSON.stringify(
//               {
//                 "requestId": v4(),
//                 "requestTime": Date.now(),
//                 "targetId": "BIC",
//                 "type": "BICTravelInsurance",
//                 "detail": {
//                   "orders": {
//                         "ordBillFirstName": "Nguyen Anh Chin",
//                         "ordBillMobile": "097453686312",
//                         "ordBillStreet1": "TTP, Đn Phượng, Hà Nội",
//                         "ordBillEmail": "nghiemxuanhop98@gmail.com",
//                         "ordDate": "2020-02-17T10:37:22",
//                         "ordStatus": "1",
//                         "ordTotalQty": 4,
//                         "orderPaymentMethod": 11,
//                         "ordPaidMoney": 10000,
//                         "ordDiscountAmount": 0,
//                         "ordSource": "DSVN"
//                     },
//                     "trv": {
//                         "amountPersons": 1,
//                         "amountDays": 2,
//                         "promotion": 0,
//                         "promotionAddress": "",
//                         "fromDate": "2021-06-26T00:00:00",
//                         "toDate": "2021-06-27T00:00:00",
//                         "issueDate": null
//                     },
//                     "trvDetails": [
//                         {
//                           "fullName": "Dam Quoc Duong",
//                           "gender": 0,
//                           "dateOfBirth": "1990-12-20",
//                           "passportCard": "123"
//                        }
//                     ]
//                   }
//                 }
//             ),
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ` + state.user.access_token
//             }
//             })
//       .then(response => response.text())
//       .then(result => setLoading(false))
//             .catch(
//                 error => {
//                     console.log(error);
//                     setLoading(false);
//                     setError(error);
//                 }
//             );
//     if (loading) {
//     return (
//         <div className="text-center">
//             <p>Loading</p>
//         </div>
//     );
//     }
//     if (error) {
//     return (
//         <div className="text-center">
//             <p>Fetching failed</p>
//         </div>
//     );
//     }
//     if (!data) return null;
//   return (
//     <div className="text-center">
//       Sent Successfully. data
//     </div>
//   );
// }