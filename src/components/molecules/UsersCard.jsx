import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../../apis/userApi.apis";
import { ToastContainer, toast } from 'react-toastify';

const UsersCard = ({ index, data }) => {
   const Toast = (t, m) => {
    toast.remove();
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    }
  };

  const dispatch = useDispatch();

  const [deleteUser, {}] = useDeleteUserMutation();

  const [open, setOpen] = useState(!!0);
  const onClick = () => {
    setOpen(!open);
  };

  const BlockUser = async (e) => {
    console.log("i");

    const res = await deleteUser(data?.id);
    toast.success("Successful.");
    setOpen(!open);
    window.location.reload();
    console.log(res);

    // const res = await dispatch(blockUser({ uuid: data.username.id }));
    // if (res.meta.requestStatus.toLowerCase() === "rejected") {
    //   // setErr(["Couldn't process."]);
    // } else {
    //   window.location.reload();
    // }
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            onClick={onClick}
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </div>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className={`z-10 ${
            open ? "block absolute mt-5 lg:mt-11" : "hidden"
          } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md w-24 dark:bg-gray-700`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            {/* <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li> */}
            <li>
              <span
                onClick={() => BlockUser()}
                className="cursor-pointer block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data.first_name} {data.last_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data.email}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              to={`/dashboard/admin/all-users/view/${index}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
            </Link>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersCard;
