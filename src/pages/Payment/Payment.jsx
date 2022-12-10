import React from "react";
import "./payment3.css";
import "./payment3.js";

const Payment = () => {
  let email = JSON.parse(localStorage.getItem("user"));
  const [dataEmail, setDataEmail] = React.useState(email.email);
  const [data, setData] = React.useState({
    name: email.name,
    email: dataEmail,
    number: "",
    month: "",
    year: "",
    cvc: "",
    phone: email.phone,
    reservationId: JSON.parse(localStorage.getItem("idReservacion")),
    total: JSON.parse(localStorage.getItem("price")),
  });

  const price = JSON.parse(localStorage.getItem("price"));

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("https://dev.berneth.com/public/api/reservation/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "ok") {
          swal("Reserva exitosa", data.msj, "success");
        }
      });
  };
  return (
    <div>
      <div class="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
            <div class="card border-0">
              <div class="row justify-content-center">
                <h3 class="mb-4">Credit Card Checkout</h3>
              </div>
              <div class="row">
                <div class="col-sm-7 border-line pb-3">
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Name on the card</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={email.name}
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">e-mail</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="e-mail"
                      value={dataEmail}
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Telefono</p>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefono"
                      onChange={handleChange}
                      value={email.phone}
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Card Number</p>
                    <div class="row px-3">
                      <input
                        type="text"
                        name="number"
                        placeholder="0000 0000 0000 0000"
                        size="18"
                        id="cr_no"
                        minlength="16"
                        maxlength="16"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Expiry date</p>
                    <span>
                      <input
                        type="text"
                        name="month"
                        placeholder="MM"
                        size="3"
                        id="exp"
                        minlength="2"
                        maxlength="2"
                        pattern="[0-9]"
                        onChange={handleChange}
                      />
                      /
                      <input
                        type="text"
                        name="year"
                        placeholder="YY"
                        size="3"
                        id="exp"
                        minlength="2"
                        maxlength="2"
                        pattern="[0-9]"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">CVV/CVC</p>
                    <input
                      type="password"
                      name="cvc"
                      placeholder="000"
                      size="1"
                      minlength="3"
                      maxlength="3"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-5 text-sm-center justify-content-center pt-4 pb-4">
                  <div className="form-group">
                    <h1>TOTAL:{price}</h1>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-red text-center mt-4"
                    onClick={handleSubmit}
                  >
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
