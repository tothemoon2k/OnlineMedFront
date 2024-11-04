import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Landing from "./routes/Landing";
import Redirect from "./routes/Redirect";
import ThankYou from "./routes/ThankYou";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import Hipaa from "./routes/Hipaa";
import Telehealth from "./routes/Telehealth";
import OurTeam from "./routes/OurTeam";
import Faq from "./routes/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/redirect",
    element: <Redirect/>,
  },
  {
    path: "/orderplaced",
    element: <ThankYou/>,
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