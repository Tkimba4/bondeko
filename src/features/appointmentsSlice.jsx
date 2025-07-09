import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getTasks, createTask, removeTask, updateTaskAPI } from './tasksAPI';

// import {
//   getAppointments,
//   deleteAppointment,
//   updateAppointments,
//   createAppointments,
// } from "../api/appointmentsApi";

import * as api from "../api/appointmentsApi";

export const fetchAppointments = createAsyncThunk(
  "tasks/fetchTasks",
  api.getAppointments
);
export const addAppointment = createAsyncThunk(
  "tasks/addTask",
  api.createAppointments
);
export const removeAppointment = createAsyncThunk(
  "tasks/deleteTask",
  api.deleteAppointment
);
export const updateAppointment = createAsyncThunk(
  "tasks/updateTask",
  api.updateAppointment
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(fetchTasks.pending, (state) => {
      //     state.status = 'loading';
      //   })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        state.appointments = action.payload;
        
      })
      //   .addCase(fetchTasks.rejected, (state, action) => {
      //     state.status = 'failed';
      //     state.error = action.error.message;
      //   })

      .addCase(addAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload);
      })

      .addCase(removeAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter((task) => task.id !== action.payload);
      })

      .addCase(updateAppointment.fulfilled, (state, action) => {

        const index = state.appointments.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.appointments[index].state = action.payload.state;
        }
      });
  },
});

export default appointmentsSlice.reducer;
