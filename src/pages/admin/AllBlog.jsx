import Card from "../../components/atom/Card";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { getBlog, postBlog } from "../../features/landing";
import { v4 as uuidv4 } from "uuid";
import { EditBlog, uploadImage } from "../../features/users";

const init = {
  title: "",
  description: "",
  author: "",
  date: "",
  show: true,
};

const initi = {
  image: null,
  uuid: uuidv4(),
  path: "blog",
};

const AllFaqs = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.landing);
  const [data, setData] = useState(init);
  const [datai, setDatai] = useState(initi);

  const { title, description, author, date, show } = data;

  const onChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleImageChange = (e) => {
    setDatai({ ...datai, image: e.target.files[0] });
  };

  const onCheckBox = (e) => {
    setData({ ...formData, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    dispatch(getBlog({ len: "all" }));
  }, []);

  const Toast = (t, m) => {
    toast.dismiss()
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    } else if (t == 'loading') {
      toast.loading(m)
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || description === "" || author === "" || date === "") {
      toast.error("Please fill all fields");
      return 0;
    }
    try {
      const res = await dispatch(uploadImage({ ...datai }));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        // if (res.payload.statusText.toLowerCase() === "bad request") {
        for (const prop in res?.payload?.detail) {
          toast.remove(aX);
          Toast("error", `${res?.payload?.detail[prop]}`);
        }
        // }
      } else {
        const ress = await dispatch(postBlog({ ...data, uuid: datai.uuid }));
        if (ress.meta.requestStatus.toLowerCase() === "rejected") {
          if (ress.payload.statusText.toLowerCase() === "bad request") {
            for (const prop in ress?.payload?.detail) {
              Toast("error", `${ress?.payload?.detail[prop]}`);
            }
          }
        } else {
          const msg = "Blog created";
          Toast("success", `${msg}.`);
          // setTimeout(() => {}, 2000);
        }
      }
    } catch (err) {
      console.log(err);
      Toast("error", `Can't create blog now, We are working to fix this.`);
    }
  };

  const DeleteBlog = async (e, u) => {
    e.preventDefault();

    Toast("loading", `Deleting Blog...`)
    
    const ress = await dispatch(EditBlog({ uuid: u }));
    if (ress.meta.requestStatus.toLowerCase() === "rejected") {
    } else {
      Toast("success", `Deleted Successfully ...`)
      window.location.reload()
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
                All Blogs
              </div>
              <p className="mt-2 text-base text-gray-600">
                All Blogs will appear here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {blogs.map((x) => (
                  <div
                    key={x.uuid}
                    className="flex w-full items-center justify-between rounded-2xl shadow-md bg-gray-50 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                  >
                    <div className="flex items-center">
                      <div className="">
                        <img
                          className="h-[83px] w-[83px] rounded-lg"
                          src={x.blog_image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                          {x.title}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          {x.description}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          By {x.author} on {x.date}.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={(e) => DeleteBlog(e, x.uuid)}
                      className="mr-4 flex items-center justify-center text-red-800 bg-red-400 dark:text-white"
                    >
                      <MdClose />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card extra={"w-full h-auto p-3"}>
            <div className="relative mb-3 flex items-center justify-between pt-1">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Create Blog
              </h4>
            </div>
            <div>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={onChange}
                  type="text"
                />
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                  type="text"
                />
                <div className="flex flex-col  item-center gap-2 justify-between">
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Blog image
                  </p>
                  <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    className="px-2 py-3 border-2 rounded-lg col-span-2 lg:col-span-3"
                    placeholder="Upload blog image"
                  />
                </div>
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Author"
                  name="author"
                  value={author}
                  onChange={onChange}
                  type="text"
                />
                {/* <div className="flex flex-col  item-center gap-2 justify-between">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  Author image
                </p>
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Image"
                  type="file"
                />
              </div> */}
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={onChange}
                  type="date"
                />
                <div className="flex">
                  <input
                    type="checkbox"
                    name="show"
                    checked={show}
                    onChange={onCheckBox}
                    className="w-5 h-5 accent-main bg-white text-white border-minorLight rounded"
                  />

                  <label
                    htmlFor="agree"
                    className="ml-3 text-sm font-medium text-gray-500"
                  >
                    Show this blog
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

export default AllFaqs;
