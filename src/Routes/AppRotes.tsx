import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ROUTES } from "./config";
import { MainLayout } from "@components/MainLayout";
import { Page404 } from "@views/Error/Page404";
import { MainPage } from "@views/MainPage";
import { LoginPage } from "@views/Login";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.STORIES} element={<MainPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.ALL} element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
