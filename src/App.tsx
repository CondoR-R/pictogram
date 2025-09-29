import * as React from "react";
import {RouterProvider} from "react-router/dom";
import {router} from "./route/router.tsx";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App
