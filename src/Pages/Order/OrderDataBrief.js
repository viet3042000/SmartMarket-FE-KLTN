import React from 'react';
import { BsCaretLeftFill, BsCaretDownFill } from "react-icons/bs";


export default function OrderDataBrief({type=null, state=null, createAt=null, show=null, setShow=f=>f}) {
  const createDate = createAt.split('T')[0];
  const expandButton = show ? (
    <button onClick={()=>{setShow(!show);}}>
      <BsCaretDownFill></BsCaretDownFill>
    </button>
  ) : (
    <button onClick={()=>{setShow(!show);}}>
      <BsCaretLeftFill></BsCaretLeftFill>
    </button>
  );
  const stateDisp = (state === 'Success') ? (
    <p className="bg-green-100 border-1 rounded-lg p-1 text-green-500">
      {state}
    </p>
  ) : (
    <p className="bg-red-100 border-1 rounded-lg p-1 text-red-500">
      {state}
    </p>
  );
  return (
    <div name="orderBrief" className="flex relative">
      <span name="type" className="order-1 mr-7">
        <h6 className="font-medium">Product Name</h6>
        <p className="text-gray-500 text-opacity-75">{type}</p>
      </span>
      <span name="createDate" className="order-2">
        <h6 className="font-medium">Date placed</h6>
        <p className="text-gray-500 text-opacity-75">{createDate}</p>
      </span>
      <span name="status" className="absolute order-3 right-8 self-center">
        {stateDisp}
      </span>
      <span name="expand" className="absolute order-3 w-5 right-0 self-center">
        {expandButton}
      </span>
    </div>
  );
}