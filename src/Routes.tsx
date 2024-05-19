import {
  createRoutesFromElements,
  Route,
  Routes as RouterRoutes,
  RouterProvider,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import React from "react";
import { Episodes } from "./pages/episodes/Episodes";
import { Random } from "./pages/random/Random";

const AppRoutes = () => {
  return (
    <AppLayout>
      <RouterRoutes>
        <Route path={"/"}>
          <Route path="episodes" index={true} element={<Episodes />} />
          <Route path="random" element={<Random />} />
          <Route path={"/"} element={<Navigate replace to={"episodes"} />} />
        </Route>
      </RouterRoutes>
    </AppLayout>
  );
};

const baseRouter = createHashRouter(
  createRoutesFromElements(<Route path={"*"} element={<AppRoutes />}></Route>)
);

export const Routes = () => {
  return <RouterProvider router={baseRouter} />;
};
