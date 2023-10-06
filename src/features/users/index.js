import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "../../config/instance";
import { v4 as uuidv4 } from "uuid";
import { getFaq } from "../landing";

const token = () =>
  localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token()}`,
  },
};

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      let { data, status } = await Axios.post(`guser`, {
        email,
      });
      if (status === 200) {
        const body = {
          username: data.username,
          password,
        };

        try {
          let { data, status } = await Axios.post(`auth/`, body);
          if (status === 200) {
            if(data.is_user_admin){
              localStorage.setItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a", true)
            }
            console.log(data);
            const { dispatch } = thunkAPI;

            localStorage.setItem(
              "cfb90493-c364-4ade-820d-b6848bc65f44",
              data.access
            );
            // localStorage.setItem("refresh", data.refresh);

            const res = await dispatch(getUser());
          
            return data;
          } else {
            return thunkAPI.rejectWithValue(data);
          }
        } catch (err) {
          if (err?.response?.status === 400) {
            const errors = {
              status: err?.response?.status,
              statusText: err?.response?.statusText.toUpperCase(),
              detail: err?.response?.data,
            };
            return thunkAPI.rejectWithValue(errors);
          } else if (err?.message === "Network Error") {
            const errors = {
              status: 0,
              statusText: null,
              detail:
                "Unable to precess your request, we are working to Fix this issue.",
            };
            return thunkAPI.rejectWithValue(errors);
          } else {
            const errors = {
              status: null,
              statusText: null,
              detail: err?.response?.data?.detail,
            };
            return thunkAPI.rejectWithValue(errors);
          }
        }
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: "Invalid credentials",
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, we are working to Fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const Register = createAsyncThunk(
  "users/register",
  async (
    {
      plan,
      amount,
      payment,
      country,
      phoneNumber,
      fullName,
      email,
      password,
      pwd,
      agree,
      roi,
      refCode,
    },
    thunkAPI
  ) => {
    const body = {
      username: uuidv4(),
      plan,
      amount,
      payment,
      country,
      phoneNumber,
      fullName,
      email,
      password,
      pwd,
      agree,
      roi,
      refCode,
    };

    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = "";
      const { data, status } = await Axios.post(`auth/register`, body);
      if (status === 201) {
        const { dispatch } = thunkAPI;

        await dispatch(login({ email, password }));

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const getUser = createAsyncThunk("app/me", async (_, thunkAPI) => {
  try {
    Axios.defaults.headers.common["Content-Type"] = "application/json";
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
    const { data, status } = await Axios.get("user");

    if (status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const checkAuth = createAsyncThunk(
  "users/verify",
  async (_, thunkAPI) => {
    const body = {
      token: token(),
    };
    try {
      const { data, status } = await Axios.post(`auth/verify/`, body);

      if (status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getUser());

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    localStorage.removeItem("cfb90493-c364-4ade-820d-b6848bc65f44");
    // localStorage.removeItem("refresh");

    const data = { message: "You have successfully Logged out", status: 200 };

    return data;
  } catch (err) {
    const data = { message: "Error occurred logging you out", status: 500 };
    return thunkAPI.rejectWithValue(data);
  }
});

export const getNotification = createAsyncThunk(
  "users/notification",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get("activities");

      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const createNotification = createAsyncThunk(
  "users/createNotification",
  async ({ message, type }, thunkAPI) => {
    const body = {
      message,
      type,
    };
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post(`activities`, body);

      if (status === 200) {
        const { dispatch } = thunkAPI;

        dispatch(getUser());

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getStatus = createAsyncThunk(
  "users/status",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("account-status");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getUsers = createAsyncThunk(
  "admin/getusers",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get("admin/allusers");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const postTransaction = createAsyncThunk(
  "admin/postTransaction",
  async ({ plan, roi, amount, payment, isNew, type }, thunkAPI) => {
    const body = { plan, roi, amount, payment, isNew, type };
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("transaction", body);
      if (status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const getTransactions = createAsyncThunk(
  "admin/getTransactions",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get("transactions");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const getTransaction = createAsyncThunk(
  "admin/getTransaction",
  async ({ id }, thunkAPI) => {
    const body = { id };

    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get(`transaction?id=${id}`);
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const postFaq = createAsyncThunk(
  "admin/postFaq",
  async ({ question, answer, show }, thunkAPI) => {
    const body = { question, answer, show };
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      const { data, status } = await Axios.post("faqs", body);
      if (status === 201) {
        const { dispatch } = thunkAPI;

        await dispatch(getFaq());
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const sendToBal = createAsyncThunk(
  "admin/sendToBal",
  async ({ path }, thunkAPI) => {
    const body = { path };
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("send-to-balance", body);
      if (status === 200) {
        const { dispatch } = thunkAPI;

        await dispatch(getUser());
        await dispatch(
          createNotification({
            message: `You withdrew from your ${path} to Balance`,
            type: "withdraw",
          })
        );
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const Logout = createAsyncThunk("user/Logout", async (_, thunkAPI) => {
  try {
    localStorage.removeItem("cfb90493-c364-4ade-820d-b6848bc65f44");
    return thunkAPI.fulfillWithValue({ success: !0 });
  } catch (err) {
    return thunkAPI.rejectWithValue({ success: !0 });
  }
});

export const uploadImage = createAsyncThunk(
  "user/uploadImage",
  async ({ image, uuid, path }, thunkAPI) => {
    console.log({ image, uuid, path });
    let form_data = new FormData();
    form_data.append("image", image, image.name);
    form_data.append("path", path);
    form_data.append("uuid", uuid);

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      const { data, status } = await Axios.post("upload", form_data);
      if (status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const Approve = createAsyncThunk(
  "admin/Approve",
  async ({ uuid, type }, thunkAPI) => {
    const body = { uuid, type };

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post(
        "admin/transaction/approve",
        body
      );
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const SetBalance = createAsyncThunk(
  "admin/SetBalance",
  async ({ uuid, bal, pro, bon, rbon, cw }, thunkAPI) => {
    const body = { uuid, bal, pro, bon, rbon, cw };

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("admin/set-balance", body);
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const blockUser = createAsyncThunk(
  "admin/blockUser",
  async ({ uuid }, thunkAPI) => {
    const body = { uuid };
    console.log(body);
    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.delete("admin/block-user", body);
      
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const EditBlog = createAsyncThunk(
  "admin/EditBlog",
  async ({ uuid }, thunkAPI) => {
    const body = { uuid };

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("admin/edit-blog", body);
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const EditFaq = createAsyncThunk(
  "admin/EditFaq",
  async ({ uuid }, thunkAPI) => {
    const body = { uuid };

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("admin/edit-faq", body);
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const AddWallet = createAsyncThunk(
  "admin/AddWallet",
  async ({ address }, thunkAPI) => {
    const body = { address, uuid: uuidv4() };

    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("admin/wallet", body);
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);
export const ostWithdraw = createAsyncThunk(
  "user/withdrawal",
  async ({ amount }, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post("withdrawal", { amount });

      if (status === 200) {
        const userData = data;
        return userData;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      throw new Error("Withdrawal failed");
    }
  }
);
export const GetWallet = createAsyncThunk(
  "admin/GetWallet",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      const { data, status } = await Axios.post("admin/all-wallet");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: 0,
          statusText: null,
          detail: err?.response?.data?.detail,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

const initialState = {
  isAuthenticated: !1,
  user: {
    email: "",
    username: "",
    isAdmin: !1,
    first_name: "",
    last_name: "",
    balance: {
      earning: 0,
      deposit: 0,
      bonus: 0,
      refBonus: 0,
      balance: 0,
    },
  },
  loading: !1,
  registered: !1,
  notification: [],
  transaction: {},
  allTransaction: [],
  history: [],
  refHistory: [],
  status: [
    {
      invested: [0, 0, 0, 0, 0, 0],
      invested_sum: 0,
      deposit: [0, 0, 0, 0, 0, 0],
      deposit_sum: 0,
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  ],
  admin: {
    wallet: { address: "" },
    allUsers: [],
    allTransactions: [],
    allfaqs: [],
    allblogs: [],
    testimonials: [],
    feedbacks: [],
    // feedbacks: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = !1;
    },
    resetTransaction: (state) => {
      state.transaction = {};
    },
    withdraw: (state, action) => {
      const amount = action.payload;
      const newAmount = parseInt(amount);
      state.user.balance.balance = -newAmount;
      console.log(state.user.balance.balance);
      state.user.balance.total = state.user.balance.balance - newAmount;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetWallet.pending, (state) => {
        state.loading = !0;
      })
      .addCase(GetWallet.fulfilled, (state, action) => {
        state.loading = !1;
        state.admin.wallet = action.payload.message;
      })
      .addCase(GetWallet.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(AddWallet.pending, (state) => {
        state.loading = !0;
      })
      .addCase(AddWallet.fulfilled, (state, action) => {
        state.loading = !1;
        state.admin.wallet = action.payload.message;
      })
      .addCase(AddWallet.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(EditBlog.pending, (state) => {
        state.loading = !0;
      })
      .addCase(EditBlog.fulfilled, (state) => {
        state.loading = !1;
      })
      .addCase(EditBlog.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(blockUser.pending, (state) => {
        state.loading = !0;
      })
      .addCase(blockUser.fulfilled, (state) => {
        state.loading = !1;
      })
      .addCase(blockUser.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(SetBalance.pending, (state) => {
        state.loading = !0;
      })
      .addCase(SetBalance.fulfilled, (state) => {
        state.loading = !1;
      })
      .addCase(SetBalance.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(Approve.pending, (state) => {
        state.loading = !0;
      })
      .addCase(Approve.fulfilled, (state) => {
        state.loading = !1;
      })
      .addCase(Approve.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(sendToBal.pending, (state) => {
        state.loading = !0;
      })
      .addCase(sendToBal.fulfilled, (state) => {
        state.loading = !1;
      })
      .addCase(sendToBal.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getTransactions.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = !1;
        state.allTransaction = action.payload;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getTransaction.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getTransaction.fulfilled, (state, action) => {
        state.loading = !1;
        state.transaction = action.payload;
      })
      .addCase(getTransaction.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(postTransaction.pending, (state) => {
        state.loading = !0;
      })
      .addCase(postTransaction.fulfilled, (state, action) => {
        state.loading = !1;
        state.transaction = action.payload;
      })
      .addCase(postTransaction.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = !1;
        state.admin.allUsers = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getStatus.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.loading = !1;
        state.status = action.payload;
      })
      .addCase(getStatus.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(createNotification.pending, (state) => {
        state.loading = !0;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.loading = !1;
        state.notification = action.payload;
      })
      .addCase(createNotification.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getNotification.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.loading = !1;
        state.notification = action.payload;
      })
      .addCase(getNotification.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(login.pending, (state) => {
        state.loading = !0;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = !1;
        state.isAuthenticated = !0;
      })
      .addCase(login.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = !1;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = !0;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.loading = !1;
        state.isAuthenticated = !0;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(logout.pending, (state) => {
        state.loading = !0;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = !1;
        state.isAuthenticated = !1;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(Register.pending, (state) => {
        state.loading = !0;
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.loading = !1;
        state.registered = !0;
        state.transaction = action.payload.trans;
      })
      .addCase(Register.rejected, (state) => {
        state.loading = !1;
      });
  },
});

export const { resetRegistered, resetTransaction, withdraw } =
  userSlice.actions;
export default userSlice.reducer;
