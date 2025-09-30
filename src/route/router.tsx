import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/layout";
import {MainPage} from "../components/pages/main-page";
import {UserPage} from "../components/pages/user-page";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        index: true,
        element: <MainPage />
      }, {
        path: ':id',
        element: <UserPage />
      }
      ],
    }
  ])