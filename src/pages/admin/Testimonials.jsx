import Card from "../../components/atom/Card";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { postTestimonies } from "../../features/landing";

const Testimonials = () => {
  const dispatch = useDispatch();
  const { testimonies } = useSelector((state) => state.landing);

  const [data, setData] = useState({
    name: "",
    position: "",
    message: "",
    date: "",
    image: "",
    show: true
  });
  const [errors, setErrors] = useState({
    name: "",
    position: "",
    message: "",
    date: "",
    image: "",
    show: true
  });

  const { name, position, message, date, image } = data;

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleImageChange = (e) => {
    let newData = { ...data };
    newData["image"] = e.target.files[0];
    setData(newData);
  };
  const onCheckBox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || position === "" || message === "" || date === "" || image === "") {
      toast.error("Please fill all fields");
      return 0;
    }
    try {
      const res = await dispatch(postTestimonies(data));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        if (res.payload.statusText.toLowerCase() === "bad request") {
          for (const prop in res?.payload?.detail) {
            Toast("error", `${res?.payload?.detail[prop]}`);
          }
        }
      } else {
        const msg = "Testimonials created";
        Toast("success", `${msg}, Login to continue`);
        // setTimeout(() => {}, 2000);
      }
    } catch (err) {
      console.log(err);
      Toast("error", `Can't create testimonials now, We are working to fix this.`);
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
                All Testimonials
              </div>
              <p className="mt-2 text-base text-gray-600">
                All testimonials will appear here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {testimonies.map((x) => (
                  <div
                    key={x.uuid}
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
                          {x}Technology behind the Blockchain
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          Project #1 .
                        </p>
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
          <Card extra={"w-full h-auto p-3"}>
            <div className="relative mb-3 flex items-center justify-between pt-1">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Create Testimonials
              </h4>
            </div>
            <div>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  type="text"
                />
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Position"
                  name="position"
                  value={position}
                  onChange={handleChange}
                  type="text"
                />
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  type="text"
                />
                <div className="flex flex-col  item-center gap-2 justify-between">
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Image (URL)
                  </p>
                  <input
                    className="px-2 py-3 border-2 rounded-lg"
                    placeholder="Image Url"
                    type="url"
                    name="image"
                    value={image}
                    onChange={handleChange}
                  />
                </div>
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  type="date"
                />
                <div className="flex">
                  <input
                    type="checkbox"
                    name="show"
                    onChange={onCheckBox}
                    className="w-5 h-5 accent-main bg-white text-white border-minorLight rounded"
                  />

                  <label
                    htmlFor="show"
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
    </>
  );
};

export default Testimonials;
