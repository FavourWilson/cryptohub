import Breadcrumb from "../../components/molecules/Breadcrumb";
import TransTable from "../../components/molecules/TransTable";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDetails from "../../components/organisms/UserDetails";
import { useEffect } from "react";
const ViewUser = () => {
  const { admin } = useSelector((state) => state.user);
  const { user } = useParams();
  const data = admin.allUsers[user];
  return (
    <>
      <div className="py-10">
        <Breadcrumb x={data?.email} />
        <UserDetails d={data} />
        <TransTable userId={data?.id} />
      </div>
    </>
  );
};

export default ViewUser;
