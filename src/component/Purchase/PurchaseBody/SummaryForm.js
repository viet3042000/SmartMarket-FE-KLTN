import React from 'react';
import { IoIosMan } from "react-icons/io";
import { ImListNumbered } from "react-icons/im";
import { MdDateRange } from "react-icons/md";


const SummaryForm = ({ prodName=null, orderForm = null, toDate = null, prodPriceDisp = null }) => {
  return (
    <section className="mt-6 bg-white rounded-md border-2 border-gray-200">
      <h2 className="p-5 text-2xl font-semibold underline text-gray-700 capitalize dark:text-white border-b-2">{`Bảo hiểm ${prodName}`}</h2>

      <div className="flex flex-col divide-y-2">
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <IoIosMan size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Số người</p>
          <p className="absolute right-6">{orderForm.amountPersons}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <ImListNumbered size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Số ngày</p>
          <p className="absolute right-6">{orderForm.amountDays}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <MdDateRange size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Ngày bắt đầu</p>
          <p className="absolute right-6">{orderForm.fromDate}</p>
        </div>
        <div className="py-3 px-5 text-gray-700 text-lg flex relative">
          <MdDateRange size={25} style={{ fill: 'gray' }} />
          <p className="ml-2 opacity-60">Ngày kết thúc</p>
          <p className="absolute right-6">{toDate}</p>
        </div>
      </div>

      <div className="p-5 text-2xl font-semibold text-gray-700 capitalize border-t-2 flex justify-between">
        <p className="">Tổng</p>
        <p className="">{prodPriceDisp}</p>
      </div>

    </section>
  );
};

export default SummaryForm;
