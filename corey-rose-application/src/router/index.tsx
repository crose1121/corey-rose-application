import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { MainLayout } from "../components/layouts/MainLayout/MainLayout";
import { Projects } from "../pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);
