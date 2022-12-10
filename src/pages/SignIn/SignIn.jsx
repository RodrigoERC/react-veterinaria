import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

import RoyalBernethLogo from "../../assets/RoyalBerneth.png";

const SignIn = () => {
  const [data, setData] = React.useState({
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
    type: "client",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // get user from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (userData) => {
    const response = await fetch(
      "https://dev.berneth.com/public/api/user/singin",
      {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          name: userData.name,
          lastname: userData.lastname,
          phone: userData.phone,
          address: userData.address,
          city: userData.city,
          state: userData.state,
          zipCode: userData.zipCode,
          type: "client",
          
        }),
      }
    );
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data.data));
    navigate("/");
  };

  const loginPage = () => {
    navigate("/login");
  };

  return (
    <div id="main-div">
      <img src={RoyalBernethLogo} alt="Royal Berneth Logo" />

      <form>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className="form-control"
                id="lastname"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="form-control"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                placeholder="Correo electronico"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="phone">Telefono</label>
              <input
                type="text"
                placeholder="Telefono"
                className="form-control"
                id="phone"
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                placeholder="Dirección"
                className="form-control"
                id="address"
                name="address"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                placeholder="Ciudad"
                className="form-control"
                id="city"
                name="city"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                placeholder="Estado"
                className="form-control"
                id="state"
                name="state"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="zipCode">Código Postal</label>
              <input
                type="text"
                placeholder="Código Postal"
                className="form-control"
                id="zipCode"
                name="zipCode"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>

<div className="container mb-3">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => signIn(data)}
      >
        Registrarse
      </button>
      <button type="button" class="btn btn-danger ms-2">
        Cancelar
      </button>
      </div>
    </div>
  );
};
export default SignIn;
