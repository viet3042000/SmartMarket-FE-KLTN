import React, { useState } from 'react';
import CartDataBrief from './CartDataBrief';
import CartDataDetail from './CartDataDetail';

export default function CartData({ item, index }) {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(!show);
  // }, [clicked]);
  //  onClick={()=>{setShow(!show);}}
  return (
    <div className="flex flex-col w-full xl:max-w-2xl p-6 bg-white border-2 rounded-xl shadow-md border-gray-200 overflow-hidden">
      <CartDataBrief item={item} show={show} setShow={setShow} />
      <CartDataDetail item={item} index={index} show={show} setShow={setShow}/>
    </div>
  );
}
