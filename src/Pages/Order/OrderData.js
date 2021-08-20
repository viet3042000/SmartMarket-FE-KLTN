import React, { useEffect, useState } from 'react';
import orderData from "../../data/orders.json";
import { BsCaretLeftFill, BsCaretDownFill } from "react-icons/bs";

export default function OrderData({id=null, state=null}) {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setShow(!show);
  // }, [clicked]);
  //  onClick={()=>{setShow(!show);}}
  return (
    <div className="flex flex-col w-5/6 p-4 bg-white border-2 rounded-xl shadow-md border-gray-200">
      <div name="orderBrief" className="flex">
        <span name="id" className="order-1 flex-1">
          Id: {id}
        </span>
        <span name="status" className="order-2 flex-1 bg-yellow-500 text-white">
          {state}
        </span>
        {show?
          <span name="expand" className="order-3 flex-auto w-10/12 ml-auto">
            <button onClick={()=>{setShow(!show);}}>
              <BsCaretDownFill></BsCaretDownFill>
            </button>
          </span>
          :
          <span name="expand" className="order-3 flex-auto w-10/12 ml-auto">
            <button onClick={()=>{setShow(!show);}}>
              <BsCaretLeftFill></BsCaretLeftFill>
            </button>
          </span>
        }
      </div>
      {show?
        <div name="orderDetail">
          Aliquyam lorem rebum erat ipsum
        </div>
        :
        <div></div>
      }
    </div>
  );
  //   show?
  //   <div className="flex w-5/6 p-6 bg-white border-2 rounded-xl shadow-md border-gray-200">
  //     <p>
  //     Aliquyam lorem rebum erat ipsum dolore amet tempor consetetur consetetur. Ipsum sit et sea dolore dolores lorem. Sed eirmod gubergren.
  //     </p>
  //     <button onClick="">
  //       <BsCaretDownFill></BsCaretDownFill>
  //     </button>
  //   </div>
  // :
  //   <div className="flex w-5/6 p-6 bg-white border-2 rounded-xl shadow-md border-gray-200">
  //     <p>
  //       Erat diam et at eirmod ipsum sit sea. Elitr ut lorem lorem sed et erat, gubergren diam aliquyam ipsum sit ut amet at. Tempor diam clita sadipscing dolores gubergren ipsum ipsum ipsum diam. Accusam sadipscing magna takimata kasd invidunt. Amet sit magna eirmod nonumy eirmod est no diam, takimata voluptua.
  //     </p>
  //     <button onClick="">
  //       <BsCaretLeftFill></BsCaretLeftFill>
  //     </button>
  //   </div>
  // );
}
