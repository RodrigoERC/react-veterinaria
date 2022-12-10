import React from "react";
import RoyalLogo from "./../../assets/RoyalBerneth.png";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src={RoyalLogo}
            alt="Royal Berneth"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            Royal Berneth Admin
          </span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <i className="far fa-user fa-2x"></i>
            </div>
            <div className="info">
              <a href="#" className="d-block"></a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library */}
              <li className="nav-header">Pages</li>
              <li className="nav-item">
                <Link to="/admin/properties" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Properties</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/reservations" className="nav-link">
                  <i className="nav-icon fas fa-house-user"></i>
                  <p>Reservation</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/users" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Users</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
