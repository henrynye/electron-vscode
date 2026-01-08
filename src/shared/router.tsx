import { createHashRouter } from "react-router-dom";
import MainComponent from "../components/main";
import ExplorerRoute from "../components/sidebar-routes/explorer";
import SidebarIndexRoute from "../components/sidebar-routes/sidebarIndex";

export default createHashRouter([
  {
    path: "/",
    element: <MainComponent />,
    errorElement: <MainComponent />,
    children: [
      {
        path: "/sidebar/",
        element: <ExplorerRoute />,
        index: true,
      },
    ],
  },
]);
