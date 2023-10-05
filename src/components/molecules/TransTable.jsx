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
          <tbody>
            {data.map((x, i) => (
              <tr
                key={`pp${i}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {x.uuid}
                </th>
                <td className="px-10 py-4 text-gray-700">{x.plan}</td>
                <td className="px-10 py-4 text-gray-700">${x.amount}</td>
                <td className="px-10 py-4 text-gray-700">{x.payment}</td>
                <td className="px-5 py-4 text-gray-700">{x.roi}</td>
                <td className="px-10 py-4 text-gray-700">
                  {x.status === "initial" ? (
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      initial
                    </span>
                  ) : x.status === "unfunded" ? (
                    <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      Unfunded
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Funded
                    </span>
                  )}
                </td>
                <td className="px-2 py-4 text-gray-700">
                  {x.proof === null ? (
                    // <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    //   No Proof
                    // </button>
                    <button
                      onClick={() => Popup(`p${x.uuid}`)}
                      data-modal-target="popup-modal"
                      data-modal-show="popup-modal"
                      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      View Proofs
                    </button>
                  ) : (
                    <button
                      onClick={() => Popup(`p${x.uuid}`)}
                      data-modal-target="popup-modal"
                      data-modal-toggle="popup-modal"
                      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      View Proof
                    </button>
                  )}
                </td>
                <td className="px-2 text-center py-4 text-gray-700">
                  {x.start === null ? (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-1 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Not Started
                    </span>
                  ) : x.start === "ended" ? (
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      Ended
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {x.start}
                    </span>
                  )}
                </td>
                <td className="px-2 text-center py-4 text-gray-700">
                  {x.start === null ? (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-1 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Not Started
                    </span>
                  ) : x.start === "ended" ? (
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      Ended
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {x.end}
                    </span>
                  )}
                </td>
                <td className="px-2 text-center py-4 text-gray-700">
                  {x.investment_status === "start" ? (
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      Not Started
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {x.investment_status}
                    </span>
                  )}
                </td>
                <td className="px-10 py-4 text-right">
                  {x.status !== "funded" ? (
                    <span
                      onClick={() => Popup(`p${x.uuid}`)}
                      className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </span>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransTable;
