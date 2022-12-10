import React from "react";
import PropTypes from "prop-types";
import Payment3 from "./../Payment/Payment";

const PrePayment = ({ propertyId, userId, price }) => {
  const [data, setData] = React.useState({
    dateStart: "",
    propertyId: propertyId,
    userId: userId,
    dateEnd: "",
  });
  const [Payment, setPayment] = React.useState(false);

  // const [propertyId, setPropertyId] = React.useState(0);
  // const [userId, setUserId] = React.useState(0);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //make request to backend
    fetch(
      "https://dev.berneth.com/public/api/reservation/createPreReservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          localStorage.setItem("idReservacion", data.data);
          localStorage.setItem("price", price);
          setPayment(true);
        } else {
          swal("Error", "La fecha seleccionada no es disponible", "error");
        }
      });
  };

  return (
    <div>
      <div className="">
        <section className="">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Reservacion</h1>
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
                  <div className="col-lg-12">
                    {/* text input */}
                    <div className="form-group">
                      <label htmlFor="name">Fecha De Renta</label>
                      <input
                        type="date"
                        placeholder="Name"
                        className="form-control"
                        id="dateStart"
                        name="dateStart"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-signin btn-info"
                    onClick={handleSubmit}
                  >
                    Validar Fecha
                  </button>
                  <br />
                </form>
                <div className="row">{Payment ? <Payment3 /> : null}</div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

PrePayment.propTypes = {
  propertyId: PropTypes.int,
  userId: PropTypes.string,
  price: PropTypes.int,
};

export default PrePayment;
