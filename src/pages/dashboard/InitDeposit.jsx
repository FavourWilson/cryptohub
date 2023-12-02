import Card from "../../components/atom/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetWallet, getTransaction, uploadImage } from "../../features/users";
import Clipboard from "react-clipboard.js";
import Converter from "../../components/atom/Converter";
import { toast, Toaster } from "react-hot-toast";

const init = {
  image: null,
};

const InitDeposit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { transaction, loading, admin } = useSelector((state) => state.user);
  const wallet = admin.wallet;
  console.log(wallet);
  const { id } = useParams();
  const [ch, setCh] = useState("one");
  const [data, setData] = useState(init);

  const initX = async () => {
    await dispatch(getTransaction({ id }));
  };

  const handleImageChange = (e) => {
    setData({
      image: e.target.files[0],
    });
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

  const Switch = () => {
    setCh("two");
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (data.image === null) {
      Toast("error", "Please provide your proof of payment");
      return 0;
    }

    const aX = toast.loading("Uploading Proof, Please wait...");

    try {
      const res = await dispatch(
        uploadImage({ ...data, path: "proof", uuid: id })
      );
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        // if (res.payload.statusText.toLowerCase() === "bad request") {
        for (const prop in res?.payload?.detail) {
          toast.remove(aX);
          Toast("error", `${res?.payload?.detail[prop]}`);
        }
        // }
      } else {
        const msg = "Proof uploaded successfully";
        toast.remove(aX);
        Toast("success", `${msg}.`);
        // setTimeout(() => {}, 2000);
        window.location.replace("/dashboard");
      }
    } catch (err) {
      toast.remove(aX);
      Toast("error", `Can't register you now, We are working to fix this.`);
    }
  };

  // hhh

  const [txt, setTxt] = useState("copy");
  const onSuccess = () => {
    setTxt("copied");
    setTimeout(() => {
      setTxt("copy");
    }, 2000);
  };
  const address = wallet.address;

  useEffect(() => {
    dispatch(GetWallet());
  }, []);

  useEffect(() => {
    initX();
  }, [id]);

  return (
    <>
      <Toaster />
      <div className="max-w-full mx-auto py-10 lg:pl-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {ch === "one" ? (
            <Card
              extra={
                "lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"
              }
            >
              <header className="relative flex flex-col lg:flex-row items-center justify-between">
                <div className="text-xl font-bold text-white dark:text-white w-full px-2.5 py-4 bg-main">
                  How to Fund your {transaction.type}
                </div>

                {/* <CardMenu /> */}
              </header>

              <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <div className="space-y-5 text-left">
                  <p className="mt-2 text-base text-gray-800 font-bold">
                    Make the deposit of your {transaction.type} amount valued ($
                    {transaction.amount}) to (
                    {transaction.payment}) Wallet / Account
                    generate and assigned to you for this transaction.
                  </p>
                  <p className="font-black">IMPORTANT!</p>
                  <ol className="space-y-3">
                    <li className="text-base text-gray-700">
                      1. Ensure you take a screenshot of the transaction success
                      / page
                    </li>
                    <li className="text-base text-gray-700">
                      2. Take note of the wallet address / account you are
                      sending from
                    </li>
                  </ol>
                  <p>You will be needing this two things later</p>
                  <p className="bg-red-200 text-red-800 font-medium pl-2 border-l-2 border-l-red-800">
                    Ensure that you send to{" "}
                    <span className="font-black">EXACTLY</span> the Address
                    generated and assigned to this transaction.
                  </p>
                  <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                    <input
                      type="text"
                      name="amount"
                      className="px-2 py-3 border-2 rounded-lg col-span-3 lg:col-span-3"
                      placeholder={address}
                    />
                    <Clipboard
                      data-clipboard-text={address}
                      onSuccess={onSuccess}
                      className="uppercase col-span-3 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    >
                      {txt}
                    </Clipboard>
                  </div>
                  <div className="flex-col space-y-8 justify-center">
                    {/* <img
                  src={`https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&prefix=on&logo=on&amount=${transaction.amount}&color=11&border=4&background=6&address=${address}`}
                  alt="QR Code"
                /> */}
                    <p className="bg-red-200 text-red-800 font-medium pl-2 border-l-2 border-l-red-800">
                      <span className="font-black">P.S.</span> When you have
                      made the deposit, please, return to this page and click
                      the <span className="font-black">"Indicate Funding"</span>{" "}
                      button bellow to complete.
                    </p>
                    <Converter />
                  </div>
                  <div>
                    <span
                      onClick={Switch}
                      className="tracking-wider cursor-pointer uppercase col-span-1 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    >
                      Indicate Funding
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card
              extra={
                "lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"
              }
            >
              <header className="relative flex flex-col lg:flex-row items-center justify-between">
                <div className="capitalize text-xl font-bold text-navy-700 dark:text-white">
                  Upload Prove of Transaction
                </div>

                {/* <CardMenu k /> */}
              </header>

              <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <div className="space-y-5 text-left">
                  <div className="flex-col space-y-5 justify-center">
                    <form onSubmit={onSubmit}>
                      <input
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={handleImageChange}
                        className="px-2 py-3 border-2 rounded-lg col-span-2 lg:col-span-3"
                        placeholder="Upload Prove of Deposit"
                      />
                      <button
                        type="submit"
                        className="uppercase mt-5 col-span-1 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          )}
          {transaction.type === "investment" && (
            <Card extra={"w-full h-auto p-3"}>
              <div className="relative mb-3 flex items-center justify-between pt-1">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Status for #complete-{transaction.type}-{id}
                </h4>
              </div>
              <div className="max-w-lg mt-5 space-y-5">
                <div className="flex justify-between text-left items-center">
                  <div className="font-black">Status:</div>
                  <div
                    className={`px-2.5 py-2 font-medium bg-red-500 text-red-700 bg-opacity-40 rounded-lg capitalize`}
                  >
                    Unfunded
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-black">Investment ID:</div>
                  <div className="px-2.5 py-2">
                    #complete-{transaction.type}-{id}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-black">Investment Capital:</div>
                  <div className="px-2.5 py-2">${transaction.amount}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-black">ROI Model:</div>
                  <div className="px-2.5 py-2">
                    {transaction.roi == "1 Weeks" ? "1 Week" : transaction.roi}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-black">Initialed On:</div>
                  <div className="px-2.5 py-2">{transaction.created}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-black">Funding Medium Model:</div>
                  <div className="px-2.5 py-2">
                    {transaction.payment.toUpperCase()}
                  </div>
                </div>
                {transaction.isNew && (
                  <Link
                    className="uppercase col-span-1 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    to="/dashboard"
                  >
                    Skip
                  </Link>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default InitDeposit;
