import HomePage from "@/pages/Home";
import Chains from "@/pages/Chains";
import { createBrowserRouter } from "react-router-dom";
import ChainDetails from "@/pages/ChainDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/chains",
    // element: <Chains />,
    children: [
      {
        index: true,
        element: <Chains />,
      },
      {
        path: ":chainName",
        element: <ChainDetails />,
      },
    ],
  },
]);
