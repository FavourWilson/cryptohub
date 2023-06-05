import Card from "../../components/atom/Card";
import { MdClose } from "react-icons/md";
import { useEffect, useState} from 'react'
import { toast, Toaster } from 'react-hot-toast' 
import { EditFaq, postFaq } from "../../features/users";
import { getFaq } from "../../features/landing";

const init = {
  question: "",
  answer: "",
  show: true
}
const AllFaqs = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.user);
  const { faqs } = useSelector((state) => state.landing);

  const [data, setData] = useState(init)

  const { question, answer, show} = data

  const onChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const onCheck = e => {
    setData({...data, [e.target.name]: e.target.check})
  }
    useEffect(() => {
      dispatch(getFaq());
    }, []);

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

  const onSubmit = async (e) => {
    e.preventDefault()

    if (
      question === "" ||
      answer === ""
    ) {
      Toast('error', 'Please fill all fields')
      return 0
    }

    try {
      const res = await dispatch(postFaq(data));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        if (res.payload.statusText.toLowerCase() === "bad request") {
          for (const prop in res?.payload?.detail) {
            Toast("error", `${res?.payload?.detail[prop]}`);
          }
        }
      } else {
        const msg = "Faq created";
        Toast("success", `${msg}.`);
        // setTimeout(() => {}, 2000);
      }
    } catch (err) {
      console.log(err);
      Toast("error", `Can't create faq now, We are working to fix this.`);
    }

}

  
  const DeleteFaq = async (e, u) => {
    e.preventDefault();

    Toast("loading", `Deleting Faq ...`);

    const ress = await dispatch(EditFaq({ uuid: u }));
    if (ress.meta.requestStatus.toLowerCase() === "rejected") {
    } else {
      Toast("success", `Deleted Successfully ...`);
      window.location.reload();
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
                All Faqs
              </div>
              <p className="mt-2 text-base text-gray-600">
                All Faq will appear here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {faqs.map((x, i) => (
                  <div
                    key={i}
                    className="flex w-full items-center justify-between rounded-2xl shadow-md bg-gray-50 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                  >
                    <div className="flex items-center">
                      <div className="ml-4">
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                          {x.question}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">{x.answer}</p>
                        <p className="mt-2 text-sm text-gray-600">
                          Added - {x.date} | showing - {x.show}
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={(e) => DeleteFaq(e, x.uuid)}
                      className="mr-4 flex items-center justify-center text-gray-600 dark:text-white"
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
                Create Faq
              </h4>
            </div>
            <div>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Question"
                  name="question"
                  value={question}
                  onChange={onChange}
                  type="text"
                />
                <input
                  className="px-2 py-3 border-2 rounded-lg"
                  placeholder="Answer"
                  name="answer"
                  value={answer}
                  onChange={onChange}
                  type="text"
                />
                <div className="flex">
                  <input
                    type="checkbox"
                    name="show"
                    onChange={onCheck}
                    checked={show}
                    className="w-5 h-5 accent-main bg-white text-white border-minorLight rounded"
                  />

                  <label
                    htmlFor="show"
                    className="ml-3 text-sm font-medium text-gray-500"
                  >
                    Show this question
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
