import Card from "../../components/atom/Card";
import Tables from "../../components/atom/Tables";
import { userTransaction } from "../../const/table";
import { useDispatch, useSelector } from "react-redux";

const Transaction = () => {
  const { history } = useSelector((state) => state.user);
  return (
    <div className="max-w-full mx-auto py-10 lg:pl-14">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card
          extra={
            "lg:col-span-3 order-last lg:-order-last w-full pb-10 p-4 h-full"
          }
        >
          <header className="relative flex flex-col lg:flex-row items-center justify-between">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Transaction History
            </div>
            <p className="mt-2 text-base text-gray-600">
              Transaction History appears here
            </p>
            {/* <CardMenu /> */}
          </header>

          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Tables
                show={!0}
                title="All Transactions"
                columnsData={userTransaction}
                tableData={history}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Transaction;
