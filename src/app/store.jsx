import { configureStore } from "@reduxjs/toolkit";
import appointments from "../features/appointmentsSlice";
import services from "../features/servicesSlice";

export const store = configureStore({
  reducer: {
    services,
    appointments,
  },
});
