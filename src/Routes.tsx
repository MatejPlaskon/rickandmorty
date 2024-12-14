import {
  createRoutesFromElements,
  Route,
  Routes as RouterRoutes,
  RouterProvider,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Suspense, lazy } from "react";

const Episodes = lazy(() => import("./pages/episodes/Episodes"));
const Random = lazy(() => import("./pages/random/Random"));

const AppRoutes = () => {
  return (
    <AppLayout>
      <Suspense>
        <RouterRoutes>
          <Route path={"/"}>
            <Route path="episodes" index={true} element={<Episodes />} />
            <Route path="random" element={<Random />} />
            <Route path={"/"} element={<Navigate replace to={"episodes"} />} />
          </Route>
        </RouterRoutes>
      </Suspense>
    </AppLayout>
  );
};

const baseRouter = createHashRouter(
  createRoutesFromElements(<Route path={"*"} element={<AppRoutes />}></Route>)
);

export const Routes = () => {
  return <RouterProvider router={baseRouter} />;
};
