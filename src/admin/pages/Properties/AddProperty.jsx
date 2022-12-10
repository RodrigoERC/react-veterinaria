import React from "react";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [users, setUsers] = React.useState([]);
  const [data, setData] = React.useState({
    images: [],
    id: "",
    userId: "",
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

  const navigate = useNavigate();

  const addProperty = async (dataProperty) => {
    const data = new FormData();
    for (let i = 0; i < dataProperty.images.length; i++) {
      data.append("images[]", dataProperty.images[i]);
    }

    if (dataProperty.userId == "") {
      return alert("Debe seleccionar un usuario");
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
    data.append("userId", dataProperty.userId);

    const response = await fetch(
      "https://dev.berneth.com/public/api/property/create",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    if (result.status === "ok") {
      alert("Propiedad creada");
      window.location.href = "/admin/properties";
    } else {
      alert("Error al crear propiedad");
    }
  };

  const getUsers = async () => {
    const response = await fetch("https://dev.berneth.com/public/api/user");
    const users = await response.json();

    const usersfilter = users.data.filter(
      (element) => element.status == "1" && element.type == "3"
    );
    setUsers(usersfilter);
  };

  React.useEffect(() => {
    getUsers();

    const property = localStorage.getItem("propertyEdit");
    if (property) {
      const dataProperty = JSON.parse(property);
      setData({
        ...data,
        id: dataProperty.id,
        userId: dataProperty.userId,
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
        type: dataProperty.types[0],
      });
    }
  }, []);

  const handleUpdate = async (dataProperty) => {
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
          userId: dataProperty.userId,
        }),
      }
    );
    const result = await response.json();
    if (result.status === "ok") {
      alert("Propiedad modificada");
      localStorage.removeItem("propertyEdit");
      window.location.href = "/admin/properties";
    } else {
      alert("Error al crear propiedad");
      console.log(result);
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("property");
    navigate("/miarrienda");
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Añadir Propiedad</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">Properties</li>
                  <li className="breadcrumb-item active">Add Property</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* general form elements disabled */}
        <section className="content">
          <div className="container-fluid">
            <div className="">
              {/* /.card-header */}
              <div className="">
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

                    {data ? (
                      <></>
                    ) : (
                      <>
                        <div className="col-sm-6">
                          <div className="form-group">
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
                          </div>
                        </div>
                      </>
                    )}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="users">Usuario</label>
                        <select
                          className="form-control"
                          id="userId"
                          name="userId"
                          value={data.userId}
                          onChange={handleChange}
                        >
                          <option value="">Selecciona un usuario</option>
                          {users.map((user) => (
                            <option key={user.id} value={user.id}>
                              {user.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      {data ? (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleUpdate(data)}
                          >
                            Actualizar
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleCancel()}
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => addProperty(data)}
                        >
                          Crear
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProperty;
