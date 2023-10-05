import { useState } from "react";
import { useDispatch } from "react-redux";
import { Approve as App } from "../../features/users";

const TransTable = ({ data }) => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(!!0);
  const [err, setErr] = useState("");
  const Popup = (x) => {
    let ele = document.getElementById(x);
    ele.classList.toggle("hidden");
  };

  const Approve = async (uuid) => {
    const res = await dispatch(App({ uuid, type: "approve" }));
    if (res.meta.requestStatus.toLowerCase() === "rejected") {
      // if (res.payload.statusText.toLowerCase() === "bad request") {
      // for (const prop in res?.payload?.detail) {
      //   toast.dismiss(aX);
      //   Toast("error", `${res?.payload?.detail[prop]}`);
      // }
      // }
        setErr('Error; Approving this transaction. Try again')
    } else {
      location.reload();
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-10 py-3">
                Investment ID
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Plan</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Amount</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Payment</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">ROI</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Status</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Proof</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Start</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">End</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <div className="flex items-center">Investment Status</div>
              </th>
              <th scope="col" className="px-10 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
        
        </table>
      </div>

       {data.map((x, i) => (
        <div
          key={`po${i}`}
          id={`p${x.uuid}`}
          data-modal-show="popup-modal"
          tabindex="-1"
          className={`${
            popup ? "" : "hidden"
          } fixed flex justify-center items-center bg-gray-600 bg-opacity-40 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => Popup(`p${x.uuid}`)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="my-2 flex flex-row gap-3 justify-center">
                  {err}
                  {x.proof !== null ? (
                    <img
                      className="h-48 max-w-full rounded-lg"
                      src={x.proof}
                      alt=""
                    />
                  ) : (
                    "No Proof yet"
                  )}
                </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {x.proof !== null
                    ? x.status !== "funded"
                      ? "Are you sure you want to approve this transaction?"
                      : "Transaction already Approved!"
                    : ""}
                </h3>
                {x.proof !== null ? (
                  x.status !== "funded" ? (
                    <>
                      <button
                        onClick={() => Popup(`p${x.uuid}`)}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-red-500 bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-200 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-red-900 focus:z-10 dark:bg-red-700 mr-2 dark:text-red-300 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-600"
                      >
                        No, cancel
                      </button>
                      <button
                        onClick={() => Approve(x.uuid)}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      >
                        Yes, I'm sure
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => Popup(`p${x.uuid}`)}
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-blue-500 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg border border-blue-200 text-sm font-medium px-5 py-2.5 hover:text-blue-900 focus:z-10 dark:bg-blue-700 mr-2 dark:text-blue-300 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-600"
                    >
                      Okay
                    </button>
                  )
                ) : (
                  ""
                )}

     
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransTable;
