import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/layout";
import {MainPage} from "../components/pages/main-page";
import {UserPage} from "../components/pages/user-page";

export const mainPageRoute = '/'
export const userPageRoute: (id: string | number) => string =
  (id: number | string): string => `user/${id}`;

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: mainPageRoute,
      element: <Layout />,
      children: [{
        index: true,
        element: <MainPage />
      }, {
        path: userPageRoute(':id'),
        element: <UserPage />
      }
      ],
    }
  ])