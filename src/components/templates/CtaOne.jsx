import { Link } from "react-router-dom";
import Text from "../atom/Text";

const CtaOne = () => {
  return (
    <>
      <section className="bg-light bg-opacity-40">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <Text
            type="h2"
            className="max-w-2xl mx-auto text-3xl lg:text-5xl font-semibold tracking-tight text-gray-800"
          >
            Earn more with our <br />
            <span className="text-main capitalize">referral commission.</span>
          </Text>

          <Text type="p" className="max-w-2xl mt-6 text-center text-gray-500">
            Regular members who have an active investment can participate in our
            affiliate program which gives back a 5% bonus for their active
            referrals
          </Text>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              to="/auth/register"
              className="inline-flex items-center justify-center tracking-wider w-full px-10 py-2 border-[2px] border-main text-white Transform bg-main rounded-lg hover:bg-minor focus:ring focus:ring-minor focus:ring-opacity-80"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaOne;
