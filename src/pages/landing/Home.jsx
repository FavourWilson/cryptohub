import Header from "../../components/organisms/Header";
import Ticker from "../../components/molecules/Ticker";
import About from "../../components/templates/About";
import Features from "../../components/templates/Features";
import Pricing from "../../components/templates/Pricing";
import CtaOne from "../../components/templates/CtaOne";
import How from "../../components/templates/How";
import Transactions from "../../components/templates/Transactions";
import Testimonies from "../../components/templates/Testimonies";
import Trade from "../../components/molecules/Trade"
import TickerTwo from "../../components/molecules/TickerTwo"
import Faqs from "../../components/templates/Faqs";
import Blog from "../../components/templates/Blog";
import { useCreateQuery } from "../../features/requests/useCreate";
import Alert from "../../components/organisms/Alert";
import { useState, useEffect } from "react";

import {Toaster} from "react-hot-toast";
import TickerThree from "../../components/molecules/TickerThree";

const generate = () => {
  // var digitss = "556666666667777778889889999999";
  var digitss = "444556";
  let x = "";
  for (let i = 1; i < 2; i++) {
    x += digitss[Math.floor(Math.random() * 10)];
  }
  var digits = "0123456789";
  let gen = "";
  for (let i = 0; i < x; i++) {
    gen += digits[Math.floor(Math.random() * 10)];
  }
  gen  = 5000
  return gen;
}

const Home = () => {
  const [x, setX] = useState(parseInt(generate()))
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
      navigator.userAgent
    )
  ) {
    var h = 250;
    var w = 250;
  } else {
    var h = 350;
    var w = 700;
  }
  // var h = useState(document.querySelector('#tablex').clientHeight)
  //   var w = useState(document.querySelector("#tablex").clientWidth());
  const size = { h, w };
  // const { isLoading, isSuccess, isError, status, data } = useCreateQuery(x);
  // useEffect(() => {
  //   status==='success'&&setX(parseInt(generate()));
  // }, [status]);
  // if(isSuccess ) Alert({
  //     interval: x,
  //     icon: "success",
  //     title: "Success",
  //     text: "You have been logged out. Please login to continue or sign-up if you don't have an account.",
  //   });
  return (
    <>
      <Toaster />
      <Header />
      <Ticker />
      <About />
      <Features />
      <Pricing />
      <CtaOne />
      <How />
      <TickerTwo />
      {/* <TickerThree /> */}
      {/* <Transactions /> */}
      {/* <Trade
        theme="light"
        size={size}
        coin="ETH"
        className="inline-block lg:hidden"
        id="df5t8f"
      /> */}
      <Testimonies />
      <Faqs />
      <Blog />
    </>
  );
};

export default Home;
