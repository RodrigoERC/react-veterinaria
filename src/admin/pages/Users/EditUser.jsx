import React, { useState, useEffect } from "react";

const EditUser = () => {
  const [data, setData] = React.useState({
    id: "",
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

  const userEdit = JSON.parse(localStorage.getItem("userEdit"));

  useEffect(() => {
    setData(userEdit);
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Update = async (userData) => {
    const type = document.getElementById("type").value;
    if (type === "1") {
      userData.type = "admin";
    } else {
      userData.type = "owner";
    }
    const url = "https://dev.berneth.com/public/api/user/updateuser";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: userData.id,
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
        type: type,
      }),
    });

    const data = await response.json();
  };

  const cancelProcess = () => {
    localStorage.removeItem("userEdit");
    window.location.href = "/admin/users";
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit User</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">Users</li>
                  <li className="breadcrumb-item active">Edit User</li>
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
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          id="name"
                          name="name"
                          defaultValue={userEdit.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                          type="text"
                          placeholder="Lastname"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          defaultValue={userEdit.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      {/* text input */}
                      <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input
                          type="text"
                          placeholder="User Name"
                          className="form-control"
                          id="username"
                          name="username"
                          defaultValue={userEdit.username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          id="email"
                          name="email"
                          defaultValue={userEdit.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                          id="phone"
                          name="phone"
                          defaultValue={userEdit.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/* text input */}
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control"
                          id="address"
                          name="address"
                          defaultValue={userEdit.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          placeholder="City"
                          className="form-control"
                          id="city"
                          name="city"
                          defaultValue={userEdit.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/* text input */}
                      <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          placeholder="State"
                          className="form-control"
                          id="state"
                          name="state"
                          defaultValue={userEdit.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          placeholder="Zip Code"
                          className="form-control"
                          id="zipCode"
                          name="zipCode"
                          defaultValue={userEdit.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="password">Zip Code</label>
                        <input
                          type="text"
                          placeholder="Zip Code"
                          className="form-control"
                          id="password"
                          name="password"
                          defaultValue={userEdit.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {/* text input */}
                      <div className="form-group">
                        <label htmlFor="type">User Type</label>
                        <select
                          className="form-control"
                          id="type"
                          name="type"
                          value={userEdit.type}
                          onChange={handleChange}
                        >
                          <option value="1">Admin</option>
                          <option value="3">Owner</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button
                    type="button"
                    className="btn btn-signin"
                    onClick={() => Update(data)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => cancelProcess()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditUser;
