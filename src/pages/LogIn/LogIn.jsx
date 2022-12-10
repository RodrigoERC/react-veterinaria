import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RoyalBernethLogo from "./../../assets/RoyalBerneth.png";
import "./Login.css";

const LogIn = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // get user from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (username, password) => {
    let jsonObject = {
      username: username,
      password: password,
    };

    const response = await fetch(
      "https://dev.berneth.com/public/api/user/login",
      {
        method: "POST",
        body: JSON.stringify(jsonObject),
      }
    );
    const data = await response.json();

    if (data.status === "ok") {
      if (data.data.status === "1") {
        localStorage.setItem("user", JSON.stringify(data.data));

        if (data.data.type === "1") {
          navigate("/admin/dashboard");
        } else {
          window.location.href = "/Inicio";
        }
      } else {
        alert("Usuario ya no se encuentra activo");
      }
    } else if( data.status === "error" ) {
      alert(data.msj);
    }

  };

  return (
    <div id="main-div">
      <img src={RoyalBernethLogo} alt="Royal Berneth Logo" />

      <form id="loginForm">
        <p className="LogInForm-item">
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            autoFocus
          />
        </p>

        <p className="LogInForm-item">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
      </form>
      <p className="LogInForm-item">
        <button onClick={() => login(username, password)}>
          Iniciar Sesión
        </button>
      </p>
    </div>
  );
};

export default LogIn;
