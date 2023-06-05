import Card from "../../components/atom/Card";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Feedback = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.user);
  return (
    <div className="max-w-full mx-auto py-10 lg:pl-14">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card
          extra={
            "lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"
          }
        >
          <header className="relative flex items-center justify-between">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              All Feedback
            </div>
            <p className="mt-2 text-base text-gray-600">
              All feedback will appear here
            </p>
            {/* <CardMenu /> */}
          </header>

          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {admin.feedbacks.map((x, i) => (
                <div
                  key={i}
                  className="flex w-full items-center justify-between rounded-2xl shadow-md bg-gray-50 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                >
                  <div className="flex items-center">
                    <div className="">
                      <img
                        className="h-[83px] w-[83px] rounded-lg"
                        src={""}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-navy-700 dark:text-white">
                        Technology behind the Blockchain
                      </p>
                      <p className="mt-2 text-sm text-gray-600">Project #1 .</p>
                    </div>
                  </div>
                  <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                    <MdModeEditOutline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card extra={"w-full h-auto p-3 hidden"}>
          <div className="relative mb-3 flex items-center justify-between pt-1">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Create Feedback
            </h4>
          </div>
          <div>
            <form className="flex flex-col gap-5">
              <input
                className="px-2 py-3 border-2 rounded-lg"
                placeholder="Name"
                type="text"
              />
              <input
                className="px-2 py-3 border-2 rounded-lg"
                placeholder="Position"
                type="text"
              />
              <input
                className="px-2 py-3 border-2 rounded-lg"
                placeholder="message"
                type="text"
              />
              <div className="flex flex-col  item-center gap-2 justify-between">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  Image
                </p>
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Image"
                  type="file"
                />
              </div>
              <input
                className="px-2 py-3 border-2 rounded-lg"
                placeholder="Date"
                type="date"
              />
              <div className="flex">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={() => {}}
                  className="w-5 h-5 accent-main bg-white text-white border-minorLight rounded"
                />

                <label
                  htmlFor="agree"
                  className="ml-3 text-sm font-medium text-gray-500"
                >
                  Show this testimonial
                </label>
              </div>
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
  );
};

export default Feedback;
