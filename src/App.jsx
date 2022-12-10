import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/shared/Nav/Nav";
import Footer from "./components/shared/Footer/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Conocenos from "./pages/Conocenos/Conocenos";
import Renta from "./pages/Renta/Renta";
import Arrienda from "./pages/Arrienda/Arrienda";
import Contacto from "./pages/Contacto/Contacto";
import Error404 from "./pages/Error404/Error404";
import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/SignIn";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ/FAQ";

import Dashboard from "./admin/Dashboard";
import AdminHome from "./admin/components/AdminHome";
import Users from "./admin/pages/Users/Users";
import AddUser from "./admin/pages/Users/AddUser";
import IndexUsers from "./admin/pages/Users/IndexUsers";
import IndexReservation from "./admin/pages/Reservations/IndexReservation";
import Reservations from "./admin/pages/Reservations/Reservations";
import IndexProperties from "./admin/pages/Properties/IndexProperties";
import Properties from "./admin/pages/Properties/Properties";
import Perfil from "./pages/Perfil/Perfil";
import Payment from "./pages/Payment/Payment";
import PrePayment from "./pages/Payment/PrePayment";
import RentaDetails from "./pages/Renta/RentaDetails";
import MyReservations from "./pages/Perfil/MyReservations";
import MyArrienda from "./pages/Arrienda/MyArrienda";

import AddProperty from "./admin/pages/Properties/AddProperty";
import EditUser from "./admin/pages/Users/EditUser";
import MiArrienda from "./pages/Arrienda/MiArrienda";
import MiRenta from "./pages/Renta/MiRenta";
import AdminError404 from "./admin/pages/AdminError404";

function App() {
  const [admin, setAdmin] = useState(false);

  // Get type user from localStorage
  useEffect(() => {
    const type = localStorage.getItem("typeUser");
    if (type === "3") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/reservar" element={<Renta />} />
            <Route path="/arrienda" element={<Arrienda />} />
            <Route path="/miarrienda" element={<MiArrienda />} />
            <Route path="/mirenta" element={<MiRenta />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/payment3" element={<Payment />} />
            <Route path="/prepayment" element={<PrePayment />} />
            <Route path="/rentadetails" element={<RentaDetails />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/myarrienda" element={<MyArrienda />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="" element={<AdminHome />} />
            <Route path="dashboard" element={<AdminHome />} />
            <Route path="users" element={<IndexUsers />}>
              <Route path="" element={<Users />} />
              <Route path="add" element={<AddUser />} />
              <Route path="edit" element={<EditUser />} />
            </Route>
            <Route path="reservations" element={<IndexReservation />}>
              <Route path="" element={<Reservations />} />
              <Route path="add" element={<AddUser />} />
            </Route>
            <Route path="properties" element={<IndexProperties />}>
              <Route path="" element={<Properties />} />
              <Route path="add" element={<AddProperty />} />
              <Route path="edit" element={<AddProperty />} />
            </Route>
            <Route path="*" element={<AdminError404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
