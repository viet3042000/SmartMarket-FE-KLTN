import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import orderData from "../../data/orders.json";
import OrderData from "./OrderData.js";


// export function Order() {
//   const [orders, setOrders] = useState(orderData);
//   return (
//   <div>
//       <div className="bg-white w-screen h-screen ">
//         <section className="bg-white py-8 mt-0">
//           <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

//             <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
//               Your Order
//             </a>
//             <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
//               {orders.detail.content.map((obj, index) => <OrderData key={index} {...obj} />)}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
// );
// }

export function Order() {
  const [orders, setOrders] = useState(orderData);
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
//   // const state = useSelector(state=>state.auth);
//   const state = {"user": "haong"};
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);
//   useEffect(()=>{
//     state.user ?
//         (
//             fetch("http://103.9.0.239:31441/dev/order/order-service/v1/create-order", {
//             method: "POST",
//             body: JSON.stringify(
//               {
//                 // "requestId": "{{$guid}}",
//                 // "requestTime": "{{$timestamp}}",
//                 "requestId": "b5677123-75cf-4dbf-a82e-8e6c4133746c",
//                 "requestTime": "1630377731",
//                 "targetId": "BIC",
//                 "type": "BICTravelInsurance",
//                 "detail": {
//                   "orders": {
//                         "ordBillFirstName": "12",
//                         "ordBillMobile": "097453686312",
//                         "ordBillStreet1": "TTP, Đan Phượng, Hà Nội",
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
//                 // Authorization: `Bearer` + state.user.access_token
//                 'Authorization': `Bearer ` + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJodW5nIiwic2NvcGUiOlsicmVhZCJdLCJpc3MiOiJodHRwOi8vc21hcnRtYXJrZXQuY29tIiwiZXhwIjoxNjMwMzgxMjE2LCJhdXRob3JpdGllcyI6WyJyZWFkIl0sImp0aSI6IjRhNGI2ODAwLTVhMDAtNGJiMi04NjFhLWYzMjU2MGNhNjFhMiIsImNsaWVudF9pZCI6ImNsaWVudDMifQ.ONlEwWMF7ydH-8rwM2YO_PpwY_jilGMxAtSlwfQTlSHza0yOXP7TPgCIE3ZswaHTiv3VkSJ5SF7tmR6NwvND48HcII_T6gS9llhCSSNr0w3eUAmEt_vbekl5AW4RzNSzvITicRUF0897ChpO3AqrUqLs8zAf5DNAnXy85nHBRgAzTCushKglCizFzDyL3bVeaval2WNsRY63qSen7e4xv9T6q9iy0dUEe0YxaZtsIHIYBtZ08bdniH2q4KWWUwOgzBy_KJUAOFjABC3bJA6U4kvfocv9ED9RuiiE_SyGJwEoCLu0Y9ghn6pFS7_gYPJf4Ea_B1vP4CpIo0VPLwGdGw'
//             }
//             }).then(
//                 (response) => (
//                     console.log(response)
//                 )
//             )
//             .catch(
//                 error => {
//                     console.log(error);
//                     setLoading(false);
//                     setError(error);
//                 }
//             )
//         )
//         :
//         console.log('');
//   }, []);

//   if (state.user) {
//     if (loading) {
//     return (
//         <div className="bg-yellow-50 text-center h-screen">
//             <p>Loading</p>
//         </div>
//     );
//     }
//     if (error) {
//     return (
//         <div className="bg-yellow-50 text-center h-screen">
//             <p>Fetching failed</p>
//         </div>
//     );
//     }
//     if (!data) return null;
//   }
//   return (
//     <div>
//         { state.user ?
//         <div>
//             {data.map(oder => (
//                 <div key={0} className="bg-yellow-50 ">
//                     <h1>{oder.name}</h1>
//                 </div>
//             ))}
//         </div>
//         :
//         <Login />
//         }
//     </div>
//   );
// }
