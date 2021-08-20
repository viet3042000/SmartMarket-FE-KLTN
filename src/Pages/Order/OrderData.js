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
        <span className="order-1 flex-1">
          Id: {id}
        </span>
        <span className="order-2 flex-1 bg-yellow-500 text-white">
          {state}
        </span>
        {show?
          <span className="order-3 flex-auto w-10/12 ml-auto">
            <button onClick={()=>{setShow(!show);}}>
              <BsCaretDownFill></BsCaretDownFill>
            </button>
          </span>
          :
          <span className="order-3 flex-auto w-10/12 ml-auto">
            <button onClick={()=>{setShow(!show);}}>
              <BsCaretLeftFill></BsCaretLeftFill>
            </button>
          </span>
        }
      </div>
      {/* <div name="orderDetail">
      Aliquyam lorem rebum erat ipsum
      </div> */}
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


  /*
  const state = useSelector(state => state.auth);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    state.user ?
      (
        fetch("http://10.14.101.202/insurance/travel-insurance-service/v1/inquire-bic-travel-insurance", {
          method: "POST",
          headers: {
            Authorization: `Bearer` + state.user.access_token
          }
        }).then(
          (response) => (
            console.log(JSON.stringify(response))
          )
        )
          .catch(
            error => {
              console.log(error);
              setLoading(false);
              setError(error);
            }
          )
      )
      :
      console.log('');
  }, []);

  if (state.user) {
    if (loading) {
      return (
        <div className="bg-yellow-50 text-center h-screen">
          <p>Loading</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="bg-yellow-50 text-center h-screen">
          <p>Fetching failed</p>
        </div>
      );
    }
    if (!data) {
      return null;
    }
  }
  return (
    <div>
      {state.user ?
        <div>
          {data.map(oder => (
            <div className="bg-yellow-50 " key="">
              <h1>{oder.name}</h1>
            </div>
          ))}
        </div>
        :
        <Login />
      }
    </div>
  );
}
*/