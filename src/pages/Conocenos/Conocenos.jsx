import React from "react";

import "./Conocenos.css";

import Casa1 from "../../assets/casa1.jpg";
import Casa2 from "../../assets/casa2.jpg";
import Casa3 from "../../assets/casa3.jpg";
import Casa4 from "../../assets/casa4.jpg";
import Casa5 from "../../assets/casa5.jpg";

import Salon1 from "../../assets/salon1.jpg";
import Salon2 from "../../assets/salon2.jpg";

const Conocenos = () => {
  return (
    <>
    <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Casa1} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Casa2} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Casa3} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Casa4} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Casa4} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Casa5} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Salon1} className="d-block w-100 fixed-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Salon2} className="d-block w-100 fixed-height" alt="..." />
          </div>
        </div>
      </div>
      </div>
    <div className="container">
    <section className="about-section">
        <p>
          En Royal Berneth, buscamos ofrecerte el mejor de los servicios de
          renta de inmuebles para que puedas rentar y arrendar tu casa,
          departamento o local comercial de manera segura y confiable.
          <br />
          <br />
          Somos una empresa leonesa creada y liderada por jóvenes profesionistas
          que buscan ofrecer un servicio de calidad a nuestros clientes, con el
          fin de que puedan encontrar el inmueble que se adapte a sus
          necesidades y que se encuentre en las mejores condiciones.
          <br />
        </p>
      </section>
    </div>
    </>
    
  );
};

export default Conocenos;
