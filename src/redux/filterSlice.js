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

    // setAll(state, { payload }) {
    //   state.Location = payload.Location;
    //   state.VehicleEquipment = {
    //     AC: payload.VehicleEquipment.AC,
    //     Automatic: payload.VehicleEquipment.Automatic,
    //     Kitchen: payload.VehicleEquipment.Kitchen,
    //     TV: payload.VehicleEquipment.TV,
    //     Bathroom: payload.VehicleEquipment.Bathroom,
    //   };
    //   state.VehicleType = payload.VehicleType;
    // },
  },
});

export default filtersSlice.reducer;
export const { setLocation, setVehicleEquipment, setVehicleType, reset } =
  filtersSlice.actions;
