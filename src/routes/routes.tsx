import HomePage from "@/pages/Home";
import Chains from "@/pages/Chains";
import { createBrowserRouter } from "react-router-dom";
import ChainDetails from "@/pages/ChainDetails";
import Layout from "@/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/chains",

    children: [
      {
        index: true,
        element: (
          <Layout>
            <Chains />
          </Layout>
        ),
      },
      {
        path: ":chainId/:chainName",
        element: (
          <Layout>
            <ChainDetails />
          </Layout>
        ),
      },
    ],
  },
]);
