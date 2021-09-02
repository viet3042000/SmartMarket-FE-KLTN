import React, { useState, useEffect } from "react";
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
          "requestId": "requestId",
          "requestTime": "requestTime",
          "targetId": "BIC",
            "type": "BICTravelInsurance",
          "detail": {
            "page": 1, 
            "size": "4"
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

export default function FetchOrder({
  uri,
  renderSuccess,
  loadingFallback = <div className="w-screen h-screen flex justify-center"> <p>loading...</p> </div>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
