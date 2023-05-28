import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

const initialAuthState = {
  filtered_users: [],
  isLoading: false,
  error: null,
};

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async ({ query, param, token }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/user/search?filter=${param}&search=${query}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSliceReducer = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilteredUsers: (state, action) => {
      state.filtered_users = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filtered_users = action.payload;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setError, setFilteredUsers } = userSliceReducer.actions;
export default userSliceReducer;
