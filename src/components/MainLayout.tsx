import { Footer } from "@views/Footer";
import { Header } from "@views/Header";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
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
};
