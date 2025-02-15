import { lazy } from "react";
import { useRoutes } from "react-router";

const Home = lazy(() => import("@/pages/Home"));
const AuthLayout = lazy(() => import("@/components/AuthLayout"));
const DashBoardLayout = lazy(() => import('@/components/DashBoardLayout'));
const DashBoard = lazy(() => import("@/pages/DashBoard"));


function Routes() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <DashBoardLayout />,
      children: [
        {
          index: true,
          element: <DashBoard />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
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