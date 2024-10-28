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
    path: "/ordercomplete",
    element: <ThankYou/>,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);