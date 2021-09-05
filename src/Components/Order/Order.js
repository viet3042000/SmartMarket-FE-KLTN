import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import OrderData from "./OrderData.js";
import FetchPost from '../../hooks/Fetch/FetchPost';

export function Order() {
  // const [orders, setOrders] = useState(orderData);
  const state = useSelector(state=>state.auth);
  if (!state.user) return (<Login />);
  return (
    <FetchPost uri="http://103.9.0.239:31441/dev/order/order-service/v1/get-all-orders" renderSuccess={OrderRender} requestBody={requestBody} />
  );
}

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

function OrderRender({data=null}) {
  return (
    <div>
        <div className="w-screen">
          <section className="bg-white py-8 mt-0">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
  
              <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                Your Order
              </a>
              <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
                {data.detail.map((obj, index) => <OrderData key={index} {...obj} />)}
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}