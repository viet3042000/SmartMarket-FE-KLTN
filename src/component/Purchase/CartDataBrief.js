import React from 'react';
import { BsCaretLeftFill, BsCaretDownFill } from "react-icons/bs";


export default function CartDataBrief({item=null, show=null, setShow=f=>f}) {
  const mediaQuery = window.matchMedia('(max-width: 640px)');

  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
  });

  const expandButton = show ? (
    <button className="focus:outline-none" onClick={()=>{setShow(!show);}}>
      <BsCaretDownFill></BsCaretDownFill>
    </button>
  ) : (
    <button className="focus:outline-none" onClick={()=>{setShow(!show);}}>
      <BsCaretLeftFill></BsCaretLeftFill>
    </button>
  );

  if (mediaQuery.matches) {
    return (
      <div name="orderBrief" className="flex relative">
      {/* <span name="type" className="mr-7">
        <h6 className="font-medium"> { type } </h6>
        <p className="text-gray-500 text-opacity-75">{createDate}</p>
      </span> */}
      <span name="expand" className="absolute order-3 w-5 right-0 self-center">
        {expandButton}
      </span>
    </div>
    );
  }


  return (
    <div name="orderBrief" className="flex relative">
      <span className="mr-7">
        {/* <h6 className="font-medium"> { mediaQuery.matches ? type : 'Tên sản phẩm' } </h6>
        <p className="text-gray-500 text-opacity-75">{type}</p> */}

        <h6 className="font-medium">Tên sản phẩm</h6>
        <p className="text-gray-500 text-opacity-75">{item.productName}</p>
      </span>
      <span className="">
        <h6 className="font-medium">Giá tiền</h6>
        <p className="text-gray-500 text-opacity-75">{formatter.format(item.itemPrice)}</p>
      </span>
      <span name="expand" className="absolute order-3 w-5 right-0 self-center">
        {expandButton}
      </span>
    </div>
  );
}