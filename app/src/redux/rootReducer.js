import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/slice";
import orderSliceReducer from "./order/slice";
import userSliceReducer from "./user/slice";

const rootReducer = combineReducers({
  auth: authSliceReducer.reducer,
  order: orderSliceReducer.reducer,
  user: userSliceReducer.reducer,
});

export default rootReducer;
