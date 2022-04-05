import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import registerUser from '../../api/User/registerUser';
import PopUpSuccess from './PopUp/PopUpSuccess';


const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorDisp, setErrorDisp] = useState(false);
  const [popupRegisterSuccess, setPopupRegisterSuccess] = useState(false);

  let detail= {
    enabled: 1,
    role: "CUSTOMER",
    gender: 1,
  };

  // function checkPass() {
  //   if (document.getElementById('password').value != '' && document.getElementById('confirm_password').value != '') {
  //     if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
  //         detail.password = document.getElementById('password').value;
  //         document.getElementById('button').disabled = false;
  //     } 
  //   } else {
  //       document.getElementById('button').disabled = true;
  //   }
  // }

  // const setGender = async e => {
  //   e.preventDefault();
  //   const gender = document.getElementById("selectGender").value;
  //   if (gender==='Nữ') {
  //     detail.gender = 2;
  //   } else if (gender ==='Nam') {
  //     detail.gender = 1;
  //   } else {
  //     detail.gender = 0;
  //   }
  // };

  const register = async e => {
    e.preventDefault();
    setLoading(true);

    // checkPass();

    const gender = document.getElementById("selectGender").value;
    if (gender==='Nữ') {
      detail.gender = 2;
    } else if (gender ==='Nam') {
      detail.gender = 1;
    } else {
      detail.gender = 0;
    }
    
    await registerUser( detail )
      .then((data) => {
         setMessage(data);
         setPopupRegisterSuccess(true);
        })
      .catch(error => {
          setErrorDisp(true);
          setTimeout(() => setErrorDisp(false), 5000);
          console.log(error);
        }
      );
    setLoading(false);
    setPopupRegisterSuccess(true);
    detail= {
      enabled: 1,
      role: "CUSTOMER"
    };

    document.getElementById("fullName").value = "";
  };
  

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="animate-spin w-24 h-24 text-gray-600 opacity-40 -mt-40">
          <VscLoading size={100} />
        </div>
      </div>
    );
  }

  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <section className="h-full bg-white bg-opacity-50 border-gray-800">
      <form className="container max-w-2xl mx-auto border-gray-300  md:w-6/12" 
        onSubmit={register}
      >
        <div className="p-4 bg-white  border-gray-300 rounded-lg bg-opacity-5">
            <div className="px-18">
              <h1 className="text-gray-800 text-3xl text-center">Đăng ký tài khoản </h1>
            </div>
        </div>
        <hr />
      
        <div className="space-y-2 bg-white ">
          <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0 border-gray-300">

            <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
              <div className="flex">
                <h2 label="fullName" className="max-w-sm  text-left py-2 md:w-1/5">Họ và tên</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="fullName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.fullName = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
              <h2 label="userName" className="max-w-sm  text-left py-2 md:w-1/5">Tài khoản</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="userName"
                    className="  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.userName = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="password" className="max-w-sm  text-left py-2 md:w-1/5">Mật khẩu</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="password"
                    id="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.password = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
                 <h2 label="confirm_password" className="max-w-sm  text-left py-2 md:w-1/5">Nhập lại mật khẩu</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="password"
                    id="confirm_password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="birthday" className="max-w-sm  text-left py-2 md:w-1/5">Email</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="email"
                    id="user-info-Date-of-Birth"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.email = event.target.value;
                      } 
                    }  
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="phoneNumber" className="max-w-sm  text-left py-2 md:w-1/5">Số điện thoại</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="phoneNumber"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.phoneNumber = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="address" className="max-w-sm  text-left py-2 md:w-1/5">Địa chỉ</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="address"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                       detail.address = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="gender" className="max-w-sm  text-left py-2 md:w-1/5">Giới tính</h2>
                <div className=" relative md:w-4/5">
                  <select id="selectGender"
                    className="rounded-lg border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
                    <option selected value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
              </div>

              {/* <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <select className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                </div>
              </div> */}

              <div className="flex">
                <h2 label="identifyNumber" className="max-w-sm  text-left py-2 md:w-1/5">Số CMND/CCCD</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="identifyNumber"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.identifyNumber = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="birthday" className="max-w-sm  text-left py-2 md:w-1/5">Ngày sinh</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="date"
                    id="birthDate"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.birthDate = event.target.value;
                      } 
                    }
                    max={currentDate}
                    required
                  />
                </div>
              </div>

            </div>
          </div>
          <hr />

          <div className="px-4 mx-auto pb-5 text-gray-500 md:w-3/12">
            <button
              type="submit"
              id="button"
              className="py-2 px-4 mt-8 bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Lưu thông tin
            </button>
          </div>
          <PopUpSuccess popupRegisterSuccess={popupRegisterSuccess} message="Tạo user thành công" />
        </div>
      </form>
      
    </section>
  );
};

export default RegisterUser;
