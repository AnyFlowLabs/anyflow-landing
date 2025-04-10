import HomePage from "@/pages/Home";
import Chains from "@/pages/Chains";
import { createBrowserRouter } from "react-router-dom";
import ChainDetails from "@/pages/ChainDetails";
import Layout from "@/components/Layout";
import RewardsPage from "@/pages/Rewards/RewardsPage";
import LandingPageLayout from "@/components/LandingPageLayout";
import NotFound from "@/pages/not-found";
import BlogIndex from "@/pages/Blog/BlogIndex";
import BlogDetail from "@/pages/Blog/BlogDetail";
import ErrorPage from "@/pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/rewards",
    element: (
      <LandingPageLayout>
        <RewardsPage />
      </LandingPageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/chains",
    errorElement: <ErrorPage />,
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
  {
    path: "/blog",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BlogIndex />,
      },
      {
        path: ":slug",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
