//Створити глобальний стан для зберігання списку транспортних засобів, стану фільтрів та списку обраних.
import camperReducer from "./campersSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  campers: camperReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
