import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PopupSuccess({ popupSuccess = null, setPopupSuccess = f => f }) {
  if (!popupSuccess) {
    return (<></>);
  }
  return (
    <>
      <div className="z-10 fixed left-0 top-0 h-screen w-screen bg-black opacity-60">
      </div>
      <div className="z-10 fixed left-0 top-0 h-screen w-screen flex justify-center items-center">
        <div className="w-5/12 xl:w-1/3 h-3/4 bg-white shadow rounded-sm">
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="text-green-500 h-1/3 w-full flex justify-center items-end bg-green-100">
              <svg className="w-36 h-36" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="h-1/3 w-full bg-gray-100 flex flex-col justify-between items-center">
              <p className="text-4xl font-thin text-green-600">Thanh toán thành công</p>
              <p className="">{`orderId: ${popupSuccess.orderId}`}</p>
            </div>
            <div className="text-2xl h-1/3 w-full bg-gray-100 flex justify-center items-center">
            <Link to={`/`}>
              <button
                className="inline-flex items-center justify-center px-8 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Về trang chủ
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}