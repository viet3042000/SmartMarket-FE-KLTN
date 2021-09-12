import React, {useState, useEffect} from 'react';

// Keep track of forms that have similar repeated values
const useFormArr = (initialObj, defaultObj, number) => {
  const [values, setValues] = useState(Array(number).fill({...initialObj}));
  useEffect(() => {
    const newArr = [...Array(Number(number))].map((item, index) => {
      if (index < values.length) return {...values[index]};
      return {...defaultObj};
    });
    setValues(newArr);
  }, [number]);
  const changeFormValues = (e, index) => {
    const { name, value } = e.target;
    const newArr = [...values];
    newArr[index][name] = value;
    setValues(newArr);
  };
  const resetFormValues = () => setValues(Array(number).fill({...initialObj}));
  return [
    values,
    changeFormValues,
    resetFormValues
  ];
};

export default useFormArr;
