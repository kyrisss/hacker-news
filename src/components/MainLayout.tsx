import { LINK_TO_TOP_STORIES } from "@constants/links";
import { Footer } from "@views/Footer";
import { Header } from "@views/Header";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    navigate(LINK_TO_TOP_STORIES);
  }, []);

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
