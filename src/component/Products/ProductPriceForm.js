import React, { useState, useEffect } from 'react';
import products from '../../data/InsuranceData';
import { Link, Redirect } from 'react-router-dom';

const ProductPriceForm = ({ match = null, setSuccessDisp = f => f }) => {
  const prodImgLink = products.find((item) => item.name === match.params.productName).imageSrc;

  return (
    <div className="flex flex-col shadow-lg rounded w-3/4 gap-y-3 p-4">
      <img
        className="object-cover w-full h-52 rounded border"
        src={prodImgLink}
        alt=""
      />
      <p className="text-2xl font-semibold mb-2">Chỉ từ 10,000 đồng</p>
      <img src="https://swisscare.com/images/SVG/cards.svg" />
      <div className="self-center mt-4 w-full">
        <Link to={`/purchase/${match.params.productName}`}>
          <button
            type="submit"
            form="orderForm"
            className="inline-flex items-center justify-center h-10 w-full px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          >
            Mua hàng
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPriceForm;
