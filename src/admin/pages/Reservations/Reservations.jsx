import React from "react";



const Reservations = () => {

  const [reservations, setReservations] = React.useState([]);

  const getReservations = async () => {
    const response = await fetch(
      "https://dev.berneth.com/public/api/reservation/getall"
    );
    const data = await response.json();
    setReservations(data.data);
  };
  React.useEffect(() => {
    getReservations();
    //make delay
    setTimeout(() => {

    $("#table").DataTable();
    }, 1000);
  }, []);


  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Reservations</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Reservations</li>
                </ol>
              </div>
            </div>
          </div>
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
                      <th>User</th>
                      <th>Property</th>
                      <th>Fecha Reservada</th>
                      <th>Reservation Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        {<td>{reservation.userName}</td> }
                        {<td>{reservation.propertyName}</td>}
                        <td>{reservation.dateStart}</td>
                        <td>{(reservation.status==1)?"Reservacion Pagada":"Pendiente de pago"}</td>
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

export default Reservations;
