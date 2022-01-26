import React, { useEffect, useState } from 'react';
import PopupEdit from './PopUpEdit.js';
import useFormObj from '../../hooks/Form/useFormObj.js';
import cancelOrder from '../../api/Order/cancelOrder.js';
import ErrorPopup from '../Login/ErrorPopup.js';
import PopUpCancelSuccess from './PopupCancelSuccess.js';


const textGrayStyle = 'text-gray-500 text-opacity-75';
const dataStyle = 'font-normal';
const dataStyleMobile = 'font-normal text-sm';

export default function OrderDataDetail({ orderId, state, show = null, orderItems }) {
  if (!show) {
    return (<></>);
  }
  const [popupEdit, setPopupEdit] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const [currentTab, setCurrentTab] = useState('detail');
  const [errorDisp, setErrorDisp] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const [detailDisp, setDetailDisp] = useState(false);
  const [popupCancelSuccess, setPopupCancelSuccess] = useState();
  const [pages, setPages] = useState();
  const [orderDetail, setOrderDetail] = useState(orderItems[0]);
  const size = 2;

  useEffect(() => {
    getPage(1);
  }, []);

  const getPage = async (page) => {
      setPages({ page: page, totalPage: orderItems.length, total: orderItems.length });
      setOrderDetail(orderItems[page-1]);
  };

  // onChangeOrder(payload);
  // const [trvForm, changeTrvForm, resetTrvForm] = useFormObj(obj.detail.trv);

  const cancelSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await cancelOrder(orderId);
      setPosting(false);
      setPopupCancelSuccess(data);
    } catch (err) {
      setError(err);
      setErrorDisp(true);
      setPosting(false);
      console.log(err);
      setTimeout(() => setErrorDisp(false), 3000);
    }
  };

  return (
    <>
      {errorDisp && <ErrorPopup error={error}/>}
      {/* <PopupEdit popupEdit={popupEdit} setPopupEdit={setPopupEdit} formValues={trvForm} changeFormValues={changeTrvForm} /> */}
      <Buttons state={state} currentTab={currentTab} setCurrentTab={setCurrentTab} setPopupEdit={setPopupEdit} />

      {/* <DetailTab orderItems={orderItems} currentTab={currentTab} /> */}
      <DetailTab orderDetail={orderDetail} currentTab={currentTab} />

      <div className="flex justify-center w-full my-12">
        <ChevLeft {...pages} getPage={getPage} />

        {[...Array(size)].map((item, index) => <Page key={index} index={index} {...pages} getPage={getPage} />)}

        <ChevRight {...pages} getPage={getPage} />
      </div>

      {/* <OrderProduct orderItems={obj.detail.orderItems} detailDisp={detailDisp} setDetailDisp={setDetailDisp} /> */}
      <PopUpCancelSuccess popupCancelSuccess={popupCancelSuccess} setPopupCancelSuccess={setPopupCancelSuccess}/>
    </>
  );

  function Buttons({ state, currentTab = null, setCurrentTab = f => f, setPopupEdit = f => f }) {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    const tabDisplay = (
      <>
        <span className="mr-6 border-b-2 pb-2 border-red-500 font-bold">
          <button className="focus:outline-none" onClick={() => setCurrentTab('detail')}>
            Chi tiết đơn hàng
          </button>
        </span>
      </>
    );

    const onClick = (e) => {
      e.preventDefault();
      setDetailDisp(true);
      setTimeout(() => setDetailDisp(false), 3000);
    };

    const buttonDisplay = (state === 'Canceled') ?
    ( <></> )
    : (state === 'Succeeded') ?
      (
        <>
          {/* <span className="absolute right-36 bottom-1">
            <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
            onClick={onClick}
            >
              Chi tiết
            </button>
          </span> */}

          <span className="absolute right-9 bottom-1">
            <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
              onClick={cancelSubmit}
            >
              Hủy đơn
            </button>
          </span>
        </>
      ) : (
        <>
          {/* <span className="absolute right-9 bottom-1">
            <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
            onClick={onClick}
            >
              Chi tiết
            </button>
          </span> */}
        </>
      );


    if (mediaQuery.matches) {
      return (
        <>
          <div className="flex mb-6 mt-2">
              {/* <button 
              className="w-1/2 mr-2 px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 opacity-50 hover:bg-gray-600 focus:shadow-outline focus:outline-none" onClick={() => setPopupEdit(true)}
              >
                Chi tiết
              </button> */}
              <button className="w-1/2 px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 opacity-50 hover:bg-gray-600 focus:shadow-outline focus:outline-none">
                Hủy đơn
              </button>
          </div>
          <div className="border-b-2 flex relative mb-6">
            {tabDisplay}
          </div>
        </>
      );
    }
    
    return (
      <div className=" border-b-2 flex relative my-6">
        {tabDisplay}
        {buttonDisplay}   
      </div>
    );
  }

  function DetailTab({ orderDetail, currentTab = null }) {
    if (currentTab !== 'detail') {
      return (<></>);
    }
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    if (mediaQuery.matches) {
      return (
        <>
          <div className="grid grid-cols-2 gap-6">
            <span>
              <p className={textGrayStyle}>Ngày bắt đầu</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.fromDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Ngày kết thúc</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.toDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số ngày</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.amountDays}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số người</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Khuyễn mãi</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.promotion === 0 ? 'None' : orderDetail.productDetailCreateRequest.trv.promotion}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Địa chỉ Sales</p>
              <p className={dataStyleMobile}>{orderDetail.productDetailCreateRequest.trv.promotionAddress === '' ? 'None' : orderDetail.productDetailCreateRequest.trv.promotionAddress}</p>
            </span>
          </div>
          {orderDetail.productDetailCreateRequest.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}
        </>
      );
    }
    return (
      <>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Ngày bắt đầu</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.fromDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày kết thúc</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.toDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số ngày</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.amountDays}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số người</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.amountPersons}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Khuyễn mãi</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.promotion === 0 ? 'None' : orderDetail.productDetailCreateRequest.trv.promotion}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Địa chỉ Sales</p>
            <p className={dataStyle}>{orderDetail.productDetailCreateRequest.trv.promotionAddress === '' ? 'None' : orderDetail.productDetailCreateRequest.trv.promotionAddress}</p>
          </span>
        </div>

        {orderDetail.productDetailCreateRequest.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}

        {/* <OrderDetail detail={orderItems}/> */}
      </>
    );
  }

  function PaymentTab({ obj = null, currentTab = null }) {
    if (currentTab !== 'payment') {
      return (<></>);
    }
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'VND',
    });
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    if (mediaQuery.matches) {
      return (
        <>
          <div className="grid grid-cols-2 gap-6">
            <span>
              <p className={textGrayStyle}>Trạng thái đơn</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordStatus}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Ngày đặt đơn</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Khuyến mãi</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordDiscountAmount}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Đã trả</p>
              <p className={dataStyleMobile}>{formatter.format(obj.detail.orders.ordPaidMoney)}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Tổng tiền</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordTotalQty}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Phuơng tiện</p>
              <p className={dataStyleMobile}>{obj.detail.orders.orderPaymentMethod}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số điên thoại</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordBillMobile}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Tên</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordBillFirstName}</p>
            </span>
          </div>
          <div className="grid gap-6 mt-6">
            <span>
              <p className={textGrayStyle}>Địa chỉ 1</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordBillStreet1}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Email</p>
              <p className={dataStyleMobile}>{obj.detail.orders.ordBillEmail}</p>
            </span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Trạng thái đơn</p>
            <p className={dataStyle}>{obj.detail.orders.ordStatus}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày đặt đơn</p>
            <p className={dataStyle}>{obj.detail.orders.ordDate.split('T')[0]}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Khuyến mãi</p>
            <p className={dataStyle}>{obj.detail.orders.ordDiscountAmount}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Đã trả</p>
            <p className={dataStyle}>{formatter.format(obj.detail.orders.ordPaidMoney)}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tổng tiền</p>
            <p className={dataStyle}>{obj.detail.orders.ordTotalQty}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Phuơng tiện</p>
            <p className={dataStyle}>{obj.detail.orders.orderPaymentMethod}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số điên thoại</p>
            <p className={dataStyle}>{obj.detail.orders.ordBillMobile}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tên</p>
            <p className={dataStyle}>{obj.detail.orders.ordBillFirstName}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Địa chỉ 1</p>
            <p className={dataStyle}>{obj.detail.orders.ordBillStreet1}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Email</p>
            <p className={dataStyle}>{obj.detail.orders.ordBillEmail}</p>
          </span>
        </div>
      </>
    );
  }

  function PersonDetail({ gender = null, fullName = null, dateOfBirth = null, passportCard = null, index = null }) {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    if (mediaQuery.matches) {
      return (
        <div className="mt-3 pt-3 border-t">
          <div className="flex">
            <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
              {`Thông tin người ${index + 1}`}
            </h5>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <span>
              <p className={textGrayStyle}>Giới tính</p>
              <p className={dataStyleMobile}>{gender}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Tên đầy đủ</p>
              <p className={dataStyleMobile}>{fullName}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Ngày sinh</p>
              <p className={dataStyleMobile}>{dateOfBirth}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số hộ chiếu</p>
              <p className={dataStyleMobile}>{passportCard}</p>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div className="mt-3 pt-3 border-t">
        <div className="flex">
          <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
            {`Thông tin người ${index + 1}`}
          </h5>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Giới tính</p>
            <p className={dataStyle}>{gender}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Tên đầy đủ</p>
            <p className={dataStyle}>{fullName}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Ngày sinh</p>
            <p className={dataStyle}>{dateOfBirth}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số hộ chiếu</p>
            <p className={dataStyle}>{passportCard}</p>
          </span>
        </div>
      </div>
    );
  }

  function OrderDetail({ detail }) {
    return (
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Tên sản phẩm</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Giá tiền</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-gray-100">
                            {detail.map((item, index) => 
                              <>                              
                                <tr>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="flex items-center">
                                          <div className="font-medium text-gray-800">{item.productName}</div>
                                      </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="text-left font-medium text-green-500">{item.itemPrice} đ</div>
                                  </td>
                                </tr>
                              </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


const ChevLeft = ({ page = null, getPage = f => f }) => {
  if (page < 5) {
    return null;
  }
  return (
    <button className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md transition-colors duration-200 transform hover:bg-indigo-600 hover:text-white focus:outline-none"
      onClick={() => { getPage(4 * (Math.ceil(page / 4) - 1)); window.scrollTo(0, 0); }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const ChevRight = ({ page = null, totalPage = null, getPage = f => f }) => {
  if (page >= 4 * (Math.ceil(totalPage / 4) - 1) + 1) {
    return null;
  }
  return (
    <button className="flex items-center px-4 py-2 mx-1 text-gray-500 transition-colors duration-200 transform bg-white rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none"
      onClick={() => { getPage(4 * (Math.ceil(page / 4)) + 1); window.scrollTo(0, 0); }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const Page = ({ index = null, page = null, totalPage = null, getPage = f => f }) => {
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
        onClick={() => { getPage(minRange + index); window.scrollTo(0, 0); }}>
        {minRange + index}
      </button>
    </>
  );
};