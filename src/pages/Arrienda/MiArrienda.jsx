import React, { useEffect, useState } from "react";

const MiArrienda = () => {
  const [properties, setProperties] = React.useState([]);

  const [user, setuser] = React.useState({
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

  // get user from local storage
  useEffect(() => {
    getPropertyById();
  }, []);

  const getPropertyById = async () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append("userId", userStorage.id);

    const response = await fetch(
      "https://dev.berneth.com/public/api/property/getbyuser",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setProperties(data.data);
  };

  function tConvert(timeString) {
    if (timeString == null) {
      return null;
    }
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  }

  return (
    <div className="container">
      <h3 className="text-center">Mis propiedades</h3>
      <div className="row">
        {properties.map((property) => (
          <div className="col-sm-6" key={property.id}>
            <div className="card">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                        {property.images.map((image) => (
                        <div class="carousel-item active">

                            <img
                                //src="https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso-560x371.jpg"
                                src={image.urlImg}
                                className="card-img-top img-tumbnail"
                                alt="..."
                            />
                        </div>
                        ))}

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">
                  Descripción: {property.description} <br />
                  Dirección: {property.address}, {property.city},{" "}
                  {property.country}, {property.zipCode} <br />
                  Precio: {property.price} <br />
                  Capacidad: {property.limitPeople} <br />
                  Horario: {tConvert(property.startTime)} -{" "}
                  {tConvert(property.endTime)} <br />
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        localStorage.setItem("property", JSON.stringify(property));
                        window.location.href = "/arrienda";
                    }}
                >
                    Modificar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiArrienda;
