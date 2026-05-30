import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.register(data);

      if (!res.data.success) {
        toast.error(res.data.message);
        return rejectWithValue(res.data.message);
      }
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      const msg = error?.response?.data?.message || "Register failed";
      toast.error(msg);
      return rejectWithValue(msg);
    }
  },
);


export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.login(data);
      if (!res.data.success) {
        return rejectWithValue(res.data.message);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  },
);

export const getProfile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.getProfile();
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  },
);

export const logoutUserAsync = createAsyncThunk("auth/logout", async () => {
  toast.success("Logged out successfully");
  localStorage.removeItem("checkoutData");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  return true;
});

export const forgotPassword = createAsyncThunk(
  "auth/forgot",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.forgotPassword(email);
      toast.success(res.data.message);
      return res.data;
    } catch (err) {
      const msg = err.response?.data?.message || "Error";
      toast.error(msg);
      return rejectWithValue(msg);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "auth/reset",
  async ({ token, newPassword }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.resetPassword({
        token,
        newPassword,
      });
      toast.success(res.data.message);
      return res.data;
    } catch (err) {
      const msg = err.response?.data?.message || "Error";
      toast.error(msg);
      return rejectWithValue(msg);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (s) => {
        s.loading = true;
      })
      .addCase(registerUser.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload;
      })
      .addCase(registerUser.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(loginUser.pending, (s) => {
        s.loading = true;
      })
      .addCase(loginUser.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload;
      })
      .addCase(loginUser.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(getProfile.pending, (s) => {
        s.loading = true;
      })
      .addCase(getProfile.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload;
      })
      .addCase(getProfile.rejected, (s) => {
        s.loading = false;
      })

      .addCase(logoutUserAsync.fulfilled, (s) => {
        s.user = null;
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      });
  },
});

export default authSlice.reducer;
