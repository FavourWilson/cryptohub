import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "../../config/instance";
import { v4 as uuidv4 } from "uuid";

const token = () =>
  localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44");

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token()}`,
  },
};

export const postBlog = createAsyncThunk(
  "landing/postBlog",
  async ({ title, description, image, author, date, show, uuid }, thunkAPI) => {
    const body= {
      title,
      description,
      blog_image: image,
      author,
      author_image: "-",
      date,
      show,
      uuid,
    };

    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post(`create-blog`, body);
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

export const getBlog = createAsyncThunk(
  "landing/getBlog",
  async ({len}, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      // Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get(`create-blog?len=${len}`);
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

export const postTestimonies = createAsyncThunk(
  "landing/postTestimonies",
  async ({ name, position, message, date, image, show }, thunkAPI) => {
    const body= { name, post: position, message, date, image, show };

    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.post(`testimonials`, body);
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

export const getTestimonies = createAsyncThunk(
  "landing/getTestimonies",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      // Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get(`testimonials?len=5`);
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

export const getFaq = createAsyncThunk(
  "landing/getFaq",
  async (_, thunkAPI) => {
    try {
      Axios.defaults.headers.common["Content-Type"] = "application/json";
      // Axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
      const { data, status } = await Axios.get(`faqs`);
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
  loading: !1,
  testimonies: [],
  blogs: [],
  faqs: []
};

const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = !1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFaq.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getFaq.fulfilled, (state, action) => {
        state.loading = !1;
        state.faqs = action.payload;
      })
      .addCase(getFaq.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(postBlog.pending, (state) => {
        state.loading = !0;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.loading = !1;
        state.blogs = action.payload;
      })
      .addCase(postBlog.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getBlog.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = !1;
        state.blogs = action.payload;
      })
      .addCase(getBlog.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(postTestimonies.pending, (state) => {
        state.loading = !0;
      })
      .addCase(postTestimonies.fulfilled, (state, action) => {
        state.loading = !1;
        state.testimonies = action.payload;
      })
      .addCase(postTestimonies.rejected, (state) => {
        state.loading = !1;
      })
      .addCase(getTestimonies.pending, (state) => {
        state.loading = !0;
      })
      .addCase(getTestimonies.fulfilled, (state, action) => {
        state.loading = !1;
        state.testimonies = action.payload;
      })
      .addCase(getTestimonies.rejected, (state) => {
        state.loading = !1;
      });
  },
});

// export const { resetRegistered, resetTransaction } = landingSlice.actions;
export default landingSlice.reducer;
