import TotalSpent from "../../components/organisms/TotalSpent";
import TradeChart from "../../components/organisms/TradeChart";
import Tables from "../../components/atom/Tables";
import { userTransaction } from "../../const/table";
import Activities from "../../components/organisms/Activities";
import { useDispatch, useSelector } from "react-redux";
import AllWidgets from "../../components/organisms/AllWidgets";
import { Link } from "react-router-dom";
import { getTransactions, resetTransaction } from "../../features/users";
import { useState, useEffect } from "react";
import Transactions from "../admin/Transactions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [ch] = useState(!1);
   let isAdmin = false;
  useEffect(() => {
    dispatch(resetTransaction());
    dispatch(getTransactions());
  }, [ch]);

  const { history, user, allTransaction } = useSelector((state) => state.user);
  useEffect(()=>{
    if(localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a")){
      isAdmin = true
    }
  },[]);
  return (
    <>
      <div className="max-w-full mx-auto py-3 lg:py-10 lg:pl-14">
        {!!!isAdmin && (
          <div className="flex flex-col-reverse gap-2 pb-5 items-start justify-start ">
            <div className="w-full lg:w-[260px] rounded-r-sm px-3 py-1.5 lg:px-5 lg:py-2 space-y-1 flex flex-col justify-center items-center bg-yellow-500 border-l-4 border-l-main">
              <p className="text-xs pt-2 font-medium capitalize text-center text-white">
                Make deposit to start Investing
              </p>
              <Link
                className="text-sm font-base w-[80%] lg:w-full capitalize text-center text-white rounded-lg hover:underline px-1 lg:px-3 py-1.5 bg-main dark:text-white dark:hover:text-white"
                to="/dashboard/deposit"
              >
                {/* {brandText} */}
                Click here to make a deposit
              </Link>
            </div>
            <p className="shrink text-lg font-semibold capitalize text-navy-700 dark:text-white">
              Welcome,{" "}
              <span className="font-bold inline-block">{user.first_name}</span>!
              <p className="block text-xs pt-2 font-base capitalize text-gray-500 dark:hover:text-white">
                The most trusted bitcoin investment site.
              </p>
            </p>
          </div>
        )}
        {!!!isAdmin && (
          <div className="bg-white px-4 py-4 rounded-lg mt-1 lg:mt-5 grid grid-cols-1 gap-5 lg:gap-2 md:grid-cols-2 lg:grid-cols-5 3xl:grid-cols-6">
            <AllWidgets user={user} />
            {/* <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Your Balance"}
            subtitle={"$1,000"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"New Tasks"}
            subtitle={"145"}
          />
          <Widget
            icon={<IoMdHome className="h-6 w-6" />}
            title={"Total Projects"}
            subtitle={"$2433"}
          /> */}
          </div>
        )}

        <div className="space-y-5">
          {!!!isAdmin && (
            <div className="mt-5 grid grid-cols-1 gap-5 h-lg">
              <TotalSpent />
            </div>
          )}
          {!!!isAdmin && (
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 h-lg">
                <TradeChart id="dfgh5d" coin="BTC" />
                <TradeChart id="df5d3f" coin="ETH" />
              </div>
                )}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {!!!isAdmin && (
                <Tables
                  show={!1}
                  title="All Users"
                  columnsData={userTransaction}
                  tableData={allTransaction}
                />
                )}
              <Activities />
              </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
