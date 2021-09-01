import React, { useEffect } from 'react';
import ProductPriceForm from './ProductPriceForm';
// rface

const contentTextStyle = "text-sm text-gray-900";

const ProductDetail = ({ match }) => {
  useEffect(() => {
    console.log(match.params.productName);
  }, []);
  return (
    <>
    <div className="fixed transition duration-500 transform hover:translate-x-20 right-0 top-12 flex w-full max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-green-500">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
          </svg>
      </div>
      <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
              <span className="font-semibold text-green-500 dark:text-green-400">Success</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">Your order was registered!</p>
          </div>
      </div>
    </div>
    <div className="h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-6">
        <div name="leftCard" className="flex flex-col lg:col-span-4">
          <div className="border rounded p-4">
            <div className="max-w-2xl mb-6">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Gói bảo hiểm bao gồm
              </h2>
              {/* <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis
              </p> */}
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Miễn phí đổi giờ, huỷ chuyến
                </h6>
                <p className={contentTextStyle}>
                  Miễn phí đổi giờ, huỷ chuyến trong vòng 48 tiếng thông báo với hãng. Chúng tôi cam kết chi trả các loại phí phát sinh cho vấn đề này
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Hỗ trợ phí hành lý khi check-in
                </h6>
                <p className={contentTextStyle}>
                  Chúng tôi sẽ chi trả phí phát sinh khi hành lý của bạn quá tải trong quá trình check-in. Hãy yên tâm sắp xếp hành lý, việc tính phí cứ để chúng tôi lo!
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Chi trả 100% phí khám chữa bệnh khi tai nạn
                </h6>
                <p className={contentTextStyle}>
                  Hãy yên tâm khởi hành. Chúng tôi sẽ luôn dõi theo và trả bất kì viện phí nào
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Chi trả 100% phí pháp lý
                </h6>
                <p className={contentTextStyle}>
                  Gặp phải vấn đề về pháp lý khi va chạm ngoài đường? Không cần lo lắng, chúng tôi sẽ đảm bảo cho bạn về mặt pháp lý.
                </p>
              </div>
            </div>
          </div>
          <div name="text-no-border">
            <h4 className="text-2xl mt-6 mb-6 font-bold">
              Yêu cầu giấy tờ
            </h4>
            <ul className="list-disc list-inside leading-relaxed">
              <li><p className={`inline pl-3 ${contentTextStyle}`}>CMND/CCCD</p></li>
              <li><p className={`inline pl-3 ${contentTextStyle}`}>Lịch trình chuyến đi</p></li>
              <li><p className={`inline pl-3 ${contentTextStyle}`}>Vé tàu xe</p></li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <ProductPriceForm match={match}/>
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductDetail;
