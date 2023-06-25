import React from "react";
import { QuestionMarkCircle } from "../atom/Icons";

import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/scrollbar";

const Faqs = () => {
  const { faqs } = useSelector((state) => state.landing);
  const getDeviceType = "PC";
  // const getDeviceType = () =>
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
  //     navigator.userAgent
  //   )
  //     ? "Mobile"
  //     : "PC";
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions.
          </h1>

          {getDeviceType === "Mobile" ? (
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={15}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3 pb-5 lg:pb-0"
            >
             
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What is a crypto broker?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        A crypto broker is a platform that allows users to buy, sell, and trade cryptocurrencies. They act as a middleman between buyers and sellers and provide a user-friendly interface to interact with the crypto markets.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        Is it safe to use a crypto broker?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        The safety of a crypto broker depends on the measures it takes to secure its platform. A reputable crypto broker should use advanced security protocols like two-factor authentication, SSL encryption, and cold storage to keep users' funds and information safe.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What is a crypto broker?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        A crypto broker is a platform that allows users to buy, sell, and trade cryptocurrencies. They act as a middleman between buyers and sellers and provide a user-friendly interface to interact with the crypto markets.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What cryptocurrencies can I trade on a crypto broker site?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        The cryptocurrencies available on a crypto broker site depend on the platform. Some may offer a wide range of cryptocurrencies, while others may only have a few. Some common cryptocurrencies that are usually available include Bitcoin, Ethereum, Litecoin, Ripple, and Bitcoin Cash.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        How do I create an account on a crypto broker site?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Creating an account on a crypto broker site usually involves providing your personal information, including your name, email address, and phone number. You may also need to provide a government-issued ID and proof of address. Once your account is created, you can fund it and start trading.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                       How do I fund my account?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Funding your account on a crypto broker site usually involves linking a bank account or credit card. Some platforms may also support other payment methods like PayPal or cryptocurrency deposits.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                       How do I place a trade?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        To place a trade on a crypto broker site, you need to choose the cryptocurrency you want to buy or sell, specify the amount, and set the price. You can place a market order, which executes at the current market price, or a limit order, which executes at a specific price.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                      What fees does the crypto broker charge?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Crypto brokers usually charge fees for trading, depositing, and withdrawing funds. The fees depend on the platform and can vary widely. Some platforms may also offer discounts or rewards for frequent traders.
                      </p>
                    </div>
                  </SwiperSlide>
           
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        Can I use a crypto broker site on my mobile device?

                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Many crypto broker sites have mobile apps or mobile-optimized websites that allow you to trade on the go. Check if the platform you're interested in has a mobile option.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        How do I withdraw my funds?

                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Withdrawing your funds from a crypto broker site usually involves specifying the amount and the destination wallet address. Some platforms may also require additional verification before allowing withdrawals.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What customer support options does the crypto broker offer?

                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
Good crypto brokers offer multiple customer support options, including email, phone, and live chat. Some may also have a knowledge base or FAQ section to help users troubleshoot common issues.                      </p>
                    </div>
                  </SwiperSlide>
           
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              
                  <div>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What is a crypto broker?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        A crypto broker is a platform that allows users to buy, sell, and trade cryptocurrencies. They act as a middleman between buyers and sellers and provide a user-friendly interface to interact with the crypto markets.
                      </p>
                    </div>
                  </div>
               
                  <div>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                       <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        What cryptocurrencies can I trade on a crypto broker site?
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        The cryptocurrencies available on a crypto broker site depend on the platform. Some may offer a wide range of cryptocurrencies, while others may only have a few. Some common cryptocurrencies that are usually available include Bitcoin, Ethereum, Litecoin, Ripple, and Bitcoin Cash.
                      </p>
                    </div>
                  </div>
               
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Faqs;
