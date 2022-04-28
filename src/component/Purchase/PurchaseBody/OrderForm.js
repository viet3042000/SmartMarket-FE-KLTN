import React, { useState, useEffect } from 'react';
import getDetailUser from '../../../api/User/getDetailUser';
import { VscLoading } from 'react-icons/vsc';


const OrderForm = ({ currentStep=null, orderForm=null, changeOrderForm=f=>f, toDate=null, submit=f=>f }) => {
  if (currentStep !== 1) return (<></>);
  window.scrollTo(0, 0);
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const currentDate = date.toISOString().slice(0, 10);
  // const currentDate = new Date().toISOString().slice(0, 10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    setLoading(true);
    await getDetailUser()
      .then((data) => { 
        orderForm.ordBillFirstName = data.detail.fullName;
        orderForm.ordBillMobile = data.detail.phoneNumber;
        orderForm.ordBillStreet1 =data.detail.address;
        orderForm.ordBillEmail = data.detail.email;
      })
      .catch(error => console.log(error));
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="animate-spin w-24 h-24 text-gray-600 opacity-40 -mt-40">
          <VscLoading size={100}/>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mt-6 p-6 bg-white rounded-md border-2 border-gray-200">
        <form id="orderForm" onSubmit={submit}>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Đơn hàng</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-900 font-medium" htmlFor="amountPersons">Số người mua bảo hiểm</label>
              <input value={orderForm.amountPersons} onChange={changeOrderForm} name="amountPersons" id="amountPersons" type="number" min="1" max="10" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="amountDays">Số ngày bảo hiểm</label>
              <input value={orderForm.amountDays} onChange={changeOrderForm} name="amountDays" id="amountDays" type="number" min="1" max="90" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="fromDate">Ngày bắt đầu</label>
              <input value={orderForm.fromDate} onChange={changeOrderForm} name="fromDate" id="fromDate" type="date" min={currentDate} required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="toDate">Ngày kết thúc</label>
              <input value={toDate} id="toDate" type="date" required readOnly={true} className="mb-6 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>

          <hr/>

          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Người đặt</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-900 font-medium" htmlFor="ordBillFirstName">Họ và tên</label>
              <input value={orderForm.ordBillFirstName} disabled name="ordBillFirstName" id="ordBillFirstName" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="ordBillMobile">Số điện thoại</label>
              <input value={orderForm.ordBillMobile} disabled name="ordBillMobile" id="ordBillMobile" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="ordBillEmail">Email</label>
              <input value={orderForm.ordBillEmail} disabled name="ordBillEmail" id="ordBillEmail" type="email" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 font-medium" htmlFor="ordBillStreet1">Địa chỉ</label>
              <input value={orderForm.ordBillStreet1} disabled name="ordBillStreet1" id="ordBillStreet1" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
          </div>
        </form>
      </section>
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          form="orderForm"
          // className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Tiếp theo
        </button>
      </div>
    </>
  );
};

export default OrderForm;
