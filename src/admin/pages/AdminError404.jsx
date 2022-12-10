import React from "react";
import { Link } from "react-router-dom";

const AdminError404 = () => {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="error-page">
                  <h2 className="headline text-warning"> 404</h2>
                  <div className="error-content">
                    <h3>
                      <i className="fas fa-exclamation-triangle text-warning" />{" "}
                      Oops! Pagina no encontrada.
                    </h3>
                    <p>
                      No pudimos encontrar la pagina que estabas buscando.
                      Mientras tanto, puedes{" "}
                      <Link to="/admin" className="nav-link">
                        <i className="nav-icon fas fa-home"></i>
                        <p>Dashboard</p>
                      </Link>
                    </p>
                  </div>
                  {/* /.error-content */}
                </div>

                {/* /.error-page */}
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

export default AdminError404;
