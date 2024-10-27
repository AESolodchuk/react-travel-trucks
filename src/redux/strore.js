// import globalSlice from "./globalSlice";
// import camperDetailsSlice from "./camperDetailsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import filterReducer from "./filterSlice";

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
