import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleEquipment: {
      AC: false,
      Bathroom: false,
      Kitchen: false,
      Transmission: false,
      TV: false,
      Radio: false,
      Refrigerator: false,
      Microwave: false,
      Gas: false,
      Water: false,
    },
    vehicleType: null,
  },
  reducers: {
    setLocation(state, { payload }) {
      state.location = payload;
    },
    setVehicleEquipment(state, { payload }) {
      state.vehicleEquipment[payload] = !state.vehicleEquipment[payload];
    },
    setVehicleType(state, { payload }) {
      state.vehicleType = payload;
    },
    reset(state) {
      state.Location = "";
      state.VehicleEquipment = {
        AC: false,
        Automatic: false,
        Kitchen: false,
        TV: false,
        Bathroom: false,
      };
      state.VehicleType = null;
    },
  },
});

export default filtersSlice.reducer;
export const { setLocation, setVehicleEquipment, setVehicleType, reset } =
  filtersSlice.actions;
