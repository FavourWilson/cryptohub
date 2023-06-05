import { Images } from "../../assets/images";
import { ArrowTrendingUp, Banknotes, UserPlus } from "../atom/Icons";

const How = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Fast and Easy Investment Process.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src={Images.curved} alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-minorLight rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    <UserPlus className="w-8 h-8 text-main" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  STEP 1
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Create a free account.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-minorLight rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    <ArrowTrendingUp className="w-8 h-8 text-main" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  STEP 2
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Deposit & Investment
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-minorLight rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    <Banknotes className="w-8 h-8 text-main" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  STEP 3
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Start Earning Profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default How