import Button from "../atom/Button";
import { Images } from "../../assets/images";
import {
  CheckCircle,
  NoSymbol,
  CheckCircleS,
  NoSymbolS,
  Check,
} from "../atom/Icons";
// import Check from "../atom/Icons/Check";
import Text from "../atom/Text";
import { Link } from "react-router-dom";

import { Scrollbar, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";

const Pricing = () => {
    const { isAuthenticated } = useSelector((state) => state.user);

  const getDeviceType = 'PC'
  // const getDeviceType = () =>
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
  //     navigator.userAgent
  //   )
  //     ? "Mobile"
  //     : "PC";

  return (
    <>
      <section className="py-16 bg-gray-50 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Text
              type="h2"
              className="text-3xl font-bold leading-tight text-main uppercase lg:text-5xl"
            >
              Investment Plans
            </Text>
            <Text
              type="p"
              className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
            >
              Financial Intelligence pays off when you invest with the right and
              most Trusted Bitcoin Investment Platform.
            </Text>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <Text
                  type="h3"
                  className="text-base font-bold px-10 py-4 text-white bg-[#083688]"
                >
                  Silver Plan
                </Text>
                <Text type="p" className="text-5xl font-bold text-black mt-7">
                  40<sup>%</sup>
                </Text>
                <Text
                  type="p"
                  className="mt-3 text-base text-gray-700 font-bold"
                >
                  ROI
                </Text>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maturity 7 Days
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Minimum Investment - $500
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maximum Investment - $4,999
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Auto Mined
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Withdrawal After 7 Days
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="pb-0.5 text-base font-bold text-gray-900">
                      Premium Support
                    </span>
                  </li>
                </ul>

                {isAuthenticated ? (
                  <Link
                    to="/dashboard/invest"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                ) : (
                  <Link
                    to="/auth"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                )}
                <Text type="p" className="mt-4 text-sm text-gray-500"></Text>
              </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
              <div className="p-8 xl:px-12">
                <Text
                  type="h3"
                  className="text-base px-10 py-4 font-bold text-white bg-[#083688]"
                >
                  Gold Plan
                </Text>
                <Text type="p" className="text-5xl font-bold text-black mt-7">
                  60<sup>%</sup>
                </Text>
                <Text
                  type="p"
                  className="mt-3 text-base text-gray-700 font-bold"
                >
                  ROI
                </Text>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maturity 14 Days
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Minimum Investment - $5,000
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maximum Investment - $49,999
                    </span>
                  </li>
                   <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Auto Mined
                    </span>
                  </li>

                  {/* <li className="inline-flex items-center space-x-2">
                      // <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" />
                      <img src={Images.check} alt="checkimg" className="w-5 h-5" />
                      <span className="text-base font-bold text-gray-900">
                        {" "}
                        120+ Coded Blocks{" "}
                      </span>
                    </li> */}

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Withdrawal After 14 Days
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="pb-0.5 text-base font-bold text-gray-900">
                      Premium Support
                    </span>
                  </li>
                </ul>

                {isAuthenticated ? (
                  <Link
                    to="/dashboard/invest"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                ) : (
                  <Link
                    to="/auth"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                )}
                <Text type="p" className="mt-4 text-sm text-gray-500"></Text>
              </div>
            </div>

            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
              <div className="p-8 xl:px-12">
                <Text
                  type="h3"
                  className="text-base px-10 py-4 font-bold text-white bg-[#083688]"
                >
                  Platinum Plan
                </Text>
                <Text type="p" className="text-5xl font-bold text-black mt-7">
                  80<sup>%</sup>
                </Text>
                <Text
                  type="p"
                  className="mt-3 text-base text-gray-700 font-bold"
                >
                  ROI
                </Text>

                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maturity 4 Weeks
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Minimum Investment - $50,000
                    </span>
                  </li>
                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Maximum Investment - $1,000,000
                    </span>
                  </li>
                   <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Auto Mined
                    </span>
                  </li>

                  {/* <li className="inline-flex items-center space-x-2">
                      // <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" />
                      <img src={Images.check} alt="checkimg" className="w-5 h-5" />
                      <span className="text-base font-bold text-gray-900">
                        {" "}
                        120+ Coded Blocks{" "}
                      </span>
                    </li> */}

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-gray-900">
                      Withdrawal After 4 Weeks
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    {/* <Check className="flex-shrink-0  w-7 h-7 font-black text-indigo-500" /> */}
                    <img
                      src={Images.check}
                      alt="checkimg"
                      className="w-5 h-5"
                    />
                    <span className="pb-0.5 text-base font-bold text-gray-900 ">
                      Premium Support
                    </span>
                  </li>
                </ul>

                {isAuthenticated ? (
                  <Link
                    to="/dashboard/invest"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                ) : (
                  <Link
                    to="/auth"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-md bg-[#083688]"
                    role="button"
                  >
                    Invest Now
                  </Link>
                )}
                <Text type="p" className="mt-4 text-sm text-gray-500"></Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
