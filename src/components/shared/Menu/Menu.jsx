import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import RoyalBernethLogo from "../../../assets/RoyalBerneth.png";

import "./Menu.css";

const Menu = () => {
  // get user from local storage

  const [user, setUser] = React.useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    type: "",
  });

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userStorage);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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

            {user === null ? (
              <div></div>
            ) : user.type === "3" ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "menu-ul-active" : "menu-ul"
                  }
                  to="/arrienda"
                >
                  <li className="menu-item">Arrendar</li>
                </NavLink>
              </>
            ) : user.type === "2" ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-ul-active" : "menu-ul"
                }
                to="/reservar"
              >
                <li className="menu-item">Reservar</li>
              </NavLink>
            ) : null}

            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-ul-active" : "menu-ul"
              }
              to="/contacto"
            >
              <li className="menu-item">Contacto</li>
            </NavLink>
          </ul>
        </section>

        <section className="account-section">
          {user ? (
            <>
              <div className="dropdown">
                <button className="dropbtn">
                  {user.name} {user.lastname}
                </button>
                <div className="dropdown-content">
                  <NavLink className="nav-link" to="/perfil">
                    Mi perfil
                  </NavLink>
                  {user.type === "3" ? (
                    <>
                      <NavLink className="nav-link" to="/miarrienda">
                        Mis propiedades
                      </NavLink>
                    </>
                  ) : user.type === "2" ? (
                    <NavLink className="nav-link" to="/mireservations">
                      Mis reservaciones
                    </NavLink>
                  ) : user.type === "1" ? (
                    <NavLink className="nav-link" to="/admin">
                      Administrador
                    </NavLink>
                  ) : null}
                  <button
                    className="nav-link"
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.reload();
                    }}
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <NavLink id="LogIn-link" to="/login">
                <li>Log In</li>
              </NavLink>

              <NavLink id="SignIn-link" to="/signin">
                <li>Sign In</li>
              </NavLink>
            </>
          )}
        </section>
      </nav>
    </div>
  );
};

export default Menu;
