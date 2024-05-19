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

const AppRoutes = () => {
  return (
    <AppLayout>
      <RouterRoutes>
        <Route path={"/"}>
          <Route path="episodes" index={true} element={<Episodes />} />
          <Route path="another" element={<div>another</div>} />
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
