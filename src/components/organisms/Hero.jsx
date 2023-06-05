import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import Button from "../atom/Button";
import Text from "../atom/Text";

const Hero = () => {
  const isOpen = !1;
  return (
    <>
      <section className="py-28 sm:py-24 lg:py-48">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-last">
              <Text
                type="h1"
                className="text-5xl font-bold text-lightPrimary sm:text-6xl lg:text-7xl capitalize text-center lg:text-left"
              >
                The world's <br className="inline-block lg:hidden" /> leading
                bitcoin <br className="inline-block lg:hidden" />
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[15px] lg:border-b-[21px] border-minorDark"></span>
                  <Text
                    type="h1"
                    className="relative text-5xl font-bold text-lightPrimary sm:text-6xl lg:text-7xl"
                  >
                    investment
                  </Text>
                </div>{" "}
                site.
              </Text>

              <Text type="p" className="mt-8 text-lightPrimary text-xl text-center lg:text-left">
                A bold opportunity in the era of{" "}
                <br className="inline-block lg:hidden" />
                digital gold,
                <span className="font-bold capitalize">
                  bitcoin investment.
                </span>{" "}
                <br className="inline-block lg:hidden" />
                <span className="font-bold">
                  Invest and Earn Bitcoin and{" "}
                  <br className="inline-block lg:hidden" />
                  Other Cryptocurrencies Interest,
                </span>
                <br className="lg:inline-block hidden" />
                With the <br className="inline-block lg:hidden" />
                <span className="font-bold capitalize">
                  Best legitimate bitcoin investment site.
                </span>
              </Text>

              <div className="mt-10 flex justify-between items-center space-x-5">
                <Link
                  to="/auth/register"
                  title="Create an account"
                  className="rounded-md inline-flex items-center justify-center px-12 py-4 text-base font-bold tracking-wide text-main transition-all duration-200 bg-lightPrimary hover:bg-main hover:text-lightPrimary focus:bg-main"
                  role="button"
                >
                  {" "}
                  Register{" "}
                </Link>

                <Link
                  to="/auth"
                  title="Login to your account"
                  className="rounded-md inline-flex lg:hidden items-center text-base font-bold transition-all tracking-wide duration-200 sm:mt-0 hover:opacity-80 bg-transparent border-2 border-lightPrimary text-lightPrimary px-12 py-4"
                >
                  {/* <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                  Login
                </Link>
              </div>
            </div>

            <div>
              <img
                className="w-full mt-3"
                src={Images.heroImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
