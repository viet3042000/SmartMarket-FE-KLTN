import React, { useState, useEffect } from 'react';
import Steps from './Steps';
import SummaryForm from './SummaryForm';
import useOrderForm from './hooks/useOrderForm';
import OrderForm from './OrderForm';
import PeopleForm from './PeopleForm';
import usePeopleForm from './hooks/usePeopleForm';
import PaymentForm from './PaymentForm';
import usePaymentForm from './hooks/usePaymentForm';
import CreateOrder from '../../../api/Product/createOrder';
import PopupSuccess from './PopupSuccess';

const PurchaseBody = ({ prodName = null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [popupSuccess, setPopupSuccess] = useState();
  const { orderForm, changeOrderForm, toDate, prodPriceDisp, orderSubmit } = useOrderForm(setCurrentStep);
  const { peopleForm, changePeopleForm, peopleErrors, peopleSubmit } = usePeopleForm(orderForm.amountPersons, setCurrentStep);
  const { paymentForm, changePaymentForm, paymentError, validatePaymentForm } = usePaymentForm();
  
  const paymentSubmit = event => {
    event.preventDefault();
    if (!validatePaymentForm()) return;
    const order = new CreateOrder();
    order.updateTrv(orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate);
    order.updateTrvDetails(peopleForm);
    postProductDetail(order);
  };

  const postProductDetail = async (order) => {
    order.postOrder()
    // .then(data => console.log(data))
    .then((data) => setPopupSuccess(data))
    .catch(error => console.log(error));
  };

  return (
    <>
    <div className="px-8">
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="grid gap-4 grid-cols-9">
        <div className="col-span-6">
          <OrderForm currentStep={currentStep} orderForm={orderForm} changeOrderForm={changeOrderForm} toDate={toDate} submit={orderSubmit} />
          <PeopleForm currentStep={currentStep} setCurrentStep={setCurrentStep} peopleForm={peopleForm} changePeopleForm={changePeopleForm} peopleErrors={peopleErrors} submit={peopleSubmit} />
          <PaymentForm currentStep={currentStep} setCurrentStep={setCurrentStep} paymentForm={paymentForm} changePaymentForm={changePaymentForm} paymentError={paymentError} submit={paymentSubmit}/>
        </div>
        <div className="col-span-3">
          <SummaryForm prodName={prodName} orderForm={orderForm} toDate={toDate} prodPriceDisp={prodPriceDisp} />
        </div>
      </div>
    </div>
    <PopupSuccess popupSuccess={popupSuccess} setPopupSuccess={setPopupSuccess}/>
    </>
  );
};

export default PurchaseBody;
