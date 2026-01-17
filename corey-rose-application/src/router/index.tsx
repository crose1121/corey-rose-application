import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { MainLayout } from "../components/layouts/MainLayout/MainLayout";
// import { Layout } from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },
]);
