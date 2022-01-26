import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
   const [keyword, setKeyword] = useState(""); 
   const history = useHistory();

    const onKeyPress = e => {
        if (e.key === 'Enter' && keyword !== "") {
            e.preventDefault();
            history.push(`/filtered-products/${keyword}`);
            setKeyword("");
        }
    };
   
    const onClick = e => {
        e.preventDefault();
        if (keyword !== "") {
            history.push(`/filtered-products/${keyword}`);
            setKeyword("");
        }
    };

    return (
        <div className="items-center mx-8 hidden lg:flex">
            <div className="flex border-b border-gray-400">
                <input
                    type="text"
                    className=" py-1 pl-5 pr-4 text-gray-700 text-base placeholder-gray-600 bg-transparent placeholder-opacity-30 focus:outline-none focus:placeholder-opacity-0"
                    placeholder="Tìm kiếm sản phẩm"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={onKeyPress}
                />
                <span className="flex items-center pl-3 ">
                    <button
                        // className="text-gray-700 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                        className="bg-white hover:bg-gray-100 py-2 px-4 rounded-lg"
                        onClick={onClick}
                    >
                        <svg
                            className="w-4 h-4 text-gray-700 hover:text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </span>
                {/* <input
                    type="text"
                    className=" py-1 pl-5 pr-4 text-gray-700 text-base placeholder-gray-600 bg-transparent placeholder-opacity-30 focus:outline-none focus:placeholder-opacity-0"
                    placeholder="Tìm kiếm sản phẩm"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={onKeyPress}
                /> */}
            </div>

            {/* <ul>
                {filteredProducts.map(products => (
                    <li key={products.id}>{products.name}</li>
                ))}
            </ul> */}
        </div>
    );
};


export default SearchBar;