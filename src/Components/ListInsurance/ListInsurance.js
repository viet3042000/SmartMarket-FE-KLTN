import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import products from '../../data/InsuranceData';
import { Link } from "react-router-dom";
import TravelInsuranceProduct from "./TravelInsuranceData";
import HealthInsuranceProduct from "./HealthInsuranceData";
import CarInsuranceProduct from "./CarInsuranceData";
// const products = [
//     {
//       id: 1,
//       name: 'Metlife',
//       href: '../Product/Product.js',
//       imageSrc: 'http://www.metlife.com/content/dam/metlifecom/us/social-share/metlife-logo-share.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '***',
//       color: 'Detail',
//     },
//     {
//         id: 2,
//       name: 'Chubb',
//       href: 'https://www.chubb.com/vn-en/personal/travel-insurance.html',
//       imageSrc: 'https://www.tennisworldusa.org/imgb/95480/chubb-is-the-official-insurance-sponsor-of-the-us-open.jpg',
//       imageAlt: "Front of men's Basic Blazer in black.",
//       price: '***',
//       color: 'Detail',
//     },
//     {
//       id: 3,
//     name: 'HSBC',
//     href: 'https://www.hsbc.com.vn/en-vn/insurance/products/travel-care/',
//     imageSrc: 'https://cdn.hsbc.com.vn/etc/designs/dpws/common/social/logo/Square-1200x1200px.jpg',
//     imageAlt: "Front of men's Basic Blazer in black.",
//     price: '***',
//     color: 'Detail',
//   }
// //   {
// //     id: 4,
// //   name: 'BaoViet Insurance',
// //   href: 'https://www.baoviet.com.vn/insurance/Khach-hang-ca-nhan/Bao-hiem-du-lich-quoc-te/GeneralLandingPage/34/',
// //   imageSrc: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/03/22/58d1e7554cb51_1490151253.jpg',
// //   imageAlt: "Front of men's Basic Blazer in black.",
// //   price: '***',
// //   color: 'Detail',
// // }
//     // More products...
//   ];
const ListInsurance = () => {
  const buttonRef = useRef();
  return (
    <div className="bg-white mx-auto ">
      <div className="max-w-xl mx-auto py-8  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <section>
        {/* <iframe className= "mx-auto" width="560" height="315" src="https://www.youtube.com/embed/IAuRoAUV19o" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ="true" ></iframe> */}
          {/* travel insurance products */}
          <div className="justify-between">
            <h2 className="text-2xl mx-auto font-bold tracking-tight text-gray-800">
              Travel Insurance
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {TravelInsuranceProduct.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <Link to={`../products/${product.name}`}>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 flex justify-between ">
                    <div className="mx-auto">
                      <h3 className="text-md text-gray-700 font-bold ">
                        <Link to={`../products/${product.name}`}>
                          <span aria-hidden="true" className=" inset-0 " />
                          {product.name}
                        </Link>
                      </h3>
                      <p className=" hidden mx-auto text-md text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className=" hidden text-sm  font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          {/* Health insurance products */}
          <div className="justify-between">
            <h2 className="text-2xl mx-auto font-bold tracking-tight text-gray-800">
              Health Insurance
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {HealthInsuranceProduct.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <Link to={`../products/${product.name}`}>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 flex justify-between ">
                    <div className="mx-auto">
                      <h3 className="text-md text-gray-700 font-bold ">
                        <Link to={`../products/${product.name}`}>
                          <span aria-hidden="true" className=" inset-0 " />
                          {product.name}
                        </Link>
                      </h3>
                      <p className=" hidden mx-auto text-md text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className=" hidden text-sm  font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          {/* Car insurance products */}
          <div className="justify-between">
            <h2 className="text-2xl mx-auto font-bold tracking-tight text-gray-800">
              Car Insurance
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {CarInsuranceProduct.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <Link to={`../products/${product.name}`}>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 flex justify-between ">
                    <div className="mx-auto">
                      <h3 className="text-md text-gray-700 font-bold ">
                        <Link to={`../products/${product.name}`}>
                          <span aria-hidden="true" className=" inset-0 " />
                          {product.name}
                        </Link>
                      </h3>
                      <p className=" hidden mx-auto text-md text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className=" hidden text-sm  font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* content */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid  gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center mx-auto md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points=" 8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  <a href="/">Let us handle</a>
                  <br className="hidden md:block" />
                  your next{" "}
                  <span className="inline-block text-indigo-700">
                    destination
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center text-indigo-500 font-semibold transition-colors duration-200 text-deep-purple-accent-400  hover:text-deep-purple-800"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Button show more */}
        <div>
          <Button
            color="lightBlue"
            ref={buttonRef}
            ripple="light"
            className="mx-auto"
          >
            Show more
          </Button>

          <Popover placement="top" ref={buttonRef}>
            <PopoverContainer>
              <PopoverHeader></PopoverHeader>
              <PopoverBody>You are at the end of this page!</PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>

      </div>
    </div>
  );
};

export default ListInsurance;
