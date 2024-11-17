import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Landing from "./routes/Landing";
import Confirmed from "./routes/Confirmed";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import Hipaa from "./routes/Hipaa";
import Telehealth from "./routes/Telehealth";
import OurTeam from "./routes/OurTeam";
import Faq from "./routes/Faq";
import DocPortal from "./routes/DocPortal";
import Login from "./routes/Login";
import ReceptionistPortal from "./routes/ReceptionistPortal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/confirmed",
    element: <Confirmed/>,
  },
  {
    path: "/team",
    element: <OurTeam/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/receptionistportal",
    element: <ReceptionistPortal/>,
  },
  {
    path: "/docportal",
    element: <DocPortal/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/terms",
    element: <Terms/>,
  },
  {
    path: "/privacy",
    element: <Privacy/>,
  },
  {
    path: "/hipaa",
    element: <Hipaa/>,
  },
  {
    path: "/telehealth",
    element: <Telehealth/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);