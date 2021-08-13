import React, { useEffect, useState } from 'react';
import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';


export function Order() {
  const state = useSelector(state => state.auth);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    state.user ?
      (
        fetch("http://10.14.101.202/insurance/travel-insurance-service/v1/inquire-bic-travel-insurance", {
          method: "POST",
          headers: {
            Authorization: `Bearer` + state.user.access_token
          }
        }).then(
          (response) => (
            console.log(response)
          )
        )
          .catch(
            error => {
              console.log(error);
              setLoading(false);
              setError(error);
            }
          )
      )
      :
      console.log('');
  }, []);

  if (state.user) {
    if (loading) {
      return (
        <div className="bg-yellow-50 text-center h-screen">
          <p>Loading</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="bg-yellow-50 text-center h-screen">
          <p>Fetching failed</p>
        </div>
      );
    }
    if (!data) {
      return null;
    }
  }
  return (
    <div>
      {state.user ?
        <div>
          {data.map(oder => (
            <div className="bg-yellow-50 " key="">
              <h1>{oder.name}</h1>
            </div>
          ))}
        </div>
        :
        <Login />
      }
    </div>
  );
}