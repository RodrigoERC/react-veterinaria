import React, { useEffect } from "react";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import AdminHome from "./components/AdminHome";
import AdminSideNav from "./components/AdminSideNav";
import { useNavigate, Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminHeader />
      <AdminSideNav />
      <Outlet />
      <AdminFooter />
    </div>
  );
};

export default Dashboard;
