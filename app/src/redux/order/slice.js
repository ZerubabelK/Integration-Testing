import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

const initialState = {
  isLoading: false,
  orders: [],
  new_order: null,
  error: null,
  filtered_users: [],
};

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async ({ token, query }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/order/getOrder",
        query !== "" ? { order_status: query } : {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const searchUser = createAsyncThunk(
  "/order/searchUser",
  async ({ token, query }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/user/search?filter=firstName&search=${query}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const orderSliceReducer = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setNewOrder: (state, action) => {
      state.new_order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(searchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filtered_users = action.payload;
        state.error = null;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setError, setNewOrder } = orderSliceReducer.actions;
export default orderSliceReducer;
