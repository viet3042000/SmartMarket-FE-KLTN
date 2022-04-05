import React, { useState } from 'react';
import ErrorPopup from '../Login/ErrorPopup.js';

const textGrayStyle = 'text-gray-500 text-opacity-75';
const dataStyle = 'font-normal';
const dataStyleMobile = 'font-normal text-sm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../actions/cart.js';

export default function CartDataDetail({ item=null, index, show = null, setShow=f=>f}) {
  if (!show) {
    return (<></>);
  }
  const dispatch = useDispatch();
  const requestBodyState = useSelector(state => state.requestBody);

  const [popupEdit, setPopupEdit] = useState(false);
  const [currentTab, setCurrentTab] = useState('detail');
  const [popupDelete, setPopupDelete] = useState(false);
  const [errorDisp, setErrorDisp] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  const removeSubmit = (event, index) => {
    event.preventDefault();
    const currentRequestBody = requestBodyState.requestBody;
    const orderItems = currentRequestBody.detail.orderItems;
    currentRequestBody.detail.orderPrice -= orderItems[index].itemPrice;
    orderItems.splice(index, 1);
    if ( orderItems.length > 0 ) {
        currentRequestBody.detail.orderItems = orderItems;
        localStorage.setItem("requestBody", JSON.stringify(currentRequestBody));
        dispatch(deleteFromCart(currentRequestBody));
    } else {
        localStorage.removeItem("requestBody");
        dispatch(deleteFromCart(null));
    }
    setShow(!show);
  };

  return (
    <>
      {errorDisp && <ErrorPopup error={error}/>}
      <Buttons />
      <DetailTab item={item} currentTab={currentTab} />
    </>
  );

  function Buttons() {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    const tabDisplay = (
      <>
        <span className="mr-6 border-b-2 pb-2 border-red-500 font-bold">
          <button className="focus:outline-none" onClick={() => setCurrentTab('detail')}>
            Chi tiết sản phẩm
          </button>
        </span>
      </>
    );


    if (mediaQuery.matches) {
      return (
        <>
          <div className="flex mb-6 mt-2">
              <button 
              className="w-1/2 px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 opacity-50 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
              onClick={(e) => removeSubmit(e, index)}
              >
                Xóa khỏi giỏ hàng
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
        <span className="absolute right-0 bottom-1">
            <button className="px-3 py-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                onClick={(e) => removeSubmit(e, index)}
            >
               Xóa khỏi giỏ hàng
            </button>
        </span> 
      </div>
    );
  }

  function DetailTab({ item = null, currentTab = null }) {
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
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.fromDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Ngày kết thúc</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.toDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số ngày</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountDays}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số người</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Khuyễn mãi</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.promotion === 0 ? 'Không có' : item.productDetailCreateRequest.trv.promotion}</p>
            </span>

            {/* <span>
              <p className={textGrayStyle}>Địa chỉ Sales</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.promotionAddress === '' ? 'None' : item.productDetailCreateRequest.trv.promotionAddress}</p>
            </span> */}

            <span>
              <p className={textGrayStyle}>Họ và tên người đặt</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số điện thoại người đặt</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Email người đặt</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Địa chỉ người đặt</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
          </div>
          {item.productDetailCreateRequest.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}
        </>
      );
    }
    return (
      <>
        <div className="mt-3 pt-3 border-t">
          <div className="flex">
            <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
              {`Đơn hàng`}
            </h5>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <span>
              <p className={textGrayStyle}>Ngày đặt hàng</p>
              {/* <p className={dataStyle}>{obj.detail.trv.toDate.split('T')[0]}</p> */}
              <p className={dataStyle}>{item.productDetailCreateRequest.orders.ordDate.split('T')[0]}</p>
            </span>

            <span>
              <p className={textGrayStyle}>Ngày bắt đầu</p>
              {/* <p className={dataStyle}>{obj.detail.trv.fromDate.split('T')[0]}</p> */}
              <p className={dataStyle}>{item.productDetailCreateRequest.trv.fromDate.split('T')[0]}</p>
            </span>

            <span>
              <p className={textGrayStyle}>Ngày kết thúc</p>
              {/* <p className={dataStyle}>{obj.detail.trv.toDate.split('T')[0]}</p> */}
              <p className={dataStyle}>{item.productDetailCreateRequest.trv.toDate.split('T')[0]}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số ngày</p>
              {/* <p className={dataStyle}>{obj.detail.trv.amountDays}</p> */}
              <p className={dataStyle}>{item.productDetailCreateRequest.trv.amountDays}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Số người</p>
              {/* <p className={dataStyle}>{obj.detail.trv.amountPersons}</p> */}
              <p className={dataStyle}>{item.productDetailCreateRequest.trv.amountPersons}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Khuyễn mãi</p>
              <p className={dataStyle}>{item.productDetailCreateRequest.trv.promotion === 0 ? 'Không có' : item.productDetailCreateRequest.trv.promotion}</p>
            </span>

            {/* <span>
              <p className={textGrayStyle}>Địa chỉ Sales</p>
              <p className={dataStyleMobile}>{item.productDetailCreateRequest.trv.promotionAddress === '' ? 'None' : item.productDetailCreateRequest.trv.promotionAddress}</p>
            </span> */}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t">
          <div className="flex">
            <h5 className="text-lg font-semibold text-gray-700 capitalize mb-3">
              {`Người đặt`}
            </h5>
          </div>
          <div className="grid grid-cols-2 gap-6">
          <span>
            <p className={textGrayStyle}>Họ và tên</p>
            <p className={dataStyle}>{item.productDetailCreateRequest.orders.ordBillFirstName}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Số điện thoại</p>
            <p className={dataStyle}>{item.productDetailCreateRequest.orders.ordBillMobile}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Email</p>
            <p className={dataStyle}>{item.productDetailCreateRequest.orders.ordBillEmail}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Địa chỉ</p>
            <p className={dataStyle}>{item.productDetailCreateRequest.orders.ordBillStreet1}</p>
          </span>
          </div>
        </div>

        {item.productDetailCreateRequest.trvDetails.map((detail, index) => <PersonDetail key={index} {...detail} index={index} />)}
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
              {/* {gender === 0 ? 'Nữ' : 'Nam'} */}
              <p className={dataStyleMobile}>{gender === 0 ? 'Nữ' : 'Nam'}</p>
            </span>
            <span>
              <p className={textGrayStyle}>Họ và tên</p>
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
            <p className={textGrayStyle}>Họ và tên</p>
            <p className={dataStyle}>{fullName}</p>
          </span>
          <span>
            <p className={textGrayStyle}>Giới tính</p>
            <p className={dataStyle}>{gender === 0 ? 'Nữ' : 'Nam'}</p>
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
}