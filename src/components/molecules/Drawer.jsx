import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SetBalance, getUsers } from "../../features/users";

const Drawer = ({ setOpen, open }) => {
  const { admin, loading } = useSelector((state) => state.user);
  const { user } = useParams();
  const dispatch = useDispatch();
  const [data] = useState(admin.allUsers[user]);
  const [bal] = useState(data.balance);
  const [pass, setPass] = useState('');

  const init = {
    balance: bal.balance,
    ref_bonus: bal.ref_bonus,
    bonus: bal.bonus,
    profit: bal.profit,
    cw: bal.cw,
  };
  const [formData, setFormData] = useState(init);
  const { balance, ref_bonus, bonus, profit, cw } = formData;

  const [err, setErr] = useState([]);

  const [eBal, setEBal] = useState(!!1);
  const [ePro, setEPro] = useState(!!1);
  const [eBon, setEBon] = useState(!!1);
  const [eRbon, setERbon] = useState(!!1);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeT = (e) => {
    setFormData({ ...formData, [e.target.name]: !cw });
  };

  useEffect(() => {
    Reset();
  }, [data]);

  const Edit = (x) => {
    x === "ebal" && setEBal(!eBal);
    x === "epro" && setEPro(!ePro);
    x === "ebon" && setEBon(!eBon);
    x === "erbon" && setERbon(!eRbon);
  };

  const Reset = (b = !!0) => {
    setEBal(!!1);
    setEPro(!!1);
    setEBon(!!1);
    setERbon(!!1);
    b&&setFormData({
        balance,
        ref_bonus,
        bonus,
        profit,
        cw,
      });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    let hasErr = [];

    if (balance === "") {
      hasErr.push("Balance field cant be empty.");
    }
    if (profit === "") {
      hasErr.push("Earning field cant be empty.");
    }
    if (bonus === "") {
      hasErr.push("Bonus field cant be empty.");
    }
    if (ref_bonus === "") {
      hasErr.push("Ref Bonus field cant be empty.");
    }
    setErr(hasErr);

    if (hasErr.length === 0) {
      setErr([]);

      const raw = {
        uuid: data.uuid,
        bal: balance,
        pro: profit,
        bon: bonus,
        rbon: ref_bonus,
        cw,
      };
      const res = await dispatch(SetBalance(raw));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        setErr(["Couldn't process."]);
      } else {
        await dispatch(getUsers());
        {
          !loading &&
            setTimeout(() => {
              Reset(!!1);
            }, 3000);
        }
      }
    }
  };
  return (
    <>
      {/* <!-- drawer component --> */}
      <div
        id="drawer-example"
        className={`${
          open ? "fixed" : "hidden"
        } border-l-2 border-blue-300 top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-auto bg-white w-80`}
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-700 dark:text-gray-400"
        >
          <svg
            className="w-5 h-5 mr-2 text-blue-800"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {data.email} Info.
        </h5>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-red-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mb-6">
          <p className="text-center text-md font-semibold text-gray-900">
            Edit Balance
          </p>
          {loading && (
            <p className="italic text-sm text-blue-700 pt-1">Sending</p>
          )}
          {err.map((x, i) => (
            <p key={`q${i}`} className="italic text-sm text-red-700 pt-1">
              {x}
            </p>
          ))}
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="totalBalance"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Balance
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                {eBal ? (
                  <>
                    <input
                      type="text"
                      id="totalBalance"
                      className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={balance}
                      disabled={!!1}
                      readonly={!!1}
                    />
                    <button
                      type="button"
                      onClick={() => Edit("ebal")}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    autoFocus={!eBal}
                    id="totalBalance"
                    name="balance"
                    onChange={onChange}
                    className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={balance}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="earning"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Earning
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>

                {ePro ? (
                  <>
                    <input
                      type="text"
                      id="earning"
                      className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={profit}
                      disabled={!!1}
                      readonly={!!1}
                    />
                    <button
                      type="button"
                      onClick={() => Edit("epro")}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    id="earning"
                    name="profit"
                    onChange={onChange}
                    className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={profit}
                    autoFocus={!ePro}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="bonus"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Bonus
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                {eBon ? (
                  <>
                    <input
                      type="text"
                      id="bonus"
                      className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={bonus}
                      disabled={!!1}
                      readonly={!!1}
                    />
                    <button
                      type="button"
                      onClick={() => Edit("ebon")}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    id="bonus"
                    name="bonus"
                    onChange={onChange}
                    className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={bonus}
                    autoFocus={!eBon}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="refbonus"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Ref Bonus
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                {eRbon ? (
                  <>
                    <input
                      type="text"
                      id="refbonus"
                      className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={ref_bonus}
                      disabled={!!1}
                      readonly={!!1}
                    />
                    <button
                      type="button"
                      onClick={() => Edit("erbon")}
                      className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    id="refbonus"
                    name="ref_bonus"
                    onChange={onChange}
                    className="block w-full p-2.5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ref_bonus}
                    autoFocus={!eRbon}
                  />
                )}
              </div>
            </div>
            <div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  checked={cw}
                  onChange={onChangeT}
                  name="cw"
                />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Can withdraw
                </span>
              </label>
            </div>

            {!loading && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={Reset}
                  className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 hover:gap-2 justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit{" "}
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="mb-6 flex flex-col gap-1">
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-700 dark:text-gray-400">
            Extra Info
          </h5>
          <div className="inline-flex items-center">
            <p>Date Joined: </p>
            <p>{data.joined}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
