import React from 'react'

const MyReservations = () => {
    const [properties, setProperties] = React.useState([]);

    let data = new FormData();
    
    data.append("userId", JSON.parse(localStorage.getItem("user")).id);

    async function getReservations() {
        const response = await fetch(
        "https://dev.berneth.com/public/api/reservation/getReservationsByUser"
        ,{
            method: 'POST',
            body: data
        })
        .then((response) => response.json())
        .then((data) => setProperties(data.data));
    }


    React.useEffect(() => {
        getReservations();
        console.log(properties);
    }, []);

  return (
    <div className='container'>
        <h3 className="text-center">Lista de Reservaciones</h3>
      <div className="row">
        {
        properties.map((property) => (
          <div className="col-sm-6" key={property.id}>
            <div className="card">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  {property.property.images.map((image) => (
                    <div class="carousel-item active">
                      <img src={image.urlImg} class="d-block w-
                      100" alt="..." />
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
                <h5 className="card-title">{property.property.name}</h5>
                <p className="card-text">
                  Fecha de reservacion: {property.dateStart} <br />
                  Precio: $ {property.totalPrice}<br />
                  Fecha de registro: {property.dateReservation} <br />
                </p>
                <p className='card-text'>
                    {property.property.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyReservations