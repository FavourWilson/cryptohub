import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./index.apis";

export const userApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "userApi",
  endpoints: (builder) => ({
    getUserTransactions: builder.query({
      query: ({ user_id }) => ({
        method: "GET",
        url: `admin/user-transaction/${user_id}/`,
      }),
    }),

    editUserBalance: builder.mutation({
      query: (params) => {
        console.log(params);
        return {
          method: "PUT",
          url: `admin/update-user-balance/${params.user_id}/`,
          body: {
            balance: params.balance ? params.balance : "",
            earning: params.profit ? params.profit : "",
            ref_bonus: params.ref_bonus ? params.ref_bonus : "",
            bonus: params.bonus ? params.bonus : "",
          },
        };
      },
    }),
    deposit: builder.mutation({
      query: (params) => {
        console.log(params);
        return {
          method: "POST",
          url: `transactions/`,
          body: { 
            status: params.status ? params.status : "",
            plan: params.plan ? params.plan : "",
            roi: params.roi ? params.roi : "",
            payment: params.payment ? params.payment : "",
            active: params.active ? params.active : "",
            isNew: params.isNew ? params.isNew : "",
            amount: params.amount ? params.amount : "",
          },
        };
      },
    }),

    getUserId: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/user`,
        };
      },
    }),

    approveTransaction: builder.mutation({
      query: (params) => {
        return {
          method: "PUT",
          url: `admin/transaction/approve/${params.trans_id}/`,
          body: {
            status: params.status ? params.status : "",
          },
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (user_id) => {
        return {
          method: "DELETE",
          url: `admin/block-user`,
          body: {
            id: user_id,
          },
        };
      },
    }),
  }),
});

export const userApiReducer = userApi.reducer;
export const {
  useGetUserTransactionsQuery,
  useEditUserBalanceMutation,
  useDeleteUserMutation,
  useDepositMutation,
  useGetUserIdQuery,
  useApproveTransactionMutation,
} = userApi;
