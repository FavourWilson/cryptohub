import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import LandingPageLayout from "./components/layouts/LandingPageLayout";
import AccountPageLayout from "./components/layouts/AccountPageLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

import Home from "./pages/landing/Home";
import Plans from "./pages/landing/Plans";
import FAQs from "./pages/landing/FAQs";
import Blog from "./pages/landing/Blog";
import About from "./pages/landing/About";
import PnP from "./pages/landing/PnP";
import TnC from "./pages/landing/TnC";
import Career from "./pages/landing/Career";
import ContactUs from "./pages/landing/ContactUs";

import Login from "./pages/account/Login";
import Register from "./pages/account/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import Withdraw from "./pages/dashboard/Withdraw";
import Transaction from "./pages/dashboard/Transactions";
import Invest from "./pages/dashboard/Invest";
import InitDeposit from "./pages/dashboard/InitDeposit";
import Profile from "./pages/dashboard/Profile";

import AllUsers from "./pages/admin/AllUsers";
import Transactions from "./pages/admin/Transactions";
import AllFaqs from "./pages/admin/AllFaqs";
import Testimonials from "./pages/admin/Testimonials";
import Feedback from "./pages/admin/Feedback";
import AllBlog from "./pages/admin/AllBlog";
import ViewUser from "./pages/admin/ViewUser";
import Address from "./pages/admin/Address";

const js = [{ path: "js", file: "toTop.js" }];

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.includes("-trading") ||
      location.pathname.includes("/faq") ||
      location.pathname.includes("/plans") ||
      location.pathname.includes("/blog") ||
      location.pathname.includes("/contact") ||
      location.pathname.includes("/about") ||
      location.pathname.includes("/terms") ||
      location.pathname.includes("/dashboard") ||
      location.pathname.includes("/privacy")
    ) {
      for (let i = 0; i < js.length; i++) {
        const { path, file } = js[i];
        if (!document.querySelector(`[src="/assets/${path}/${file}"]`)) {
          const script = document.createElement("script");
          script.src = `/assets/${path}/${file}`;
          script.async = false;
        }
      }
    }
  }, [dispatch, location]);

  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Home />} />
          <Route path="plans" element={<Plans />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:blogid" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PnP />} />
          <Route path="terms-and-conditions" element={<TnC />} />
        </Route>
        {/* Account Page */}
        <Route path="/auth" element={<AccountPageLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register/:ref" element={<Register />} />
        </Route>
        {/* Dashboard Page */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="invest" element={<Invest />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="transaction/:id" element={<InitDeposit />} />
          <Route path="profile" element={<Profile />} />
          {/* admin */}
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-users/view/:user" element={<ViewUser />} />
          <Route path="admin/all-blog" element={<AllBlog />} />
          <Route path="admin/all-transactions" element={<Transactions />} />
          <Route path="admin/set-faq" element={<AllFaqs />} />
          <Route path="admin/all-testimonials" element={<Testimonials />} />
          <Route path="admin/set-feedback" element={<Feedback />} />
          <Route path="admin/wallet" element={<Address />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
