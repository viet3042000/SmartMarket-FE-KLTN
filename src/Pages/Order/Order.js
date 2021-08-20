import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import orderData from "../../data/orders.json";
import OrderData from "./OrderData.js";

// export function Order() {
//   const [orders, setOrders] = useState(orderData);
//   return (<>
//   {
//   orders.detail.content.map((obj, index) => (
//     obj.id
//   ))
//   }
//   </>);
// }

export function Order() {
  const [orders, setOrders] = useState(orderData);
  return (
  <div>
      <div className="bg-yellow-50 w-screen h-screen ">
        <section className="bg-white py-8 mt-0">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                  Your Order
                </a>

                <div className="flex items-center" id="store-nav-content">

                  <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                    </svg>
                  </a>

                  <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                    </svg>
                  </a>

                </div>
              </div>
            </nav>

            <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">

              {orders.detail.content.map((obj, index) => <OrderData key={index} {...obj} />)}

            </div>
          </div>
        </section>
      </div>
    </div>
);
}
  /*
  const state = useSelector(state => state.auth);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    state.user ?
      (
        fetch("http://10.14.101.202/insurance/travel-insurance-service/v1/inquire-bic-travel-insurance", {
          method: "POST",
          headers: {
            Authorization: `Bearer` + state.user.access_token
          }
        }).then(
          (response) => (
            console.log(JSON.stringify(response))
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
    if (!data) {
      return null;
    }
  }
  return (
    <div>
      {state.user ?
        <div>
          {data.map(oder => (
            <div className="bg-yellow-50 " key="">
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
*/