import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import OrderData from "./OrderData.js";
import FetchPost from '../../hooks/Fetch/FetchPost';
import getAllOrder from '../../api/Order/getAllOrder';

const size = 4;

export function Order() {
  const [orders, setOrders] = useState();
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPage(1);
  }, []);

  const getPage = async (page) => {
    setLoading(true);
    await getAllOrder(page, size)
    .then((data) => {setOrders(data); setPages({ page: data.page, totalPage: data.totalPage, total: data.total });})
    .catch(error => console.log(error));
    setLoading(false);
  };

  // return (
  //   <FetchPost uri="http://103.9.0.239:31441/dev/order/order-service/v1/get-all-orders" renderSuccess={OrderRender} requestBody={requestBody} />
  // );
  if (loading) return (<div className="w-screen h-screen flex justify-center"> <p>loading...</p> </div>);
  return (
    <div >
        <div >
          <section className=" py-8 mt-0">
            <div className=" container mx-auto flex items-center flex-wrap pt-4 pb-12">
  
              <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                Your Order
              </a>
              <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
                {orders.detail.map((obj, index) => <OrderData key={index} {...obj} />)}
              </div>
      <div className="w-screen " >
        <section className=" py-8 mt-0">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              Your Order
            </a>
            <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
              {orders.detail.map((obj, index) => <OrderData key={index} {...obj} />)}
            </div>
            <div className="flex justify-center w-full mt-12">
              <ChevLeft {...pages} getPage={getPage} />

              {[...Array(4)].map((item, index) => <Page key={index} index={index} {...pages} getPage={getPage} />)}

              <ChevRight {...pages} getPage={getPage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const ChevLeft = ({page = null, getPage=f=>f}) => {
  if (page < 5) {
    return null;
  }
  return (
    <button className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md transition-colors duration-200 transform hover:bg-indigo-600 hover:text-white focus:outline-none"
            onClick={() => getPage(4 * (Math.ceil(page / 4) - 1))}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const ChevRight = ({page = null, totalPage = null, getPage=f=>f}) => {
  if (page >= 4 * (Math.ceil(totalPage / 4) - 1) + 1) {
  return null;
}
return (
  <button className="flex items-center px-4 py-2 mx-1 text-gray-500 transition-colors duration-200 transform bg-white rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none"
          onClick={() => getPage(4 * (Math.ceil(page / 4)) + 1)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);
};

const Page = ({ index = null, page = null, totalPage = null, total = null, getPage=f=>f }) => {
  const maxRange = ((4 * Math.ceil(page / 4)) > totalPage) ? totalPage : 4 * Math.ceil(page / 4);
  const minRange = 4 * (Math.ceil(page / 4) - 1) + 1;
  if ((minRange + index) > maxRange) return null;
  if ((minRange + index) === page) {
    return (
      <>
        <button className="flex items-center px-4 py-2 mx-1 text-black text-bold bg-gray-400 rounded-md focus:outline-none">
          {minRange + index}
        </button>
      </>
    );
  }
  return (
    <>
      <button className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none"
              onClick={() => getPage(minRange + index)}>
        {minRange + index}
      </button>
    </>
  );
};

// function OrderRender({data=null}) {
//   return (
//     <div>
//         <div className="w-screen">
//           <section className="bg-white py-8 mt-0">
//             <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
//               <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
//                 Your Order
//               </a>
//               <div className="w-full md:w-full p-6 flex flex-col items-center space-y-5">
//                 {data.detail.map((obj, index) => <OrderData key={index} {...obj} />)}
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//   );
// }