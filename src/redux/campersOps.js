import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const camperInstance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page, thunkAPI) => {
    try {
      const { data } = await camperInstance.get(`/campers?p=${page}&limit=4`);
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
