import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )

      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
          state.loading = false;
        }
      );
  },
});

export default campersSlice.reducer;
