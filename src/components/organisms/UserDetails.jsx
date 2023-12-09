import { useState } from "react";
import QuickAction from "../molecules/QuickAction";
import { useGetUserTotalBalanceQuery , useGetUserTransactionsQuery } from "../../apis/userApi.apis";

const UserDetails = ({ d }) => {
  const [show, setShow] = useState(!!0);
  const { data, isError } = useGetUserTotalBalanceQuery({ user_id: d?.id });
  console.log(data)
  console.log("This is ", d);
  const SetShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full m-5 grid grid-cols-2 gap-2">
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 col-span-1">
          <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Full name</dt>
            <dd class="text-lg font-semibold">
              {d?.first_name} {d?.last_name}
            </dd>
          </div>
          <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Email</dt>
            <dd class="text-lg font-semibold">{d?.email}</dd>
          </div>
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Password</dt>
            <dd class="text-lg font-semibold">
              {show ? d?.password : "***********"}{" "}
              <span
                onClick={SetShow}
                className="cursor-pointer text-sm text-blue-900 hover:underline mx-2 pb-3"
              >
                {show ? "hide" : "show"}
              </span>
            </dd>
          </div>
        </dl>
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 col-span-1">
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Phone number</dt>
            <dd class="text-lg font-semibold">{d?.user_phone}</dd>
          </div>
          <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Country</dt>
            <dd class="text-lg font-semibold">{d?.user_country}</dd>
          </div>
          <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Account Balance</dt>
            <dd class="text-lg font-semibold">
              { data?.balance}
            </dd>
          </div>
        </dl>
      </div>
      <QuickAction />
    </>
  );
};

export default UserDetails;
