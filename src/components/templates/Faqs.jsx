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
              {faqs.map((x) => {
                x.show && (
                  <SwiperSlide>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        {x.question}
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        {x.answer}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {faqs.map((x) => (
                !!x.show && (
                  <div>
                    <div className="inline-block p-2 text-white bg-main rounded-lg">
                      <QuestionMarkCircle className="w-8 h-8" />
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                        {x.question}
                      </h1>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        {x.answer}
                      </p>
                    </div>
                  </div>
                )))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Faqs;
