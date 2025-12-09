import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/main";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
]);
