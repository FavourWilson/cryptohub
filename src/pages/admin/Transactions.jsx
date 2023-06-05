import { AdminAllUserColumns } from "../../const/table";
import { useDispatch, useSelector } from "react-redux";
import Tables from "../../components/atom/Tables";

const Transactions = () => {
  const dispatch = useDispatch();
   const [ch] = useState(!1);

  useEffect(() => {
    dispatch(resetTransaction());
    dispatch(getTransactions());
  }, [ch]);

  const { admin } = useSelector((state) => state.user);
  return (
    <div className="max-w-full mx-auto py-10 lg:pl-14">
      <div className="space-y-5">
        <Tables
          show={!0}
          title="All Transactions"
          columnsData={AdminAllUserColumns}
          tableData={admin}
        />
      </div>
    </div>
  );
};

export default Transactions;
