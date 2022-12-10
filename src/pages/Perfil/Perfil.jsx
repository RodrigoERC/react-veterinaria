import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

    var disabled = "disabled";
    var enabled = !disabled;

  
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }

    setUser(user);
  }, []);

  const enableEditMode = () => {
    setEditMode(true);
    document.getElementById("name").disabled = false;
    document.getElementById("lastName").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("city").disabled = false;
    document.getElementById("state").disabled = false;
    document.getElementById("zipcode").disabled = false;
    disabled = enabled;
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //fetch to update user
    fetch('https://dev.berneth.com/public/api/user/updateuser',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        console.log(data);
        if(data.status == "ok"){
            localStorage.setItem("user", JSON.stringify(data.data));
            swal("Datos actualizados", "Se actualizaron lso datos correctamente", "success");
            //window.location.href = "/";
        }else{
            swal("Error", "Contacta con soporte tecnico si el problema persiste", "error");
            //window.location.href = "/";
            
        }
    })
    console.log(user);
  };

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
        });
    };


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Perfil</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={user.lastname}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="userName">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={user.username}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={user.address}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={user.city}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={user.state}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={user.zipCode}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="col-12">
            {editMode ? (
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={enableEditMode}>
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
