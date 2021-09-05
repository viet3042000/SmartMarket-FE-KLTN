import React, { useEffect, useState } from 'react';
import OrderDataBrief from "./OrderDataBrief.js";
import OrderDataDetail from "./OrderDataDetail.js";

export default function OrderData({type=null, orderId=null, state=null, createdLogtimestamp=null, payload=null}) {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setShow(!show);
  // }, [clicked]);
  //  onClick={()=>{setShow(!show);}}
  return (
    <div className="flex flex-col w-5/6 p-6 bg-white border-2 rounded-xl shadow-md border-gray-200">
      <OrderDataBrief type={type} state={state} createAt={createdLogtimestamp} show={show} setShow={setShow}/>
      <OrderDataDetail show={show} payload={payload} />
    </div>
  );
}
