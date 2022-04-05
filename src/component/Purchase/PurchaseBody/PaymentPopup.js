import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './style/style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import orderService from '../../../services/orderService';
import { deleteFromCart } from '../../../actions/cart';

export default function PopupPayment({ popupPayment = null, setPopupPayment=f=>f, 
                                      setPopupPaymentSuccess=f=>f, setPopupPurchaseSuccess=f=>f,
                                      setError=f=>f, setErrorDisp=f=>f }) {
  if (!popupPayment) {
    return (<></>);
  }
//   if (PopupPaymentSuccess.goHome) {
//     return (<Redirect to="/" />);
//   }

const dispatch = useDispatch();
const requestBodyState = useSelector(state => state.requestBody);

const submitPayment = async (event) => {
  event.preventDefault();
  try {
    // call api fake payment api

    // after successful payment
    setPopupPayment(false);
    setPopupPaymentSuccess(true);

    // call api create order
    const currentRequestBody = requestBodyState.requestBody;
    const data = await orderService.postOrder(currentRequestBody);
    localStorage.removeItem("requestBody");
    dispatch(deleteFromCart(null));
    setPopupPaymentSuccess(false);
    setPopupPurchaseSuccess(data);
  } catch (err) {
    setError(err);
    setPopupPaymentSuccess(false);
    setErrorDisp(true);
    // setPosting(false);
    console.log(err);
    setTimeout(() => setErrorDisp(false), 3000);
  }
};

  return (
    <>
      <div className={styles.bgPopup} /*  onClick={() => setPopupSuccess()} 'goHome': true */> </div>

      <div className="z-20 fixed top-28 left-0 right-0 w-full max-w-md m-auto" >
        <div className={styles.modalPopup}>
          <div className="relative w-full h-full flex flex-col items-center bg-white shadow rounded-sm">

            <div className="text-green-500 h-1/3 w-full flex flex-col justify-between items-center bg-green-100">
              <div className="self-end">
                <Link to={`/`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link>
              </div>
              <p className="text-4xl py-4 font-medium text-green-600">Nhập thông tin thanh toán</p>
            </div>

            <form className="container max-w-2xl mx-auto border-gray-300"
              onSubmit={submitPayment}
            >
              <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0 border-gray-300">
                <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
                  <div className="flex">
                    <h2 label="address" className="max-w-sm text-left py-2 md:w-1/5">Họ và tên trên thẻ</h2>
                    <div className=" relative md:w-4/5">
                      <input
                        type="text"
                        id="address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <h2 label="address" className="max-w-sm text-left py-2 md:w-1/5">Số thẻ</h2>
                    <div className=" relative md:w-4/5">
                      <input
                        type="text"
                        id="address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        minLength="12"
                        maxLength="12"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <h2 label="address" className="max-w-sm text-left py-2 md:w-1/5">CVC/CVV</h2>
                    <div className=" relative md:w-4/5">
                      <input
                        type="text"
                        id="address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        minLength="3"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="text-sm h-24 w-10/12 flex justify-between items-end">
                <Link to={`/`}>
                  <button
                    className="ml-10 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                  >
                    Về trang chủ
                  </button>
                </Link>
                
                <button
                  type = "summit"
                  className="-mr-8 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                >
                  Thanh toán
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}