import React from "react";

const MiRenta = () => {
  const [renta, setRenta] = React.useState([]);
  const [property, setProperty] = React.useState([]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getReservationsByUser(user.id);
  }, []);

  const getReservationsByUser = async (id) => {
    const formData = new FormData();
    formData.append("userId", id);
    const response = await fetch(
      "https://dev.berneth.com/public/api/reservation/getReservationsByUser",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setRenta(data.data);
  };

  return (
    <div className="container">
      <h1>Mi Renta</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Fecha de Registro</th>
            <th>Fecha de Reservacion</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {renta.map((element) => (
            <tr key={element.id}>
              <td></td>
              <td>{element.dateReservation}</td>
              <td>{element.dateStart}</td>
              <td>{element.totalPrice}</td>
              <td>
                {element.status == 1
                  ? "Reservado"
                  : element.status == 2
                  ? "Pagado"
                  : element.status == 3
                  ? "Pre reservado"
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiRenta;
