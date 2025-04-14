import React from "react";
import Navbar from "../Components/Navbar";
import ScrollProgress from "../Components/ScrollProgress";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <div className="pt-18"></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
