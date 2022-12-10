import React from "react";
import { Link, NavLink } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [userEdit, setUserEdit] = React.useState({
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

  const url = "https://dev.berneth.com/public/api/user";

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    const usersfilter = users.data.filter( element => element.status == "1");
    console.log(usersfilter);
    setUsers(usersfilter);
  };

  React.useEffect(() => {
    getUsers();
    setTimeout(() => {

      $("#table").DataTable();
      }, 1000);
    localStorage.removeItem("userEdit");
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(
      "https://dev.berneth.com/public/api/user/deleteuser",
      {
        method: "POST",
        body: JSON.stringify({ id }),
      }
    );
    const data = await response.json();
    if (data.status === "ok") {
      getUsers();
    } else {
      alert("Error deleting user");
    }
  };

  const handleEdit = (user) => {
    setUserEdit(user);
    localStorage.setItem("userEdit", JSON.stringify(user));
    window.location.href = "/admin/users/edit";
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
                <h1>Users</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <NavLink to="/admin/users/add">
          <button className="btn btn-success ml-3 mb-3">Add User</button>
        </NavLink>
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
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Direction</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(user)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => handleDelete(user.id)}
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

export default Users;
