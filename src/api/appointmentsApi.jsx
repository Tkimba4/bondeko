import axios from "axios";

// export async function getReservations() {
//   const data = await fetch("http://localhost:4000/bondeko/reservations");
//   return await data.json();
// //   setReservations(resJson);
// }

const BASE_URL = "http://localhost:4000/bondeko/appointments";

export const getAppointments = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createAppointments = async (appointment) => {
  const res = await axios.post(BASE_URL, appointment);
  return res.data;
  
};

export const deleteAppointment = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
};

export const update = async(appointment) =>{
  await axios.patch(`${BASE_URL}/${appointment.id}`, appointment)
}

export const updateAppointments = async (appointment) => {
  const res = await axios.put(`${BASE_URL}/${appointment.id}`, appointment);
  return res.data;
};
