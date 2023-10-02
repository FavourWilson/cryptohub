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

     if(localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a")){
      isAdmin = true
    }
    console.log(isAdmin)
  }, []);

  const { history, user, allTransaction } = useSelector((state) => state.user);

  return (
    <>
      <div className="max-w-full mx-auto py-3 lg:py-10 lg:pl-14">

        {isAdmin ? 
         <div className="bg-black text-white">gcfgcgjvjhgserstfgjk</div> :<></>
        }
      </div>
    </>
  );
};

export default Dashboard;
