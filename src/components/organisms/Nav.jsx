import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/images";
import Button from "../atom/Button";
import { Bars3BottomLeft, XMark } from "../atom/Icons";
import Text from "../atom/Text";
import { useSelector } from "react-redux";


const Nav = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(!1);

  return (
    <>
      <header className="w-full fixed top-0 z-30 background bg-white">
        <div className="px-4 mx-auto sm:px-6 pt-3 lg:pt-0 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex-shrink-0">
              <Link
                to="/"
                title="Home Page"
                className="flex items-center gap-6 uppercase"
              >
                <img
                  className="w-auto h-12 lg:h-16"
                  src={Icons.iconGray}
                  alt=""
                />{" "}
                <Text
                  type="h1"
                  className="font-bold font-Poliphilus uppercase text-lg lg:text-4xl -ml-6 text-main EBfont"
                >
                  Crypto-TradingHub
                </Text>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((isOpen) => (isOpen = !isOpen))}
              className="inline-flex p-1.5 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {isOpen ? <XMark /> : <Bars3BottomLeft />}
            </button>
          </div>
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } lg:opacity-100 lg:translate-x-0 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white h-screen fixed lg:h-auto iii ml-auto lg:bg-transparent lg:w-auto lg:relative lg:flex lg:items-center lg:justify-center lg:space-x-10`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 lg:justify-center lg:space-x-10 ">
              {/* <Link
                to="/"
                title="Products"
                className="px-3 py-2 mx-3 mt-2 lg:px-0 lg:py-0 lg:mx-0 lg:mt-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                
                Products
              </Link> */}

              <Link
                to="/plans"
                title="Plans"
                className="px-3 py-2 mx-3 mt-2 lg:px-0 lg:py-0 lg:mx-0 lg:mt-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Plans
              </Link>

              <Link
                to="/faqs"
                title="FAQ's"
                className="px-3 py-2 mx-3 mt-2 lg:px-0 lg:py-0 lg:mx-0 lg:mt-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                FAQs
              </Link>

              <Link
                to="/about"
                title="About Us"
                className="px-3 py-2 mx-3 mt-2 lg:px-0 lg:py-0 lg:mx-0 lg:mt-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                About
              </Link>
              <Link
                to="/contact-us"
                title="Contact Us"
                className="px-3 py-2 mx-3 mt-2 lg:px-0 lg:py-0 lg:mx-0 lg:mt-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact Us
              </Link>
            </div>

            <div className="w-auto h-px my-5 lg:my-2 lg:w-px lg:h-5 bg-black/20"></div>

            <div className="flex justify-evenly items-center my-2.5 lg:my-2 lg:justify-between lg:gap-8">
              {!isAuthenticated?
              <>
              <Link
                to="/auth/register"
                title="Create a free account"
                className="inline-flex items-center justify-center px-5 py-2.5 tracking-wide text-base font-semibold text-lightPrimary bg-main rounded-md hover:bg-main hover:text-white transition-all duration-200 focus:bg-main focus:text-white"
                role="button"
              >
                Register
              </Link>
              <Link
                to="/auth"
                title="Login to your account"
                className="text-base font-semibold text-main border-2 border-main tracking-wide px-5 py-2.5 rounded-md transition-all duration-200 hover:text-opacity-80"
              >
                Login
              </Link>
              </>
              :
              <Link
                to="/dashboard"
                title="View Dashboard"
                className="inline-flex items-center justify-center px-5 py-2.5 tracking-wide text-base font-semibold text-lightPrimary bg-main rounded-md hover:bg-main hover:text-white transition-all duration-200 focus:bg-main focus:text-white"
                role="button"
              >
                My Dashboard
              </Link>
}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
