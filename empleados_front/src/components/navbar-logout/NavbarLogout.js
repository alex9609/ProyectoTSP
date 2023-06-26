import React from "react";
import "./navbar-logout.css";
import { finalizarSesion } from "../helper/helper";

function Navbar() {
  const salir = () => {
    finalizarSesion();
  };

  return (
    <>
      <nav className="navbar">
        <div className="login-signup">
          <p className="login-signup-button" onClick={salir}>
            Cerrar sesión
          </p>
        </div>
        <div className="login-signup">
          <a href="http://localhost:3000">Contáctanos </a>&nbsp;
        </div>
      </nav>
    </>
  );
}

export default Navbar;
