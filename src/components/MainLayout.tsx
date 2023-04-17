import { Footer } from "@views/Footer";
import { Header } from "@views/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <div className="wrapper">
    <div className="mainLayout">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
);
