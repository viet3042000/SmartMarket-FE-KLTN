import React, { useState, useEffect } from 'react';
import useFormArr from '../../../../hooks/Form/useFormArr';

// "trvDetails": [
//   {
//     "fullName": "Ari chan",
//     "gender": 0,
//     "dateOfBirth": "1990-12-20",
//     "passportCard": "123"
//   }
// ]

const peopleFormInitial = {
  "fullName": "Nguyen Xuan Hop",
  "gender": 1,
  "dateOfBirth": "1998-12-20", // yyyy-mm-dd
  "passportCard": 23232323,
};

const defaultObj = {
  "fullName": "",
  "gender": 1,
  "dateOfBirth": "", // yyyy-mm-dd
  "passportCard": null,
};

const usePeopleForm = (number, setCurrentStep) => {
  const [peopleForm, changePeopleForm, resetPeopleForm] = useFormArr(peopleFormInitial, defaultObj, number);
  
  const peopleSubmit = event => {
    event.preventDefault();
    // updateTrv(orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate);
    // resetOrderForm();
    // setToDate("");
    setCurrentStep(prev => prev + 1);
  };
  return {peopleForm, changePeopleForm, peopleSubmit};
};

export default usePeopleForm;
