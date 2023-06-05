import { Link, useLocation } from "react-router-dom";
import DashIcon from "./Icons/DashIcon";
import { useSelector } from "react-redux";
// chakra imports

export function SidebarLinks({ routes, adminLinks }) {
  // Chakra color mode
  let location = useLocation();
  const { user } = useSelector((state) => state.user);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName;
  };

  const createLinks = (routes) => {
    if (!user.isAdmin) {
      return routes.map((route, index) => {
        if (
          route.layout === "/dashboard/" ||
          (route.layout === "/dashboard" && !user.isAdmin)
        ) {
          return (
            <Link key={index} to={route.layout + route.path}>
              <div
                className={`relative mb-3 py-2.5 flex hover:cursor-pointer ${
                  !!activeRoute(`${route.layout}${route.path}`) && "bg-lightPrimary"
                }`}
              >
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      !!activeRoute(`${route.layout}${route.path}`)
                        ? "font-bold text-main"
                        : "font-medium text-lightPrimary"
                    }`}
                  >
                    
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      !!activeRoute(`${route.layout}${route.path}`)
                        ? "font-bold text-main"
                        : "font-medium text-lightPrimary"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
                {/* {activeRoute(`${route.layout}${route.path}`) ? (
                  <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                ) : null} */}
              </div>
            </Link>
          );
        }
      });
    } else {
      return adminLinks.map((route, index) => {
        if (route.layout === "/dashboard/admin" && user.isAdmin) {
          return (
            <Link key={index} to={route.layout + "/" + route.path}>
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      !!activeRoute(route.path)
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      !!activeRoute(route.path)
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
                {activeRoute(route.path) ? (
                  <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                ) : null}
              </div>
            </Link>
          );
        }
      });
    }
  };

  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
