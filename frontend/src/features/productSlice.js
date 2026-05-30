import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "@/utils/axios";

export const getAllProducts = createAsyncThunk(
  "product/list",
  async () => {
    const res = await axiosInstance.getAllProducts();
    return res.data.products;
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/getOne",
  async (id) => {
    const res = await axiosInstance.getSingleProduct(id);
    return res.data.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (data) => {
    const res = await axiosInstance.addProduct(data);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ id, data }) => {
    const res = await axiosInstance.updateProduct(id, data);
    return res.data.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id) => {
    console.log("Deleting product with ID slice:", id);
    await axiosInstance.deleteProduct(id);
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    singleProduct: null,
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload.data);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export default productSlice.reducer;
