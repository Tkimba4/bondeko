import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./assets/styles/app.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
