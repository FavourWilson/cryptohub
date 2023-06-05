import Card from "../../components/atom/Card";
import Tables from "../../components/atom/Tables";
import { userTransaction } from "../../const/table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import {
  postTransaction,
  getTransactions,
  createNotification,
  resetTransaction,
} from "../../features/users";
import { useState, useEffect } from "react";

const init = {
  amount: 500,
  payment: "btc",
};

const Deposit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { history, allTransaction, transaction, loading } = useSelector(
    (state) => state.user
  );
  const [formData, setFormData] = useState(init);
  const [ch] = useState(!1);

  useEffect(() => {
    dispatch(resetTransaction());
    dispatch(getTransactions());
  }, [ch]);

  const { amount, payment } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Toast = (t, m) => {
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
  const onInput = () => {
    const re = /^[0-9]+$/;
    if (amount !== "") {
      if (re.test(amount)) {
        const $amt = Number(amount);
        if (plan === "silver") {
          if ($amt < 500) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            return 0;
          } else if ($amt > 4999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            return 0;
          } else {
            toast.dismiss();
          }
        }
        if (plan === "gold") {
          if ($amt < 5000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            return 0;
          } else if ($amt > 49999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            return 0;
          } else {
            toast.dismiss();
          }
        }
        if (plan === "platinum") {
          if ($amt < 50000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            return 0;
          } else if ($amt > 1000000) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            return 0;
          } else {
            toast.dismiss();
          }
        }
      } else {
        Toast("error", `Invalid amount entered`);
        return 0;
      }
    } else {
      toast.dismiss();
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await dispatch(
        postTransaction({
          plan: "",
          roi: "",
          isNew: !0,
          amount,
          payment,
          type: "investment",
        })
      );

      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        if (res.payload.statusText.toLowerCase() === "bad request") {
          for (const prop in res?.payload?.detail) {
            Toast("error", `${res?.payload?.detail[prop]}`);
          }
        }
      } else {
        const msg = `Deposit of ${"$" + amount} successfully created.`;
        const re = await dispatch(
          createNotification({ message: msg, type: "invest" })
        );
        Toast("success", `${msg}`);
        setInterval(() => {
          const url = `/dashboard/transaction/${transaction.uuid}`;
          transaction.uuid !== "undefine" && navigate(url);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      Toast(
        "error",
        `Can't complete transaction now, We are working to fix this.`
      );
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-full mx-auto py-10 lg:pl-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card
            extra={
              "lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"
            }
          >
            <header className="relative flex flex-col lg:flex-row items-center justify-between">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
                Latest Transactions
              </div>
              <p className="mt-2 text-base text-gray-600">
                Latest Transactions appears here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <Tables
                  show={!1}
                  title="All Users"
                  columnsData={userTransaction}
                  tableData={allTransaction}
                />
              </div>
            </div>
          </Card>
          <Card extra={"w-full h-auto p-3"}>
            <div className="relative mb-3 flex items-center justify-between pt-1">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Deposit
              </h4>
            </div>
            <div>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={onChange}
                    className="px-2 py-3 border-2 rounded-lg"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Payment</label>
                  <select
                    name="payment"
                    className="px-2 py-3 border-2 rounded-lg"
                  >
                    <option>BTC</option>
                  </select>
                </div>
                {loading ? (
                  <span className="cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                    Deposit
                  </span>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                  >
                    Deposit
                  </button>
                )}
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Deposit;
