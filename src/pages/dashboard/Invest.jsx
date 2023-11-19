import Card from "../../components/atom/Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { postTransaction, createNotification } from "../../features/users";
import { useDepositMutation } from "../../apis/userApi.apis";

const init = {
  plan: "silver",
  amount: "",
  payment: "btc",
  roi: "1",
  };


const Transaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState(init);
  const [start, setStart] = useState(500);
  const [stop, setStop] = useState(5000);
  const [step, setStep] = useState(5000);
  const [err, setErr] = useState(!!0);


  const [deposit, { }] = useDepositMutation();

  
  let { plan, amount, payment, roi } = formData;

  let i;
  let list = new Array();
  for (let i = start; i <= stop; i += step) {
    list.push(i);
  }

  const Toast = (t, m) => {
    toast.dismiss();
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

  useEffect(() => {
    if (plan === "silver") {
      setFormData({ ...formData, roi: "1" });
    } else if (plan === "gold") {
      setFormData({ ...formData, roi: "2" });
    } else {
      setFormData({ ...formData, roi: "4" });
    }
  }, [plan]);

  useEffect(() => {
    onInput();
  }, [formData]);

  const onInput = () => {
    if (amount !== "") {
      const re = /^[0-9]+$/;
      if (re.test(amount)) {
        const $amt = Number(amount);
        if (plan === "silver") {
          if ($amt < 500) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 4999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "gold") {
          if ($amt < 5000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 49999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "platinum") {
          if ($amt < 50000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 1000000) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
      } else {
        Toast("error", `Invalid amount entered`);
        setErr(!!1);
        return 0;
      }
    } else {
      setErr(!!0);
      toast.dismiss();
    }
  };

  useEffect(() => {
    if (plan === "silver") {
      setStart(500);
      setStop(5000);
      setStep(500);
    } else if (plan === "gold") {
      setStart(5000);
      setStop(30000);
      setStep(1000);
    } else {
      setStart(50000);
      setStop(100000);
      setStep(2000);
    }
  }, [plan]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckBox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (roi === "") {
      toast.error("No ROI selected");
      return 0;
    }

    if (amount === "") {
      toast.error("Enter Amount to proceed");
      return 0;
    }

    if (amount !== "") {
      const re = /^[0-9]+$/;
      if (re.test(amount)) {
        const $amt = Number(amount);
        if (plan === "silver") {
          if ($amt < 500) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 4999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "gold") {
          if ($amt < 5000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 49999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "platinum") {
          if ($amt < 50000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 1000000) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
      } else {
        Toast("error", `Invalid amount entered`);
        setErr(!!1);
        return 0;
      }
    } else {
      setErr(!!0);
      toast.dismiss();
    }

    const raw = {
      plan : plan,
      roi : roi,
      amount : amount,
      payment : payment,
      isNew: "false",
      status: "investment",
      active: "initial"
    }
  try {
        roi = `${roi} Weeks`;
         
    const res = await deposit(raw);
    console.log(res);
         const url = `/dashboard/transaction/${res.data.uuid}`;
          const msg = `Investment of ${"$" + amount} initiated - [unfunded].`;
          await dispatch(
            createNotification({ message: msg, type: "invest" })
          ); 
          // Toast("success", `${msg}`);
          navigate(url);
      
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
      <ToastContainer />
      <div className="max-w-full mx-auto py-10 lg:pl-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card
            extra={
              "lg:col-span-3 order-last lg:-order-last w-full pb-10 p-4 h-full"
            }
          >
            <header className="relative flex flex-col lg:flex-row items-center justify-between">
              <div className="text-xl font-bold text-lightPrimary w-full rounded-md bg-main py-3 text-center ">
                Invest
              </div>
              <p className="mt-2 text-base text-gray-600">
                {/* Transaction History appears here */}
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="grid grid-cols-1 justify-center mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
                <Card extra={"w-full h-auto p-3"}>
                  {/* <div className="relative mb-3 flex items-center justify-between pt-1">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    Withdraw
                  </h4>
                </div> */}
                  <div>
                    <form onSubmit={onSubmit} className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <label>Plan</label>
                        <select
                          onChange={onChange}
                          value={plan}
                          name="plan"
                          className="px-2 py-3 border-2 rounded-lg"
                        >
                          <option value="silver">Silver</option>
                          <option value="gold">Gold</option>
                          <option value="platinum">Platinum</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label>Amount</label>
                        <input
                          type="text"
                          name="amount"
                          onChange={onChange}
                          value={amount}
                          onInput={onInput}
                          className="px-2 py-3 border-2 rounded-lg"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label>Payment Method</label>
                        <select
                          onChange={onChange}
                          value={payment}
                          className="px-2 py-3 border-2 rounded-lg"
                        >
                          <option value="btc">Btc</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label>Choose ROI model:</label>
                        <select
                          name="roi"
                          onChange={onChange}
                          value={roi}
                          disabled={!0}
                          className="px-2 py-3 border-2 rounded-lg"
                        >
                          <option>Select ROI</option>
                          <option value="1">1 Week</option>
                          <option value="2">2 Weeks</option>
                          <option value="3">3 Weeks</option>
                          <option value="4">4 Weeks</option>
                        </select>
                      </div>
                      {!loading ? (
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                        >
                          Invest
                        </button>
                      ) : (
                        <span className="bg-opacity-50 cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                          Invest
                        </span>
                      )}
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Transaction;
