import React from "react";

import "./Renta.css";



const Renta = () => {
  const [properties, setProperties] = React.useState([]);

  async function getProperties() {
    const response = await fetch(
      "https://dev.berneth.com/public/api/property/getactive"
    )
      .then((response) => response.json())
      .then((data) => setProperties(data.data));
  }

  // function sendId(id) {
    
  //   localStorage.setItem("idRenta", id);
  // }

  const sendId = (id) => {
    console.log(id);
    localStorage.setItem("idRenta", id);
  };

  const test = () => {
    console.log("ptm");
  };


  React.useEffect(() => {
    getProperties();
    localStorage.removeItem("idRenta");
    localStorage.removeItem("price");
    localStorage.removeItem("idReservacion");

  }, []);

  function tConvert (timeString) {
    if (timeString == null) {
      return null;
    }
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  }

  return (
    <div className="container">
      <h3 className="text-center">Selecciona un inmueble para reservar</h3>
      <div className="row">
        {
        properties.map((property) => (
          <div className="col-sm-6" key={property.id}>
            <div className="card">
              <img
                src={property.images[0].urlImg}
                className="card-img-top"
                alt="property.images[0].urlImg"
              />
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">
                  Descripción: {property.description} <br />
                  Dirección: {property.address}, {property.city}, {property.country}, {property.zipCode} <br />
                  Precio: {property.price} <br />
                  Capacidad: {property.limitPeople} <br />
                  Horario: {tConvert(property.startTime)} - {tConvert(property.endTime)} <br />
                </p>
                <a href="/RentaDetails" className="btn btn-primary" onClick={e=>sendId(property.id)}>
                  Rentar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Renta;
