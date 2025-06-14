import { createBrowserRouter } from "react-router-dom";
import Client from "./templates/client";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/reservation",
        element: "",
      },
      {
        path: "*",
        element: "Not fund",
      },
    ],
  },
  {
    path: "/admin",
    element: "",
    children: [
      {
        path: "dashboard",
        element: "dashboard",
      },
      {
        path: "manage",
        element: "manage",
      },
    ],
  },
]);

export default router;
