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
    role: "CUSTOMER"
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

  const register = async e => {
    e.preventDefault();
    setLoading(true);

    // checkPass();
    
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
                  <input
                    type="number"
                    id="gender"
                    min="0" max="1"
                    value="0"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    onChange={event => {
                        detail.gender = event.target.value;
                      } 
                    }
                    required
                  />
                </div>
              </div>
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
