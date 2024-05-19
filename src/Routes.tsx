import {
  createRoutesFromElements,
  Route,
  Routes as RouterRoutes,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import React from "react";

const AppRoutes = () => {
  return (
    <AppLayout>
      <RouterRoutes>
        <Route path={"/"}>
          <Route path="episodes" index={true} element={<div>Hello</div>} />
          <Route path="another" element={<div>another</div>} />
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
