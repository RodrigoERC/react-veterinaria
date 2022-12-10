import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./../components/shared/Menu/Menu";
import Footer from "./../components/shared/Footer/Footer";

const Index = () => {
  return (
    <div>
      <Menu className="p-5"/>
      <Outlet className="p-5"/>
      <Footer className="p-5"/>
    </div>
  );
};

export default Index;
