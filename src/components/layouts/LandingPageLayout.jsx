import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CtaTwo from "../templates/CtaTwo";
import Footer from "../templates/Footer";
import { useDispatch } from "react-redux";
import { getBlog, getTestimonies, getFaq } from "../../features/landing";

const LandingPageLayout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    const len = location.pathname === '/blogs' ? 'all': 5
    dispatch(getBlog({len}))
    dispatch(getTestimonies());
    dispatch(getFaq());
  }, [])
  return (
    <>
      <Outlet />
      {!location.pathname.includes("contact-us") && <CtaTwo />}
      <Footer />
    </>
  );
};

export default LandingPageLayout;
