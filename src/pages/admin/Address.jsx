import { Toaster, toast } from "react-hot-toast";
import Card from "../../components/atom/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddWallet, GetWallet } from "../../features/users";
const init = {
  address: "",
};

const Address = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.user);
  const [data, setData] = useState(init);
  const wallet = Array(admin.wallet);

  let { address } = data;
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
    } else if (t == "loading") {
      toast.loading(m);
    }
  };
  useEffect(() => {
    dispatch(GetWallet());
  }, []);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (address === "") {
      Toast("error", "Address fields can't be empty");
      return 0;
    }

    const res = await dispatch(AddWallet({ address }));
    if (res.meta.requestStatus.toLowerCase() === "rejected") {
      // setErr(["Couldn't process."]);
    } else {
      setData({
        address: "",  
      });
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
            <header className="relative flex items-center justify-between">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
                Active Wallet
              </div>
              <p className="mt-2 text-base text-gray-600">
                Active Wallet will appear here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {wallet.map((x, i) => (
                  <div
                    key={`${i}i`}
                    className="flex w-full items-center justify-between rounded-2xl shadow-md bg-gray-50 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                  >
                    <div className="flex items-center">
                      <div className=""></div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                          {x.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card extra={"w-full h-auto p-3"}>
            <div className="relative mb-3 flex items-center justify-between pt-1">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Add wallet
              </h4>
            </div>
            <div>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={onChange}
                  type="text"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                >
                  Create
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Address;
