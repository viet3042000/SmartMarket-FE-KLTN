import React, { useState, useEffect } from 'react';
import useFormObj from '../../../../hooks/Form/useFormObj';
import calcPrice from '../../../../common/calcPrice';

const orderFormInitial = {
  "amountPersons": 1,
  "amountDays": 1,
  "fromDate": "", // yyyy-mm-dd
  "toDate": "", // yyyy-mm-dd
};

const useOrderForm = (setCurrentStep) => {
  const [orderForm, changeOrderForm, resetOrderForm] = useFormObj(orderFormInitial);
  const [toDate, setToDate] = useState("");
  const [prodPriceDisp, setProdPriceDisp] = useState("");

  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
  });

  useEffect(() => {
    setProdPriceDisp(formatter.format(calcPrice(orderForm.amountDays, orderForm.amountPersons)));
  }, [orderForm.amountPersons, orderForm.amountDays]);

  useEffect(() => {
    if (orderForm.fromDate === '') return;
    const calcDate = new Date(orderForm.fromDate);
    calcDate.setDate(calcDate.getDate() + Number(orderForm.amountDays));
    setToDate(calcDate.toISOString().split('T')[0]);
  }, [orderForm.fromDate, orderForm.amountDays]);

  const orderSubmit = event => {
    event.preventDefault();
    // updateTrv(orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate);
    // resetOrderForm();
    // setToDate("");
    setCurrentStep(prev => prev + 1);
  };
  return {orderForm, changeOrderForm, toDate, prodPriceDisp, orderSubmit};
};

export default useOrderForm;
