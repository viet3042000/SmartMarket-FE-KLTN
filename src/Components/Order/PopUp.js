import React, {useState} from 'react';

export default function PopupEdit({ popupEdit=null, setPopupEdit=f=>f, formValues=null, changeFormValues=f=>f }) {
  if (!popupEdit) {
    return (<></>);
  }
  return (
  <>
      <div className="z-10 fixed left-0 top-0 h-screen w-screen bg-black opacity-60">
      </div>
      <div className="z-10 fixed left-0 top-0 h-screen w-screen flex justify-center items-center">
        <div className="fixed w-2/3 xl:w-1/3 h-3/4 bg-white rounded-lg">
          <div className="relative w-full h-full">
            <div className="h-12 border-b-2 py-3 px-6 flex justify-between">
              <span className="font-medium text-lg">Chỉnh sửa thông tin Order</span>
              <button className="font-medium text-lg hover:opacity-50 py-1 px-2 focus:outline-none" onClick={() => setPopupEdit(false)}> X </button>
            </div>
            <div className="px-6 py-5">
              <form id="orderEditForm" onSubmit={()=>{}}>
                <div className="h-5/6 grid gap-6 grid-cols-2">
                  <div className="">
                    <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                      Ngày bắt đầu
                    </label>
                      <input type="date" id="fromDate" name="fromDate" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                      Ngày kết thúc
                    </label>
                      <input type="date" id="toDate" name="toDate" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="amountPersons" className="block text-sm font-medium text-gray-700">
                      Số người
                    </label>
                    <input type="number" id="amountPersons" name="amountPersons" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="promotion" className="block text-sm font-medium text-gray-700">
                      Mã khuyến mãi
                    </label>
                      <input type="number" id="promotion" name="promotion" onChange="" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                  <div>
                    <label htmlFor="promotion" className="block text-sm font-medium text-gray-700">
                      Địa chỉ khuyến mãi
                    </label>
                    <input type="text" id="promotionAddress" name="promotionAddress" value={formValues.promotionAddress} onChange={changeFormValues} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 shadow-sm border border-gray-400 rounded-md"></input>
                  </div>
                </div>
              </form>
            </div>
            <div className="absolute bottom-4 w-full h-12 px-6 flex justify-between items-center">
              <button type="button" className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none" onClick={() => setPopupEdit(false)}>Thoát</button>
              <button type="submit" form="orderEditForm" className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


{/* <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form> */}