import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style/style.module.css';

export default function ErrorCreateOrderPopup() {
  return (
    <>
      <div className={styles.bgPopup} /*  onClick={() => setPopupSuccess()} 'goHome': true */>
      </div>
      {/* <div className="z-20 fixed left-0 top-0 h-screen w-screen bg-black opacity-60" 
      </div> */}
      <div className="z-20 fixed top-28 left-0 right-0 w-full max-w-md m-auto" >
        <div className={styles.modalPopup}>
          <div className="relative w-full h-full flex flex-col items-center bg-white shadow rounded-sm">
            <div className="text-green-500 h-1/3 w-full flex flex-col justify-between items-center bg-red-500">
              <div className="m-2 self-end">
                {/* <Link to={`/`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link> */}
              </div>

              <svg className="w-36 h-28 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>
            <div className="h-20 w-full flex flex-col justify-between items-center ">
              <p className="text-4xl font-medium text-red-500">Lỗi tạo đơn hàng</p>
              <p className="text-2xl font-normal m-6 text-green-600">Đã hoàn tiền</p>
            </div>
            <div className="text-sm h-24 w-10/12 flex justify-between items-end">
              <Link to={`/`}>
                <button
                  className="-ml-2 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                >
                  Về trang chủ
                </button>
              </Link>
              <Link to={`/orders`}>
                <button
                  className="-mr-2 mb-6 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                >
                  Xem đơn hàng
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}