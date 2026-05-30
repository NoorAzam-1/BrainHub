import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance}  from "@/utils/axios";

export const placeOrder = createAsyncThunk(
  "order/place",
  async (data) => {
    const res = await axiosInstance.placeOrder(data);
    return res.data;
  }
);

export const getMyOrders = createAsyncThunk(
  "order/getAll",
  async () => {
    const res = await axiosInstance.getMyOrders();
    return res.data.data;
  }
);

export const getSingleOrder = createAsyncThunk(
  "order/getOne",
  async (id) => {
    const res = await axiosInstance.getSingleOrder(id);
    return res.data.data;
  }
);

export const deleteOrder = createAsyncThunk(
  "order/delete",
  async (id) => {
    await axiosInstance.deleteOrder(id);
    return id;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/update",
  async ({ id, data }) => {
    const res = await axiosInstance.updateOrderStatus(id, data);
    return res.data.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    singleOrder: null,
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMyOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      .addCase(getSingleOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.singleOrder = action.payload;
      })

      .addCase(placeOrder.fulfilled, (state, action) => {
        state.orders.unshift(action.payload.data);
      })

      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (item) => item._id !== action.payload
        );
      })

      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const index = state.orders.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      });
  },
});

export default orderSlice.reducer;
