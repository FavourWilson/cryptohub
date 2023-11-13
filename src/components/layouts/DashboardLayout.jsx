import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardFooter from "../templates/DashboardFooter";
import { getNotification, setIsAuthenticated } from "../../features/users";
import { useSelector, useDispatch } from "react-redux";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const routes = [];
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Dashboard");
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    window.innerWidth < 1200 ? setOpen(!1) : setOpen(!0);
    window.addEventListener("resize", () =>
    window.innerWidth < 1200 ? setOpen(!1) : setOpen(!0)
    );
  }, []);

  useEffect(() => {
    getActiveRoute(routes);
  window.innerWidth < 1200 ? setOpen(!1) : setOpen(!0);
    !location.pathname.includes('dashboard/') && dispatch(getNotification());
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = !1;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  useEffect(() => {
    if (!localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a")) {
      dispatch(setIsAuthenticated(false))
      console.log(isAuthenticated)
      navigate("/auth")
    }
    dispatch(setIsAuthenticated(true))
  },[])
  // if (!isSuccess && !isLoading) return <Navigate to="/auth" />;
 // if (!isAuthenticated && !loading) return <Navigate to="/auth" />;
  return (
    <>
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(!1)} />
        {/* Navbar & Main Content */}
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          {/* Main Content */}
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            {/* Routes */}
            <div className="h-full">
              <Navbar
                onOpenSidenav={() => setOpen(!0)}
                logoText={"Horizon UI Tailwind React"}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                // {...rest}
              />
              <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                <Outlet />
              </div>
              <div className="p-3">
                <DashboardFooter />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
