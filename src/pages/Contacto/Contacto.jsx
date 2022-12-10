import React from "react";

import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="contacto-title">Contacto</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="contacto-text">
              Si tienes alguna duda o comentario, no dudes en contactarnos.
            </p>
            <p className="contacto-text">
              Estamos para ayudarte a encontrar el mejor lugar para ti.
            </p>

            <div className="row">
              <div className="col-12">
                <h2 className="contacto-subtitle">Información de contacto</h2>

                <p className="contacto-text">
                  <i className="fas fa-phone-alt"></i> +52 477 705 8778
                </p>
                <p className="contacto-text">
                  <i className="fas fa-envelope"></i>

                  <a href="mailto:contacto@berneth.com">contacto@berneth.com</a>
                </p>

                <p className="contacto-text">
                  <i className="fas fa-map-marker-alt"></i> Blvd. Universidad
                  Tecnológica 225, Universidad Tecnologica, San Carlos la
                  Roncha, 37670 León, Gto
                </p>

                <p className="contacto-text">
                  <i className="fas fa-clock"></i> Lunes a Domingo de 9:00 a
                  18:00
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="contacto-subtitle">Formulario de contacto</h4>

                <form className="contacto-form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nombre"
                    />

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Correo electrónico"
                    />

                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>

                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14892.905684531272!2d-101.5816488!3d21.0636171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7d88da0ad8eff8a!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1670143250525!5m2!1ses-419!2smx"
              width={"100%"}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
