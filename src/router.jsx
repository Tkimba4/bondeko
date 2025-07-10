import { createBrowserRouter } from "react-router-dom";
import Client from "./templates/client";
import Home from "./pages/home";
import Reservation from "./pages/reservation";
import Admin from "./templates/admin";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Appointments from "./pages/appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "*",
        element: "Not fund",
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "manage",
        element: "manage",
      },
      {
        path : "appointments",
        element : <Appointments />  
      }
    ],
  },
]);

export default router;
