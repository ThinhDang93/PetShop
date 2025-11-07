import React from "react";
import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      <HeaderComponent />
      <div className=" mx-auto pt-5">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomeTemplate;
