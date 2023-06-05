import { Images } from "../../assets/images";
import { ChevronLeft, ChevronRight } from "../atom/Icons";
import Text from "../atom/Text";
import { useSelector } from "react-redux";
import Person1 from '../../assets/testimonials/person1.jpg'
import Person2 from '../../assets/testimonials/Person2.jpg'
import Person3 from '../../assets/testimonials/Person3.jpg'
import Person4 from '../../assets/testimonials/Person4.jpg'
const Testimonies = () => {
  let { testimonies } = useSelector((state) => state.landing);
  // testimonies = testimonies[1]
  return (
    <>
      <section className="bg-light bg-opacity-40 my-14">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <Text type="p" className="text-3xl lg:text-5xl font-medium text-main">
            Testimonials
          </Text>
          <div className="mt-px">
            <span className="inline-block w-32 lg:w-56 h-1 bg-minorLight rounded-full"></span>
            <span className="inline-block w-6 h-1 ml-1 bg-minorLight rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-minorLight rounded-full"></span>
          </div>

          <Text
            type="h1"
            className="mt-2 text-1xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white"
          >
            What our clients says
          </Text>

          <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-3">
                
                  <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    <div className="flex flex-col justify-between flex-1 p-8">
                      <div className="flex-1">
                        <blockquote>
                          <p className="text-lg text-gray-800 text-center">
                            “I never thought investing in cryptocurrencies could be so rewarding until I came across this incredible platform. Thanks to their expert guidance and user-friendly interface, I've been able to grow my crypto portfolio significantly. It's a game-changer! Highly recommended.”
                          </p>
                        </blockquote>
                      </div>

                      <div className="mt-8">
                        <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div className="flex items-center">
                          <img
                            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                            src={Person2}
                            alt=""
                          />
                          <div className="ml-3">
                            <p className="text-base font-semibold text-gray-800 truncate">
                              John Anderson
                            </p>
                            <p className="text-base text-gray-500 truncate">
                              New York City
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    <div className="flex flex-col justify-between flex-1 p-8">
                      <div className="flex-1">
                        <blockquote>
                          <p className="text-lg text-gray-800 text-center">
                            “I was skeptical about crypto investments at first, but after joining this platform, I've experienced nothing but positive results. The team's professionalism and in-depth market analysis have helped me make informed investment decisions. I couldn't be happier with my returns.”
                          </p>
                        </blockquote>
                      </div>

                      <div className="mt-8">
                        <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div className="flex items-center">
                          <img
                            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                            src={Person4}
                            alt=""
                          />
                          <div className="ml-3">
                            <p className="text-base font-semibold text-gray-800 truncate">
                              Emily Thompson
                            </p>
                            <p className="text-base text-gray-500 truncate">
                              London
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    <div className="flex flex-col justify-between flex-1 p-8">
                      <div className="flex-1">
                        <blockquote>
                          <p className="text-lg text-gray-800 text-center">
                            “Being a part of this crypto investment community has been an eye-opening experience for me. Not only have I learned a great deal about different cryptocurrencies, but I've also seen my initial investment grow substantially. The platform's security measures and responsive customer support are exceptional.”
                          </p>
                        </blockquote>
                      </div>

                      <div className="mt-8">
                        <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div className="flex items-center">
                          <img
                            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                            src={Person1}
                            alt=""
                          />
                          <div className="ml-3">
                            <p className="text-base font-semibold text-gray-800 truncate">
                              Mark Ramirez
                            </p>
                            <p className="text-base text-gray-500 truncate">
                              Sydney
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                    <div className="flex flex-col justify-between flex-1 p-8">
                      <div className="flex-1">
                        <blockquote>
                          <p className="text-lg text-gray-800 text-center">
                            “I've been investing in cryptocurrencies for a while, but this platform has taken my investment game to the next level. Their advanced trading tools and accurate market predictions have given me an edge in the crypto market. Thanks to them, I've been able to achieve financial milestones I never thought possible”
                          </p>
                        </blockquote>
                      </div>

                      <div className="mt-8">
                        <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div className="flex items-center">
                          <img
                            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                            src={Person3}
                            alt=""
                          />
                          <div className="ml-3">
                            <p className="text-base font-semibold text-gray-800 truncate">
                              Sarah Johnson
                            </p>
                            <p className="text-base text-gray-500 truncate">
                              Toronto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
