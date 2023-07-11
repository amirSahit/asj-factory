import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: (
      <div className="bg-slate-500 text-red-700">Hello from Service</div>
    ),
  },
  {
    path: "/company",
    element: <div>Hello from companyS</div>,
  },
  {
    path: "/contact",
    element: <div>Hello from contact</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
