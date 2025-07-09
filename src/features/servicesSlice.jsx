import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServices } from "../api/servicesApi";

export const fetchServices = createAsyncThunk("services/getAll", getServices);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});

export default servicesSlice.reducer;
