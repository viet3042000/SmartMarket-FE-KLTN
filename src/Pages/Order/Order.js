import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import orderData from "../../data/orders.json";

export function Order() {
  const [orders, setOrders] = useState(orderData);
  return (<>
  <OrderHeader />
  {
  orders.detail.content.map((obj, index) => (
    obj.id
  ))
  }
  </>);
}


const OrderHeader = () => (
  <div>
      <div className="bg-yellow-50 w-screen h-screen ">
        <section className="bg-white py-8 mt-0">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                  Your Order
                </a>

                <div className="flex items-center" id="store-nav-content">

                  <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                    </svg>
                  </a>

                  <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                    </svg>
                  </a>

                </div>
              </div>
            </nav>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              alalaalaf
            </div>
          </div>
        </section>
      </div>
    </div>
);

const Example = () => (
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
      Applicant Information
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
      Personal details and application.
    </p>
  </div>
  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Margot Foster
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Application for
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Backend Developer
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          margotfoster@example.com
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Salary expectation
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          $120,000
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          About
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Attachments
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path className="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" />
                </svg>
                <span className="ml-2 flex-1 w-0 truncate">
                  resume_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path className="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" />
                </svg>
                <span className="ml-2 flex-1 w-0 truncate">
                  coverletter_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>
);
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