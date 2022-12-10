import React, { useEffect,useState } from 'react'
import PrePayment from '../Payment/PrePayment';
import { useLocation,useParams } from "react-router";


const RentaDetails = () => {

  const [property, setProperty] = useState({});
  const [prepayment, setPrepayment] = useState(false);
  let usuarioId=JSON.parse(localStorage.getItem("user"));
  const [payment3, setPayment3] = useState(false);


  useEffect(() => {
    let id=localStorage.getItem("idRenta");
    let form = new FormData();
    form.append("id", id);
    fetch(`https://dev.berneth.com/public/api/property/getid`,{
      method: "POST",
      body: form
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProperty(data.data);
      });
    
  }, []);

  const showprepayment = () => {
    setPrepayment(true);
  }
  


  return (
    <div>
        <div className="">
        <section className="">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Propiedad: {property.name}</h1>
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
                        <h2>Informacion: {property.description}</h2>
                      </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                          <h2>Ubicacion: {property.address}. {property.city} {property.country}</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h2 htmlFor="price">Precio: ${property.price}</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h2 htmlFor="zipCode">Codigo Postal: {property.zipCode}</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h2 htmlFor="address">Limite de personas {property.limitPeople} Personas</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h2 htmlFor="city">Horario {property.startTime} - {property.endTime}</h2>
                        </div>
                    </div>
                    <div className='row'>
                      <h1>Galeria</h1>
                      {property.images?.map((image) => (
                        <div className='col-sm-4 img-thumbnail'>
                          <img src={image.urlImg} alt
                          ='imagen2' width='100%' height='100%'/>
                          </div>
                      ))}
                    </div>
                    
                 </div>
                 <br />
                  <button
                    type="button"
                    className="btn btn-success form-control mt-3"
                    onClick={showprepayment}
                  >
                    Reservar ahora
                  </button>
                  <br />
                </form>
              </div>
              { prepayment ? <PrePayment propertyId={property.id} userId={usuarioId.id} price={property.price}/> : null}
                  
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RentaDetails