import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios.js";

export const addWishlist = createAsyncThunk("wishlist/add", async (data) => {
  const res = await axiosInstance.addWishlist(data);
  return res.data;
});

export const getWishlist = createAsyncThunk("wishlist/getAll", async () => {
  const res = await axiosInstance.getWishlist();
  return res.data.data;
});

export const getSingleWishlist = createAsyncThunk(
  "wishlist/getOne",
  async (id) => {
    const res = await axiosInstance.getSingleWishlist(id);
    return res.data.data;
  },
);

export const deleteWishlist = createAsyncThunk(
  "wishlist/delete",
  async (id) => {
    await axiosInstance.deleteWishlist(id);
    return id;
  },
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    singleWishlist: null,
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })

      .addCase(getSingleWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.singleWishlist = action.payload;
      })

      .addCase(addWishlist.fulfilled, (state, action) => {
        if (!state.wishlist) {
          state.wishlist = [];
        }

        if (action.payload?.data) {
          state.wishlist.unshift(action.payload.data);
        }
      })

      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.wishlist = state.wishlist.filter(
          (item) => item._id !== action.payload,
        );
      });
  },
});

export default wishlistSlice.reducer;
