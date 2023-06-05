import React from 'react'
import { Images } from '../../assets/images'
import { siteName } from './../const/index';

const Abt = () => {
  return (
    <>
        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
              <h2 className="font-bold leading-tight text-black text-3xl lg:text-5xl lg:leading-tight text-center">
                The World's Leading Bitcoin
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full h-[6px] lg:h-2 bg-minorLight bottom-1.5"></span>
                <span className="relative">{" "}Investment Site </span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
              <div>
                <img
                  className="w-full mx-auto sm:max-w-xs"
                  src={Images.featurePhoto}
                  alt=""
                />
              </div>

              <div>
                {/* <h3 className="text-lg font-semibold text-gray-900">
                  Hey! I am John, founder of Celebration.
                </h3> */}
                <p className="mt-4 text-lg text-gray-700">
                  {siteName} is a leading cryptocurrency company that is dedicated to providing innovative solutions for secure and efficient transactions in the digital economy. Founded in 2018, our team of experts has extensive experience in the cryptocurrency and blockchain industries, and we are committed to delivering reliable and cutting-edge services to our clients.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  At {siteName}, we understand the importance of security and privacy in the digital world. That's why we use state-of-the-art encryption and authentication technologies to ensure that all transactions are safe and secure. Our platform offers a range of features, including a user-friendly interface, fast transaction processing, and low fees.
                </p>

                <p className="mt-4 text-lg text-gray-700">
                  We are also committed to promoting financial inclusion and democratizing access to digital assets. Our platform is designed to be accessible to everyone, regardless of their level of technical expertise. We offer a variety of tools and resources to help our clients understand and navigate the complex world of cryptocurrencies.
              </p>
              
                <p className="mt-4 text-lg text-gray-700">
                 At {siteName}, we believe that cryptocurrencies and blockchain technology have the potential to transform the global economy. We are dedicated to driving innovation and progress in this field, and we are committed to helping our clients achieve their financial goals in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Abt
