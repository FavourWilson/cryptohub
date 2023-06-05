import { Link } from "react-router-dom";

const CtaTwo = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold text-black lg:max-w-md capitalize">
              Get any question or need assistance?
            </h2>

            <div className="px-10 mt-8 lg:mt-0 lg:px-0">
              <div className="sm:flex sm:justify-center lg:justify-end">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md sm:mt-0 sm:w-auto hover:bg-main focus:bg-main"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaTwo;
