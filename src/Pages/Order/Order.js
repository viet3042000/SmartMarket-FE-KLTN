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
//       <div className="bg-yellow-50 w-screen h-screen ">
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
  const state = useSelector(state=>state.auth);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    state.user ?
        (
            fetch("http://10.14.101.202/insurance/travel-insurance-service/v1/inquire-bic-travel-insurance", {
            method: "POST",
            headers: {
                Authorization: `Bearer` + state.user.access_token
            }
            }).then(
                (response) => (
                    console.log(response)
                )
            )
            .catch(
                error => {
                    console.log(error);
                    setLoading(false);
                    setError(error);
                }
            )
        )
        :
        console.log('');
  }, []);

  if (state.user) {
    if (loading) {
    return (
        <div className="bg-yellow-50 text-center h-screen">
            <p>Loading</p>
        </div>
    );
    }
    if (error) {
    return (
        <div className="bg-yellow-50 text-center h-screen">
            <p>Fetching failed</p>
        </div>
    );
    }
    if (!data) return null;
  }
  return (
    <div>
        { state.user ?
        <div>
            {data.map(oder => (
                <div key={0} className="bg-yellow-50 ">
                    <h1>{oder.name}</h1>
                </div>
            ))}
        </div>
        :
        <Login />
        }
    </div>
  );
}
