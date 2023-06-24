import React from "react";
import { Images } from "../../assets/images";
import Text from "../atom/Text";
import img1 from '../../assets/news/Binance-logo-is-displayed-on-a-smartphone-screen-jpg.webp'
import img2 from '../../assets/news/Central-Bank-Digital-Currency-jpg.webp'
import img3 from '../../assets/news/Commonwealth-bank-jpg.webp'
import { Scrollbar, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/scrollbar";

const Blog = () => {
    const { blogs } = useSelector((state) => state.landing);
  const getDeviceType = 'PC'
  // const getDeviceType = () =>
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
  //     navigator.userAgent
  //   )
  //     ? "Mobile"
  //     : "PC";

  return (
    <>
      <section className="bg-light bg-opacity-40">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <Text
              type="h1"
              className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl"
            >
              latest crypto news
            </Text>

            <Text
              type="p"
              className="max-w-lg mx-auto mt-4 text-gray-500 capitalize"
            >
              general worldwide crypto news carefully selected to keep you
              updated
            </Text>
          </div>

          {getDeviceType === "Mobile" ? (
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={5}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 pb-5 lg:pb-0"
            >
                <SwiperSlide>
                  <div  className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={img2}
                      alt=""
                    />

                    <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-lg rounded-bl-lg ">
                      {/* <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={Images.person1}
                        alt=""
                      /> */}

                      <div className="mx-4">
                        <Text
                          type="h1"
                          className="text-sm text-gray-700 font-bold"
                        >
                          Admin
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                        June 10,2023
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    Standard Chartered, PwC see potential for programmable CBDCs in China’s Greater Bay Area
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                    Given the variety of currencies in the area, the white paper "Co-creating the Future Ecosystem with Central Bank Digital Currencies" notes that China's Greater Bay Area is prime real estate for CBDC testing.
                  </Text>

                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </SwiperSlide>

                
                 <SwiperSlide>
                  <div  className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={img3}
                      alt=""
                    />

                    <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-lg rounded-bl-lg ">
                      {/* <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={Images.person1}
                        alt=""
                      /> */}

                      <div className="mx-4">
                        <Text
                          type="h1"
                          className="text-sm text-gray-700 font-bold"
                        >
                          Admin
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                        June 10,2023
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    Australia’s largest bank blocks payments to digital asset exchanges
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                      As part of new efforts to safeguard consumers from scammers, Australia's largest bank stated that it would prohibit some payments to digital asset exchanges.

The Commonwealth Bank of Australia (CBA) announced on Thursday that the additional regulations would include entire bans on several exchanges. It did not, however, identify the exchanges that would be affected.


In some cases, payments to select exchanges will be held for 24 hours.

To combat scammers, CBA will soon impose a monthly transfer restriction of AUD 10,000 (US$6,666) on exchanges.

"Customers who make payments to crypto-currency exchanges are currently facing a significantly higher risk of potentially being scammed," James Roberts, the bank's general manager for fraud management services, said.



                  </Text>         
                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </SwiperSlide>
                 
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <div  className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={img2}
                      alt=""
                    />

                    <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-lg rounded-bl-lg ">
                      {/* <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={Images.person1}
                        alt=""
                      /> */}

                      <div className="mx-4">
                        <Text
                          type="h1"
                          className="text-sm text-gray-700 font-bold"
                        >
                          Admin
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                        June 10,2023
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    Standard Chartered, PwC see potential for programmable CBDCs in China’s Greater Bay Area
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                    Given the variety of currencies in the area, the white paper "Co-creating the Future Ecosystem with Central Bank Digital Currencies" notes that China's Greater Bay Area is prime real estate for CBDC testing.
                  </Text>

                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </div>

                 
                 <div>
                  <div  className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={img3}
                      alt=""
                    />

                    <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-lg rounded-bl-lg ">
                      {/* <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={Images.person1}
                        alt=""
                      /> */}

                      <div className="mx-4">
                        <Text
                          type="h1"
                          className="text-sm text-gray-700 font-bold"
                        >
                          Admin
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                        June 10,2023
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    Australia’s largest bank blocks payments to digital asset exchanges
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                      As part of new efforts to safeguard consumers from scammers, Australia's largest bank stated that it would prohibit some payments to digital asset exchanges.

The Commonwealth Bank of Australia (CBA) announced on Thursday that the additional regulations would include entire bans on several exchanges. It did not, however, identify the exchanges that would be affected.


In some cases, payments to select exchanges will be held for 24 hours.

To combat scammers, CBA will soon impose a monthly transfer restriction of AUD 10,000 (US$6,666) on exchanges.

"Customers who make payments to crypto-currency exchanges are currently facing a significantly higher risk of potentially being scammed," James Roberts, the bank's general manager for fraud management services, said.



                  </Text>         
                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </div>
                
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
