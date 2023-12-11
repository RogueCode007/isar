import React from "react";
import ReactDOM from "react-dom/client";
import AssignmentA from "./AssignmentA.jsx";
import AssignmentB from "./AssignmentB.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AssignmentA />,
  },
  {
    path: "/assignmentB",
    element: <AssignmentB />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
