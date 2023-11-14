import Widget from "../../components/organisms/Widget";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { MdBarChart, MdAttachMoney } from "react-icons/md";
import Banner from "../../components/organisms/Banner";
import { useSelector } from "react-redux";
import Tables from "../../components/atom/Tables";
import { referralColumnsData } from "../../const/table";
import Card from "../../components/atom/Card";
import { useState } from "react";
import AllWidgets from "../../components/organisms/AllWidgets";

const init = {
  o_password: "",
  n_password: "",
  c_password: "",
};
const Profile = () => {
  const { user, refHistory, loading } = useSelector((state) => state.user);

  const [data, setData] = useState(init);

  const onChange = () => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { o_password, n_password, c_password } = data;

  const onSubmit = () => {
    e.preventDefault();
  };

  const siteUrl = "https://crypto-tradinghubs.com";
  return (
    <>
      <div className="flex w-full flex-col gap-5">
        <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-4 lg:!mb-0">
            <Banner data={user} link={{ url: siteUrl, code: user.refCode }} />
          </div>

          <div className="col-span-8 lg:!mb-0">
            <div className="mt-1 lg:mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 3xl:grid-cols-6">
              <AllWidgets user={user} />
            </div>
          </div>
        </div>

        <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-6 lg:col-span-8 lg:mb-0 3xl:!col-span-3">
            <Tables
              title="Referrals"
              columnsData={referralColumnsData}
              tableData={refHistory}
            />
          </div>

          <div className="col-span-6 lg:col-span-4 lg:mb-0 3xl:col-span-4">
            <Card extra={"w-full p-4 h-full"}>
              <div className="mb-8 w-full">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  Change Password
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Change your password here.
                </p>
              </div>
              {/* Project 1 */}
              <div className="flex w-full items-center  rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <div>
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-5 w-full"
                  >
                    <div className="flex flex-col space-x-3">
                      <label>Current Password</label>
                      <input
                        type="password"
                        name="o_password"
                        value={o_password}
                        onChange={onChange}
                        className="px-2 py-3 border-2 rounded-lg w-full"
                        placeholder="Current Password"
                      />
                    </div>
                    <div className="flex flex-col space-x-3">
                      <label>Password</label>
                      <input
                        type="password"
                        name="n_password"
                        value={n_password}
                        onChange={onChange}
                        className="px-2 py-3 border-2 rounded-lg w-full"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex flex-col space-x-3">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="c_password"
                        value={c_password}
                        onChange={onChange}
                        className="px-2 py-3 border-2 rounded-lg w-full"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {loading ? (
                      <span className="cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                        Change Password
                      </span>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                      >
                        Change Password
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
