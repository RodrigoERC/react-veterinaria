import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Arrienda.css";

const Arrienda = () => {
  const [data, setData] = React.useState({
    images: [],
    id: "",
    name: "",
    description: "",
    price: "",
    zipCode: "",
    address: "",
    city: "",
    country: "",
    limitPeople: "",
    startTime: "",
    endTime: "",
    type: "",
  });

  const [user, setuser] = React.useState({
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

  const [key, setKey] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "images") {
      let files = Array.prototype.slice.call(e.target.files);
      setData({
        ...data,
        [e.target.name]: files,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  // get user from local storage
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    setuser(userStorage);

    const property = JSON.parse(localStorage.getItem("property"));
    if (property) {
      setKey(true);
      setData({
        ...data,
        id: property.id,
        name: property.name,
        description: property.description,
        price: property.price,
        zipCode: property.zipCode,
        address: property.address,
        city: property.city,
        country: property.country,
        limitPeople: property.limitPeople,
        startTime: property.startTime,
        endTime: property.endTime,
        type: property.types[0],
      });
    }
    console.log(property);
  }, []);

  const addProperty = async (dataProperty) => {
    const data = new FormData();
    for (let i = 0; i < dataProperty.images.length; i++) {
      data.append("images[]", dataProperty.images[i]);
    }
    data.append("name", dataProperty.name);
    data.append("description", dataProperty.description);
    data.append("price", dataProperty.price);
    data.append("zipCode", dataProperty.zipCode);
    data.append("address", dataProperty.address);
    data.append("city", dataProperty.city);
    data.append("country", dataProperty.country);
    data.append("limitPeople", dataProperty.limitPeople);
    data.append("startTime", dataProperty.startTime);
    data.append("endTime", dataProperty.endTime);
    data.append("type", dataProperty.type);
    data.append("userId", user.id);

    const response = await fetch(
      "https://dev.berneth.com/public/api/property/create",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    if (result.status === "ok") {
      swal(
        "Propiedad creada",
        "La propiedad se ha creado correctamente",
        "success"
      );

      navigate("/miarrienda");
    } else {
      swal(
        "Error al crear propiedad",
        "La propiedad no se ha creado correctamente",
        "error"
      );
    }
  };

  const handleUpdate = async (dataProperty) => {
    console.log(dataProperty);
    const response = await fetch(
      "https://dev.berneth.com/public/api/property/updatedata",
      {
        method: "POST",
        body: JSON.stringify({
          id: dataProperty.id,
          name: dataProperty.name,
          description: dataProperty.description,
          price: dataProperty.price,
          zipCode: dataProperty.zipCode,
          address: dataProperty.address,
          city: dataProperty.city,
          country: dataProperty.country,
          limitPeople: dataProperty.limitPeople,
          startTime: dataProperty.startTime,
          endTime: dataProperty.endTime,
          types: dataProperty.type,
          userId: user.id,
        }),
      }
    );
    const result = await response.json();
    if (result.status === "ok") {
      swal(
        "Propiedad actualizada",
        "La propiedad se ha actualizado correctamente",
        "success"
      );
      navigate("/miarrienda");
    } else {
      swal(
        "Error al actualizar propiedad",
        "La propiedad no se ha actualizado correctamente",
        "error"
      );
      console.log(result);
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("property");
    navigate("/miarrienda");
  };

  return (
    <div className="container">
      <h3 className="text-center">Añadir Propiedad</h3>
      <form>
        <div className="row">
          <div className="col-sm-6">
            {/* text input */}
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Descripción</label>
              <input
                type="text"
                className="form-control"
                placeholder="Descripción"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Precio</label>
              <input
                type="text"
                className="form-control"
                placeholder="Precio"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Codigo Postal</label>
              <input
                type="text"
                className="form-control"
                placeholder="Codigo Postal"
                name="zipCode"
                value={data.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Direccion</label>
              <input
                type="text"
                className="form-control"
                placeholder="Direccion"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Ciudad</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ciudad"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Estado</label>
              <input
                type="text"
                className="form-control"
                placeholder="Estado"
                name="country"
                value={data.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Limite de Personas</label>
              <input
                type="text"
                className="form-control"
                placeholder="Limite de Personas"
                name="limitPeople"
                value={data.limitPeople}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Hora de Inicio</label>
              <input
                type="time"
                className="form-control"
                placeholder="Hora de Inicio"
                name="startTime"
                value={data.startTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Hora de Termino</label>
              <input
                type="time"
                className="form-control"
                placeholder="Hora de Termino"
                name="endTime"
                value={data.endTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Tipo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="type"
                value={data.type}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              {key ? (
                <></>
              ) : (
                <>
                  {" "}
                  <label htmlFor="images">Imagenes</label>
                  <input
                    type="file"
                    placeholder="images"
                    className="form-control"
                    id="images"
                    name="images"
                    accept="image/*"
                    onChange={handleChange}
                    multiple
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {key ? (
          <>
            <button
              type="button"
              className="btn btn-primary form-control"
              onClick={() => handleUpdate(data)}
            >
              Actualizar
            </button>
            <br />
            <button
              type="button"
              className="btn btn-danger form-control"
              onClick={() => handleCancel()}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-primary form-control"
            onClick={() => addProperty(data)}
          >
            Crear
          </button>
        )}
        <br />
      </form>
    </div>
  );
};

export default Arrienda;
