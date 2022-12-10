import React from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
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
    type: "admin",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const url = "https://dev.berneth.com/public/api/user/singin";
  const navigate = useNavigate();

  const signIn = async (userData) => {
    const type = document.getElementById("type").value;
    if (type === "1") {
      userData.type = "admin";
    } else {
      userData.type = "owner";
    }

    const response = await fetch(url, {
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
        type: userData.type,
      }),
    });
    const data = await response.json();
    navigate("/admin/users");
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add User</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">Users</li>
                  <li className="breadcrumb-item active">Add User</li>
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
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      {/* text input */}
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          placeholder="Phone"
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
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control"
                          id="address"
                          name="address"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          placeholder="City"
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
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          placeholder="State"
                          className="form-control"
                          id="state"
                          name="state"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          placeholder="Zip Code"
                          className="form-control"
                          id="zipCode"
                          name="zipCode"
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
                          onChange={handleChange}
                        >
                          <option value="1">Admin</option>
                          <option value="3">Owner</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-signin"
                    onClick={() => signIn(data)}
                  >
                    Submit
                  </button>
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

export default AddUser;
