import { lazy } from "react";
import AppLayout from "@/components/AppLayout";
import { useRoutes } from "react-router";

const Home = lazy(() => import("@/pages/Home"));

function Routes() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);
  return routeElements;
}
export default Routes;