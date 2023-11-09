import { useState } from "react";
import { Link } from "react-router-dom";
import { AtSymbol, FingerPrint } from "../../components/atom/Icons";
import { useSelector, useDispatch } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useLoginMutation } from "../../apis/authApi.apis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initial = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initial);
  const [signIn, { data, isError, isLoading, isSuccess, error }] =
    useLoginMutation();
  // const { isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  const Toast = (t, m) => {
    if (t === "success") {
      m;
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

    if (
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      if (email === null || email === "") {
        Toast("error", "Email is required");
      }
      if (password === null || password === "") {
        Toast("error", "Password is required");
      }
      return;
    }

    await signIn(formData);
  };


    useEffect(() => {
    if (isLoading) {
      console.log("Loading...");
    }

    if (isSuccess) {
      if(data.is_admin === true){
        localStorage.setItem("access_token", data.access_token);
        navigate("/dashboard");
      }
      Toast("success", "Login Successful");
      localStorage.setItem("access_token", data.access_token);
      navigate("/dashboard");
    }

    if (isError) {
      Toast("error", error);
    }
  }, [isLoading, isSuccess, error, data]);
 

  // if (isAuthenticated) return ;
  return (
    <>
      <Toaster />
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl">
          Welcome Back!
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Login to your account
        </p>
      </div>

      <div className="relative max-w-md mx-auto mt-8 lg:mt-12">
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="px-8 py-7">
            <form onSubmit={onSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AtSymbol />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FingerPrint />
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                  >
                    Log in
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-base text-gray-600">
                    Don’t have an account?{" "}
                    <br className="inline-block lg:hidden" />
                    <Link
                      to="/auth/register"
                      title="Create a free account"
                      className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                    >
                      Create a free account here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
