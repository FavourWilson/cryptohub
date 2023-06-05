import { Link, Outlet } from "react-router-dom";
import { Icons } from "../../assets/images";
import { ChatBubbleLeftRight, Home } from "../atom/Icons";
import Text from "../atom/Text";

const AccountPageLayout = () => {
  return (
    <>
      <header className="fixed w-full z-50">
        {/* <!-- lg+ --> */}
        <div className="bg-lightPrimary border-b border-gray-200">
          <div className="px-4 mx-auto lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className="lg:flex lg:items-center lg:space-x-10">
                <Link
                  to="/"
                  title="Back home"
                  className="text-base font-medium text-black hover:text-main"
                >
                  <Home className="w-8 h-8 m-2" />
                </Link>
              </div>

              <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
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
                      className="font-bold uppercase text-lg lg:text-4xl -ml-6 text-main EBfont"
                    >
                      Crypto-TradingHub
                    </Text>
                  </Link>
                </div>
              </div>

              {/* <div className="lg:flex lg:items-center lg:space-x-10">
                <a
                  href="#"
                  title="Support"
                  className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
                >
                  <ChatBubbleLeftRight />
                </a>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
      <section className="bg-gray-50 py-12 lg:py-24 h-0 lg:h-screen flewx items-center justify-center">
        <div className="px-6 lg:px-8 mt-5 lg:mt-0">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AccountPageLayout;
