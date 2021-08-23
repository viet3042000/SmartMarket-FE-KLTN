import React, {useState} from 'react';

const textGrayStyle = 'text-gray-500 text-opacity-75';
const dataStyle = 'font-normal';

export default function OrderDataDetail({ show=null, payload=null }) {
  if (!show) {
    return (<></>);
  }

  const [currentTab, setCurrentTab] = useState('detail');
  const obj = JSON.parse(payload);
  return (
    <>
    <Buttons currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    <DetailTab obj={obj} currentTab={currentTab} />
    <PaymentTab obj={obj} currentTab={currentTab} />
    </>
  );
}

function Buttons({ currentTab=null, setCurrentTab=f=>f }) {
  if (currentTab === 'detail') {
    return (
      <div className=" border-b-2 flex">
        <span className="mr-6 border-b-2 pb-2 border-red-400 font-bold">
          <button onClick={() => setCurrentTab('detail')}>
            Order Detail
          </button>
        </span>
        <span className={textGrayStyle}>
          <button onClick={() => setCurrentTab('payment')}>
            Order Payment
          </button>
        </span>
      </div>
    );
  } else if (currentTab === 'payment') {
    return (
      <div className=" border-b-2 flex">
        <span className="mr-6 text-gray-500 text-opacity-75 ">
          <button onClick={() => setCurrentTab('detail')}>
            Order Detail
          </button>
        </span>
        <span className="border-b-2 pb-2 border-red-400 font-bold">
          <button onClick={() => setCurrentTab('payment')}>
            Order Payment
          </button>
        </span>
      </div>
    );
  }
}

function DetailTab({ obj=null, currentTab=null }) {
  if (currentTab !== 'detail') {
    return (<></>);
  }
  return (
    <>
    <div className="grid grid-cols-2 gap-6">
      <span>
        <p className={textGrayStyle}>From date</p>
        <p className={dataStyle}>{obj.detail.trv.fromDate.split('T')[0]}</p>
      </span>
      <span>
        <p className={textGrayStyle}>To date</p>
        <p className={dataStyle}>{obj.detail.trv.toDate.split('T')[0]}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Effective days</p>
        <p className={dataStyle}>{obj.detail.trv.amountDays}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Number of person(s)</p>
        <p className={dataStyle}>{obj.detail.trv.amountPersons}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Promotion</p>
        <p className={dataStyle}>{obj.detail.trv.promotion === 0 ? 'None' : obj.detail.trv.promotion}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Promotion Address</p>
        <p className={dataStyle}>{obj.detail.trv.promotionAddress === '' ? 'None' : obj.detail.trv.promotionAddress}</p>
      </span>
    </div>
    {obj.detail.trvDetails.map((obj, index) => <PersonDetail key={index} {...obj} index={index} />)}
    </>
  );
}

function PaymentTab({ obj=null, currentTab=null }) {
  if (currentTab !== 'payment') {
    return (<></>);
  }
  return (
    <>
    <div className="grid grid-cols-2 gap-6">
      <span>
        <p className={textGrayStyle}>Order status</p>
        <p className={dataStyle}>{obj.detail.orders.ordStatus}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order date</p>
        <p className={dataStyle}>{obj.detail.orders.ordDate.split('T')[0]}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order discount amount</p>
        <p className={dataStyle}>{obj.detail.orders.ordDiscountAmount}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order paid amount</p>
        <p className={dataStyle}>{obj.detail.orders.ordPaidMoney}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order Total Quantity</p>
        <p className={dataStyle}>{obj.detail.orders.ordTotalQty}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order payment method</p>
        <p className={dataStyle}>{obj.detail.orders.orderPaymentMethod}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order bill mobile</p>
        <p className={dataStyle}>{obj.detail.orders.ordBillMobile}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order bill first name</p>
        <p className={dataStyle}>{obj.detail.orders.ordBillFirstName}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order bill Street 1</p>
        <p className={dataStyle}>{obj.detail.orders.ordBillStreet1}</p>
      </span>
      <span>
        <p className={textGrayStyle}>Order bill email</p>
        <p className={dataStyle}>{obj.detail.orders.ordBillEmail}</p>
      </span>
    </div>
    </>
  );
}

function PersonDetail({ gender=null, fullName=null, dateOfBirth=null, passportCard=null, index=null }) {
  return (
    <>
      <div className="inline-flex">
        <h5 className="text-xl font-medium border-b-2 border-black ">
          {`Person ${index + 1} Detail`}
        </h5>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <span>
          <p className={textGrayStyle}>Gender</p>
          <p className={dataStyle}>{gender}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Fullname</p>
          <p className={dataStyle}>{fullName}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Date of birth</p>
          <p className={dataStyle}>{dateOfBirth}</p>
        </span>
        <span>
          <p className={textGrayStyle}>Passport number</p>
          <p className={dataStyle}>{passportCard}</p>
        </span>
      </div>
    </>
  );
}