import React, {useState} from 'react';

export default function PopupEdit({ popupEdit=null, setPopupEdit=f=>f, formValues=null, changeFormValues=f=>f }) {
  if (!popupEdit) {
    return (<></>);
  }
  return (
    <>
    <div className="z-10 fixed left-0 top-0 h-screen w-screen bg-black opacity-60"></div>
      <div className="z-10 fixed left-1/4 top-16 w-1/2 h-3/4 bg-white rounded-lg flex flex-col">
      <div className="h-12 border-b-2 py-3 px-6 flex justify-between">
        <span className="font-medium text-lg">Edit Order Detail</span>
        <button className="font-medium text-lg hover:opacity-50 py-1 px-2" onClick={() => setPopupEdit(false)}> X </button>
      </div>
      <div className="h-5/6">
      <form id="orderEditForm" onSubmit={()=>{}}>
        <div>
          <label>
            From date
            <input type="date" name="fromDate" onChange="" className="border"></input>
          </label>
        </div>
        <div>
          <label>
            To date
            <input type="date" name="toDate" onChange="" className="border"></input>
          </label>
        </div>
        <div>
          <label>
            Number of person(s)
            <input type="number" name="amountPersons" onChange="" className="border"></input>
          </label>
        </div>
        <div>
          <label>
            Promotion
            <input type="number" name="promotion" onChange="" className="border"></input>
          </label>
        </div>
        <div>
          <label>
            Promotion Address
            <input type="text" name="promotionAddress" value={formValues.promotionAddress} onChange={changeFormValues} className="border"></input>
          </label>
        </div>
      </form>
      </div>
      <div className="h-12 pb-3 px-6 flex justify-between items-center">
        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setPopupEdit(false)}>Exit</button>
        <button type="submit" form="orderEditForm" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
      </div>
    </div>
    </>
  );
}