import React, { useState, useEffect } from 'react';
import Steps from './Steps';
import SummaryForm from './SummaryForm';
import useOrderForm from './hooks/useOrderForm';
import OrderForm from './OrderForm';
import PeopleForm from './PeopleForm';
import usePeopleForm from './hooks/usePeopleForm';
import PaymentForm from './PaymentForm';
import usePaymentForm from './hooks/usePaymentForm';
import createOrder from '../../../api/Product/createOrder';
import { createTrv, createProductDetail } from '../../../api/Product/productDetail';
import orderService from '../../../services/orderService';
import { addToCart } from '../../../actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import PopupOrderSuccess from './PopupOrderSuccess';


const PurchaseBody = ({ prodName = null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [popupOrderSuccess, setPopupOrderSuccess] = useState(false);
  const [errorDisp, setErrorDisp] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const { orderForm, changeOrderForm, toDate, prodPriceDisp, priceNumber, orderSubmit } = useOrderForm(setCurrentStep);
  const { peopleForm, changePeopleForm, peopleErrors, peopleSubmit } = usePeopleForm(orderForm.amountPersons, setCurrentStep);
  // const { paymentForm, changePaymentForm, paymentError, validatePaymentForm } = usePaymentForm();
  const dispatch = useDispatch();
  const requestBodyState = useSelector(state => state.requestBody);


  const paymentSubmit = event => {
    event.preventDefault();
    // if (!validatePaymentForm()) return;
    const trv = createTrv( orderForm.amountPersons, orderForm.amountDays, orderForm.fromDate, toDate );
    const productDetail = createProductDetail( trv, peopleForm );

    const orderItem = {
      // "productName": prodName, 
      "productName": "BICTRV2",
      "itemPrice": priceNumber,
      "productDetailCreateRequest": productDetail
    };

    const listOrderItems = [orderItem];
    const requestBody = createOrder( listOrderItems, priceNumber );
    
    if (requestBodyState.requestBody) {
      const currentRequestBody = requestBodyState.requestBody;

      currentRequestBody.detail.orderItems = [...currentRequestBody.detail.orderItems, orderItem];
      const currentOrderPrice = parseInt(currentRequestBody.detail.orderPrice);
      currentRequestBody.detail.orderPrice = currentOrderPrice + priceNumber;
      localStorage.setItem("requestBody", JSON.stringify(currentRequestBody));
      dispatch(addToCart(currentRequestBody));
    } else {
      localStorage.setItem("requestBody", JSON.stringify(requestBody));
      dispatch(addToCart(requestBody));
    }
    setPopupOrderSuccess(true);
    // setTimeout(() => setPopupOrderSuccess(false), 5000);
  };


  // const postProductDetail = async (requestBody) => {
  //   setPosting(true);
  //   try {
  //     // save into localstorage field cart
  //     const data = await orderService.postOrder(requestBody);
  //     setPosting(false);
  //     setPopupSuccess(data);
  //   } catch (err) {
  //     setError(err);
  //     setErrorDisp(true);
  //     setPosting(false);
  //     console.log(err);
  //     setTimeout(() => setErrorDisp(false), 3000);
  //   }
  // };

  return (
    <div className="px-4">
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="flex gap-4 ">
        <div className="flex-1">
          <OrderForm currentStep={currentStep} orderForm={orderForm} changeOrderForm={changeOrderForm} toDate={toDate} submit={orderSubmit} />
          <PeopleForm currentStep={currentStep} setCurrentStep={setCurrentStep} peopleForm={peopleForm} changePeopleForm={changePeopleForm} peopleErrors={peopleErrors} submit={paymentSubmit} />
          {/* <PaymentForm currentStep={currentStep} setCurrentStep={setCurrentStep} paymentForm={paymentForm} changePaymentForm={changePaymentForm} paymentError={paymentError} submit={paymentSubmit} posting={posting} errorDisp={errorDisp} error={error} /> */}
        </div>
        <div className="hidden lg:block">
          <SummaryForm prodName={prodName} orderForm={orderForm} toDate={toDate} prodPriceDisp={prodPriceDisp}/>
        </div>
      </div>
      <PopupOrderSuccess popupOrderSuccess={popupOrderSuccess} />
    </div>
  );
};

export default PurchaseBody;
