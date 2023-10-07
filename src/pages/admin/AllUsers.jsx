import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../../components/molecules/UsersCard";
import { getUsers } from "../../features/users";
import {useEffect} from 'react'

const AllUsers = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.user);

  console.log(admin)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div className="max-w-full mx-auto py-10 lg:pl-14">
      <div className="space-y-5 items-center gap-5 grid grid-cols-1 lg:grid-cols-3">
        {admin.allUsers.map((x, i) => (
          <UsersCard key={`l${i}`} data={x} index={i}/>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
