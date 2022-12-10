import React, { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";

import RoyalBernethLogo from "./../../../assets/RoyalBerneth.png";

const Nav = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const { pathname } = useLocation();

  // Get local storage token
  const token = localStorage.getItem("token");

  // Check if token exists
  const isLoggedIn = token ? true : false;

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="nav-div">
      <nav className="menu">
        <section className="menu-logo-section">
          <NavLink className="nav-link" to="/">
            <img src={RoyalBernethLogo} alt="Logo de Royal Berneth" />
          </NavLink>
        </section>

        <section className="menu-content-section">
          <ul className="menu-ul">
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/"
            >
              <li className="menu-item">Inicio</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/conocenos"
            >
              <li className="menu-item">Conocenos</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/renta"
            >
              <li className="menu-item">Rentar</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/arrienda"
            >
              <li className="menu-item">Arrendar</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/contacto"
            >
              <li className="menu-item">Contacto</li>
            </NavLink>
            {isLoggedIn ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-ul-active" : "menu-ul"
                }
                to="/perfil"
              >
                <li className="menu-item">Perfil</li>
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-ul-active" : "menu-ul"
                }
                to="/login"
              >
                <li className="menu-item">Iniciar Sesión</li>
              </NavLink>
            )}
            {isLoggedIn ? (
              <button className="menu-item" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-ul-active" : "menu-ul"
                }
                to="/signin"
              >
                <li className="menu-item">Registrarse</li>
              </NavLink>
            )}
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
