import React, { useEffect, useState } from 'react';
import OrderDataBrief from "./OrderDataBrief.js";
import OrderDataDetail from "./OrderDataDetail.js";

export default function OrderData({type=null, state=null, createAt=null, payload=null}) {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setShow(!show);
  // }, [clicked]);
  //  onClick={()=>{setShow(!show);}}
  return (
    <div className="flex flex-col w-5/6 p-6 bg-white border-2 rounded-xl shadow-md border-gray-200 gap-y-6">
      <OrderDataBrief type={type} state={state} createAt={createAt} show={show} setShow={setShow}/>
      <OrderDataDetail show={show} payload={payload}/>
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
