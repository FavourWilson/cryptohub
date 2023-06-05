import { Images } from "../../assets/images";
import Button from "../atom/Button";
import { ShieldCheck, WrenchScrewdriver } from "../atom/Icons";
import Text from "../atom/Text";
import { siteName } from "../const";

const About = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src={Images.pattern}
                alt=""
              />
              <div className="pl-12 pr-6">
                <img className="relative" src={Images.Photo} alt="" />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-main rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <Text type="p" className="text-3xl sm:text-4xl">
                        👍
                      </Text>
                      <blockquote className="ml-5">
                        <Text
                          type="p"
                          className="text-sm font-medium text-white sm:text-lg"
                        >
                          “Choose {siteName} now
                          and let our professionals help you choose an
                          investment plan that meets your needs today!”
                        </Text>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <Text
                type="h2"
                className="capitalize text-center lg:text-left text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight"
              >
                Enjoy the benefits of Bitcoin investment
              </Text>
              <Text
                type="p"
                className="text-xl leading-relaxed text-gray-900 mt-9"
              >
                Our{" "}
                <span className="font-semibold capitalize">
                  Bitcoin investment platform
                </span>{" "}
                covers all your devices network and protects your from DDOS
                attacks and offers you a complete and safe experience.{" "}
                <br className="hidden" /> You only need your{" "}
                <span className="font-semibold capitalize">Bitcoin wallet</span>{" "}
                to get started.
              </Text>
              <div className="w-full mt-9 flex flex-col gap-5 lg:gap-3 lg:justify-between px-5 lg:px-0">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center justify-center lg:justify-start">
                    <WrenchScrewdriver className="w-10 h-10 text-main" />
                    <Text type="h3" className="font-bold text-xl">
                      We Innovate
                    </Text>
                  </div>
                  <Text
                    type="p"
                    className="text-center lg:text-left mt-1 text-xl leading-relaxed text-gray-900"
                  >
                    We have team of experts working around the clock to improve
                    trading standards and update web services to ensure the best
                    trading experience.
                  </Text>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center justify-center lg:justify-start">
                    <ShieldCheck className="w-10 h-10 text-main" />
                    <Text type="h3" className="font-bold text-xl">
                      We're Secure
                    </Text>
                  </div>
                  <Text
                    type="p"
                    className="text-center lg:text-left mt-1 text-xl leading-relaxed text-gray-900"
                  >
                    Our Website uses COMODO SSL security, SSL encryption and
                    that confirms that the presented contents are genuine and
                    legitimate and all client information are secured with
                    end-to-end encryption to ensure privacy.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
