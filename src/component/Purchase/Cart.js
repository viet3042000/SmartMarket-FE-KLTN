import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderService from '../../services/orderService';
import PopupPurchaseSuccess from './PurchaseBody/PopupPurchaseSuccess';
import { deleteFromCart } from '../../actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import CartData from './CartData';
import PopupPayment from './PurchaseBody/PaymentPopup';
import PopupPaymentSuccess from './PurchaseBody/PopupPaymentSuccess';
import ErrorCreateOrderPopup from './PurchaseBody/ErrorCreateOrderPopup';

const Cart = () => {
    const [popupPurchaseSuccess, setPopupPurchaseSuccess] = useState();
    const [popupPaymentSuccess, setPopupPaymentSuccess] = useState(false);
    const [popupPayment, setPopupPayment] = useState(false);
    const requestBodyState = useSelector(state => state.requestBody);
    const dispatch = useDispatch();

    const [errorDisp, setErrorDisp] = useState(false);
    // const [posting, setPosting] = useState(false);
    const [error, setError] = useState("");

    const checkoutSubmit = event => {
        event.preventDefault();
        // const currentRequestBody = requestBodyState.requestBody;
        // postProductDetail(currentRequestBody);
        setPopupPayment(true);
    };

    // const postProductDetail = async (requestBody) => {
    //     try {
    //       setPopupPayment(true);

    //       setPosting(true);

    //       const data = await orderService.postOrder(requestBody);
    //       localStorage.removeItem("requestBody");
    //       dispatch(deleteFromCart(null));
    //       setPopupPurchaseSuccess(data);

    //       setPosting(false);
    //     } catch (err) {
    //        setError(err);
    //        setErrorDisp(true);
    //     //    setPosting(false);
    //        console.log(err);
    //        setTimeout(() => setErrorDisp(false), 3000);
    //     }
    // };

    if (requestBodyState.requestBody) {
        const currentRequestBody = requestBodyState.requestBody;
        const orderItems = currentRequestBody.detail.orderItems;
        
        return (
            // <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            //     <div className="flex flex-col justify-center h-full">
            //         <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            //             <header className="px-5 py-4 border-b border-gray-100">
            //                 <h1 className="font-bold text-3xl text-gray-800">GI??? H??NG</h1>
            //             </header>
            //             <div className="p-3">
            //                 <div className="overflow-x-auto">
            //                     <table className="table-auto w-full">
            //                         <thead className="text-sm font-bold uppercase text-gray-800 bg-gray-50">
            //                             <tr>
            //                                 <th className="p-2 whitespace-nowrap">
            //                                     <div className="text-left">T??n b???o hi???m</div>
            //                                 </th>
            //                                 <th className="p-2 whitespace-nowrap">
            //                                     <div className="text-left">Gi?? ti???n</div>
            //                                 </th>
            //                                 <th className="p-2 whitespace-nowrap">
            //                                     <div className="font-semibold text-center">L???a ch???n</div>
            //                                 </th>
            //                             </tr>
            //                         </thead>

            //                         {orderItems.map((item, index) => (
            //                             <tbody key={item.id} className="text-sm divide-y divide-gray-100">
            //                                 <tr>
            //                                     <td className="p-2 whitespace-nowrap">
            //                                         {/* <div className="flex items-center"> */}
            //                                         <div className="text-left font-medium text-green-500">
            //                                             <div className="font-medium text-gray-800">{item.productName}</div>
            //                                         </div>
            //                                     </td>
            //                                     <td className="p-2 whitespace-nowrap">
            //                                         <div className="text-left font-medium text-green-500">{item.itemPrice} ??</div>
            //                                     </td>
            //                                     <td className="p-2 whitespace-nowrap">
            //                                         <div className="text-lg text-center">
            //                                             <button
            //                                             className="inline-flex items-center justify-center h-9 w-2/5 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            //                                             onClick={(e) => removeSubmit(e, index)}
            //                                             >
            //                                             X??a
            //                                             </button>
            //                                         </div>
            //                                     </td>
            //                                 </tr>
            //                             </tbody>
            //                         ))}

            //                         {/* <tbody className="text-sm divide-y divide-gray-100">
            //                             <tr>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     <div className="flex items-center">
            //                                         <div className="font-medium text-gray-800">Test</div>
            //                                     </div>
            //                                 </td>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     <div className="text-left font-medium text-green-500">200000 ??</div>
            //                                 </td>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     <div className="text-lg text-center">????????</div>
            //                                     <div className="text-lg text-center">
            //                                         <button
            //                                         className="inline-flex items-center justify-center h-9 w-1/2 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            //                                         >
            //                                         X??a
            //                                         </button>
            //                                     </div>
            //                                 </td>
            //                             </tr>
            //                         </tbody> */}


            //                         <tbody className="text-sm divide-y divide-gray-100">
            //                             <tr>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     {/* <div className="flex items-center"> */}
            //                                     <div className="text-left font-medium text-green-500">
            //                                         <div className="font-medium text-gray-800">T???ng chi ph??</div>
            //                                     </div>
            //                                 </td>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     <div className="text-left font-medium text-green-500">{currentRequestBody.detail.orderPrice} ??</div>
            //                                 </td>
            //                                 <td className="p-2 whitespace-nowrap">
            //                                     <div className="text-lg text-center">
            //                                         <button
            //                                         className="inline-flex items-center justify-center h-9 w-2/5 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            //                                         onClick={checkoutSubmit}
            //                                         >
            //                                         Mua
            //                                         </button>
            //                                     </div>
            //                                 </td>
            //                             </tr>
            //                         </tbody>
            //                     </table>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>

            
            <div className="w-screen " >
                {errorDisp && <ErrorCreateOrderPopup />}
                <section className="mt-8">
                    {/* {errorDisp && <ErrorCreateOrderPopup />} */}
                    <div className="uppercase tracking-wide font-bold text-gray-800 text-xl px-6 mx-auto w-full max-w-7xl mb-2" >
                        GI??? H??NG
                    </div>

                    <div className="container mx-auto">
                        {/* <Detail orderItems={orderItems}/> */}

                        <div className="flex w-full p-6 flex flex-col items-center space-y-5" style={{ minHeight: 450 }}>
                            {orderItems.map((item, index) => <CartData key={index} item={item} index={index}/>)}

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>T???ng gi?? ti???n: {currentRequestBody.detail.orderPrice} ??</p>
                                </div>

                                <div className="mt-6">
                                    <button
                                    className="inline-flex items-center justify-center h-10 w-full font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                                    onClick={checkoutSubmit}
                                    >
                                        Mua
                                    </button>
                                </div>
                            </div>
                        </div>

                        <PopupPayment popupPayment={popupPayment} setPopupPayment={setPopupPayment} 
                            setPopupPaymentSuccess={setPopupPaymentSuccess} setPopupPurchaseSuccess={setPopupPurchaseSuccess}
                            setError={setError} setErrorDisp={setErrorDisp}/>

                        <PopupPaymentSuccess popupPaymentSuccess={popupPaymentSuccess}/>

                        {/* <div className="flex justify-center w-full my-12">
                            <ChevLeft {...pages} getPage={getPage} />

                            {[...Array(size)].map((item, index) => <Page key={index} index={index} {...pages} getPage={getPage} />)}

                            <ChevRight {...pages} getPage={getPage} />
                        </div> */}
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="flex justify-center font-semibold text-gray-800">Gi??? h??ng tr???ng</h2>
                    
                            <Link to="/home">
                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        <button className="text-indigo-600 font-medium hover:text-indigo-500"
                                            >
                                            Quay l???i trang ch???<span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </Link>
                        </header>
                    </div>
                </div>
                if (popupPurchaseSuccess !== null) {
                    <PopupPurchaseSuccess PopupPurchaseSuccess={popupPurchaseSuccess} />
                }
            </section>
        );
    }
};


// const Detail = ({ orderItems }) => {
//     return (
//         <>
//             <div className="w-full p-6 flex flex-col items-center space-y-5" style={{ minHeight: 450 }}>
//                 {orderItems.map((item, index) => <CartData key={index} item={item} />)}
//             </div>

//             <div className=" px-4 mx-auto pb-5 text-gray-500 md:w-3/12">
//                 <button
//                 type="submit"
//                 className="py-2 px-4 bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//                 onClick={checkoutSubmit}
//                 >
//                 Mua
//                 </button>
//             </div>
//         </>
//     );
// };


export default Cart;