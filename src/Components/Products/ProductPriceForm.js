import React, {useState, useEffect} from 'react';
import products from '../../data/InsuranceData';
import useInput from '../../hooks/useInput';
import calcPrice from '../../common/calcPrice';
import { v4 } from "uuid";
import { useSelector } from 'react-redux';

const ProductPriceForm = ({ match=null, setSuccessDisp=f=>f }) => {
  const state = useSelector(state=>state.auth);
  const [amountPersonsProps, resetAmountPersons] = useInput(1);
  const [amountDaysProps, resetAmountDays] = useInput(1);
  const [fromDateProps, resetFromDate] = useInput("");
  const [toDate, setToDate] = useState("");
  const [prodPriceDisp, setProdPriceDisp] = useState("");
  const prodImgLink = products.find((item) => item.name === match.params.productName).imageSrc;
  
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
  });

  useEffect(() => {
    setProdPriceDisp(formatter.format(calcPrice(amountDaysProps.value, amountPersonsProps.value)));
  }, [amountPersonsProps, amountDaysProps]);

  useEffect(() => {
    if (fromDateProps.value === '') return;
    const calcDate = new Date(fromDateProps.value);
    calcDate.setDate(calcDate.getDate() + Number(amountDaysProps.value));
    setToDate(calcDate.toISOString().split('T')[0]);
  }, [fromDateProps, amountDaysProps]);

  const postProductDetail = () => {
        fetch("http://103.9.0.239:31441/dev/order/order-service/v1/create-order", {
          method: "POST",
          body: JSON.stringify(
            {
              "requestId": v4(),
              "requestTime": Date.now(),
              "targetId": "BIC",
              "type": "BICTravelInsurance",
              "detail": {
                "orders": {
                      "ordBillFirstName": "Nguyen Anh Chin",
                      "ordBillMobile": "097453686312",
                      "ordBillStreet1": "TTP, Đn Phượng, Hà Nội",
                      "ordBillEmail": "nghiemxuanhop98@gmail.com",
                      "ordDate": "2020-02-17T10:37:22",
                      "ordStatus": "1",
                      "ordTotalQty": 4,
                      "orderPaymentMethod": 11,
                      "ordPaidMoney": 10000,
                      "ordDiscountAmount": 0,
                      "ordSource": "DSVN"
                  },
                  "trv": {
                      "amountPersons": amountPersonsProps.value,
                      "amountDays": amountDaysProps.value,
                      "promotion": 0,
                      "promotionAddress": "",
                      "fromDate": (new Date(fromDateProps.value)).toISOString().replace(".000Z", ""),
                      "toDate": (new Date(toDate)).toISOString().replace(".000Z", ""),
                      "issueDate": null
                  },
                  "trvDetails": [
                      {
                        "fullName": "Dam Quoc Duong",
                        "gender": 0,
                        "dateOfBirth": "1990-12-20",
                        "passportCard": "123"
                    }
                  ]
                }
              }
          ),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + state.user.access_token
          }
          })


    .then(data => data.json())
    .then(dataJson => console.log(dataJson));
    setSuccessDisp(true);
    setTimeout(() => setSuccessDisp(false), 1500);
  };

  const submit = event => {
    event.preventDefault();
    postProductDetail();
    resetAmountPersons();
    resetAmountDays();
    resetFromDate();
    setToDate("");
  };
  return (
    <div className="flex flex-col shadow-lg rounded w-3/4 gap-y-3 p-4">
      <img
        className="object-cover w-full h-52 rounded border"
        src={prodImgLink}
        alt=""
      />
      <p className="text-2xl font-semibold">{prodPriceDisp}</p>
      <form id="orderForm" onSubmit={submit}>
        <div className="flex flex-col gap-y-3">
          <div>
            <label className="font-normal" htmlFor="amountPersons">Số người mua bảo hiểm</label>
            <input {...amountPersonsProps} id="amountPersons" type="number" min="0" max="10" required className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="font-normal" htmlFor="amountDays">Số ngày bảo hiểm</label>
            <input {...amountDaysProps} id="amountDays" type="number" min="0" max="90" required className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="font-normal" htmlFor="fromDate">Ngày bắt đầu</label>
            <input {...fromDateProps} id="fromDate" type="date" required className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
          <div>
            <label className="font-normal" htmlFor="toDate">Ngày kết thúc</label>
            <input value={toDate} id="toDate" type="date" required readOnly={true} className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
          </div>
        </div>
      </form>
      <div className="self-center mt-4">
        <button
          type="submit"
          form="orderForm"
          className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Mua hàng
        </button>
        <button
          type="submit"
          form="orderForm"
          className="ml-3 inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-white hover:bg-gray-200 focus:shadow-outline focus:outline-none"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductPriceForm;
