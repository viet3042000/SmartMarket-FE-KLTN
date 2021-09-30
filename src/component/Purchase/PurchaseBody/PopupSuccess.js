import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function PopupSuccess({ popupSuccess = null, setPopupSuccess = f => f }) {
  if (!popupSuccess) {
    return (<></>);
  }
  if (popupSuccess.goHome) {
    return (<Redirect to="/" />);
  }
  return (
    <>
      <div className="z-20 fixed left-0 top-0 h-screen w-screen bg-black opacity-60" onClick={() => setPopupSuccess({ 'goHome': true })}>
      </div>
      <div className="z-20 fixed top-44 inset-x-1/3">
        <div className="bg-white shadow rounded-sm">
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="text-green-500 h-1/3 w-full flex flex-col justify-between items-center bg-green-100">
              <div className="m-2 self-end">
                <Link to={`/`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link>
              </div>
              <svg className="w-36 h-36" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="h-36 w-full flex flex-col justify-between items-center">
              <p className="text-4xl font-thin text-green-600">Đặt hàng thành công</p>
              <p className="">{`orderId: ${popupSuccess.orderId}`}</p>
            </div>
            <div className="text-xl h-36 w-3/4 flex justify-between items-end">
              <Link to={`/`}>
                <button
                  className="m-6 inline-flex items-center justify-center px-8 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  Trang chủ
                </button>
              </Link>
              <Link to={`/orders`}>
                <button
                  className="m-6 inline-flex items-center justify-center px-8 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  Đơn hàng
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}