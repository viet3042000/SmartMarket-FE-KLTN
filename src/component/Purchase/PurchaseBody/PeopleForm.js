import React from 'react';

const PeopleForm = ({ currentStep = null, setCurrentStep=f=>f, peopleForm = null, changePeopleForm = f => f, submit = f => f }) => {
  if (currentStep !== 2) return (<></>);
  return (
    <>
      <section className="mt-6 p-6 bg-white rounded-md border-2 border-gray-200">
        <form id="peopleForm" onSubmit={submit}>
          {
            peopleForm.map((item, index) => <FormInput key={index} obj={item} index={index} changePeopleForm={changePeopleForm} />)
          }
        </form>
      </section>
      <div className="flex justify-between mt-6">
        <button onClick={() => setCurrentStep(prev => prev - 1)} className="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          type="submit"
          form="peopleForm"
          className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Tiếp theo
        </button>
      </div>
    </>
  );
};

const FormInput = ({ obj = null, index = null, changePeopleForm = f=>f }) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Thông tin người {index + 1}</h2>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6">
        <div>
          <label className="text-gray-900 font-medium" htmlFor="fullName">Tên đầy đủ</label>
          <input value={obj.fullName} onChange={e => changePeopleForm(e, index)} placeholder="Nguyễn Văn A" name="fullName" id="fullName" type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring placeholder-gray-600 placeholder-opacity-30 focus:placeholder-opacity-0" />
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="gender">Giới tính</label>
          <select value={obj.gender} onChange={e => changePeopleForm(e, index)} name="gender" id="gender" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring appearance-none">
            <option value={1}>Nam</option>
            <option value={0}>Nữ</option>
          </select>
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="dateOfBirth">Ngày sinh</label>
          <input value={obj.dateOfBirth} onChange={e => changePeopleForm(e, index)} name="dateOfBirth" id="dateOfBirth" type="date" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
        </div>

        <div>
          <label className="text-gray-900 font-medium" htmlFor="passportCard">Số hộ chiếu</label>
          <input value={obj.passportCard} onChange={e => changePeopleForm(e, index)} placeholder="1234567890" name="passportCard" id="passportCard" type="tel" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring placeholder-gray-600 placeholder-opacity-30 focus:placeholder-opacity-0" />
        </div>
      </div>
    </>
  );
};

export default PeopleForm;
