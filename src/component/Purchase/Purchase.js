import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../../data/InsuranceData';
import styles from './mystyle.module.css';

const Purchase = ({ match }) => {
  const search = useLocation().search;
  const amountPersons = Number(new URLSearchParams(search).get('amountPersons'));
  const amountDays = Number(new URLSearchParams(search).get('amountDays'));
  const fromDate = new URLSearchParams(search).get('fromDate');
  const toDate = new URLSearchParams(search).get('toDate');

  const prodImgLink = products.find((item) => item.name === match.params.productName).imageSrc;

  useEffect(() => {
    console.log(match.params.productName);
    console.log(search);
    
    console.log(amountPersons);
    console.log(amountDays);
    console.log(fromDate);
    console.log(toDate);
  }, []);
  return (
    <div className="bg-purple-200 h-screen flex flex-col justify-center items-center">
        <div className="bg-green-100 p-4 m-2 transform skew-x-3">
          tai
        </div>
        <div className="bg-green-100 p-4 m-2 transform skew-y-3">
          sao
        </div>
        <div className={styles.bigblue}>
          cu
        </div>
        <img className="w-20 h-16 transform hover:skew-x-12" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip"></img>
    </div>
  );
};
export default Purchase;
