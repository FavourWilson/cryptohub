import React from "react";
import { Images } from "../../assets/images";
import Text from "../atom/Text";

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
              {blogs.map((x) => (
                <SwiperSlide>
                  <div key={`b${x.uuid}`} className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={x.blog_image}
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
                          {x.author}
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                          {x.date}
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    {x.title}
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                    {x.description}
                  </Text>

                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((x) => (
                <div key={x.uuid}>
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={x.blog_image}
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
                          {x.author}
                        </Text>
                        <Text
                          type="p"
                          className="text-sm text-gray-500 font-semibold"
                        >
                          {x.date}
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text
                    type="h1"
                    className="mt-6 text-xl font-semibold text-gray-800"
                  >
                    {x.title}
                  </Text>

                  <hr className="w-32 my-6 text-minorDark" />

                  <Text type="p" className="text-sm text-gray-500">
                    {x.description}
                  </Text>

                  <div
                    className="inline-block mt-4 text-main underline hover:text-minor Transform"
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
