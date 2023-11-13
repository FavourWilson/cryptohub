import Dropdown from "../molecules/Dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
// import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
} from "react-icons/io";
import avatar from "../../assets/images/avatars/avatar4.png";
import Text from "../atom/Text";
import { useState, useEffect } from "react";
import { Icons } from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/users";

const Navbar = (props) => {
  const dispatch = useDispatch()

  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = useState(false);

  const { user } = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);
  const Logout = async () => {
    const res = await dispatch(logout())
    if (res.meta.requestStatus.toLowerCase() === "fulfilled") { 
      location.reload();
    }
  }

  useEffect(()=>{
     if(localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a")){
      setIsAdmin(true)
    }
  }, [])
  return (
    <nav className="lg:ml-1 sticky top-1 lg:top-4 z-40 flex flex-col-reverse lg:flex-row flex-wrap items-center justify-end rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      

      <div className="relative mt-[3px] flex h-full w-[355px] flex-grow items-center justify-evenly gap-2 rounded-full bg-minor px-2.5 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[90px] md:flex-grow-0 md:gap-1 xl:w-[90px] xl:gap-2">
        <span
          className="flex cursor-pointer text-xl text-lightPrimary dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-6 w-6" />
        </span>
        <div className="flex justify-self-center lg:hidden">
          <Text
            type="h5"
            className="font-garmond font-bold pl-5 uppercase text-lg lg:text-lg -ml-6 text-white  EBfont"
          >
            Crypto-TradingHub
          </Text>
          {/* <img className="w-auto h-16" src={Icons.iconGray} alt="" /> */}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full border-2 border-lightPrimary"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="mt-3 ml-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, {user.first_name} {user.last_name}
                  </p>{" "}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="mt-3 ml-4 flex flex-col">
               {!!!user.isAdmin && <Link
                  to="/dashboard/profile"
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile & Settings
                </Link>}
                {/* <a
                  href="#"
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Newsletter Settings
                </a> */}
                <span
                  onClick={Logout}
                  className="cursor-pointer mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </span>
              </div>
            </div>
          }
          // classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;