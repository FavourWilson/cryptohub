import { useDispatch } from "react-redux";
import Card from "../atom/Card";
import { sendToBal } from "../../features/users";
import { toast, Toaster } from "react-hot-toast";


const Widget = ({ icon, title, subtitle }) => {
  
  const dispatch = useDispatch();
  const onClick = async (e, x) => {
    e.preventDefault();
  
    const aX = toast.loading("Withdrawing...");
  
    const res = await dispatch(sendToBal({path: x}));
    if (res.meta.requestStatus.toLowerCase() === "rejected") {
      toast.remove(aX);
      toast.error("Unable to process your request");
    } else {
      toast.remove(aX);
      toast.success("Request competed.");
    }
  };

  return (
    <>
      <Toaster />
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] lg:h-[120px] w-auto flex-row items-center">
          <div className="p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-1 flex w-auto flex-col justify-center">
          <p className="text-sm font-medium text-gray-700">{title}</p>
          <h4 className="text-xl font-black tracking-wider text-navy-700 dark:text-white">
            {subtitle}
            {/* {subtitle !== "$0.0" && (
              <>
                <br />
                <span
                  onClick={(e) => onClick(e, title)}
                  className={`${
                    (title.toLowerCase() === "deposit" ||
                      title.toLowerCase() === "balance") &&
                    "hidden"
                  } text-center text-white px-1 py-1 rounded-md hover:bg-minor bg-heroColor font-semibold cursor-pointer hover:underline text-xs`}
                >
                  withdraw to balance
                </span>
              </>
            )} */}
          </h4>
        </div>
      </Card>
    </>
  );
};

export default Widget;
