import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { useSelector } from 'react-redux';

function useFetch(uri) {
  const state = useSelector(state=>state.auth);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    
    fetch(uri, {
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
                        "amountPersons": 1,
                        "amountDays": 2,
                        "promotion": 0,
                        "promotionAddress": "",
                        "fromDate": "2021-06-26T00:00:00",
                        "toDate": "2021-06-27T00:00:00",
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
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error
  };
}

export default function ProductDetailFetch({
  uri,
  renderSuccess = ({ data }) => 
  <>
    <h1>Todo: Render UI for data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre> 
  </>,
  loadingFallback = <p>loading...</p>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
