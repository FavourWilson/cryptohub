import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/images";
import { MdSpaceDashboard  } from "react-icons/md";
import { BiMoneyWithdraw  } from "react-icons/bi";
import { GrLineChart  } from "react-icons/gr";
import {useState, useEffect} from 'react';
import { useLoginMutation } from "../../apis/authApi.apis";

import SidebarLinks from "../atom/Links";
import Text from "../atom/Text";

const Sidebar = ({ open, onClose }) => {
  const [isAdmin, setIsAdmin] = useState(false);
   const { data } = useLoginMutation();
  const routes = [
    // icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    {
      name: "Dashboard",
      layout: "/dashboard",
      path: "",
      icon: <MdSpaceDashboard className="w-7 h-7" />
    },
    // {
      //   name: "Invest",
      //   layout: "/dashboard/",
      //   path: "invest",
      //   icon: ""
      // },
      {
        name: "Deposit",
        layout: "/dashboard/",
        path: "deposit",
        icon: <GrLineChart className="w-7 h-7" />
      },
      {
        name: "Withdrawal",
        layout: "/dashboard/",
        path: "withdraw",
        icon: <BiMoneyWithdraw className="w-7 h-7" />
      },
    // {
    //   name: "Transaction",
    //   layout: "/dashboard/",
    //   path: "transaction",
    //   icon: ""
    // },
  ]
    const adminLink = [
      {
        name: "All Users",
        layout: "/dashboard/admin",
        path: "all-users",
        icon: "",
      },
      {
        name: "Blog",
        layout: "/dashboard/admin",
        path: "all-blog",
        icon: "",
      },
      {
        name: "Manage Wallet",
        layout: "/dashboard/admin",
        path: "wallet",
        icon: "",
      },
      {
        name: "Faq",
        layout: "/dashboard/admin",
        path: "set-faq",
        icon: "",
      },
      // {
      //   name: "Send Email",
      //   layout: "/dashboard/admin",
      //   path: "send-email",
      //   icon: "",
      // },
      {
        name: "Testimonials",
        layout: "/dashboard/admin",
        path: "all-testimonials",
        icon: "",
      },
      {
        name: "Feedback",
        layout: "/dashboard/admin",
        path: "set-feedback",
        icon: "",
      },
    ];

  useEffect(()=>{   
  if(localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a")){
      setIsAdmin(true)
    }
  }, []);
  return (
    <div
      className={`sm:none duration-175 linear fixed lg:mr-12 !z-50 flex min-h-full flex-col bg-minor pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX className="text-white w-6 h-6"/>
      </span>

      <div className={`mx-5 mt-[50px] flex items-center justify-center`}>
        <Link
          to="/"
          title="Home Page"
          className="flex items-center gap-6 uppercase"
        >
          <img className="w-auto h-12 lg:h-16" src={Icons.iconGray} alt="" />{" "}
          <Text
            type="h5"
            className="font-bold uppercase text-lg lg:text-lg -ml-6 text-lightPrimary EBfont"
          >
            Crypto-TradingHub
          </Text>
        </Link>
      </div>
      <div className="mt-[25px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        {isAdmin ? 
          <SidebarLinks adminLinks={adminLink} />
          : 
          <SidebarLinks routes={routes} />
        
        }
        <SidebarLinks routes={routes} adminLinks={adminLink} />
      </ul>

      {/* Free Horizon Card
      <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
