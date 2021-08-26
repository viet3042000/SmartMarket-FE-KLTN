import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import orderData from "../../data/orders.json";
import OrderData from "./OrderData.js";


export function Order() {
  const [orders, setOrders] = useState(orderData);
  const onChangeOrder = (orderId, payload) => {
    const newContentElement = orders.detail.content.find(element => element.orderId === orderId);
    newContentElement.payload = payload;
    orders.detail.content.filter(element => element.orderId !== orderId);
    setOrders(...orders, newContentElement);
  };
  return (
  <div>
      <div className="bg-yellow-50 w-screen h-screen ">
        <section className="bg-white py-8 mt-0">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              Your Order
            </a>
            <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
              {orders.detail.content.map((obj, index) => <OrderData key={index} {...obj} onChangeOrder={onChangeOrder} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
);
}
