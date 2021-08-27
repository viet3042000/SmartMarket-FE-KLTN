import React from 'react';

export default function Products({ title, price, category, image }) {
  return (
    <div className="flex bg-red-800 w-full mb-5 shadow-sm rounded-lg">
      <div className="w-5/12 p-2">
        <div style={{ backgroundImage: `url(${image})` }} className="bg-contain bg-no-repeat bg-center w-full h-full"></div>
      </div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-2xl">{title.substr(0, 50)}</h1>
        <h3 className="text-gray-400">{category}</h3>
        <p className="text-red-400 mt-4 text-xl md:text-4xl">{price}</p>
      </div>
    </div>
  );
}