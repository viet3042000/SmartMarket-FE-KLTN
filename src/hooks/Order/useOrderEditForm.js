import React, {useState} from 'react';

export const useOrderEditForm = (objTrv) => {
  const [values, setValues] = useState(objTrv);
  const changeFormValues = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };
  return [values, changeFormValues];
};