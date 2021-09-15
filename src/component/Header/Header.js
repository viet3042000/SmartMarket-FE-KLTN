import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";


const Header = () => {
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="bg-white ">
      {/* <nav id="header" className=" w-full z-30 top-0 py-1 h-20">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <Link to={`../products/TravelInsurance`}>
              <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </Link>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className=" hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav className="rounded-full">
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <div>
                  <li>
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4 "
                      name="shop-button"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                </div>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    name="about-button"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="order-1 mx-auto md:order-2">
            <Link
              to="/Home"
              className="flex mx-auto items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
              name="S-market button"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              S-Market
            </Link>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            {state.user ? (
              <a
                className="inline-block no-underline hover:text-black"
                href="#"
                name="user-page"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </a>
            ) : (
              <div></div>
            )}

            <Link
              className="pl-3 inline-block no-underline hover:text-black"
              to="/orders"
              name="cart-order-page"
            >
              <svg
                classNameNameName="fill-current hover:text-black "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </Link>

            {state.user ? (
              <div
                className="bg-gray-50 inline-block no-underline hover:text-black ml-4"
                name="log-out-button"
              >
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div>
              </div>
            )}
            <div className= "p-3" >
             <Link to= "/login">
            <svg
                  className="w-5 h-5 hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                </Link>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="bg-white h-16">
        <div className="container px-6 py-2 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link to="/home">
                <div className="text-xl font-semibold text-gray-700 flex flex-wrap order-1 mx-auto md:order-2">
                  <svg
                    className="fill-current text-gray-800 mr-2 mx-auto hover:text-gray-700 dark:hover:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                  </svg>
                  <a
                    className="text-xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    S-Market
                  </a>
                </div>
              </Link>
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:h">
                <button
                  type="button"
                  className="md:hidden menu-list text-gray-800  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 "
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="flex-1 md:flex md:items-center md:justify-between md:float-none">
              <div className="flex flex-col md:flex-row md:items-center md:mx-8  ">
                <div className=" lg:block hidden">
                  {/* <a
                    href="/home"
                    className=" px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-800 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 "
                  >
                    Home
                  </a> */}
                  {/* <a
                    href="#"
                    className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-800 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 "
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-800 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 "
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-800 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 "
                  >
                    Service
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-800 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 "
                  >
                    Contact
                  </a> */}
                </div>
                {/* Search box */}
                <div className=" hidden lg:flex border border-gray-400">
                  <span className=" inset-y-0 left-0 flex items-center pl-3 ">
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-300 hover:text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className=" py-1 pl-5 pr-4 text-gray-700 placeholder-gray-600 placeholder-opacity-30 bg-white lg:w-56 focus:outline-none focus:placeholder-opacity-0"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                </div>
              </div>

              {/* Order Icon */}
              <div className=" hidden lg:flex ">
                <button
                  className=" mx-4 text-gray-700 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <Link to="/orders">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </Link>
                </button>

                {/* User icon */}
                <div className="hidden lg:flex p-3 text-gray-700 ">
                  <Link to="/user">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-black "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
                <LogInOut state={state} handleLogout={handleLogout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogInOut = ({ state = null, handleLogout = f => f }) => {
  if (!state.user) {
    return (
      <div className="flex justify-center items-center">
      <Link to="/login">

        <button
          className=" mx-4 text-gray-700 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
          aria-label="show notifications"
        >
          Login
        </button>
      </Link>
      </div>
    );
  }
  return (
    <button
      className=" mx-4 text-gray-700 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
      aria-label="show notifications"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default withRouter(Header);