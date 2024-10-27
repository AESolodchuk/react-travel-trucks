import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    item: {
      id: null,
      reviews: [],
      features: [],
      specifications: {},
    },
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCampers.fulfilled, (state, { payload: { items } }) => {
        state.items = items;
      })

      .addCase(fetchCamper.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.item.id = payload;
        state.item.reviews = payload.reviews;
        state.item.features = Object.keys(payload).filter(
          (key) => payload[key] === true
        );
        state.item.specifications = {
          form: payload.form.charAt(0).toUpperCase() + payload.form.slice(1),
          length: payload.length.replace("m", " m"),
          width: payload.width.replace("m", " m"),
          height: payload.height.replace("m", " m"),
          tank: payload.tank.replace("l", " l"),
          consumption: payload.consumption,
        };
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
