import React from 'react'

const MyArrienda = () => {

    const [properties, setProperties] = React.useState([]);

    let data = new FormData();
    
    data.append("userId", JSON.parse(localStorage.getItem("user")).id);

    async function getReservations() {
        const response = await fetch(
        "https://dev.berneth.com/public/api/property/getbyuser"
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
        <h3 className="text-center">Mis propiedades</h3>
      <div className="row">
        {
        properties.map((property) => (

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
                  Descripcion: {property.description}<br />
                  Precio: $ {property.price}<br />
                  Direccion: {property.address} <br />
                  Limite de Personas: {property.limitPeople} <br />
                  Horario: {property.startTime} - {property.endTime}<br />

                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyArrienda