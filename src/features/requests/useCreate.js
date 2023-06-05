import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Axios } from "../../config/instance";

export const getCreateQuery = async () => {
  try {
    const { data } = await Axios.get("notifications");
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const useCreateQuery = (x) =>
  useQuery({
    queryKey: ["notification"],
    queryFn: getCreateQuery,
    retry: 0,
    refetchOnMount: !0,
    refetchOnWindowFocus: !0,
    refetchOnReconnect: !0,
    retryOnMount: !0,
    refetchInterval: x,
    refetchIntervalInBackground: !0,

    // onSuccess: () => {
    //   qc.setQueriesData(["notification"], (oldData) => [
    //     ...oldData,
    //     { loginState: !0 },
    //   ]);
    // },

    // onError: () => {
    //   qc.setQueriesData(["notification"], () => [{ loginState: !1 }]);
    // },
  });
