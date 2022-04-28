import React, { useState, useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const isExpired = checkExpiredToken({ state });
    if (isExpired) {
      handleLogout;
    }
  }, [location]);

  const handleLogout = e => {
    e.preventDefault();
    // dispatch(logout());
    dispatch(logout(state.user.username));
  };

  return (
    <div className="bg-white h-16 px-6 mx-auto max-w-7xl">
      {/* <div className="relative flex flex-row-reverse items-center z-20 h-16">
        <RightDisp state={state} handleLogout={handleLogout} />
      </div> */}
      <div className="relative flex items-center justify-between z-20 h-16">
        <div className="text-xl font-semibold text-black flex">
          <Link to="/home">
            <div className="flex">
              <svg
                className="w-8 mr-2 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <a
                className="font-bold text-black"
                href="#"
              >
                S-Market
              </a>
            </div>
          </Link>

          <SearchBar />
        </div>
        <RightDisp state={state} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

const RightDisp = ({ state = null, handleLogout = f => f }) => {
  const [hover, setHover] = useState(false);
  const wrapperRef = useRef(null);
  const mediaQuery = window.matchMedia('(max-width: 640px)');

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setHover(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  if (!state.user) {
    return (
      <div className=" flex justify-center items-center text-black py-3 " >
        <Link to="/login">
          <button
            // className="px-5 py-2 border border-black rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
            className="px-5 py-2 rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
          >
            Đăng nhập
          </button>
        </Link>

        <Link to="/register">
          <button
            // className="px-5 py-2 border border-black rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
            className="px-5 py-2 ml-4 rounded-lg text-md font-medium bg-white text-black md:block dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:focus:text-gray-400 focus:outline-none"
          >
            Đăng ký
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex text-black font-medium" >
      <div ref={wrapperRef} className="flex text-gray-700 relative">
        <button
          className="text-gray-700 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
          onClick={() => setHover(prev => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-black"
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

          {/* { mediaQuery.matches ? null : 
            (
              <p className="ml-2">
                {state.user.username}
              </p>
            )
          } */}
          
        </button>

        <DropdownItem hover={hover} setHover={setHover} handleLogout={handleLogout} />
      </div>

      { mediaQuery.matches ? null : 
        (
          <p className="ml-2">
            {state.user.username}
          </p>
        )
      }
    </div >
  );
};

const DropdownItem = ({ hover = null, setHover = f => f, handleLogout = f => f }) => {
  const [show, setShow] = useState(0);
  useEffect(() => {
    if (show === 0) {
      // first render
      setShow(2);
    } else {
      setShow(hover ? 1 : -1);
    }
  }, [hover]);
  return (
    <div className={show === 1 ? styles.slideout : show === -1 ? styles.slidein : 'absolute invisible'}>
      <div className="bg-white w-44 text-black font-black p-1 shadow-md rounded-md flex flex-col items-start">
        <div className="w-full">
          <Link to="/user">
            <button
              className="border-b py-3 w-full md:block hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:outline-none"
              aria-label="show notifications"
              onClick={() => setHover(prev => !prev)}
            >
              Tài khoản của tôi
            </button>
          </Link>
        </div>

        <div className="w-full">
          <Link to="/orders">
            <button
              className="border-b py-3 w-full md:block hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:outline-none"
              aria-label="show notifications"
              onClick={() => setHover(prev => !prev)}
            >
              Đơn hàng
            </button>
          </Link>
        </div>

        <div className="w-full">
          <Link to="/cart">
            <button
              className="border-b py-3 w-full md:block hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:outline-none"
              aria-label="show notifications"
              onClick={() => setHover(prev => !prev)}
            >
              Giỏ hàng
            </button>
          </Link>
        </div>

        {/* <div className="w-full">
          <Link to="/change-password">
            <button
              className="border-b py-3 w-full md:block hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:outline-none"
              aria-label="show notifications"
              onClick={() => setHover(prev => !prev)}
            >
              Đổi mật khẩu
            </button>
          </Link>
        </div> */}

        <button
          className="py-3 w-full md:block hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:outline-none"
          aria-label="show notifications"
          onClick={(e) => { setHover(prev => !prev); handleLogout(e); }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};


function parseJwt({ token }) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function checkExpiredToken({ state }) {
  if (state.user) {
    const token = state.user.access_token;
    const jsonToken = parseJwt({ token });
    if (jsonToken.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  }
  return false;
}

export default withRouter(Header);