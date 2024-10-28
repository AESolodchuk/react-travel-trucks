import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const camperInstance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (currentPage, thunkAPI) => {

    const {location, vehicleEquipment, vehicleType} = (thunkAPI.getState().filters);
    
    const equipmentParams = Object.entries(vehicleEquipment)
       .reduce((acc, [key, value]) => {
         if (value) {
           acc[key] = true;
         }
         return acc;
       }, {});
    

    const filterParams = {...equipmentParams}
 
    const defaultParams = {
      p: currentPage,
      limit: 4,
    }        
    
    if (location.trim()) {
      filterParams.location = location  
    }      


    if (vehicleType) {
      filterParams.form = vehicleType.toLowerCase()
    }   

    console.log(filterParams)

    try {
      const { data } = await camperInstance.get('/campers', {params: {...defaultParams, ...filterParams}});     
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "camper/fetchCamper",
  async (camperId, thunkAPI) => {
    try {
      const { data } = await camperInstance.get(`/campers/${camperId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCampers = createAsyncThunk(
  "camper/filterCampers",
  async (filter, thunkAPI) => {
    try {
      const { data } = await camperInstance.get(`/campers?${filter}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// ?p=${currentPage}&limit=4

''.toLowerCase