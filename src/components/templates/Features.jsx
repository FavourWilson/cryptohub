import { Images } from "../../assets/images";
import { cryptoLogo } from "../../assets/images/cryptologo";
import {
  ArrowTrendingUp,
  Briefcase,
  CurrencyDollar,
  Global,
  GlobeAmericas,
  UserGroup,
} from "../atom/Icons";
import Text from "../atom/Text";
import CountUp from 'react-countup';

const Features = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <Text
              type="p"
              className="text-sm font-semibold tracking-widest text-main uppercase"
            >
              We've got you covered
            </Text>

            <Text
              type="h2"
              className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl capitalize"
            >
              explore our <br className="inline-block lg:hidden" /> awesome
              features
            </Text>
            <div className="mt-px">
              <span className="inline-block w-56 lg:w-36 h-1 bg-main rounded-full"></span>
              <span className="inline-block w-6 h-1 ml-1 bg-main rounded-full"></span>
              <span className="inline-block w-2 h-1 ml-1 bg-main rounded-full"></span>
            </div>
          </div>

          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-7 sm:mt-20 gap-x-4 justify-between">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-4 lg:space-y-12">
              <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <span className="inline-block p-2 text-main bg-minorLight bg-opacity-40 rounded-xl md:mx-4 mb-2">
                  <Briefcase />
                </span>
                <div className="ml-5 text-center lg:text-left">
                  <Text type="h3" className="text-xl font-semibold text-black">
                    Personal Account Managers
                  </Text>
                  <Text type="p" className="mt-3 text-base text-gray-600">
                    Enjoy the benefits of having a dedicated account manager for
                    Investments with Bitcoin seeking the absolute return to
                    generate alpha in all market.
                  </Text>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <span className="inline-block p-2 text-main bg-minorLight bg-opacity-40 rounded-xl md:mx-4 mb-2">
                  <Global />
                </span>
                <div className="ml-5 text-center lg:text-left">
                  <Text type="h3" className="text-xl font-semibold text-black">
                    Globally Renowned
                  </Text>
                  <Text type="p" className="mt-3 text-base text-gray-600">
                    We have clients from over{" "}
                    <span className="font-semibold">198</span> countries and
                    over <span className="font-semibold">5</span> continents.
                    Which makes{" "}
                    <span className="font-semibold">Crypto Trading Hub</span>{" "}
                    widely recognized and accepted by users, businesses, and
                    investors worldwide.
                  </Text>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <span className="inline-block p-2 text-main bg-minorLight bg-opacity-40 rounded-xl md:mx-4 mb-2">
                  <UserGroup />
                </span>
                <div className="ml-5 text-center lg:text-left">
                  <Text type="h3" className="text-xl font-semibold text-black">
                    Client Focused
                  </Text>
                  <Text type="p" className="mt-3 text-base text-gray-600">
                    Size doesn't matter. At{" "}
                    <span className="font-semibold">Crypto Trading Hub</span>{" "}
                    the client comes first regardless of net capital worth,
                    account type or size of Bitcoin Investments. All our clients
                    receive the same quality services, execution and level of
                    support,{" "}
                    <span className="font-semibold">Crypto Trading Hub</span>{" "}
                    was founded on these value and the will not change.
                  </Text>
                </div>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:col-span-3">
              <img
                className="w-[28rem] h-[28rem] object-cover shadow-lg xl:w-[34rem] xl:h-[34rem] rounded-full"
                src={Images.featurePhoto}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Logos */}
      <section className="bg-white my-8 ">
        <div className="container px-6 py-1 mx-auto">
          {/* <hr className="my-6 border-gray-200" /> */}

          <div className="flex overflow-x-hidden relative">
            <div className="flex justify-between gap-3 animate-marquee whitespace-nowrap">
              {cryptoLogo.map((x, i) => (
                //   <div key={i} className="flex items-center justify-center">
                <img key={i} src={x} alt="" className="w-12 h-12" />
                //   </div>
              ))}
            </div>
            <div className="hidden lg:flex justify-between gap-3 animate-marquee2 whitespace-nowrap px-5 lg:absolute top-0">
              {cryptoLogo.map((x, i) => (
                //   <div key={i} className="flex items-center justify-center">
                <img key={i} src={x} alt="" className="w-12 h-12" />
                //   </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Total Counter */}
      <section className="bg-white py-4 lg:py-10">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8  text-center sm:gap-x-8 md:grid-cols-3">
            <div>
              <Text type="h3" className="font-bold text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                  $<CountUp end={25} duration={20}/>M
                  <sup className="-pl-10 text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                    +
                  </sup>
                </span>
              </Text>
              <Text type="p" className="mt-4 text-md font-medium text-gray-900">
                Total Value Profits
              </Text>
            </div>

            <div>
              <h3 className="font-bold text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                  <CountUp end={28.11} duration={20}/>
                  <sup className="text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                    %
                  </sup>
                </span>
              </h3>
              <p className="mt-4 text-md font-medium text-gray-900">
                Average Ai Trading Monthly Performance
              </p>
            </div>

            <div>
              <h3 className="font-bold text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                  <CountUp end={11000} duration={20}/>
                  <sup className="text-transparent bg-clip-text bg-gradient-to-r from-main to-minorLight">
                    +
                  </sup>
                </span>
              </h3>
              <p className="mt-4 text-md font-medium text-gray-900">
                Clients Worldwide earing stable interest
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
