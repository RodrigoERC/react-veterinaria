import React, { Component } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = React.useState([]);
  const [propertyEdit, setPropertyEdit] = React.useState({
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

  async function getProperties() {
    const response = await fetch(
      "https://dev.berneth.com/public/api/property/getall"
    );
    const data = await response.json();

    const propertiesfilter = data.data.filter(
      (element) => element.status == "1"
    );
    setProperties(propertiesfilter);
  }

  React.useEffect(() => {
    localStorage.removeItem("propertyEdit");
    getProperties();
    setTimeout(() => {

      $("#table").DataTable();
      }, 1000);
  }, []);

  const handleEdit = (property) => {
    localStorage.setItem("propertyEdit", JSON.stringify(property));
    Navigate("/admin/properties/edit");
  };

  const handleDelete = async (id) => {
    const formData = new FormData();
    formData.append("id", id);
    const response = await fetch(
      `https://dev.berneth.com/public/api/property/deleteproperty`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.status == "ok") {
      getProperties();
    }
  };

  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Properties</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Properties</li>
                </ol>
              </div>
            </div>
          </div>
          <NavLink to="/admin/properties/add">
            <button className="btn btn-success ml-3 mb-3">
              Añadir Propiedad
            </button>
          </NavLink>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card-header */}
                <table className="table table-bordered table-hover" id="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Address</th>
                      <th>Property Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <tr key={property.id}>
                        <td>{property.name}</td>
                        <td>{property.description}</td>
                        <td>{property.price}</td>
                        <td>{property.address}</td>
                        <td>{property.types}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(property)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(property.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* /.card-body */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default Properties;
