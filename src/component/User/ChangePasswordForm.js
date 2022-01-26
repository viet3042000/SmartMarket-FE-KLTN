import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import changePassword from '../../api/User/changePassword';

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [secondNewPassword, setSecondNewPassword] = useState("");
  const [message, setMessage] = useState('');

  const setPassword = async (currentPassword, newPassword, secondNewPassword) => {
    setLoading(true);
    await changePassword( currentPassword, newPassword )
      // .then((data) => { setMessage(data.detail); })
      .catch(error => console.log(error));
    setLoading(false);
    setCurrentPassword('');
    setNewPassword('');
    setSecondNewPassword('');
  };

//   const onSavePost = () => {
//     if (title && content) {
//         // dispatch( postAdded({
//         //   // If an action needs to contain a unique ID or some other random value,
//         //   //  always generate that first and put it in the action object
//         //     id: nanoid(),
//         //     title,
//         //     content
//         //   })
//         // )
//         dispatch(postAdded({ title, content } ))
//         setTitle('')
//         setContent('')
//       }
//   };

  const onCurrentPasswordChanged = e => setCurrentPassword(e.target.value);
  const onNewPasswordChanged = e => setNewPassword(e.target.value);
  const onSecondNewPasswordChanged = e => setSecondNewPassword(e.target.value);

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
      <form className="container max-w-2xl mx-auto border-gray-300  md:w-6/12" >

        <div className="p-4 bg-white  border-gray-300 rounded-lg bg-opacity-5">
            <div className="px-18">
              <h1 className="text-gray-800 text-3xl text-center">Thay đổi mật khẩu </h1>
            </div>
        </div>
        <hr />
      
        <div className="space-y-2 bg-white ">
          <div className="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0 border-gray-300">

            <div className="max-w-sm mx-auto space-y-5 md:min-w-full">
              <div className="flex">
              <h2 label="name" className="max-w-sm  text-left py-2 md:w-1/5">Mật khẩu hiện tại</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-name"
                    className="  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="Current Password"
                    onChange={onCurrentPasswordChanged}
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <h2 label="birthday" className="max-w-sm  text-left py-2 md:w-1/5">Mật khẩu mới</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-Date-of-Birth"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="New Password"
                    onChange={onNewPasswordChanged}
                    required
                  />
                </div>
              </div>
              <div className="flex">
                 <h2 label="gender" className="max-w-sm  text-left py-2 md:w-1/5">Nhập lại kật khẩu</h2>
                <div className=" relative md:w-4/5">
                  <input
                    type="text"
                    id="user-info-gender"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder="ReType New Password"
                    onChange={onSecondNewPasswordChanged}
                    required
                  />
                </div>
              </div>

            </div>
          </div>
          <hr />

          <div className=" px-4 mx-auto pb-5 text-gray-500 md:w-3/12">
            <button
              type="submit"
              className="py-2 px-4 bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={() =>setPassword( currentPassword, newPassword )}
            >
              Lưu mật khẩu
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default ChangePasswordForm;
