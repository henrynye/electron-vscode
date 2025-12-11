import { createHashRouter } from "react-router-dom";
import MainComponent from "../components/main";
import ExplorerRoute from "../components/sidebar-routes/explorer";
import SidebarIndexRoute from "../components/sidebar-routes/sidebarIndex";

export default createHashRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/sidebar",
        element: <SidebarIndexRoute />,
        children: [
          {
            path: "/sidebar/",
            element: <ExplorerRoute />,
          },
        ],
      },
    ],
  },
]);
